import * as pf from'./scrips/constans/constansPF.js'; //pf: punto flotante

const REGEX_BINARY = /^[0-1]+$/;
const REGEX_DECIMAL = /^[0-1-2-3-4-5-6-7-8-9]+$/;

function binary(binario){
    const binArr = binario.split('').reverse();
    let Bss = binario.split('');
    Bss = Bss.toString() ;
    Bss = Bss.replace(/\s|[,]/g,''); 
    Bss_original = Bss;
    
    if (Bss[0] == 1) { 
        Binario_Negativo(binArr,Bss,Bss_original);
    }
    else{       
        Binario_Positivo(binArr,Bss,Bss_original);   
    }
    Rangos(Bss_original.length);
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
        binary(inputBinario);
    }
    else if (!(esBinario) && (esDecimal) && !(esBitImplicito)){  
        decimal(inputDecimal);
    }
    else if (!(esBinario) && (esDecimal) && (esBitImplicito)){        
        decimalBit(inputDecimal,inputBit);
    }
    else {
        error.style.display = 'block';
    }
})

function allMaxMin(bits){
    max_bss = (Math.pow(2, bits)) - 1;
    max = (Math.pow(2, (bits - 1))) - 1;
    min = Math.pow(2, (bits - 1));
    
    OUTPUT_MIN_MAX_NEG_BSS.value = "Minimo Negativo: No tiene " +    "    Maximo Negativo: No tiene  ";
    OUTPUT_MIN_MAX_POS_BSS.value = "Minimo Positivo: 0 "        +    "    Maximo Positivo: " + max_bss;
    
    OUTPUT_MIN_MAX_NEG_BCS.value = "Minimo Negativo: -" + max   +    "    Maximo Negativo: -0 "  ;
    OUTPUT_MIN_MAX_POS_BCS.value = "Minimo Positivo: +0 "       +    "    Maximo Positivo: " + max;

    OUTPUT_MIN_MAX_NEG_CA1.value = "Minimo Negativo: -" + max   +    "    Maximo Negativo: -0 ";
    OUTPUT_MIN_MAX_POS_CA1.value = "Minimo Positivo: +0 "       +    "    Maximo Positivo: +" + max;
 
    OUTPUT_MIN_MAX_NEG_CA2.value = "Minimo Negativo: -" + min   +    "    Maximo Negativo: -1 ";
    OUTPUT_MIN_MAX_NEG_EX2.value = "Minimo Negativo: -" + min   +    "    Maximo Negativo: -1 ";

    OUTPUT_MIN_MAX_POS_CA2.value = "Minimo Positivo: 0 "        +    "    Maximo Positivo: +" + max;
    OUTPUT_MIN_MAX_POS_EX2.value = "Minimo Positivo: 0 "        +    "    Maximo Positivo: +" + max;
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

