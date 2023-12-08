export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) return [];
  const grades = {};
  for (const itm of newGrades) {
    const { grade, studentId } = itm;
    grades[studentId] = grade;
  }
  const filteredStudents = studentList.filter(({ location }) => location === city);
  return filteredStudents.map((item) => ({ ...item, grade: grades[item.id] || 'N/A' }));
}
