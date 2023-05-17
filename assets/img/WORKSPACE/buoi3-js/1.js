var nut=document.querySelector('button');
nut.onclick=function(){
    alert('thong bao');
}

var dn=document.querySelector('.dn');
var nutdn=document.querySelector('.nutdn');

var formdn=document.querySelector('.formdn');
dn.onclick=function(){
    formdn.classList.add('active');
}

nutdn.onclick=function(){
    formdn.classList.remove('active');
}