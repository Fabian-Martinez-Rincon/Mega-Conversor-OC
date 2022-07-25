import * as PF from './src/fijo/constans.js'; //pf: punto flotante
import * as proccesPF from './src/fijo/main.js';
import * as PFB from './src/flotante-binario/constans.js'; //pf: punto flotante binario



const REGEX_BINARY = /^[0-1]+$/;
const REGEX_DECIMAL = /^[0-1-2-3-4-5-6-7-8-9]+$/;

PF.BTN.addEventListener('click', () => {
    const inputBinario = PF.INPUT_BINARIO.value; 
    var esBinario = inputBinario.match(REGEX_BINARY) !==null ? true:false;

    const inputDecimal = PF.INPUT_DECIMAL.value; 
    var esDecimal = inputDecimal.match(REGEX_DECIMAL) !==null ? true:false;

    const inputBit = PF.INPUT_BIT.value;
    var esBitImplicito = inputDecimal.match(REGEX_DECIMAL) !==null && inputBit.match(REGEX_DECIMAL)!==null ? true:false;
    
    if((esBinario) && !(esDecimal) && !(esBitImplicito)) { 
        proccesPF.binarioProcesado(inputBinario);  
    }
    else if (!(esBinario) && (esDecimal) && !(esBitImplicito)){  
        proccesPF.decimalProcesado(inputDecimal);
        if (inputDecimal[0] ==='-'){
            PF.OUTPUT_BSS.value = 'No tiene representación ';
        }
    }
    else if (!(esBinario) && (esDecimal) && (esBitImplicito)){        
        proccesPF.decimalBitProcesado(inputDecimal,inputBit);
        if (inputDecimal[0] === '-'){
            PF.OUTPUT_BSS.value = 'No tiene representación ';
        }
    }
    else {
        PF.ERROR.style.display = 'block';
    }
})


PFB.BTN.addEventListener('click', () => {
    const TIPO = PFB.$TIPO_MANTISA.options[PFB.$TIPO_MANTISA.selectedIndex].text;
    const MANTISA = PFB.$SELECT_MANTISA.options[PFB.$SELECT_MANTISA.selectedIndex].text;
    const EXPONENTE = PFB.$SELECT_EXPONENTE.options[PFB.$SELECT_EXPONENTE.selectedIndex].text;
    console.log(TIPO);
    console.log(MANTISA);
    console.log(EXPONENTE);

    //if (TIPO == "ENTERA"){
    //    entera();
    //}
    //else if (TIPO == "FRACCIONARIA"){
    //    fraccionaria();
    //}
    //else if(TIPO == "FRACCIONARIA BIT IMPLICITO"){
    //    fraccionariaBitImplicito();
    //}
})
