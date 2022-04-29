const Student = ({ student, onDelete }) => {
  return (
    <div>
      <h3>
        {student.name} {student.lastName}
      </h3>
      <button onClick={() => onDelete(student.id)}>Delete Student</button>
    </div>
  );
};

export default Student;
