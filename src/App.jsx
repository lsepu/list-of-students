import { useState } from 'react'
import './App.css'
import StudentsForm from './components/StudentsForm'
import ListOfStudents from './components/ListOfStudents'

function App() {

  const [number, setNumber] = useState(0)
  const [students, setStudents] = useState([])
  const [id, setId] = useState(1);

  const addToNumber = ()=>{
    setNumber(number + 1)
  }

  const substractToNumber = ()=>{
    setNumber(number - 1)
  }

  //function to add a new student
  const addNewStudent = (name, lastName) => {
    const student = {id, name, lastName};
    setStudents([...students, student]);
    setId(id + 1);
  }

  //function to delete a student
  const deleteStudent = (id) => {
    const studentsFiltered = students.filter(student => student.id !== id);
    setStudents(studentsFiltered);
  }
  

  return (
    <div>
      <h1>My first application</h1>
      <h1>{number}</h1>
      <button onClick={addToNumber}>+</button>
      <button onClick={substractToNumber}>-</button>
      <StudentsForm addStudent={addNewStudent}/>
      <ListOfStudents students={students} onDelete={deleteStudent}/>
    </div>
  )
}

export default App
