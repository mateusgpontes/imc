function query (tag){
    return document.querySelector(tag);
}

function queryAll (tag){
    return document.querySelectorAll(tag)
}

function creat (tag){
    return document.createElement(tag);
}

const p = creat('p');
const button =  query('button');
const div = query('div');
const peso = query('#peso');
const altura = query('#altura');

console.log(peso, altura);

button.onclick = () => {
    if(peso.value.length > 0 && altura.value.length > 0){
        console.log('teste')
    };
}
