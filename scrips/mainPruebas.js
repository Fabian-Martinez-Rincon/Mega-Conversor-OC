


//________________________________________________________________________________________

//________________________________________________________________________________________

//________________________________________________________________________________________

//________________________________________________________________________________________

//________________________________________________________________________________________

//________________________________________________________________________________________
function EX2(Bss_original){
    let decNo = 0;

    let binArr = Bss_original;
    binArr=binArr.split('').reverse();

    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); 

    decNo=decNo - Math.pow(2, (binArr.length)-1);

  
    output_EX2.value = "Ex2: "+ Bss_original + "   Decimal: " + decNo.toString()  ;
    output_EX2.style.cursor = 'text';
   
}

//________________________________________________________________________________________
function CA1(Bcs){
    let decNo = 0;

    Bcs = Bcs.replace(/\s|[1]/g,'2'); 
    Bcs = Bcs.replace(/\s|[0]/g,'1');
    Bcs = Bcs.replace(/\s|[2]/g,'0'); 

    let Ca1_Mostrar = Bcs;

    Bcs=Array.from(Bcs).reverse();

    Bcs.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);

    output_CA1.value = "Ca1: "+ Ca1_Mostrar + "   Decimal: -" + decNo.toString()  ;
    output_CA1.style.cursor = 'text';
    Number(Ca1_Mostrar);
    return Ca1_Mostrar;
}
//________________________________________________________________________________________

//________________________________________________________________________________________
function Decimal_Positivo(nroBit,numero,numero_original,decNo){
    for (var i = numero.length; i<nroBit; i++){
        numero = '0' + numero;
    }
    OUTPUT_BSS.value = "BSS: "+ numero + "   Decimal: " + decNo.toString() ;
    OUTPUT_BSS.style.cursor = 'text';
    output_BCS.value = "BCS: "+ numero + "   Decimal: " + decNo.toString()  ;
    output_BCS.style.cursor = 'text';
    output_CA1.value = "Ca1: "+ numero + "   Decimal: " + decNo.toString()  ;
    output_CA1.style.cursor = 'text';
    output_CA2.value = "Ca2: "+ numero + "   Decimal: " + decNo.toString()  ;
    output_CA2.style.cursor = 'text';
    if (nroBit>numero_original.length){ //Pregunto si tengo bits para agregar el exceso
        numero=numero.slice(1);
        output_EX2.value = "Ex2: 1"+ numero + "   Decimal: " + decNo.toString()  ;
        output_EX2.style.cursor = 'text';
    }
    else //Si no me alcanzan los bits, mando el siguiente mensaje
    {   
        output_EX2.value = "El numero: "+ numero + " No se puede representar con : " + nroBit + ' bits'   ;
        output_EX2.style.cursor = 'text'
    }
    output_BITS.value = "Bits: "+ nroBit ; //Los bits siguen siendo los mismos
    output_BITS.style.cursor = 'text';
    TodosLosMinimosMaximos(nroBit);
}
//________________________________________________________________________________________

