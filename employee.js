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
  
  window.onload = function () {
    generateEID();
  };
  
  document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const requiredFields = [
      "eName", "presentAddress", "permanentAddress",
      "fatherName", "motherName", "contractNo", 
      "email", "birthDate", "bloodGroup", "initialSalary","initialDesignation",
      "joiningDate", "provisionPeriod", "reference" , "remark" , "otherQualification"
    ];
  
    let firstEmptyField = null;
    let allValid = true;
  
    requiredFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field.value.trim() === "") {
        field.classList.add("is-invalid");
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
        firstEmptyField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      alert("Please fill all required fields.");
      return;
    }
    else{
      alert("Submitted successfully. " + currentEID);
    }
  
    currentEID++;
    document.getElementById("employeeForm").reset();
    generateEID();
  });
  