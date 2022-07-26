import * as PFB from'./constans.js'; 
import * as RESOLUTION from './resoluciones.js';
import {Binario, BinarioFraccionario} from'../set.js'; 

export function entera (MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR){

    const BASE = Binario(MANTISA_VALOR)[MANTISA][1];
    const EXP =  Binario(EXPONENTE_VALOR)[EXPONENTE][1];
    const RES = BASE * Math.pow(2, EXP);

    PFB.OUTPUT_RESULTADO.value = BASE + ' * (2 ^ ' + EXP +') = '+ RES 

    const RESOLUCIONES = RESOLUTION.resolucionEntera(MANTISA, EXPONENTE, EXPONENTE_VALOR);
    
    PFB.RESOLUTION_MAX_NEG.value = RESOLUCIONES['MAX_NEG'];
    PFB.RESOLUTION_MIN_NEG.value = RESOLUCIONES['MIN_NEG'];
    PFB.RESOLUTION_MAX_POS.value = RESOLUCIONES['MAX_POS'];
    PFB.RESOLUTION_MIN_POS.value = RESOLUCIONES['MIN_POS'];
}

export function fraccionaria (MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR){
    
    const BASE = BinarioFraccionario(MANTISA_VALOR)[MANTISA][1];
    const EXP =  Binario(EXPONENTE_VALOR)[EXPONENTE][1];
    const RES = BASE * Math.pow(2, EXP);
    
    PFB.OUTPUT_RESULTADO = BASE + ' * (2 ^ ' + EXP +') = '+ RES;
    //maxMinFraccionaria(MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR);
}

export function fraccionariaBitImplicito (MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR){
    
    const BASE = BinarioFraccionario('1' + MANTISA_VALOR)[MANTISA][1];
    const EXP =  Binario(EXPONENTE_VALOR)[EXPONENTE][1];
    const RES = BASE * Math.pow(2, EXP);
    
    PFB.OUTPUT_RESULTADO.value = BASE + ' * (2 ^ ' + EXP +') = '+ RES;
    //maxMinFraccionariaBit(MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR);
}

