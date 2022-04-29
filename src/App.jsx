import { useState } from 'react'
import './App.css'
import StudentsForm from './components/StudentsForm'
import ListOfStudents from './components/ListOfStudents'

function App() {

  const [number, setNumber] = useState(0)
  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState(1);

  const addToNumber = ()=>{
    setNumber(number + 1)
  }

  const substractToNumber = ()=>{
    setNumber(number - 1)
  }

  //function to add a new student
  const addNewStudent = (student) => {
    setStudents([...students, student]);
    setStudentId(studentId + 1);
  }

  //function to delete a student
  const deleteStudent = (id) => {
    const studentsFiltered = students.filter(student => student.id !== id);
    setStudents(studentsFiltered);
    setStudentId(studentId - 1);
  }
  

  return (
    <div>
      <h1>My first application</h1>
      <h1>{number}</h1>
      <button onClick={addToNumber}>+</button>
      <button onClick={substractToNumber}>-</button>
      <StudentsForm addStudent={addNewStudent} id={studentId}/>
      <ListOfStudents students={students} onDelete={deleteStudent}/>
    </div>
  )
}

export default App
