import * as PFB from'./constans.js'; 

import {Binario, BinarioFraccionario} from'../set.js'; 

export function entera (MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR){

    const BASE = Binario(MANTISA_VALOR)[MANTISA][1];
    const EXP =  Binario(EXPONENTE_VALOR)[EXPONENTE][1];
    const RES = BASE * Math.pow(2, EXP);

    PFB.OUTPUT_RESULTADO.value = BASE + ' * (2 ^ ' + EXP +') = '+ RES 
    //maxMinEntera(MANTISA, MANTISA_VALOR, EXPONENTE, EXPONENTE_VALOR);
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