const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')

btn5.addEventListener('click' , function(){
    let b = btn4.innerText;
    btn4.innerText = btn7.innerText;
    btn7.innerText = btn8.innerText;
    btn8.innerText = btn9.innerText;
    btn9.innerText = btn6.innerText;
    btn6.innerText = btn3.innerText;
    btn3.innerText = btn2.innerText;
    btn2.innerText = btn1.innerText;
    btn1.innerText = b;
    
});