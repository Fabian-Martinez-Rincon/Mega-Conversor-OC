function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

function toBinario(nro){
    if (nro[0] !== '-'){
        return '0' + convertToBinary(nro);
    }
    return '1' + convertToBinary(nro.slice(1));
}

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
    return aux.toString();
}



function toCa1(ca1){
    ca1 = ca1.
    replace(/\s|[1]/g,'2').
        replace(/\s|[0]/g,'1').
        replace(/\s|[2]/g,'0'); 

    return [ca1, '-' + toDecimal(ca1)];
}

function toCa2(ca2){
    ca2 = binaryAddition(
            toCa1(ca2)[0]
            );
            
    return [ca2,'-' + toDecimal(ca2)]; 
}


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


    function toBinarioBits(nro,bits){
        for (var i = nro.length; i < Number(bits - 1); i++){
            nro = '0' + nro;
        }
    
        return nro;
    }
    
    function toBinarioBit(nro, bits){
        var aux = toBinario(nro);
    
        if (nro[0] !== '-'){
            return '0' + toBinarioBits(aux, bits);
        }
    
        return '1' + toBinarioBits(aux.slice(1), bits);
    }