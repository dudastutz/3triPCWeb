const xhttp = new XMLHttpRequest();

const URL = "https://openexchangerates.org/";

const obterTaxaCambio = async(moedaOrigem, dolar) =>{
    
}

const moedaInicial = document.querySelector(".moeda-origem").textContent
const valorInicial = document.querySelector(".valor-origem").textContent

const carregarMoedas = (moedas) =>{
    let opcoes = ``
    moedas.forEach(moeda => {
        opcoes += `<option>${moeda}</option>`
    });
    return opcoes
}

const transformarMoeda = (valorInicial, valorCambio) =>{
    const valorDolar = valorInicial * valorCambio
}