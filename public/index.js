// Function to update the table headers based on radio button selection
function updateTableHeaders() {
  var table = document.getElementById("myTable");
  var headersRow = table.getElementsByTagName("thead")[0].rows[0];
  var tableType = document.querySelector(
    'input[name="tableType"]:checked'
  ).value;

  if (tableType === "intlArr" || tableType === "domArr") {
    headersRow.cells[0].textContent = "ATA";
    headersRow.cells[1].textContent = "STA";
    headersRow.cells[2].textContent = "Airlines";
    headersRow.cells[3].textContent = "Origin";
    headersRow.cells[4].textContent = "Flight";
    headersRow.cells[5].textContent = "Status";
  } else if (tableType === "intlDept" || tableType === "domDept") {
    headersRow.cells[0].textContent = "ATD";
    headersRow.cells[1].textContent = "STD";
    headersRow.cells[2].textContent = "Airlines";
    headersRow.cells[3].textContent = "Destination";
    headersRow.cells[4].textContent = "Flight";
    headersRow.cells[5].textContent = "Gate";
    headersRow.cells[6].textContent = "Status";
  }
}

// Attach an event listener to the radio buttons
var radioButtons = document.querySelectorAll('input[name="tableType"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", updateTableHeaders);
});

//Save Button Functionality
// const editableCell = document.querySelectorAll("editableCell");
// const okButton = document.getElementById("okButton");

// okButton.forEach(function (okButton) {
//   okButtom.addEventListener("click", function () {
//     const editableCell = this.PreviousElemnetSibling;
//     const newContent = editableCell.innerText;
//     console.log("New cell content:", newContent);
//   });
// });

//Footer Date
const currentYear = new Date().getFullYear();
if (currentYear == 2023) {
  document.getElementById("currDate").textContent = currentYear;
} else {
  document.getElementById("currDate").textContent = "2023 - " + currentYear;
}
