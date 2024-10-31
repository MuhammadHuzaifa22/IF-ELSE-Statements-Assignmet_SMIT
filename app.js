
const div = document.getElementById('result-div')
const form = document.getElementById('form');
const inputVal = document.getElementById('inputVal')

// Form Submit Function
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputVal == null) return;
if  (inputVal.value >= 10000000){
div.innerHTML=`Result: <span class="text-green-600">Congratulations to you, you will get a house</span>`;
}
else if (inputVal.value >= 9000000){
    div.innerHTML = `Result: <span class="text-green-600">Congrats! May you soon get your dream home—key in hand!</span>`;
}
else if(inputVal.value >= 5000000){
    div.innerHTML=`Result: <span class="text-red-500">I can't give you this.</span>`
}
else
{
    div.innerHTML=`Result: <span class="text-red-500">sorry</span>`;
}

})


// var amount = +prompt("Enter Your Amount")
