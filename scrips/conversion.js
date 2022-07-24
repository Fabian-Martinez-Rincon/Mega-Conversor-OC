export function binaryAddition(nro){ 
    /** 
    * Sumo un 1 en binario.
    */
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
  
export function toDecimal(nro){
    var aux = 0;
    var binArr = nro.split('').reverse();
    binArr.forEach((item, index) => item === '1' ? aux += Math.pow(2, index) : void 0);
    return aux;
}

export function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

export function toBinario(nro){
    if (nro[0] !== '-'){
        return '0' + convertToBinary(nro);
    }
    return '1' + convertToBinary(nro.slice(1));
}

export function toBss(nro){
    var aux = toDecimal(nro);
    return [nro,aux.toString()];
}

export function toBcs(nro){
    var aux = toDecimal(nro.slice(1));
    aux = nro[0] === '1' ? aux*-1: aux;  
    return [nro,aux.toString()];
}

export function toCa1(nro){
    if (nro[0] === '0'){
        return toBss(nro);
    }
    var ca1 = nro.
        replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 

    var aux = toDecimal(ca1);
    return [ca1,(aux*-1).toString()];
}

export function toCa2(nro){
    if (nro[0] === '0') {
        return toBss(nro);
    }
    var ca1 = toCa1(nro);
    var ca2 = binaryAddition(ca1[0]);
    var aux = toDecimal(ca2);
    
    return [ca2,(aux*-1).toString()]; 
}

export function toEx2(nro){
    const aux = toDecimal(nro);
    const result = aux - Math.pow(2, (nro.length)-1);
    return [nro,result];
}

export function puedeRepresentar(nro,bits){
    var aux = toBinario(nro);
    if (Number(bits)<aux.length){
        return false;
    }
    return true;
}

export function toDecimalBit(nro,bits){
    var aux = toBinario(nro);
    for (var i = aux.length; i<Number(bits); i++){
        aux = '0' + aux;
    }
    return aux;
}

export function toBinarioBss(nro){
    return toBinario(nro);
}

export function toBinarioBcs(nro){
    return toBinario(nro);
}


export function toBinarioCa1(nro){
    var aux = toBinario(nro);
    if (aux[0] === '0'){
        return toBss(aux);
    }
    var ca1 = '1' + aux.substring(1).
        replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 
    var dec = toDecimal(ca1.substring(1));
    return [ca1,(dec*-1).toString()];
}


export function toBinarioCa2(nro){
    if (Number(nro) > 0) {
        return toBss(aux);
    }
    var ca1 = toBinarioCa1(nro);
    var ca2 = binaryAddition(ca1[0]);
    var aux = toDecimal(ca2.substring(1));
    return [ca2,(aux*-1).toString()]; 
}


export function toBinarioEx2(nro){
    var bits = (toBinario(nro).length)-1;
    if (Number(nro)>0){
        bits-=1;
        const result = Number(nro) + Math.pow(2, bits);
        return [toBinario(result).substring(1),result];
    }
    const result = Number(nro) + Math.pow(2, bits);
    return [toBinario(result),result];
}
