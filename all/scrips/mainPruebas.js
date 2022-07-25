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

//________________________________________________________________________________________



