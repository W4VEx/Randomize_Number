let num = document.getElementById('number');
let load = document.getElementById('load');
let btn = document.getElementById('btn');


function randomize(){

        btn.classList.remove('btn');
        btn.innerHTML = "";
        btn.classList.add('sqr');

setTimeout(() => {

    num.innerHTML = parseInt(Math.random()*100);

        btn.classList.remove('sqr');
        btn.innerHTML = " ";
        btn.classList.remove('btn');


     
},4000);

}