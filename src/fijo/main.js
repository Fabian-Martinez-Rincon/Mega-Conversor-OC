import * as pf from'./constans.js'; //pf: punto flotante
import {Binario, Decimal, DecimalBit} from'../set.js'; 

export function binarioProcesado(nro){
    const binario = Binario(nro);

    pf.OUTPUT_BSS.value = 'Bss: ' + binario['BSS'][0] + '  Decimal: ' + binario['BSS'][1];
    pf.OUTPUT_BCS.value = 'Bcs: ' + binario['BCS'][0] + '  Decimal: ' + binario['BCS'][1];
    pf.OUTPUT_CA1.value = 'Ca1: ' + binario['CA1'][0] + '  Decimal: ' + binario['CA1'][1];
    pf.OUTPUT_CA2.value = 'Ca2: ' + binario['CA2'][0] + '  Decimal: ' + binario['CA2'][1];
    pf.OUTPUT_EX2.value = 'Ex2: ' + binario['EX2'][0] + '  Decimal: ' + binario['EX2'][1];

    const bits = nro.length;
    allMaxMin(bits);
    rangos(bits);
    pf.OUTPUT_BITS.value = "Bits: " + bits;
  
}

export function decimalProcesado(nro){
    const decimal = Decimal(nro);
    
    pf.OUTPUT_BSS.value = 'Bss: ' + decimal['BSS'][0] + '  Decimal: ' + decimal['BSS'][1];
    pf.OUTPUT_BCS.value = 'Bcs: ' + decimal['BCS'][0] + '  Decimal: ' + decimal['BCS'][1];
    pf.OUTPUT_CA1.value = 'Ca1: ' + decimal['CA1'][0] + '  Decimal: ' + decimal['CA1'][1];
    pf.OUTPUT_CA2.value = 'Ca2: ' + decimal['CA2'][0] + '  Decimal: ' + decimal['CA2'][1];
    pf.OUTPUT_EX2.value = 'Ex2: ' + decimal['EX2'][0] + '  Decimal: ' + decimal['EX2'][1];
    
    const bits = decimal['BSS'][0].length;
    allMaxMin(bits);
    rangos(bits);
    pf.OUTPUT_BITS.value = "Bits: " + bits;
}

export function decimalBitProcesado(nro, bits){
    const decimal = DecimalBit(nro, bits);
    if (decimal['BCS'][0].length > bits){
        decimalError(nro, bits);
        return;
    }

    pf.OUTPUT_BSS.value = 'Bss: ' + decimal['BSS'][0] + '  Decimal: ' + decimal['BSS'][1];
    pf.OUTPUT_BCS.value = 'Bcs: ' + decimal['BCS'][0] + '  Decimal: ' + decimal['BCS'][1];
    pf.OUTPUT_CA1.value = 'Ca1: ' + decimal['CA1'][0] + '  Decimal: ' + decimal['CA1'][1];
    pf.OUTPUT_CA2.value = 'Ca2: ' + decimal['CA2'][0] + '  Decimal: ' + decimal['CA2'][1];
    pf.OUTPUT_EX2.value = 'Ex2: ' + decimal['EX2'][0] + '  Decimal: ' + decimal['EX2'][1];
    
    
    allMaxMin(bits);
    rangos(bits);
    pf.OUTPUT_BITS.value = "Bits: " + bits;
}



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

function decimalError(numero, nroBit){
    
    pf.OUTPUT_BSS.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'   ;
    pf.OUTPUT_BCS.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    pf.OUTPUT_CA1.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    pf.OUTPUT_CA2.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    pf.OUTPUT_EX2.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    pf.OUTPUT_BITS.value = "Bits: "+ nroBit ;

    pf.OUTPUT_MIN_MAX_NEG_BSS.value = "";
    pf.OUTPUT_MIN_MAX_POS_BSS.value = "";
    pf.OUTPUT_MIN_MAX_NEG_BCS.value = "";
    pf.OUTPUT_MIN_MAX_POS_BCS.value = "";
    pf.OUTPUT_MIN_MAX_NEG_CA1.value = "";
    pf.OUTPUT_MIN_MAX_POS_CA1.value = "";
    pf.OUTPUT_MIN_MAX_NEG_CA2.value = "";
    pf.OUTPUT_MIN_MAX_POS_CA2.value = "";
    pf.OUTPUT_MIN_MAX_NEG_EX2.value = "";
    pf.OUTPUT_MIN_MAX_POS_EX2.value = "";
}