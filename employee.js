
  document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Employee data submitted successfully!");
  });

  document.getElementById("birthDate").addEventListener("change", function () {
    const birthDate = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    document.getElementById("age").value = age >= 0 ? age : "";
  });

