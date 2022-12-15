const soco = document.getElementById('socar')
const parado = document.getElementById('parar')
const hadouken = document.getElementById('hadouken')
const ryu = document.getElementById('ryu')

function socar(){
    ryu.src="./img/Ryu_socando.gif";
}

function had(){
    ryu.src="./img/hadouken.gif";
}

function parar(){
    ryu.src="./img/Ryu_parado.gif";
}

soco.addEventListener('click', socar);
hadouken.addEventListener('click', had);
parado.addEventListener('click', parar);

ryu.addEventListener('mouseover', socar);
ryu.addEventListener('dblclick', had);
ryu.addEventListener('mouseleave', parar);