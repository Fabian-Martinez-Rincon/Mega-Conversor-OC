function binaryAddition(nro){ 
    
    let myFunc = num => Number(num);
    var intArr = Array.from(nro, myFunc);
    var tamanio = intArr.length;
    
    while (true){
        if (intArr[tamanio-1] == 1){
            intArr[tamanio-1] = 0;
        }
        else{
            if (tamanio>0){
                intArr[tamanio-1] = 1;
                return intArr.join('');
            }
            intArr.unshift(1)
            return intArr.join('');
        }
        tamanio = tamanio -1;
    }
}

function toDecimal(nro){
    var aux = 0;
    var binArr = nro.split('').reverse();
    binArr.forEach((item, index) => item === '1' ? aux += Math.pow(2, index) : void 0);
    return aux;
}

function toBss(BIN, DEC){
    return [BIN, DEC];
}

function toBcs(BIN){
    return [BIN,'-' + toDecimal(BIN.slice(1))]
}

function toCa1(BIN){
    BIN = BIN.
        replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 

    return [BIN, '-' + toDecimal(BIN)];
}

function toCa2(BIN){
    var ca1 = toCa1(BIN);
    var ca2 = binaryAddition(ca1[0]);
    return [ca2, '-' + toDecimal(ca2)]; 
}

function toEx2(BIN, DEC){
    return [BIN, DEC - Math.pow(2, (BIN.length)-1)];
}

function toBinario(DEC){
    if (DEC[0] !== '-'){
        return '0' + convertToBinary(DEC);
    }
    return '1' + convertToBinary(DEC.slice(1));
}

function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

function toBinarioEx2(DEC, BITS){

    if (DEC[0] !== '-'){
        const RESULT = Number(DEC) + Math.pow(2, BITS - 1);

        return [toBinario(RESULT).substring(1), RESULT];
    }
    const RESULT = Number(DEC) + Math.pow(2, BITS);

    return [toBinario(RESULT), RESULT];
}

function toBinarioCa1(BIN){

    BIN = '1' + BIN.substring(1).
        replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 

    return [BIN, '-' + toDecimal(BIN.substring(1))];
}

function toBinarioCa2(CA1){

    var ca2 = binaryAddition(CA1);
    return [ca2, '-' + toDecimal(ca2.substring(1))]; 
}

function toBinarioBits(BIN, BITS){
    for (var i = BIN.length; i < Number(BITS); i++){
        BIN = '0' + BIN;
    }

    return BIN;
}

function toBinarioBit(DEC, BITS){
    var aux = toBinario(DEC);

    if (DEC[0] !== '-'){
        return toBinarioBits(aux, BITS);
    }

    return '1' + toBinarioBits(aux.slice(1), BITS - 1);
}

function toBinarioBitEx2(DEC, BITS){

    const RESULT = Number(DEC) + Math.pow(2, BITS - 1);
    return [toBinarioBit(RESULT, BITS), RESULT];
}

module.exports = {
    toDecimal, toBss, toBcs, toCa1, toCa2, toEx2, 
    toBinario, toBinarioCa1, toBinarioCa2, toBinarioEx2,
    toBinarioBit, toBinarioBitEx2
};