//________________________________________________________________________________________
function Decimal_Negativo(numero,nroBit,nroDecimal,nro_original){
    for (var i = ((numero.length)+1); i<nroBit; i++){
        numero = '0' + numero;
    }
    output_BCS.value = "BCS: 1"+ numero + "   Decimal: " + nroDecimal.toString()  ;
    output_BCS.style.cursor = 'text';
    
    //CA1
    let nroCa1 = nro_original;
    for (var i = ((nroCa1.length)); i<nroBit; i++){
        nroCa1 = '0' + nroCa1;
    }
    nroCa1 = nroCa1.replace(/\s|[1]/g,'2'); 
    nroCa1 = nroCa1.replace(/\s|[0]/g,'1');
    nroCa1 = nroCa1.replace(/\s|[2]/g,'0'); 
    output_CA1.value = "CA1: "+ nroCa1 + "   Decimal: " + nroDecimal.toString()  ;
    output_CA1.style.cursor = 'text';

    //CA2
    let decNo = 0;
    Number(nroCa1);
    var myInt = nroCa1;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);
    var valor = binaryAddition(intArr) ;
    nroCa1 = valor[0];
    tamanio = valor[1];
    Ca1_Mostrar = nroCa1.toString();
    Ca1_Mostrar = Ca1_Mostrar.replace(/\s|[,]/g,''); 
    //nroCa1 = Array.from(Ca1_Mostrar).reverse();
    //nroCa1.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);
    output_CA2.value = "Ca2: "+ Ca1_Mostrar + "   Decimal: " + nroDecimal.toString()  ;
    output_CA2.style.cursor = 'text';
    
    //EX2
    console.clear();
    decNo =  ((Math.pow(2, ((Ca1_Mostrar.length)-1))*-1)-  (nroDecimal))*-1; //Exceso

    decNo = convertToBinary (decNo);

    if (nroBit>decNo.length){
        for (var i = ((decNo.length)); i<nroBit; i++){
            decNo = '0' + decNo;
        }
        
        output_EX2.value = "Ex2: "+ decNo + "   Decimal: " + nroDecimal.toString()  ;
        output_EX2.style.cursor = 'text';
    }
    else{
        output_EX2.value = "Ex2: No tiene Representacion :,( con " + nroBit + " bits"  ;
        output_EX2.style.cursor = 'text';
    }
    
    output_BITS.value = "Bits: "+ decNo.length ;
    output_BITS.style.cursor = 'text';
    TodosLosMinimosMaximos(decNo.length);
}
//________________________________________________________________________________________
function Decimal_Negativo_Error(decNo,nroBit){
    output_BCS.value = "BCS: No tiene Representacion :,( con " + nroBit + " bits"  ;
    output_BCS.style.cursor = 'text';
    output_CA1.value = "Ca1: No tiene Representacion :,( con " + nroBit + " bits"  ;
    output_CA1.style.cursor = 'text';
    output_CA2.value = "Ca2: No tiene Representacion :,( con " + nroBit + " bits"  ;
    output_CA2.style.cursor = 'text';
    output_EX2.value = "Ca2: No tiene Representacion :,( con " + nroBit + " bits"  ;
    output_EX2.style.cursor = 'text';
    output_BITS.value = "Bits: "+ nroBit ;
    output_BITS.style.cursor = 'text';
}
//________________________________________________________________________________________
function Decimal_Positivo_Solo(decNo,numero){
    output_BSS.value = "BSS: "+ numero + "   Decimal: " + decNo.toString()  ;
    output_BSS.style.cursor = 'text';
    output_BCS.value = "BCS: 0"+ numero + "   Decimal: " + decNo.toString()  ;
    output_BCS.style.cursor = 'text';
    output_CA1.value = "Ca1: 0"+ numero + "   Decimal: " + decNo.toString()  ;
    output_CA1.style.cursor = 'text';
    output_CA2.value = "Ca2: 0"+ numero + "   Decimal: " + decNo.toString()  ;
    output_CA2.style.cursor = 'text';
    //decNo=decNo + Math.pow(2, (numero.length))
    output_EX2.value = "Ex2: 1"+ numero + "   Decimal: " + decNo.toString()  ;
    output_EX2.style.cursor = 'text';
    output_BITS.value = "BSS: "+ (numero.length) +', BCS: ' + (numero.length + 1)+', CA1: ' + (numero.length + 1)+', CA2: ' + (numero.length + 1)+', EX2: ' + (numero.length + 1)   ;
    output_BITS.style.cursor = 'text';

    TodosLosMinimosMaximos(numero.length);

    rangoBss =(Math.pow(2, numero.length))-1;

    rangoBcs = (Math.pow(2, (numero.length)))-1;
    rangoCa2 =  Math.pow(2, (numero.length));
    output_Rangos.value = "Bss: [0.."+rangoBss+"]"  + "  Bcs: [-"+rangoBcs+".."+"+"+rangoBcs+"]" + "  Ca1 :[-"+rangoBcs+".."+"+"+rangoBcs+"]" + "  Ca2: [-"+rangoCa2+"..+"+rangoBcs+"]"+"  Ex2: [-"+rangoCa2+"..+"+rangoBcs+"]";
    output_EX2.style.cursor = 'text';

}
//________________________________________________________________________________________
function Decimal_Negativo_Solo(decArr,numero,nroDecimal){
    output_BSS.value = "BSS: No tiene Representacion :,("  ;
    output_BSS.style.cursor = 'text';
    BCS(decArr,numero);

    //Ca1=CA1(numero);

    let nro = 0;
    numero = numero.replace(/\s|[1]/g,'2'); 
    numero = numero.replace(/\s|[0]/g,'1');
    numero = numero.replace(/\s|[2]/g,'0'); 

    numero=numero.slice(1);
    let Ca1_Mostrar=numero;
    

    numero=Array.from(numero).reverse();

    numero.forEach((item, index) =>  item === '1' ? nro += Math.pow(2, index) : void 0);

    output_CA1.value = "Ca1: 1"+ Ca1_Mostrar + "   Decimal: -" + nro.toString()  ;
    output_CA1.style.cursor = 'text';


    //______________________________________________
    Number(Ca1_Mostrar);
    var myInt = Ca1_Mostrar;
    let decNo = 0;

    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);

    var valor = binaryAddition(intArr) ;
    Ca1_Mostrar = valor[0];
    tamanio = valor[1];
    Ca1_Mostrar2 = Ca1_Mostrar.toString();
    Ca1_Mostrar2 = Ca1_Mostrar2.replace(/\s|[,]/g,''); 
    Ca1_Mostrar = Array.from(Ca1_Mostrar2).reverse();
    Ca1_Mostrar.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);
    output_CA2.value = "Ca2: 1"+ Ca1_Mostrar2 + "   Decimal: -" + decNo.toString()  ;
    output_CA2.style.cursor = 'text';

    //______________________________________________

    decNo = 0;
    

    decNo =  ((Math.pow(2, ((numero.length)+1))*-1)-  (nroDecimal))*-1;

    decNo = convertToBinary (decNo);

    output_EX2.value = "Ex2: 0"+ decNo + "   Decimal: " + nroDecimal.toString()  ;
    output_EX2.style.cursor = 'text';

    Number(decNo);
    decNo = decNo.length + 1;
    output_BITS.value = "Bits: "+ decNo ;
    output_BITS.style.cursor = 'text';
    TodosLosMinimosMaximos(decNo);
    Rangos(decNo);

}
//________________________________________________________________________________________


