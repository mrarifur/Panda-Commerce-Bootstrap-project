/*
document.getElementById('card1').style.borderRadius='20 px'
document.getElementById('card2').style.backgroundColor='blue'
document.getElementById('card3').style.backgroundColor='blue'*/

const Button=document.getElementById('button1');
Button.addEventListener('click',function(){
    document.getElementById('card1').style.backgroundColor='green'
});

const Button2=document.getElementById('button2');
Button2.addEventListener('click',function(){
    document.getElementById('card2').style.backgroundColor='OldLace'
});
const Button3=document.getElementById('button3');
Button3.addEventListener('click',function(){
    document.getElementById('card3').style.backgroundColor='Navy'
});

document.getElementById('input').addEventListener('keyup',function(event){
    if (event.target.value == 'Email'){
        document.getElementById('buttonl').removeAttribute('disabled');
    }
    else{
        document.getElementById('buttonl').setAttribute('disabled', true)
    }
});