const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const saque = frm.inValor.value;

    /*
    Quando coloca-se saque % 10 != 0 é o mesmo que:
    - valor do saque divido por 10, e o resto dessa divivisão for diferente de 0;
    */
    if (saque % 10 != 0) { // se valor não for multiplo de 10
        alert(`Valor inválido para notas disponiveis (R$ 10, 50, 100)`);
        frm.inValor.focus();
        return
    }

    const notasCem = Math.floor(saque / 100); // resultado 3,5 executando floor = 3 | calculo notas 100
    let resto = saque % 100; // resto da divisão de valor saque / 100 = 50 | quanto sobra para pagar

    const notasCinquenta = Math.floor(resto / 50) 
    resto = resto % 50;

    const notasDez = Math.floor(resto / 10);

    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }

    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }

    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }
})





// método Math.floor arredonda número para baixo, para o inteiro mais próximo.