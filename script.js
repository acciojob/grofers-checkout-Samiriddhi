const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
//console.log(getSumBtn);
const getSum = () => {
   let prices = document.querySelectorAll('.prices');

	let totalPrice = 0;
   for(let i = 0; i < prices.length; i++) {
       totalPrice += Number(prices[i].textContent);
   }

let totalRow = document.createElement('tr');
   let totalCell = document.createElement('td');
   totalCell.textContent = 'Total: ' + totalPrice;
   totalRow.appendChild(totalCell);

	let table = document.querySelector('table');
   table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

