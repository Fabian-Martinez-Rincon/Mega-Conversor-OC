function DecimalError(numero, nroBit){
    
    OUTPUT_BSS.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'   ;
    OUTPUT_BCS.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    OUTPUT_CA1.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    OUTPUT_CA2.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    OUTPUT_EX2.value = "El numero: " + numero + " No se puede representar con : " + nroBit + ' bits'    ;
    OUTPUT_BITS.value = "Bits: "+ nroBit ;

    OUTPUT_MIN_MAX_NEG_BSS.value = "";
    OUTPUT_MIN_MAX_POS_BSS.value = "";

    OUTPUT_MIN_MAX_NEG_BCS.value = "";
    OUTPUT_MIN_MAX_POS_BCS.value = "";

    OUTPUT_MIN_MAX_NEG_CA1.value = "";
    OUTPUT_MIN_MAX_POS_CA1.value = "";

    OUTPUT_MIN_MAX_NEG_CA2.value = "";
    OUTPUT_MIN_MAX_POS_CA2.value = "";
 
    OUTPUT_MIN_MAX_NEG_EX2.value = "";
    OUTPUT_MIN_MAX_POS_EX2.value = "";
}