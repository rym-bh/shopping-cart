
  // Variables Globale
const total = document.querySelector(".total-price");
const removeBtn = Array.from(document.querySelectorAll(".remove-btn"));
const btnLike = Array.from(document.querySelectorAll(".like-btn"));
const plusBtn = Array.from(document.querySelectorAll(".plus-btn"));
const minusBtn = Array.from(document.querySelectorAll(".minus-btn"));
const quantity = Array.from(document.querySelectorAll(".quantity-value"));
const price = Array.from(document.querySelectorAll(".price-value"));

//Delete
for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", function() {
    console.log("quantity is :", quantity[i].innerText);
    // remove the element
    removeBtn[i].parentElement.remove();
    // Reset the quantity
    quantity[i].innerText = 0;
    // update Total
    updateTotal();
  });
}

//Like btn
for (let i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener("click", function() {
    btnLike[i].style.color !== "red"
      ? (btnLike[i].style.color = "red")
      : (btnLike[i].style.color = "black");
  });
}
//Plus button

for (let el of plusBtn) {
  el.addEventListener("click", function() {
    // in for of method we can access to the current index
    // let currentIndex = plusBtn.indexOf(el)
    // console.log(currentIndex)
    el.previousElementSibling.innerText =
      Number(el.previousElementSibling.innerText) + 1;
    updateTotal();
  });
}

// minus btn
// map is Array method 
minusBtn.map((el, i) => {
  console.log(i)
  el.addEventListener("click", function() {
    Number(el.nextElementSibling.innerText) > 0
      ? el.nextElementSibling.innerText--
      : (el.nextElementSibling.innerText = 0);

    updateTotal();
  });
});

function updateTotal() {
  let sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum += quantity[i].innerText * price[i].innerText;
  }
  total.innerText = sum;
  console.log(sum);
}