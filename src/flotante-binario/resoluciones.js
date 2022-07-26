/**
    * Recibe un binario y convierte a sus respestivos tipos.
    * @param  {'BCS'} MANTISA 
    * @param  {'BCS'} EXPONENTE  
    * @param  {'111'} EXPONENTE_VALOR  
    * @return {{
    * MIN_NEG: -0.125, 
    * MAX_NEG: -8,
    * MIN_POS: 0.125,
    * MAX_POS: 8
    * }}
*/
export function resolucionEntera(MANTISA, EXPONENTE, EXPONENTE_VALOR){
    var dict = {};
    
    const BITS_EXPONENTE = EXPONENTE_VALOR.length;
    const MIN_MAX_POS = minMaxPos(EXPONENTE, BITS_EXPONENTE);

    if (MANTISA === 'BSS'){

        dict['MIN_NEG'] = 'MIN NEG: ' + 'No tiene representación';
        dict['MAX_NEG'] = 'MAX NEG: ' + 'No tiene representación';
        dict['MIN_POS'] = 'MIN POS: ' + MIN_MAX_POS[0];
        dict['MAX_POS'] = 'MAX POS: ' + MIN_MAX_POS[1];

        return dict;
    }

    dict['MIN_NEG'] = 'MIN NEG: ' + -1 * MIN_MAX_POS[0];
    dict['MAX_NEG'] = 'MAX NEG: ' + -1 * MIN_MAX_POS[1];
    dict['MIN_POS'] = 'MIN POS: ' + MIN_MAX_POS[0];
    dict['MAX_POS'] = 'MAX POS: ' + MIN_MAX_POS[1];
    
    return dict;
}

export function minMaxPos(EXPONENTE, BITS_EXPONENTE){

    if (EXPONENTE === 'BSS'){
        var exponente = calcular(BITS_EXPONENTE) - 1;
        return [1, calcular(exponente)];
    }
    if ((EXPONENTE === 'BCS') || (EXPONENTE === 'CA1')) {
        var exponente = calcular(BITS_EXPONENTE - 1) - 1;
        return [calcular(-1 * exponente), calcular(exponente)];
    }
    if ((EXPONENTE === 'CA2')){
        var exponente = calcular(BITS_EXPONENTE - 1);
        return [calcular(-1 * exponente), calcular(exponente-1)];
    }
    
    function calcular (bits) {
        return ((Math.pow(2, (bits))));
    }
}


/**
    * Recibe un binario y convierte a sus respestivos tipos.
    * @param  {'BCS'} EXPONENTE  
    * @param  {'111'} EXPONENTE_VALOR  
    * @return {{
    * MIN_NEG: -0.125, 
    * MAX_NEG: -8,
    * MIN_POS: 0.125,
    * MAX_POS: 8
    * }}
*/
function Calculo_Maximo_Minimos_Mantisa_Fraccionaria(MantisaElegida,mantisa,ExponenteElegido,exponente){
    const regEx = /^[0-1]+$/;
    if((mantisa.value.match(regEx))&&(exponente.value.match(regEx))){
        if(MantisaElegida == "BSS"){
            BSS_NUMEROS_RESOLUCIONES_Fraccionaria(mantisa.value.length,ExponenteElegido,exponente.value.length);
        }
        else if(MantisaElegida == "BCS"){
            BCS_NUMEROS_RESOLUCIONES_Fraccionaria(mantisa.value.length,ExponenteElegido,exponente.value.length);
        }
    }
    else{
        error2.style.display = 'block';
    }
}

function BSS_NUMEROS_RESOLUCIONES_Fraccionaria(bitsMantisa,ExponenteElegido,bitsExponente){
    Numeros1.value = "No tiene representacion 😔";
    Numeros2.value = "No tiene representacion 😔";
    Resoluciones1.value ="No tiene representacion 😔";
    Resoluciones2.value ="No tiene representacion 😔";

    if (ExponenteElegido == "BSS"){
        Numeros3.value = "Minimo Positivo: 0";
        let mantisa = 0;

        for (var i = 1; i <= bitsMantisa; i++) {
            mantisa += Math.pow(2, (i*-1));
         }
         exponente = ((Math.pow(2,bitsExponente))-1);
         Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));

        mantisa = Math.pow(2, (bitsMantisa*-1));
        Resoluciones3.value ="Minimo Positivo: "+ mantisa;

        Resoluciones4.value ="Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
    }
    else if(ExponenteElegido == "BCS"){
        BCS_Ca1MaximosResoluciones_Fraccionaria(bitsMantisa,bitsExponente);
    }
    else if(ExponenteElegido == "Ca1"){
        BCS_Ca1MaximosResoluciones_Fraccionaria(bitsMantisa,bitsExponente);
    }
    else if (ExponenteElegido == "Ca2"){
        Ca2_Ex2MaximosResoluciones_Fraccionaria(bitsMantisa,bitsExponente);
    }
    else if (ExponenteElegido == "Ex2"){
        Ca2_Ex2MaximosResoluciones_Fraccionaria(bitsMantisa,bitsExponente);
    }
}

function BCS_NUMEROS_RESOLUCIONES_Fraccionaria(bitsMantisa,ExponenteElegido,bitsExponente){
    if (ExponenteElegido == "BSS"){
        Numeros3.value = "Minimo Positivo: +0";
        let mantisa = 0;
        bitsMantisa = bitsMantisa-1; //Porque estamos trabajando con BCS
        for (var i = 1; i <= bitsMantisa; i++) {
            mantisa += Math.pow(2, (i*-1));
        }
        exponente = ((Math.pow(2,bitsExponente))-1);
        Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
        Numeros1.value = "Minimo Negativo: -"+(mantisa * (Math.pow(2,(exponente))));
        Numeros2.value = "Maximo Negativo: -0";
        mantisa = Math.pow(2, (bitsMantisa*-1));
        Resoluciones3.value ="Minimo Positivo: "+ mantisa;
        Resoluciones2.value ="Maximo Negativo: -"+ mantisa;
        Resoluciones4.value ="Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
        Resoluciones1.value ="Minimo Negativo: -"+(mantisa * (Math.pow(2,(exponente))));
    }
    else if(ExponenteElegido == "BCS"){
        BCS_Ca1MaximosResoluciones_FraccionariaBCS(bitsMantisa,bitsExponente);
    }
    else if(ExponenteElegido == "Ca1"){
        BCS_Ca1MaximosResoluciones_FraccionariaBCS(bitsMantisa,bitsExponente);
    }
    else if (ExponenteElegido == "Ca2"){
        Ca2_Ex2MaximosResoluciones_FraccionariaBCS(bitsMantisa,bitsExponente);
    }
    else if (ExponenteElegido == "Ex2"){
        Ca2_Ex2MaximosResoluciones_FraccionariaBCS(bitsMantisa,bitsExponente);
    }
}