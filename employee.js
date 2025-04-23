  document.getElementById("birthDate").addEventListener("change", function () {
    const birthDate = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if ( m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
       {
      age--;
       }

    document.getElementById("age").value = age ;
  });

  // document.getElementById("employeeForm").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   alert("Submitted successfully!");
  // })

  let currentEID = 1;

  function generateEID() {
    document.getElementById("eid").value = currentEID;
  }
  
  // Run on page load
  window.onload = function () {
    generateEID();
  };
  
  document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // List of required field IDs
    const requiredFields = [
      "eName", "presentAddress", "permanentAddress",
      "fatherName", "motherName", "contractNo", 
      "email", "birthDate", "bloodGroup", "initialSalary","initialDesignation",
      "joiningDate", "provisionPeriod", "reference"
    ];
  
    let firstEmptyField = null;
    let allValid = true;
  
    requiredFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field.value.trim() === "") {
        field.classList.add("is-invalid"); // Bootstrap red border
        if (!firstEmptyField) {
          firstEmptyField = field;
        }
        allValid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });
  
    if (!allValid) {
      if (firstEmptyField) {
        firstEmptyField.focus();
        // firstEmptyField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      alert("Please fill all required fields.");
      return;
    }
  
    alert("Submitted successfully. " + currentEID);
  
    // Increment EID for next entry
    currentEID++;
    document.getElementById("employeeForm").reset();
    generateEID();
  });
  