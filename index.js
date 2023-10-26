console.log("object");

function getAmount(quantityValue, unitaryValue) {
  const quantityId = document.getElementById("quantity");
  const unitaryId = document.getElementById("unitary");
  var quantity = parseFloat(quantityId.value);
  var unitary = parseFloat(unitaryId.value);
  let total = 0;
  total = quantity * unitary;
  document.getElementById("amount").value = total;
  console.log(quantity, unitary);
}
