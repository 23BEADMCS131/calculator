var op="";
var firstnum="";
var secondnum="";

function append(number){
    if(op === ""){
        firstnum+=number;
    }else{
        secondnum+=number;
    }
    document.getElementById('result').value = firstnum + op + secondnum;
}

function setoperator(oper){
    op = oper;
    document.getElementById('result').value=firstnum+""+op+""+secondnum;
}

function showresult(){
    let res = 0;
    switch(op){
        case '+':
            res = parseInt(firstnum) + parseInt(secondnum);
            break;
        case '-':
            res = parseInt(firstnum) - parseInt(secondnum);
            break;
        case '*':
            res = parseInt(firstnum) * parseInt(secondnum);
            break;
        case '/':
            res = parseInt(firstnum) / parseInt(secondnum);
            break;
            
    }
    document.getElementById('result').value=res;
    changeBackgroundColor();
}

function reset(){
    firstnum="";
    secondnum="";
    op="";
    document.getElementById('result').value="";
    changeBackgroundColor();
}

const body = document.querySelector('#result');
const colors = ['#FF5733',
    ' #C70039' ,
    ' #2980B9 ',
   ' #7D3C98',
    ' #900C3F',
    ' #F39C12 ',
   ' #1F618D',
    ' #28B463 ',
   ' #D35400 ' ];

body.style.backgroundColor = 'white';

function changeBackgroundColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}
