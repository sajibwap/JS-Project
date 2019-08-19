let calcInput = document.getElementById('calc-input'),
calcOutput = document.getElementById('calc-output'),
keyEqual = document.getElementById('sign-equal'),
parent = document.querySelector('.calc-display'),
child = document.querySelector('.calc-display h1'),
clear = document.querySelector('#clear'),
h1 = document.createElement('h1')


function insertNumber(x){
	calcInput.value += x
}

keyEqual.addEventListener('click', function(e){

	parent.appendChild(h1)
	h1.innerHTML = eval(calcInput.value)
	h1.style.display = 'block'

	if ( calcInput.value == '' ) {
		//alert('Insert Your Number From Keyboard')
		h1.innerText = 'Insert Number'
		h1.style.color = '#fff'
		h1.style.fontSize = '20px'
	} 











})

clear.addEventListener('click', function(e){
	if ( calcInput.value != '') {
       calcInput.value = ''
       h1.style.display = 'none'
	}
})


