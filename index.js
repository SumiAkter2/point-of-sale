console.log("object");

function getAmount(quantityValue, unitaryValue) {
  const quantityId = document.getElementById("quantity");
  const unitaryId = document.getElementById("unitary");
  var quantity = parseFloat(quantityId.value);
  var unitary = parseFloat(unitaryId.value);
  let total = 0;
  total = quantity * unitary;
  document.getElementById("cart-show").style.display = "block";
  document.getElementById("cart-span").style.display = "none";
  document.getElementById("amount").value = total;
  document.getElementById("subtotal").style.display = "flex";
  document.getElementById("total-amount").innerText = `R$. ${total}`;
  document.getElementById("unitary-total").innerText = total;
  document.getElementById("value-total").innerText = total;

  console.log(quantity, unitary);
}
