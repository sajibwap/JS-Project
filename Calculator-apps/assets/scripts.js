let calcInput = document.getElementById('calc-input'),
calcOutput = document.getElementById('calc-output'),
keyEqual = document.getElementById('sign-equal'),
parent = document.querySelector('.calc-display'),
child = document.querySelector('.calc-display h1')

keyEqual.addEventListener('click', function(e){

	var h1 = document.createElement('h1');
	parent.appendChild(h1)
	h1.innerHTML = eval(calcInput.value)

	if ( calcInput.value == '' ) {
		//alert('Insert Your Number From Keyboard')
		h1.innerText = 'Insert Number'
		h1.style.color = '#fff'
		h1.style.fontSize = '20px'
	} 
    



})
