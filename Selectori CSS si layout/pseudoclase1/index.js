
let allRows = document.querySelectorAll("tbody tr");


if (allRows.length > 0) {
  allRows[0].bgColor = "blue";
  allRows[0].style.color = "white";
}


if (allRows.length > 0) {
  let lastRow = allRows[allRows.length - 1];
  lastRow.bgColor = "green";
  lastRow.style.color = "white";
}

for (let i = 1; i < allRows.length - 1; i++) {
  if (i % 2 === 0) {
    allRows[i].bgColor = "violet";
  }
}