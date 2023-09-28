// DOM => Document Object Model
function registerHandler() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let EmailAddress = document.getElementById("EmailAddress").value;
  let Company = document.getElementById("Company").value;
  let PhysicalAddress = document.getElementById("PhysicalAddress").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let registerInfo = {
    firstName: firstName,
    lastName: lastName,
    EmailAddress: EmailAddress,
    Company: Company,
    PhysicalAddress: PhysicalAddress,
    month: month,
    day: day,
    year: year,
  };

  console.log(registerInfo);
}
