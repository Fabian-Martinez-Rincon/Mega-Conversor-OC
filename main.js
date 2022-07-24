import * as pf from'./scrips/constans/constansPF.js'; //pf: punto flotante
import * as conversion from'./scrips/conversion.js';

const REGEX_BINARY = /^[0-1]+$/;
const REGEX_DECIMAL = /^[0-1-2-3-4-5-6-7-8-9]+$/;

function rangos(nroBit){
    const rangoBss = (Math.pow(2, nroBit)) - 1;
    const rangoBcs = (Math.pow(2, (nroBit-1))) - 1;
    const rangoCa2 =  Math.pow(2, (nroBit-1));
    pf.OUTPUT_RANGO.value = 
        "Bss: [0.." + rangoBss  + "] " + 
        "Bcs: [-" + rangoBcs + ".."   + "+" + rangoBcs + "]  "+ 
        "Ca1 :[-" + rangoBcs + ".." + "+" + rangoBcs+"]  "+ 
        "Ca2: [-" + rangoCa2 + "..+" + rangoBcs+"]  "+
        "Ex2: [-" + rangoCa2 + "..+" + rangoBcs+"]";
}

function binarioProcesado(nro){
    const bss = conversion.toBss(nro);
    const bcs = conversion.toBcs(nro);
    const ca1 = conversion.toCa1(nro);
    const ca2 = conversion.toCa2(nro);
    const ex2 = conversion.toEx2(nro);

    pf.OUTPUT_BSS.value = 'Bss: ' + bss[0] + '  Decimal: ' + bss[1];
    pf.OUTPUT_BCS.value = 'Bcs: ' + bcs[0] + '  Decimal: ' + bcs[1];
    pf.OUTPUT_CA1.value = 'Ca1: ' + ca1[0] + '  Decimal: ' + ca1[1];
    pf.OUTPUT_CA2.value = 'Ca2: ' + ca2[0] + '  Decimal: ' + ca2[1];
    pf.OUTPUT_EX2.value = 'Ex2: ' + ex2[0] + '  Decimal: ' + ex2[1];

    const bits = nro.length;
    allMaxMin(bits);
    rangos(bits);
    pf.OUTPUT_BITS.value = "Bits: " + bits;

}

function decimalProcesado(nro){
    const bss = conversion.toBinarioBss(nro);
    const bcs = conversion.toBinarioBcs(nro);
    const ca1 = conversion.toBinarioCa1(nro);
    const ca2 = conversion.toBinarioCa2(nro);
    const ex2 = conversion.toBinarioEx2(nro);
    pf.OUTPUT_BSS.value = 'Bss: ' + bss + '  Decimal: ' + nro;
    pf.OUTPUT_BCS.value = 'Bcs: ' + bcs + '  Decimal: ' + nro;
    pf.OUTPUT_CA1.value = 'Ca1: ' + ca1[0] + '  Decimal: ' + ca1[1];
    pf.OUTPUT_CA2.value = 'Ca2: ' + ca2[0] + '  Decimal: ' + ca2[1];
    pf.OUTPUT_EX2.value = 'Ex2: ' + ex2[0] + '  Decimal: ' + ex2[1];

    const bits = bss.length;
    allMaxMin(bits);
    rangos(bits);
    pf.OUTPUT_BITS.value = "Bits: " + bits;
}
function decimalBit(nro,bit){

}

pf.BTN.addEventListener('click', () => {
    const inputBinario = pf.INPUT_BINARIO.value; 
    var esBinario = 
        inputBinario.match(REGEX_BINARY) !==null
        ? true:false;

    const inputDecimal = pf.INPUT_DECIMAL.value; 
    var esDecimal = 
        inputDecimal.match(REGEX_DECIMAL) !==null
        ? true:false;

    const inputBit = pf.INPUT_BIT.value;
    var esBitImplicito = 
        inputDecimal.match(REGEX_DECIMAL) !==null && 
        inputBit.match(REGEX_DECIMAL)!==null
        ? true:false;
    
    if((esBinario) && !(esDecimal) && !(esBitImplicito)) {   
        binarioProcesado(inputBinario);
    }
    else if (!(esBinario) && (esDecimal) && !(esBitImplicito)){  
        decimalProcesado(inputDecimal);
        if (inputDecimal[0] ==='-'){
            pf.OUTPUT_BSS.value = 'No tiene representación ';
        }
    }
    else if (!(esBinario) && (esDecimal) && (esBitImplicito)){        
        decimalBit(inputDecimal,inputBit);
    }
    else {
        error.style.display = 'block';
    }
})

