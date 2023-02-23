//Desabilitar o refresh da pagina apos clicar no botao enviar
//Define a funcao privada fora da global
function meuEscopo(){
    const form = document.querySelector('.form'); //ler o form
    const resultado = document.querySelector('.resultado'); //ler o div
    
    const pessoal = []; //array

    function recebeEventoForm (evento) { //Funcao que lê os inputs do form
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        //Capturando as informacoes e salvando no Array
        pessoal.push({
            nome: nome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoal);
        
        //preenche a div
        resultado.innerHTML += `<p>Nome: <b>${nome.value}</b>, <b>${idade.value}</b> anos` +
        ` está com <b>${peso.value}</b> Kg e possui <b>${altura.value}</b> de altura</p>`;
        
    }

    form.addEventListener('submit',recebeEventoForm);
}

meuEscopo();
