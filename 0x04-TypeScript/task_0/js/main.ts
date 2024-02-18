interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstName: "Idris",
  lastName: "Adebowale",
  age: 32,
  location: "Ogbomoso",
  }

const student2:Student = {
  firstName: "Yemi",
  lastName: "Ade",
  age: 30,
  location: "Oyo",
  }

const studentsList:Student[] = [student1, student2]

let tableContent = "";
const htmlTable = document.createElement("table");
for (const student of studentsList) {
  const { firstName, location } = student;
  tableContent += `<tr><td>${firstName}</td><td>${location}</td></tr>`;
  }

htmlTable.innerHTML = tableContent;

document.append(htmlTable);
