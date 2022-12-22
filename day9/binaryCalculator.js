const res = document.getElementById('res')
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
let operation = 0;
let int1;
let int2 = '';
let ans;

btn0.addEventListener('click', function(){
    res.innerText += 0;
    if(operation != 0){
        int2 += '0';
    }
});

btn1.addEventListener('click', function(){
    res.innerText += 1;
    if(operation != 0){
        int2 += '1';
    }
})

btnClr.addEventListener('click', function(){
    res.innerText = '';
    int1 = "";
    int2 = "";
    operation = 0;
})

btnEql.addEventListener('click', function(){
    int1 =Number(parseInt(int1, 2));
    int2 = Number(parseInt(int2, 2));
    console.log(int1);
    console.log(int2);
    if(operation === 1){
        ans = (int1 + int2).toString(2);
    }
    else if(operation === 2){
        ans = (int1 - int2).toString(2);       
    }
    else if(operation === 3){
        ans = (int1 * int2).toString(2);
    }
    else if(operation === 4){
        ans = (int1 / int2).toString(2);
    }
    res.innerText = ans;
    int1 = "";
    int2 = "";
    operation = 0;
})

btnSum.addEventListener('click', function(){  
    operationCheck();
    int1 = res.innerText;
    res.innerText += '+';
    operation = 1;
})

btnSub.addEventListener('click', function(){
    operationCheck();
    int1 = res.innerText;
    res.innerText += '-';
    operation = 2;

})

btnMul.addEventListener('click', function(){
    operationCheck();
    int1 = res.innerText;
    res.innerText += '*';
    operation = 3;

})

btnDiv.addEventListener('click', function(){
    operationCheck();
    int1 = res.innerText;
    res.innerText += '/';
    operation = 4;

})

function operationCheck(){
    if(res.innerText.charAt(res.innerText.length - 1) === '+' || res.innerText.charAt(res.innerText.length - 1) === '-' || res.innerText.charAt(res.innerText.length - 1) === '/'  || res.innerText.charAt(res.innerText.length - 1) === '*' ){
        res.innerText.remove(0,res.innerText.charAt(res.innerText.length - 2));
        
    }
    
}


