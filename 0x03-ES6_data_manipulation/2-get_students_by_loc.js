export default function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) return [];

  return studentList.filter(({ location }) => location === city);
}
