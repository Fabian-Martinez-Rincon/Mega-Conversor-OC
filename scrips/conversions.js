function binaryAddition(nro){ 
    /** 
    * Sumo un 1 en binario.
    */
    let myFunc = num => Number(num);
    intArr = Array.from(nro, myFunc);
    tamanio = intArr.length;

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

function toBss(nro){
    var aux = toDecimal(nro);
    return [nro,aux.toString()];
}

function toBcs(nro){
    var aux = toDecimal(nro.slice(1));
    aux = nro[0] === '1' ? aux*-1: aux;  
    return [nro,aux.toString()];
}

function toCa1(nro){
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

function toCa2(nro){
    if (nro[0] === '0') {
        return toBss(nro);
    }
    var ca1 = toCa1(nro);
    var ca2 = binaryAddition(ca1[0]);
    var aux = toDecimal(ca2);
    
    return [ca2,(aux*-1).toString()]; 
}

output_EX2.value = "Ex2: "+ Bss_original + "   Decimal: " + decNo.toString()  ;
output_EX2.style.cursor = 'text';

function toEx2(Bss_original){
    let decNo = 0;

    let binArr = Bss_original;
    binArr=binArr.split('').reverse();

    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); 

    decNo=decNo - Math.pow(2, (binArr.length)-1);

  
}