function allMaxMin(bits){
    const max_bss = (Math.pow(2, bits)) - 1;
    const max = (Math.pow(2, (bits - 1))) - 1;
    const min = Math.pow(2, (bits - 1));
    
    pf.OUTPUT_MIN_MAX_NEG_BSS.value = "Minimo Negativo: No tiene " +    "    Maximo Negativo: No tiene  ";
    pf.OUTPUT_MIN_MAX_POS_BSS.value = "Minimo Positivo: 0 "        +    "    Maximo Positivo: " + max_bss;
    
    pf.OUTPUT_MIN_MAX_NEG_BCS.value = "Minimo Negativo: -" + max   +    "    Maximo Negativo: -0 "  ;
    pf.OUTPUT_MIN_MAX_POS_BCS.value = "Minimo Positivo: +0 "       +    "    Maximo Positivo: " + max;

    pf.OUTPUT_MIN_MAX_NEG_CA1.value = "Minimo Negativo: -" + max   +    "    Maximo Negativo: -0 ";
    pf.OUTPUT_MIN_MAX_POS_CA1.value = "Minimo Positivo: +0 "       +    "    Maximo Positivo: +" + max;
 
    pf.OUTPUT_MIN_MAX_NEG_CA2.value = "Minimo Negativo: -" + min   +    "    Maximo Negativo: -1 ";
    pf.OUTPUT_MIN_MAX_NEG_EX2.value = "Minimo Negativo: -" + min   +    "    Maximo Negativo: -1 ";

    pf.OUTPUT_MIN_MAX_POS_CA2.value = "Minimo Positivo: 0 "        +    "    Maximo Positivo: +" + max;
    pf.OUTPUT_MIN_MAX_POS_EX2.value = "Minimo Positivo: 0 "        +    "    Maximo Positivo: +" + max;
}

function decimalAndBit(){
    decArr = numero.split('').reverse();
    let nroDecimal = INPUT_DECIMAL.value.split('');
    let nroBit = INPUT_BIT.value.split('');

    nroDecimal = nroDecimal.toString() ;
    nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 

    nroBit = nroBit.toString() ;
    nroBit = nroBit.replace(/\s|[,]/g,''); 
    Number(nroBit);

    Rangos(nroBit);
    //Compruebo que se ingresaron bits mas grandes que 1
    if (nroBit>0){  
        let decNo = 0;
        let numero_original = numero;
        decArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
        if (nroDecimal > 0){       
            //Adapto mi numero a la cantidad de bits ingresados
            if (nroBit>=numero.length){ 
                Decimal_Positivo(nroBit,numero,numero_original,decNo);
            }
            else{
                Decimal_Error(numero, nroBit);
            }
        }
        //Para numeros negativos
        else {   
            output_BSS.value = "BSS: No tiene Representacion :,("  ;
            output_BSS.style.cursor = 'text';
            numero=numero.slice(1);
            let nro_original = numero;
            //Si tengo bits para el numero + el bit de signo
            if (nroBit>=(numero.length+1)){ 
                Decimal_Negativo(numero,nroBit,nroDecimal,nro_original);
            }
            else{
                Decimal_Negativo_Error(decNo,nroBit);
            }
        }
    }
    else{
        error.style.display = 'block';
    }
}
function decimal(){
    decArr = numero.split('').reverse();
    let nroDecimal = INPUT_DECIMAL.value.split('');
    nroDecimal = nroDecimal.toString() ;
    nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 
    let decNo = 0;
    decArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
    if (nroDecimal > 0){
        Decimal_Positivo_Solo(decNo,numero);
    }
    else{
        Decimal_Negativo_Solo(decArr,numero,nroDecimal);
    }
}

