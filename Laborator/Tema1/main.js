const numberOne = document.getElementById('first');
const numberTwo = document.getElementById('second'); 
const btn = document.getElementById('btn');
const btnTwo = document.getElementById('btnTwo');
const answer = document.getElementById('answer');

btn.addEventListener('click', () => {
 calculate()
})

btnTwo.addEventListener('click', () => {
    calculateTwo()
})
    


function calculate() {
    answer.innerHTML = '';
   const a = numberOne.value;
   const b = numberTwo.value;
   const multiplyRes = a * b;
  const result = multiplyRes;
   const create = document.createElement('h1');
   create.innerText = result;
   answer.appendChild(create);
 
}
function calculateTwo() {
    answer.innerHTML = '';
    const a = numberOne.value;
    const b = numberTwo.value;
    const dividedRes = a / b;
    const result =  dividedRes;
    const create = document.createElement('h1');
    create.innerText = result;
    answer.appendChild(create);
    
 }
 

