import * as PF from './src/fijo/constans.js'; //pf: punto flotante
import * as proccesPF from './src/fijo/main.js';

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

import * as PFB from './src/flotante-binario/constans.js';
import * as proccesPFB from './src/flotante-binario/main.JS';

const TIPO_MANTISA = ['ENTERA', 'FRACCIONARIA', 'FRACCIONARIA BIT IMPLICITO'];
const SELECT = ['BSS', 'BCS', 'CA1', 'CA2', 'EX2'];

PFB.BTN.addEventListener('click', () => {
    const TIPO = TIPO_MANTISA [ PFB.$TIPO_MANTISA.selectedIndex ];
    const MANTISA =   SELECT  [ PFB.$SELECT_MANTISA.selectedIndex ];
    const MANTISA_VALOR = PFB.INPUT_MANTISA.value;
    const EXPONENTE = SELECT  [ PFB.$SELECT_EXPONENTE.selectedIndex ];
    const EXPONENTE_VALOR = PFB.INPUT_EXPONENTE.value;

    if (TIPO == "ENTERA"){
        proccesPFB.entera(MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR);
    }
    
    else if (TIPO == "FRACCIONARIA"){
        proccesPFB.fraccionaria(MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR);
    }
    else if(TIPO == "FRACCIONARIA BIT IMPLICITO"){
        proccesPFB.fraccionariaBitImplicito(MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR);
    }
    
})

PFB.$TIPO_MANTISA.addEventListener('change', (event) => {
    if ((`${event.target.value}` == "FRACCIONARIA")||(`${event.target.value}` == "FRACCIONARIA BIT IMPLICITO")){
        document.getElementById('OCULTAR').style.visibility  = 'hidden';
        document.getElementById('OCULTAR1').style.visibility = 'hidden';
        document.getElementById('OCULTAR2').style.visibility = 'hidden';
    }
    else{
        document.getElementById('OCULTAR').style.visibility  = 'visible';
        document.getElementById('OCULTAR1').style.visibility = 'visible';
        document.getElementById('OCULTAR2').style.visibility = 'visible';
    }
});