//________________________________________________________________________________________
function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}
//________________________________________________________________________________________
function DecimalABinario(nro){
    const regEx = /^[0-1-2-3-4-5-6-7-8-9]+$/;
    let nroDecimal = INPUT_DECIMAL.value.split('');

    if (INPUT_DECIMAL.value.match(regEx)){
        
        nroDecimal = nroDecimal.toString() ;
        
        nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 

        nroDecimal = nroDecimal.toString(2);
        
        Number(nroDecimal);
        if (nroDecimal>0){
            nro = convertToBinary(nroDecimal);
        }
        else{
            nroDecimal = nroDecimal * -1;
            nro = convertToBinary(nroDecimal);
            nro = '1' + nro;
        }
    }
    
    return nro;
}
//________________________________________________________________________________________

//________________________________________________________________________________________
function Parte_Mantisa(opcion,numero){
    let resultado = 0;
    const regEx = /^[0-1]+$/;
    const binArr = numero.value.split('').reverse();


    let Bcs = numero.value.split('');
    Bcs = Bcs.toString() ;
    Bcs = Bcs.replace(/\s|[,]/g,''); 
    Bcs_original = Bcs;


    Ca2 = Bcs;
    Ca2 = Ca2.replace(/\s|[1]/g,'2'); 
    Ca2 = Ca2.replace(/\s|[0]/g,'1');
    Ca2 = Ca2.replace(/\s|[2]/g,'0'); 
    var myInt = Ca2;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);
    var valor = binaryAddition(intArr) ;
    Ca2 = valor[0];
    //Number(Ca2);
    Ca2 = Array.from(Ca2).reverse();

    if(numero.value.match(regEx)){
    
        if (Bcs[0] == 0){
            if(opcion == "BSS"){

                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "BCS"){

                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "Ca1"){

                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "Ca2"){

                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "Ex2"){
                
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
                resultado = resultado - Math.pow(2, (binArr.length)-1);
            }
        }
        else{
            if(opcion == "BSS"){

                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "BCS"){

                binArr.pop();
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
                resultado = "-" + resultado;
            }
            else if (opcion == "Ca1"){

                binArr.pop();
                binArr.forEach((item, index) => item === '0' ? resultado += Math.pow(2, index) : void 0); 
                resultado = "-" + resultado;
            }
            else if (opcion == "Ca2"){

                Ca2.forEach((item, index) => item === 1 ? resultado += Math.pow(2, index) : void 0); 
                resultado = "-" + resultado;
            }
            else if (opcion == "Ex2"){

                binArr.pop();
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
                
            }
        }
    }
    else
    {
        error2.style.display = 'block';
    }
    return resultado;
}
//________________________________________________________________________________________
function Parte_Mantisa_Fraccionaria(opcion,numero){
    let resultado = 0;
    const regEx = /^[0-1]+$/;
    const binArr = numero.value.split('');


    let Bcs = numero.value.split('');
    Bcs = Bcs.toString() ;
    Bcs = Bcs.replace(/\s|[,]/g,''); 
    Bcs_original = Bcs;


    Ca2 = Bcs;
    Ca2 = Ca2.replace(/\s|[1]/g,'2'); 
    Ca2 = Ca2.replace(/\s|[0]/g,'1');
    Ca2 = Ca2.replace(/\s|[2]/g,'0'); 
    var myInt = Ca2;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);
    var valor = binaryAddition(intArr) ;
    Ca2 = valor[0];
    //Number(Ca2);
    Ca2 = Array.from(Ca2).reverse();

    if(numero.value.match(regEx)){
    
        if (Bcs[0] == 0){
            if(opcion == "BSS"){

                binArr.unshift(0);
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0);
            }
            else if (opcion == "BCS"){
                binArr.shift()
                binArr.unshift(0);
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0); 
            }
            else if (opcion == "Ca1"){
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "Ca2"){
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
            }
            else if (opcion == "Ex2"){
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
                resultado = resultado - Math.pow(2, (binArr.length)-1);
            }
        }
        else{
            if(opcion == "BSS"){
                binArr.unshift(0);
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0); 
            }
            else if (opcion == "BCS"){
    
                binArr.shift();
                binArr.unshift(0);
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0); 
                resultado = "-" + resultado;
            }
            else if (opcion == "Ca1"){
   
                binArr.pop();
                binArr.forEach((item, index) => item === '0' ? resultado += Math.pow(2, index) : void 0); 
                resultado = "-" + resultado;
            }
            else if (opcion == "Ca2"){

                Ca2.forEach((item, index) => item === 1 ? resultado += Math.pow(2, index) : void 0); 
                resultado = "-" + resultado;
            }
            else if (opcion == "Ex2"){
                binArr.pop();
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, index) : void 0); 
                
            }
        }
    }
    else
    {
        error2.style.display = 'block';
    }
    return resultado;
}
//________________________________________________________________________________________
btn.addEventListener('click', () => {
    error.style.display = 'none';
    let numero;
    numero=DecimalABinario(numero);
    SacarDatos(numero);   
})
//________________________________________________________________________________________
function BSS_NUMEROS_RESOLUCIONES(bitsMantisa,ExponenteElegido,bitsExponente){
    Numeros1.value = "Minimo Negativo: No tiene representacion";
    Numeros2.value = "Maximo Negativo: No tiene representacion";
    Numeros3.value = "Minimo Positivo: 0";   //Numero Minimo Positivo

    //Numeros4.value =  * Math.pow(2, ((Math.pow(2,bitsExponente))-1));     //Numero Maximo Positivo

    Resoluciones1.value = "No tiene representacion";
    Resoluciones2.value = "No tiene representacion";

    
    
    
    if (ExponenteElegido == "BSS"){
        base = ((Math.pow(2,bitsMantisa))-1);
        exponente = ((Math.pow(2,bitsExponente))-1);
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,exponente)));
        Resoluciones3.value = "Minimo Positivo: 1";    //Resolucion Minima Positiva

        Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,exponente));    //Resolucion Maxima Positiva
    }
    else if(ExponenteElegido == "BCS"){
        base = ((Math.pow(2,bitsMantisa))-1);
        exponente = ((Math.pow(2,(bitsExponente-1)))-1);
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,exponente)));
        

        Resoluciones3.value = "Minimo Positivo: "+ Math.pow(2,(exponente*-1));    //Resolucion Minima Positiva
        Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,exponente));    //Resolucion Maxima Positiva
    }
    else if(ExponenteElegido == "Ca1"){
        base = ((Math.pow(2,bitsMantisa))-1);
        exponente = ((Math.pow(2,(bitsExponente-1)))-1);
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,exponente)));


        Resoluciones3.value = "Minimo Positivo: "+  Math.pow(2,(exponente*-1)); ;    //Resolucion Minima Positiva
        Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,exponente));    //Resolucion Maxima Positiva
    }
    else if(ExponenteElegido == "Ca2"){
        base = ((Math.pow(2,bitsMantisa))-1);
        exponente = ((Math.pow(2,(bitsExponente-1)))-1);
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,exponente)));


        
        Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,exponente));    //Resolucion Maxima Positiva
        exponente = ((Math.pow(2,(bitsExponente-1))));
        Resoluciones3.value = "Minimo Positivo: "+ Math.pow(2,(exponente*-1)); ;    //Resolucion Minima Positiva
    }
    else if(ExponenteElegido == "Ex2"){
        base = ((Math.pow(2,bitsMantisa))-1);
        exponente = ((Math.pow(2,(bitsExponente-1)))-1);
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,exponente)));


        
        Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,exponente));    //Resolucion Maxima Positiva
        exponente = ((Math.pow(2,(bitsExponente-1))));
        Resoluciones3.value = "Minimo Positivo: " +  Math.pow(2,(exponente*-1)); ;    //Resolucion Minima Positiva
    }
}
//________________________________________________________________________________________
function BCS_Ca1MaximosResoluciones(bitsMantisa,bitsExponente){
    base = ((Math.pow(2,(bitsMantisa-1)))-1);
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros1.value = "Minimo Negativo: -"+(base * (Math.pow(2,(exponente))));
    Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,(exponente))));
    Numeros2.value = "Maximo Negativo: -0";
    Numeros3.value = "Minimo Positivo: +0";   //Numero Minimo Positivo

    Resoluciones1.value = "Minimo Negativo: -"+((Math.pow(2,(exponente))));
    Resoluciones2.value = "Maximo Negativo: -"+ (Math.pow(2,(exponente*-1)));
    Resoluciones3.value = "Minimo Positivo: "+ (Math.pow(2,(exponente*-1)));
    Resoluciones4.value = "Maximo Positivo: "+( (Math.pow(2,(exponente))));
}
//________________________________________________________________________________________
function Ca2_Ex2MaximosResoluciones(bitsMantisa,bitsExponente){
    base = ((Math.pow(2,(bitsMantisa-1)))-1); //(2^(n-1))-1
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,(exponente))));
    Numeros1.value = "Minimo Negativo: -"+base *(Math.pow(2,(exponente)));
    Numeros2.value = "Maximo Negativo: "+ (Math.pow(2,((exponente*-1)-1)));
    Numeros3.value = "Minimo Positivo: 0";   //Numero Minimo Positivo

    Resoluciones1.value = "Minimo Negativo: -"  + (Math.pow(2,(exponente)));
    Resoluciones2.value = "Maximo Negativo: -"+(Math.pow(2,((exponente*-1)-1)));
    Resoluciones3.value = "Minimo Positivo: "+(Math.pow(2,((exponente*-1)-1)));
    Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,(exponente)));
}
//________________________________________________________________________________________
function BCS_NUMEROS_RESOLUCIONES(bitsMantisa,ExponenteElegido,bitsExponente){
    if (ExponenteElegido == "BSS"){
        base = ((Math.pow(2,(bitsMantisa-1)))-1);
        exponente = ((Math.pow(2,bitsExponente))-1);
        Numeros1.value = "Minimo Negativo: -"+(base * (Math.pow(2,(exponente))));
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,(exponente))));
        Numeros2.value = "Maximo Negativo: -0";
        Numeros3.value = "Minimo Positivo: +0";   //Numero Minimo Positivo

        Resoluciones1.value = "Minimo Negativo: -"+(Math.pow(2,exponente));
        Resoluciones2.value = "Maximo Negativo: -1";
        Resoluciones3.value = "Minimo Positivo: 1";
        Resoluciones4.value = "Maximo Positivo: " +(Math.pow(2,exponente));
    }
    else if(ExponenteElegido == "BCS"){
        BCS_Ca1MaximosResoluciones(bitsMantisa,bitsExponente);
    }
    else if(ExponenteElegido == "Ca1"){
        BCS_Ca1MaximosResoluciones(bitsMantisa,bitsExponente);
    }
    else if (ExponenteElegido == "Ca2"){
        Ca2_Ex2MaximosResoluciones(bitsMantisa,bitsExponente);
    }
    else if (ExponenteElegido == "Ex2"){
        Ca2_Ex2MaximosResoluciones(bitsMantisa,bitsExponente);
    }
}
//________________________________________________________________________________________
function BCSyCa1_paraCa2MaximosMinimos(bitsMantisa,bitsExponente){
    base = ((Math.pow(2,(bitsMantisa-1))));
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros1.value = "Minimo Negativo: -"+(base * (Math.pow(2,(exponente))));
    Numeros2.value = "Maximo Negativo: -"+ (Math.pow(2,(exponente*-1)));

    
    base = ((Math.pow(2,(bitsMantisa-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,(exponente))));
    
    Numeros3.value = "Minimo Positivo: +0";   //Numero Minimo Positivo

    Resoluciones1.value = "Minimo Negativo: -"+ (Math.pow(2,(exponente)));
    Resoluciones2.value = "Maximo Negativo: -"+ (Math.pow(2,(exponente*-1)));

    Resoluciones3.value = "Minimo Positivo: "+ (Math.pow(2,(exponente*-1)));
    Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,(exponente)));
}
//________________________________________________________________________________________
function Ca2yEx2_paraCa2MaximosMinimos(bitsMantisa,bitsExponente){
    Numeros3.value = "Minimo Positivo: +0";   //Numero Minimo Positivo
    base = ((Math.pow(2,(bitsMantisa-1)))-1);
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,(exponente))));
    
    base = ((Math.pow(2,(bitsMantisa-1))));

    Numeros1.value = "Minimo Negativo: -"+(base * (Math.pow(2,(exponente))));

    exponente = ((Math.pow(2,(bitsExponente-1))));
    Numeros2.value = "Maximo Negativo: -"+ (Math.pow(2,(exponente*-1)));

    //Resoluciones
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Resoluciones4.value = "Maximo Positivo: "+ (Math.pow(2,(exponente)));
    Resoluciones1.value = "Minimo Negativo: -"+ (Math.pow(2,(exponente)));

    exponente = ((Math.pow(2,(bitsExponente-1))));
    Resoluciones2.value = "Maximo Negativo: -"+ (Math.pow(2,((exponente*-1))));
    Resoluciones3.value = "Minimo Positivo: "+ (Math.pow(2,((exponente*-1))));

}
//________________________________________________________________________________________
function Ca2_NUMEROS_RESOLUCIONES(bitsMantisa,ExponenteElegido,bitsExponente){
    if (ExponenteElegido == "BSS"){
        base = ((Math.pow(2,(bitsMantisa-1))));
        exponente = ((Math.pow(2,bitsExponente))-1);
        Numeros1.value = "Minimo Negativo: -"+(base * (Math.pow(2,(exponente))));
        Resoluciones1.value = "Minimo Negativo: -"+(Math.pow(2,exponente));
        base = ((Math.pow(2,(bitsMantisa-1)))-1);
        Numeros4.value = "Maximo Positivo: "+(base * (Math.pow(2,(exponente))));

        Numeros2.value = "Maximo Negativo: -1";

        Numeros3.value = "Minimo Positivo: 0";   //Numero Minimo Positivo

        
        Resoluciones2.value = "Maximo Negativo: -1";
        Resoluciones3.value = "Minimo Positivo: 1";
        Resoluciones4.value = "Maximo Positivo: " +(Math.pow(2,exponente));
    }
    else if(ExponenteElegido == "BCS"){
        BCSyCa1_paraCa2MaximosMinimos(bitsMantisa,bitsExponente);
    }
    else if(ExponenteElegido == "Ca1"){
        BCSyCa1_paraCa2MaximosMinimos(bitsMantisa,bitsExponente);
    }
    else if(ExponenteElegido == "Ca2"){
        Ca2yEx2_paraCa2MaximosMinimos(bitsMantisa,bitsExponente);
    }
    else if(ExponenteElegido == "Ex2"){
        Ca2yEx2_paraCa2MaximosMinimos(bitsMantisa,bitsExponente);
    }
}
//________________________________________________________________________________________
function Calculo_Maximo_Minimos_Mantisa_entera(MantisaElegida,mantisa,ExponenteElegido,exponete)
{
    const regEx = /^[0-1]+$/;
    if((mantisa.value.match(regEx))&&(exponete.value.match(regEx))){
        if(MantisaElegida == "BSS"){
            BSS_NUMEROS_RESOLUCIONES(mantisa.value.length,ExponenteElegido,exponete.value.length);
        }
        else if(MantisaElegida == "BCS"){
            BCS_NUMEROS_RESOLUCIONES(mantisa.value.length,ExponenteElegido,exponete.value.length);
        }
        else if(MantisaElegida == "Ca1"){
            BCS_NUMEROS_RESOLUCIONES(mantisa.value.length,ExponenteElegido,exponete.value.length);
        }
        else if (MantisaElegida == "Ca2"){
            Ca2_NUMEROS_RESOLUCIONES(mantisa.value.length,ExponenteElegido,exponete.value.length);
        }
        else if(MantisaElegida == "Ex2"){
            Ca2_NUMEROS_RESOLUCIONES(mantisa.value.length,ExponenteElegido,exponete.value.length);
        }
    }
    else{
        error2.style.display = 'block';
    }
    

}
//________________________________________________________________________________________
function MANTISA_ENTERA(){
    const indice = $select_Entera.selectedIndex;
    const opcionSeleccionada = $select_Entera.options[indice];    
    numero1 = input_binario_entero;
    

    const indice2 = $select_fraccionaria.selectedIndex;
    const opcionSeleccionada2 = $select_fraccionaria.options[indice2];
    
    numero2 = input_binario_fraccionaria;

    base = Parte_Mantisa(opcionSeleccionada.text,numero1);
    Number(base);
    exponente = Parte_Mantisa(opcionSeleccionada2.text,numero2);
    Number(exponente);
    resultado = base*Math.pow(2, exponente);
    output_decimal_Fraccionario.value =  base + ' * (2 ^ ' + exponente +') = '+ resultado;
    output_decimal_Fraccionario.style.cursor = 'text';


    Calculo_Maximo_Minimos_Mantisa_entera(opcionSeleccionada.text,numero1,opcionSeleccionada2.text,numero2);

    
}
//________________________________________________________________________________________
function BCS_Ca1MaximosResoluciones_Fraccionaria(bitsMantisa,bitsExponente){
    
    Numeros3.value = "Minimo Positivo: 0";
    let mantisa = 0;

    for (var i = 1; i <= bitsMantisa; i++) {
        mantisa += Math.pow(2, (i*-1));
    }
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));


    mantisa = Math.pow(2, (bitsMantisa*-1));

    Resoluciones3.value ="Minimo Positivo: "+ (mantisa * (Math.pow(2,(exponente*-1))));
    Resoluciones4.value ="Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));

}
//________________________________________________________________________________________
function Ca2_Ex2MaximosResoluciones_Fraccionaria(bitsMantisa,bitsExponente){
    Numeros3.value = "Minimo Positivo: 0";
    let mantisa = 0;

    for (var i = 1; i <= bitsMantisa; i++) {
        mantisa += Math.pow(2, (i*-1));
    }
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));

    mantisa = Math.pow(2, (bitsMantisa*-1));
    Resoluciones4.value ="Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
    
    exponente = ((Math.pow(2,(bitsExponente-1))));    
    Resoluciones3.value ="Minimo Positivo: "+ (mantisa * (Math.pow(2,(exponente*-1))));

}
//________________________________________________________________________________________
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
//________________________________________________________________________________________
function BCS_Ca1MaximosResoluciones_FraccionariaBCS(bitsMantisa,bitsExponente){ //Me quede aca :D
    bitsMantisa = bitsMantisa-1;
    Numeros3.value = "Minimo Positivo: +0";
    let mantisa = 0;

    for (var i = 1; i <= bitsMantisa; i++) {
        mantisa += Math.pow(2, (i*-1));
    }
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
    Numeros1.value = "Minimo Negativo: -"+(mantisa * (Math.pow(2,(exponente))));
    Numeros2.value = "Maximo Negativo: -0";
    mantisa = Math.pow(2, (bitsMantisa*-1));
    Resoluciones1.value ="Minimo Negativo: -"+ (mantisa * (Math.pow(2,(exponente))));
    Resoluciones2.value ="Maximo Negativo: -"+(mantisa * (Math.pow(2,(exponente*-1))));
    Resoluciones3.value ="Minimo Positivo: "+ (mantisa * (Math.pow(2,(exponente*-1))));
    Resoluciones4.value ="Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
}
//________________________________________________________________________________________
function Ca2_Ex2MaximosResoluciones_FraccionariaBCS(bitsMantisa,bitsExponente){
    bitsMantisa = bitsMantisa - 1;
    Numeros3.value = "Minimo Positivo: 0";
    let mantisa = 0;

    for (var i = 1; i <= bitsMantisa; i++) {
        mantisa += Math.pow(2, (i*-1));
    }
    exponente = ((Math.pow(2,(bitsExponente-1)))-1);
    Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
    Numeros1.value = "Minimo Negativo: -"+(mantisa * (Math.pow(2,(exponente))));
    mantisa = Math.pow(2, (bitsMantisa*-1));
    Resoluciones4.value ="Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
    Resoluciones1.value ="Minimo Negativo: -"+(mantisa * (Math.pow(2,(exponente+1))));
    exponente = ((Math.pow(2,(bitsExponente-1))));    
    Resoluciones3.value ="Minimo Positivo: "+ (mantisa * (Math.pow(2,(exponente*-1))));
    Resoluciones2.value ="Maximo Negativo: -"+ (mantisa * (Math.pow(2,(exponente*-1))));
    Numeros2.value = "Maximo Negativo: -"+ (mantisa * (Math.pow(2,(exponente*-1))));
}
//________________________________________________________________________________________
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
//________________________________________________________________________________________
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
//________________________________________________________________________________________
function MANTISA_FRACCIONARIA(){
    const indice = $select_Entera.selectedIndex;
    const opcionSeleccionada = $select_Entera.options[indice];
    
    numero1 = input_binario_entero;
    const indice2 = $select_fraccionaria.selectedIndex;
    const opcionSeleccionada2 = $select_fraccionaria.options[indice2];
    
    numero2 = input_binario_fraccionaria;

    base = Parte_Mantisa_Fraccionaria(opcionSeleccionada.text,numero1);
    Number(base);
    exponente = Parte_Mantisa(opcionSeleccionada2.text,numero2);
    Number(exponente);
    resultado = base*Math.pow(2, exponente);

    output_decimal_Fraccionario.value =  base + ' * (2 ^ ' + exponente +') = '+ resultado;
    output_decimal_Fraccionario.style.cursor = 'text';


    Calculo_Maximo_Minimos_Mantisa_Fraccionaria(opcionSeleccionada.text,numero1,opcionSeleccionada2.text,numero2);
}
//________________________________________________________________________________________
function Parte_Mantisa_Fraccionaria2(opcion,numero){
    let resultado = 0;
    const regEx = /^[0-1]+$/;
    const binArr = numero.value.split('');


    let Bcs = numero.value.split('');
    Bcs = Bcs.toString() ;
    Bcs = Bcs.replace(/\s|[,]/g,''); 
    Bcs_original = Bcs;


    Ca2 = Bcs;
    Ca2 = Ca2.replace(/\s|[1]/g,'2'); 
    Ca2 = Ca2.replace(/\s|[0]/g,'1');
    Ca2 = Ca2.replace(/\s|[2]/g,'0'); 
    var myInt = Ca2;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);
    var valor = binaryAddition(intArr) ;
    Ca2 = valor[0];
    //Number(Ca2);
    Ca2 = Array.from(Ca2).reverse();


    if(numero.value.match(regEx)){
    
        if (Bcs[0] == 0){
            if(opcion == "BSS"){

                binArr.unshift(0,"1");
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0);
            }
            else if (opcion == "BCS"){
 
                binArr.shift()
                binArr.unshift(0,"1");
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0); 
            }

        }
        else{
            if(opcion == "BSS"){
  
                binArr.unshift(0,"1");
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0); 

            }
            else if (opcion == "BCS"){

                binArr.shift();
                binArr.unshift(0,"1");
                binArr.forEach((item, index) => item === '1' ? resultado += Math.pow(2, (index*-1)) : void 0); 
                resultado = "-" + resultado;
            }
        }
    }
    else
    {
        error2.style.display = 'block';
    }
    return resultado;
}
//________________________________________________________________________________________
function BSS_NUMEROS_RESOLUCIONES_Fraccionaria2(bitsMantisa,ExponenteElegido,bitsExponente){
    Numeros1.value = "No tiene representacion 😔";
    Numeros2.value = "No tiene representacion 😔";
    Resoluciones1.value ="No tiene representacion 😔";
    Resoluciones2.value ="No tiene representacion 😔";
    bitsMantisa = bitsMantisa+1;
    if (ExponenteElegido == "BSS"){
        
        let mantisa = 0;

        for (var i = 1; i <= (bitsMantisa); i++) {
            mantisa += Math.pow(2, (i*-1));
         }
         exponente = ((Math.pow(2,bitsExponente))-1);
         Numeros4.value = "Maximo Positivo: "+((mantisa * (Math.pow(2,(exponente)))));

         
        mantisa = Math.pow(2, (bitsMantisa*-1));

        Resoluciones3.value ="Minimo Positivo: "+mantisa;

        Resoluciones4.value ="Maximo Positivo: "+((mantisa) * (Math.pow(2,(exponente))));
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
    Numeros3.value = "Minimo Positivo: 0.5";
}
//________________________________________________________________________________________
function BCS_NUMEROS_RESOLUCIONES_Fraccionaria2(bitsMantisa,ExponenteElegido,bitsExponente){
    bitsMantisa = bitsMantisa+1;
    if (ExponenteElegido == "BSS"){
        Numeros3.value = "Minimo Positivo: 0.5";
        let mantisa = 0;
        bitsMantisa = bitsMantisa-1; //Porque estamos trabajando con BCS
        for (var i = 1; i <= bitsMantisa; i++) {
            mantisa += Math.pow(2, (i*-1));
        }
        exponente = ((Math.pow(2,bitsExponente))-1);
        Numeros4.value = "Maximo Positivo: "+(mantisa * (Math.pow(2,(exponente))));
        Numeros1.value = "Minimo Negativo: -"+(mantisa * (Math.pow(2,(exponente))));
        Numeros2.value = "Maximo Negativo: -0.5";
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
    Numeros2.value = "Maximo Negativo: -0.5";
    Numeros3.value = "Minimo Positivo: 0.5";
}
    

//________________________________________________________________________________________
function Calculo_Maximo_Minimos_Mantisa_Fraccionaria2(MantisaElegida,mantisa,ExponenteElegido,exponente){
    const regEx = /^[0-1]+$/;
    if((mantisa.value.match(regEx))&&(exponente.value.match(regEx))){
        if(MantisaElegida == "BSS"){
            BSS_NUMEROS_RESOLUCIONES_Fraccionaria2(mantisa.value.length,ExponenteElegido,exponente.value.length);
        }
        else if(MantisaElegida == "BCS"){
            BCS_NUMEROS_RESOLUCIONES_Fraccionaria2(mantisa.value.length,ExponenteElegido,exponente.value.length);
        }
    }
    else{
        error2.style.display = 'block';
    }
}
//________________________________________________________________________________________
function MANTISA_FRACCIONARIA_BIT_IMPLICITO(){
    Numeros1.value = "ME CAGO EN TU PUTA madre";
    const indice = $select_Entera.selectedIndex;
    const opcionSeleccionada = $select_Entera.options[indice];
    
    numero1 = input_binario_entero;
    const indice2 = $select_fraccionaria.selectedIndex;
    const opcionSeleccionada2 = $select_fraccionaria.options[indice2];
    
    numero2 = input_binario_fraccionaria;

    base = Parte_Mantisa_Fraccionaria2(opcionSeleccionada.text,numero1);
    Number(base);
    exponente = Parte_Mantisa(opcionSeleccionada2.text,numero2);
    Number(exponente);
    resultado = base*Math.pow(2, exponente);

    output_decimal_Fraccionario.value = base + ' * (2 ^ ' + exponente +') = '+ resultado;
    output_decimal_Fraccionario.style.cursor = 'text';

    Calculo_Maximo_Minimos_Mantisa_Fraccionaria2(opcionSeleccionada.text,numero1,opcionSeleccionada2.text,numero2);
}
//________________________________________________________________________________________
btn2.addEventListener('click', () => {
    error2.style.display = 'none';
    console.clear();
    
    const indice = $tipo_mantisa.selectedIndex;
    const opcionSeleccionada = $tipo_mantisa.options[indice];

    
    if (opcionSeleccionada.text == "ENTERA"){
        MANTISA_ENTERA();
    }
    else if (opcionSeleccionada.text == "FRACCIONARIA"){
        MANTISA_FRACCIONARIA();
    }
    else if(opcionSeleccionada.text == "FRACCIONARIA BIT IMPLICITO"){
        MANTISA_FRACCIONARIA_BIT_IMPLICITO();
    }
})


//Para ocultar html que no voy a usar con mantisa fraccionaria y con bit implicito
const ocultar = document.querySelector("#OCULTAR");
const ocultar1 = document.querySelector("#OCULTAR1");
const ocultar2 = document.querySelector("#OCULTAR2");

const selectElement = document.querySelector('#tipo_mantisa');

selectElement.addEventListener('change', (event) => {
    //const resultado = document.querySelector('.resultado');
    if ((`${event.target.value}` == "FRACCIONARIA")||(`${event.target.value}` == "FRACCIONARIA BIT IMPLICITO")){
        document.getElementById('OCULTAR').style.visibility = 'hidden';
        document.getElementById('OCULTAR1').style.visibility = 'hidden';
        document.getElementById('OCULTAR2').style.visibility = 'hidden';
    }
    else{
        document.getElementById('OCULTAR').style.visibility = 'visible';
        document.getElementById('OCULTAR1').style.visibility = 'visible';
        document.getElementById('OCULTAR2').style.visibility = 'visible';
    }
    
});


