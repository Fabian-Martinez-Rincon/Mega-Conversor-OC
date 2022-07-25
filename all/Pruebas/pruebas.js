import * as conversion from'/conversions.js';

function Binario(NRO){
    var dict = {};
    const nroDecimal = conversion.toDecimal(NRO);

    //if ( NRO[0] === '0' ){
//
    //    dict['BSS'] = [NRO, nroDecimal];
    //    dict['BCS'] = [NRO, nroDecimal];
    //    dict['CA1'] = [NRO, nroDecimal];
    //    dict['CA2'] = [NRO, nroDecimal];
    //    dict['EX2'] = [NRO, nroDecimal - Math.pow(2, (NRO.length)-1)];
//
    //    return dict;
    //}
//
    //dict['BSS'] = [NRO, nroDecimal];
    //dict['BCS'] = [NRO,'-' + conversion.toDecimal(NRO.slice(1))];
    //dict['CA1'] = conversion.toCa1(NRO);
    //dict['CA2'] = conversion.toCa2(NRO);
    //dict['EX2'] = [NRO, nroDecimal - Math.pow(2, (NRO.length)-1)];


    return dict;
}

console.log(Binario('011'));

/*
function decimalConvert(NRO){
    
    var dict = {};
    const nroBinary = toBinario(NRO);
    
    if ( NRO[0] !== '-' ){
        dict['BSS'] = [nroBinary.substring(1), NRO];
        dict['BCS'] = [nroBinary, NRO];
        dict['CA1'] = [nroBinary, NRO];
        dict['CA2'] = [nroBinary, NRO];
        const result = Number(NRO) + Math.pow(2, nroBinary - 2);
        dict['EX2'] = [toBinario(result).substring(1),result];
        return dict;
    }

    dict['BSS'] = ['No tiene', 'No tiene'];
    dict['BCS'] = [nroBinary, NRO];
    dict['CA1'] = toBinarioCa1(nroBinary);
    dict['CA2'] = toBinarioCa2(dict['CA1'][0]);
    const result = Number(NRO) + Math.pow(2, nroBinary.length - 1);
    dict['EX2'] = [toBinario(result),result]

    return dict;
}



function decimalBitConvert(NRO,BITS){
    
    var dict = {};
    const nroBinary = toBinarioBit(NRO,BITS);
    const result = Number(NRO) + Math.pow(2, BITS - 1);
    
    if (nroBinary.length > BITS){
        return false;
    }
    
    if ( NRO[0] !== '-' ){
        
        dict['BSS'] = [nroBinary, NRO];
        dict['BCS'] = [nroBinary, NRO];
        dict['CA1'] = [nroBinary, NRO];
        dict['CA2'] = [nroBinary, NRO];
        dict['EX2'] = [toBinario(result).substring(1),result];
        return dict;
    }
    
    dict['BSS'] = ['No tiene', 'No tiene'];
    dict['BCS'] = [nroBinary, NRO];
    dict['CA1'] = toBinarioCa1(nroBinary);
    dict['CA2'] = toBinarioCa2(dict['CA1'][0]);
    dict['EX2'] = [toBinario(result),result];


    function toBinarioCa1(ca1){
        ca1 = '1' + ca1.substring(1).
            replace(/\s|[1]/g,'2').
            replace(/\s|[0]/g,'1').
            replace(/\s|[2]/g,'0'); 

        return [ca1,'-' + toDecimal(ca1.substring(1))];
    }
    
    function toBinarioCa2(ca2){
        ca2 = binaryAddition(ca2);
        return [ca2, '-' + toDecimal(ca2.substring(1))]; 
    }    
    
    return dict;
}

*/