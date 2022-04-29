import Student from './Student'

const ListOfStudents = ({students, onDelete}) => {
  return (
    <>
    {students.map((student, index) => (
        <Student key={student.id} student={student} onDelete={onDelete} />
    ))}
    </>
  )
}

export default ListOfStudents