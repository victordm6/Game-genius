let ordem=[];
let click=[];
let pontos=0;
const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');
let shuffleorder = ()=>{
    let colororder =Math.floor(Math.random()*4 );
    ordem[ordem.length]=colororder;
    click=[];
    for(let i in ordem){
        let elementcolor=createcolor(ordem[i]);
        lightcolor(elementcolor,Number(i)+1)
    }
}
let lightcolor=(element,number)=>{
    time= number*500;
    setTimeout(()=>{
        element.classlist.add('selecionado');
    },tempo-250);
    setTimeout(()=>{
        element.classlist.remove('selecionado');
    });
}
let check = ()=>{
    for(let i in click){
        if(click[i]!=ordem[i]){
            gameover();
            break;
        }
    }
    if(click.length ==ordem.length){
        alert(`Pontuação: ${pontos}\n Você acertou!Iniciando proximo nivel!`);
        nextlevel();
    }
}
let clicks =(color)=>{
    click[click.length]=color;
    createcolor(color).classList.add('selecionado');
    setTimeout(()=>{
        createcolor(color).classList.remove('selecionado');
        check();
    },250);
}
let createcolor =(color)=>{
    if(color==0){
        return verde;
    }else if(color ==1){
        return vermelho;
    }
    else if(color ==2){
        return amarelo;
    }else if(color ==3){
        return azul;
    }
}
let nextlevel = ()=>{
    pontos++;
    shuffleorder();
}
let gameover = ()=>{
    alert(`Pontuação;${pontos}!\nClique em OK para iniciar!`);
    ordem=[];
    click =[];
    playgame();
}
let playgame =()=>{
    alert('Bem vindo ao genius! Iniciando...');
    pontos =0;
    nextlevel();
}
verde.onclick=()=>clicks(0);
amarelo.onclick=()=>clicks(2);
vermelho.onclick=()=>clicks(1);
azul.onclick=()=>clicks(3);
playgame();