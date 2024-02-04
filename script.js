let data = new Date();
let diaAtual = data.getDay();
let mesAtual = data.getMonth();
let anoAtual = data.getFullYear();





formulario.onsubmit = () => {
    event.preventDefault()
    
    let anos = anoAtual - valorAno.value;
    let mes = mesAtual - valorMes.value;
    let dia = diaAtual - valorDia.value;

    if(valorDia.value === "" || valorMes.value === "" || valorAno.value === ""){
        alert('Opa!! Falta preencher!');
    }else{
        mostraAno.innerHTML = anos  ;
        mostraMes.innerHTML =  anos * 12;
        mostraDias.innerHTML =  anos * 365;
    }



    
}


