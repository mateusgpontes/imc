function query (tag){
    return document.querySelector(tag);
}

function queryAll (tag){
    return document.querySelectorAll(tag)
}

function creat (tag){
    return document.createElement(tag);
}

const button =  query('button');
const div = query('div');
const peso = query('#peso');
const altura = query('#altura');
const p = creat('p');

button.onclick = () => {
    
    if(peso.value.length > 0 && peso.value > 25 && peso.value < 300 
        && altura.value.length > 0 && altura.value > 1 && altura.value < 3){
        const calcula = (altura.value * altura.value) / peso.value;
        div.appendChild(p);
        p.innerText = "Resultado: seu imc é de " + calcula;
        const classificaP = creat('p');

        if(calcula < 18.5){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Abaixo do peso"  
        }else if(calcula >= 18.5 && calcula <= 24.9){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Peso normal"
        }else if(calcula >= 25){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Sobrepeso"
        }else if(calcula > 25 && calcula <= 29.9){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Pré-obeso"
        }else if(calcula >= 30 && calcula <= 34.9){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Obesidade Grau 1"
        }else if(calcula >= 35 && calcula <= 39.9){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Obesidade Grau 2"
        }else if(calcula >= 40){
            div.appendChild(classificaP);
            classificaP.innerText = "Classificação: Obesidade Grau 3"
        };

    }else{
        return ;
    };

}
