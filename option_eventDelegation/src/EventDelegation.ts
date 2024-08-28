// 1. https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
// for 'var', variables that identifies for loop indexes are hoisted to the top of the function scope
// so when the event listener callback is called, it uses the last value of the index variable
// js'es often forgets that values are placed in memory somewhere in some time

// 2.
const makeTableEventDelegation = (rows: number, columns: number) => {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");

  for (let r = 0; r < rows; r++) {
    let tr = document.createElement("tr");
    for (let c = 0; c < columns; c++) {
      let td = document.createElement("td");
      td.setAttribute("data-row", r.toString());
      td.setAttribute("data-column", c.toString());
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  table.addEventListener("click", (evt) => {
    let target = evt.target as HTMLElement;
    if (target.tagName === "TD") {
      let r = target.getAttribute("data-row")!;
      let c = target.getAttribute("data-column")!;
      console.log(r + "x" + c);
    }
  });

  return table;
};

// 3. Advantages: only one event listener
// Disadvantages: coupling between the table and the event listener, additional attributes
