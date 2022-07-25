import * as pf from'./src/fijo/constans.js'; //pf: punto flotante
import * as proccesPf from './src/fijo/main.js';

const REGEX_BINARY = /^[0-1]+$/;
const REGEX_DECIMAL = /^[0-1-2-3-4-5-6-7-8-9]+$/;

pf.BTN.addEventListener('click', () => {
    const inputBinario = pf.INPUT_BINARIO.value; 
    var esBinario = inputBinario.match(REGEX_BINARY) !==null ? true:false;

    const inputDecimal = pf.INPUT_DECIMAL.value; 
    var esDecimal = inputDecimal.match(REGEX_DECIMAL) !==null ? true:false;

    const inputBit = pf.INPUT_BIT.value;
    var esBitImplicito = inputDecimal.match(REGEX_DECIMAL) !==null && inputBit.match(REGEX_DECIMAL)!==null ? true:false;
    
    if((esBinario) && !(esDecimal) && !(esBitImplicito)) { 
        proccesPf.binarioProcesado(inputBinario);  
    }
    else if (!(esBinario) && (esDecimal) && !(esBitImplicito)){  
        proccesPf.decimalProcesado(inputDecimal);
        if (inputDecimal[0] ==='-'){
            pf.OUTPUT_BSS.value = 'No tiene representación ';
        }
    }
    else if (!(esBinario) && (esDecimal) && (esBitImplicito)){        
        proccesPf.decimalBitProcesado(inputDecimal,inputBit);
        if (inputDecimal[0] === '-'){
            pf.OUTPUT_BSS.value = 'No tiene representación ';
        }
    }
    else {
        pf.ERROR.style.display = 'block';
    }
})