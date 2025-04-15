//selected elements
const   amountElement=document.querySelector('#amount');
const firstSelect=document.querySelector('#firstCurrency');
const secondtSelect=document.querySelector('#secondCurrency');
const currency=new Currency('USD','TRY');
const ui=new UI(firstSelect,secondtSelect);

eventListeners();
function eventListeners(){
    amountElement.addEventListener('input',exchangeCurrency);
    firstSelect.onchange=function(){
currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
ui.changeFirst();
    };
    secondtSelect.onchange=function(){
        currency.changeSecondCurrency(secondtSelect.options[secondtSelect.selectedIndex].textContent);
ui.changeSecond();

    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange().then(result=>{
        ui.displayResult(result);
    }).catch(err=>console.log(err))
}
