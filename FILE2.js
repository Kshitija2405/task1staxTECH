let students = [];

function addStudent() {
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const className = document.getElementById('class').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !roll || !className || !email) {
    alert('Please fill all fields!');
    return;
  }

  const student = { name, roll, className, email };
  students.push(student);
  displayStudents();

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('roll').value = '';
  document.getElementById('class').value = '';
  document.getElementById('email').value = '';
}

function displayStudents() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  students.forEach((student, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.className}</td>
      <td>${student.email}</td>
      <td><button onclick="deleteStudent(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteStudent(index) {
  if (confirm('Are you sure you want to delete this student?')) {
    students.splice(index, 1);
    displayStudents();
  }
}
