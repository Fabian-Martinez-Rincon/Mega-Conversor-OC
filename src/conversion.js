/**
 * Recibe un binario y lo incrementa en 1, por ejemplo:\
 *   0111 + 1 = 1000
 * @param {string} nro 
 * @returns {string} 
 */
export function binaryAddition(nro){ 
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

/**
 * Recibe un binario y lo convierte a decimal, por ejemplo:
 *    '111' --> 7
 * @param {string} nro 
 * @returns {number} 
 */
export function toDecimal(BIN){
    var aux = 0;
    var binArr = BIN.split('').reverse();
    binArr.forEach((item, index) => item === '1' ? aux += Math.pow(2, index) : void 0);
    return aux;
}

export function toDecimalFraccionario(BIN){
    var aux = 0;
    var binArr = BIN.split('');
    binArr.unshift(0);
    binArr.forEach((item, index) => item === '1' ? aux += Math.pow(2, (-1 * index)) : void 0);
    return aux;
}

export function toBcsFraccionario(BIN){
    return ['0,' + BIN, -1 * toDecimalFraccionario(BIN.substring(1))]
}

/**
 * Retorna una lista con los datos recibidos por parametro:
 * @param {string} BIN
 * @param {number} DEC 
 * @returns {[BIN, DEC]} BIN, DEC
 */
export function toBss(BIN, DEC){
    return [BIN, DEC];
}

/**
 * Recibe un binario y lo convierte a BCS, por ejemplo:\
 * 1001 = [1001, -1]
 * @param {string} BIN
 * @returns {[string, number]} BIN, BCS
 */
export function toBcs(BIN){
    return [BIN, -1 * toDecimal(BIN.slice(1))]
}

/**
 * Recibe un binario y lo convierte a CA1, por ejemplo:\
 * 1001 = [0110, -6]
 * @param {string} BIN
 * @returns {[string, number]} 
 */
export function toCa1(BIN){
    BIN = BIN.
        replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 

    return [BIN, -1 * toDecimal(BIN)];
}

/**
 * Recibe un binario y lo convierte a CA2, por ejemplo:\
 * 1001 = [0111, -7]
 * @param {string} BIN
 * @returns {[string, number]} 
 */
export function toCa2(BIN){
    var ca1 = toCa1(BIN);
    var ca2 = binaryAddition(ca1[0]);
    return [ca2, -1 * toDecimal(ca2)]; 
}

/**
 * Recibe un binario y un decimal para convertirlo en EX2, por ejemplo:\
 * [1001, 9] = [1001, 9 - 2^4]\
 * [1001, 1]
 * @param {string} BIN
 * @returns {[string, number]} 
 */
export function toEx2(BIN, DEC){
    return [BIN, DEC - Math.pow(2, (BIN.length)-1)];
}

/**
 * Recibe un decimal para convertirlo en binario, por ejemplo:\
 * -9 = 11001\
 * 9 = 01001
 * @param {string} BIN
 * @returns {[string, number]} 
 */
export function toBinario(DEC){
    if (DEC[0] !== '-'){
        return '0' + convertToBinary(DEC);
    }
    return '1' + convertToBinary(DEC.slice(1));
}

export function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

/**
 * Recibe un decimal y sus bits para convertirlo en EX2, por ejemplo:\
 * 4 + 2^5 = 4 + 16\
 * [20, 10100]
 * @param {string} BIN
 * @returns {[string, number]} 
 */
export function toBinarioEx2(DEC, BITS){

    if (DEC[0] !== '-'){
        const RESULT = Number(DEC) + Math.pow(2, BITS - 1);

        return [toBinario(RESULT).substring(1), RESULT];
    }
    const RESULT = Number(DEC) + Math.pow(2, BITS);

    return [toBinario(RESULT), RESULT];
}

/**
 * Recibe un binario para convertirlo en CA1, por ejemplo:\
 * 1011 = 1100\
 * @param {string} BIN
 * @returns {[string, number]} 
 */
export function toBinarioCa1(BIN){

    BIN = '1' + BIN.substring(1).
        replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 

    return [BIN, '-' + toDecimal(BIN.substring(1))];
}

export function toBinarioCa2(CA1){

    var ca2 = binaryAddition(CA1);
    return [ca2, '-' + toDecimal(ca2.substring(1))]; 
}

export function toBinarioBits(BIN, BITS){
    for (var i = BIN.length; i < Number(BITS); i++){
        BIN = '0' + BIN;
    }

    return BIN;
}

export function toBinarioBit(DEC, BITS){
    var aux = toBinario(DEC);

    if (DEC[0] !== '-'){
        return toBinarioBits(aux, BITS);
    }

    return '1' + toBinarioBits(aux.slice(1), BITS - 1);
}

export function toBinarioBitEx2(DEC, BITS){

    const RESULT = Number(DEC) + Math.pow(2, BITS - 1);
    return [toBinarioBit(RESULT, BITS), RESULT];
}

