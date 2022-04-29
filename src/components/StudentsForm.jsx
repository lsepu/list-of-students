import { useState } from 'react'

const StudentsForm = ({addStudent}) => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if(name && lastName){
      addStudent(name, lastName);
    } 
  }

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event)=>{
    setName(event.target.value)
  }

 const addLastName = (event) => {
    setLastName(event.target.value)
 }


  return (
    <div>
      <h1>Hello from the list of students</h1>
      <form>
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <button onClick={onAddStudent}>add student</button>
      </form>
    </div>
  )
}

export default StudentsForm
