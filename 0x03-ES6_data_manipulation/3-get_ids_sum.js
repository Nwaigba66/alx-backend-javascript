export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) return 0;

  return studentList.reduce((prev, { id }) => id + prev, 0);
}
