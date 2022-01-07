const input_binario = document.querySelector("#input_binario");
const input_decimal = document.querySelector("#input_decimal");

const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error-msg");

//________________________________________________________________________________________

function Bin2Dec(numero) {
    const regEx = /^[0-1]+$/;

    const regEx2 = /^[0-1-2-3-4-5-6-7-8-9]+$/;

    if(input_binario.value.match(regEx)) {
        const binArr = input_binario.value.split('').reverse();

        let Bss = input_binario.value.split('');
        Bss = Bss.toString() ;
        
        Bss = Bss.replace(/\s|[,]/g,''); 

        let decNo = 0;

        binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);



        output2.value = "BSS: "+ Bss + "   Decimal: " + decNo.toString()  ;
        output2.style.cursor = 'text';
    }
    else if (input_decimal.value.match(regEx2)){
        decArr = numero.split('').reverse();
        
        let decNo = 0;

        decArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);



        output2.value = "BSS: "+ numero + "   Decimal: " + decNo.toString()  ;
        output2.style.cursor = 'text';

    }
    else {
        error.style.display = 'block';
    }
}

//________________________________________________________________________________________
function BinarioSS() {
    const regEx = /^[0-1]+$/;

    if(input_binario.value.match(regEx)) {
        let binArr = input_binario.value.split('').reverse();

        let Bcs = input_binario.value.split('');
        
        let decNo = 0;

        Bcs = Bcs.toString() ;
        
        Bcs = Bcs.replace(/\s|[,]/g,''); 

        binArr.pop();

        binArr.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);


        if (Bcs[0] == 1) {
            output3.value = "BCS: "+ Bcs + "   Decimal: -" + decNo.toString()  ;
            output3.style.cursor = 'text';
        }
        else
        {
            output3.value = "BCS: "+ Bcs + "   Decimal: +" + decNo.toString()  ;
            output3.style.cursor = 'text';
        }

    }else {
        error.style.display = 'block';
    }
}
//________________________________________________________________________________________
function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

function DecimalABinario(nro){
    const regEx = /^[0-1-2-3-4-5-6-7-8-9]+$/;
    let nroDecimal = input_decimal.value.split('');

    if (input_decimal.value.match(regEx)){
        
        nroDecimal = nroDecimal.toString() ;
        
        nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 

        nroDecimal = nroDecimal.toString(2);

        Number(nroDecimal);
        nro = convertToBinary(nroDecimal);
        //console.log(nro);
    }
    return nro;
    
}
//________________________________________________________________________________________
btn.addEventListener('click', () => {
    error.style.display = 'none';
    let numero;
    numero=DecimalABinario(numero);
    console.log(numero);
    Bin2Dec(numero);
    BinarioSS();
})