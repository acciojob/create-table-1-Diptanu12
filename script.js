function insert_Row() {
  const table = document.getElementById('sampleTable');
  const newRow = table.insertRow(0); 
  const cell1 = newRow.insertCell(0); 
  const cell2 = newRow.insertCell(1); 
  cell1.textContent = 'New Cell1';
  cell2.textContent = 'New Cell2';
}
