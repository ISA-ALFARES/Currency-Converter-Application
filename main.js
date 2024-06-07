
function convertCurrency() {
  const from = document.querySelector(".from").value;
  const toValue = document.querySelector(".to").value;
  const amount = document.querySelector(".amount").value;
  const resultDiv = document.querySelector(".result");
  if(amount && from && toValue ) {
    fetch(`https://v6.exchangerate-api.com/v6/c4cd3dba04d1cf4f0332c03a/latest/${from}`)
        .then(response => response.json())
        .then((data) => {
            const rate = data.conversion_rates[toValue];
            const result = (amount * rate).toFixed(2);
            resultDiv.style.display = "block";
            resultDiv.innerHTML = `${amount} ${from}  =  ${result} ${toValue}`;
        }).catch((error) => {
            resultDiv.textContent = `Something went wrong ${error}`;
    });
  
  }else {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "أملأ الحقول الفارغة";
  }


}
