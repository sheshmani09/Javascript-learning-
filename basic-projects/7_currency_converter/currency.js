const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
let i = 0;

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (el) => {
  let currCode = el.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = el.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click",(e) => {
  e.preventDefault();
 updateCurrency()
});

const updateCurrency = async ()=>{
   let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  console.log(`1 ${fromCurr.value} = ${rate} ${toCurr.value}`);
  let finalAmount = (amtVal * rate).toFixed(2);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}