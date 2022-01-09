const input_binario = document.querySelector("#input_binario");
const input_decimal = document.querySelector("#input_decimal");
const input_bit = document.querySelector("#input_bit");

const output_BSS = document.querySelector("#output_BSS");
const output_BCS = document.querySelector("#output_BCS");
const output_CA1 = document.querySelector("#output_CA1");
const output_CA2 = document.querySelector("#output_CA2");
const output_EX2 = document.querySelector("#output_EX2");
const output_BITS = document.querySelector("#output_BITS");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error-msg");

//________________________________________________________________________________________
function BSS(binArr,Bss){
    let decNo = 0;

    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); // Lo paso a Decimal

    output_BSS.value = "BSS: "+ Bss + "   Decimal: " + decNo.toString()  ;
    output_BSS.style.cursor = 'text';

}
//________________________________________________________________________________________
function BCS(binArr,Bcs){
    let decNo = 0;

    binArr.pop();   //Elimino el primer bit ya que es BCS

    binArr.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);


        output_BCS.value = "BCS: "+ Bcs + "   Decimal: -" + decNo.toString()  ;
        output_BCS.style.cursor = 'text';
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
function binaryAddition(a){ //Le sumo un 1 en binario para el Ca2
    let Sumo = false;
    tamanio = a.length;
    while (Sumo == false){
        
        if (a[tamanio-1] == 1){
            a[tamanio-1] = 0;
;
        }
        else{
            a[tamanio-1] = 1;

            Sumo = true;
        }
        tamanio = tamanio -1;
    }
    
    return [a,tamanio];
  }
//________________________________________________________________________________________
function CA2(Ca1){
    let decNo = 0;
    Number(Ca1);
    var myInt = Ca1;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);
    var valor = binaryAddition(intArr) ;
    Ca1 = valor[0];
    tamanio = valor[1];
    Ca1_Mostrar = Ca1.toString();
    Ca1_Mostrar = Ca1_Mostrar.replace(/\s|[,]/g,''); 
    Ca1 = Array.from(Ca1_Mostrar).reverse();
    Ca1.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);
    output_CA2.value = "Ca2: "+ Ca1_Mostrar + "   Decimal: -" + decNo.toString()  ;
    output_CA2.style.cursor = 'text';
    
}
//________________________________________________________________________________________
function EX2(Bss_original){
    let decNo = 0;

    let binArr = Bss_original;
    binArr=binArr.split('').reverse();

    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); 

    decNo=decNo - Math.pow(2, (binArr.length)-1)

  
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

function SacarDatos(numero) {
    const regEx = /^[0-1]+$/;

    const regEx2 = /^[0-1-2-3-4-5-6-7-8-9]+$/;

    if(input_binario.value.match(regEx)) {      //Pregunto si se ingreso un binario
        const binArr = input_binario.value.split('').reverse();

        let Bss = input_binario.value.split('');
        Bss = Bss.toString() ;
        
        Bss = Bss.replace(/\s|[,]/g,''); 
        Bss_original = Bss;
        let Ca1 = 0 ;

        if (Bss[0] == 1) {  //Si el binario es negativo
            BSS(binArr,Bss);
            BCS(binArr,Bss);
            Ca1=CA1(Bss);
            CA2(Ca1);
            EX2(Bss_original);

            output_BITS.value = "Bits: "+ Bss_original.length  ;
            output_BITS.style.cursor = 'text';

        }
        else{       //Si es positivo
            
            let decNo = 0;
            binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
            
            output_BSS.value = "BSS: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output_BSS.style.cursor = 'text';
            
            output_BCS.value = "BCS: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output_BCS.style.cursor = 'text';
            
            output_CA1.value = "Ca1: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output_CA1.style.cursor = 'text';
            
            output_CA2.value = "Ca2: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output_CA2.style.cursor = 'text';
            EX2(Bss_original);
            output_BITS.value = "Bits: "+ Bss_original.length  ;
            output_BITS.style.cursor = 'text';
        }
        
    }

    else if ((input_decimal.value.match(regEx2))&&(input_bit.value.match(regEx2))){   //Cuando Restrinjo bits

        decArr = numero.split('').reverse();
        let nroDecimal = input_decimal.value.split('');
        let nroBit = input_bit.value.split('');
        console.log('bits: '+ nroBit);
        nroDecimal = nroDecimal.toString() ;
        nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 

        nroBit = nroBit.toString() ;
        nroBit = nroBit.replace(/\s|[,]/g,''); 
        Number(nroBit);
        

        if (nroBit>0){  //Compruebo que se ingresaron bits mas grandes que 1
            let decNo = 0;
            let numero_original = numero;
            decArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
            //_______________________________________________________________Decimales Positivos
            if (nroDecimal > 0){       //Si el decimal es positivo
                
                if (nroBit>=numero.length){ //Adapto mi numero a la cantidad de bits ingresados
                    for (var i = numero.length; i<nroBit; i++){
                        numero = '0' + numero;
                    }
                    output_BSS.value = "BSS: "+ numero + "   Decimal: " + decNo.toString() ;
                    output_BSS.style.cursor = 'text';
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
                    output_BITS.value = "Bits: "+ nroBit ;
                    output_BITS.style.cursor = 'text';
                }
                else
                {
                    output_BSS.value = "El numero: "+ numero + " No se puede representar con : " + nroBit + ' bits'   ;
                    output_BSS.style.cursor = 'text';
                    output_BCS.value = "El numero: "+ numero + " No se puede representar con : " + nroBit + ' bits'    ;
                    output_BCS.style.cursor = 'text';
                    output_CA1.value = "El numero: "+ numero + " No se puede representar con : " + nroBit + ' bits'    ;
                    output_CA1.style.cursor = 'text';
                    output_CA2.value = "El numero: "+ numero + " No se puede representar con : " + nroBit + ' bits'    ;
                    output_CA2.style.cursor = 'text';
                    output_EX2.value = "El numero: "+ numero + " No se puede representar con : " + nroBit + ' bits'    ;
                    output_EX2.style.cursor = 'text';
                    output_BITS.value = "Bits: "+ nroBit ;
                    output_BITS.style.cursor = 'text';
                }
            //_______________________________________________________________Decimales Positivos
            
            //_______________________________________________________________Decimales Negativos
            }
            else //Para numeros negativos
            {   
                output_BSS.value = "BSS: No tiene Representacion :,("  ;
                output_BSS.style.cursor = 'text';
                console.log('Numero Decimal: '+nroDecimal);
                console.log('Bits: '+nroBit);
                numero=numero.slice(1);
                console.log('Numero: '+numero);
                console.log('Anchura: '+numero.length);
                let nro_original = numero;
                if (nroBit>=(numero.length+1)){ //Si tengo bits para el numero + el bit de signo
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
                    console.log('Decno: '+decNo);
                    decNo = convertToBinary (decNo);
                    console.log('Bits: ' + nroBit);
                    console.log('dec: ' + decNo);
                    console.log('dec2 ' +decNo.length);

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
                }
                else
                {
                    output_BCS.value = "BCS: No tiene Representacion :,( con " + nroBit + " bits"  ;
                    output_BCS.style.cursor = 'text';
                    output_CA1.value = "Ca1: No tiene Representacion :,( con " + nroBit + " bits"  ;
                    output_CA1.style.cursor = 'text';
                    output_CA2.value = "Ca2: No tiene Representacion :,( con " + nroBit + " bits"  ;
                    output_CA2.style.cursor = 'text';
                    output_EX2.value = "Ca2: No tiene Representacion :,( con " + nroBit + " bits"  ;
                    output_EX2.style.cursor = 'text';
                    output_BITS.value = "Bits: "+ decNo.length ;
                    output_BITS.style.cursor = 'text';
                }

                
            }
            //_______________________________________________________________Decimales Negativos
            
        }
        else
        {
            error.style.display = 'block';
        }


        
    }

    else if (input_decimal.value.match(regEx2)){        //Si no ingrese un binario miro si se ingreso un decimal
        decArr = numero.split('').reverse();
        let nroDecimal = input_decimal.value.split('');
        nroDecimal = nroDecimal.toString() ;
        nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 
        //nroDecimal = nroDecimal.toString(2); No me acuerdo para que puse esta linea pero funciona igual
        let decNo = 0;
        decArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
        if (nroDecimal > 0){       //Si el decimal es positivo
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
            

        }
        else
        {
            output_BSS.value = "BSS: No tiene Representacion :,("  ;
            output_BSS.style.cursor = 'text';
            BCS(decArr,numero);
            console.log(numero);
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
            
            console.log('Numero'+numero.length);
            console.log('Numero'+nroDecimal);
            decNo =  ((Math.pow(2, ((numero.length)+1))*-1)-  (nroDecimal))*-1;
            console.log('Bien1' + decNo);
            decNo = convertToBinary (decNo);
            console.log('Bien' + decNo);
            output_EX2.value = "Ex2: 0"+ decNo + "   Decimal: " + nroDecimal.toString()  ;
            output_EX2.style.cursor = 'text';

            Number(decNo);
            decNo = decNo.length + 1;
            output_BITS.value = "Bits: "+ decNo ;
            output_BITS.style.cursor = 'text';
            //______________________________________________
        }

    }
    

    else {
        error.style.display = 'block';
    }
}

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
    let nroDecimal = input_decimal.value.split('');

    if (input_decimal.value.match(regEx)){
        
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
btn.addEventListener('click', () => {
    error.style.display = 'none';
    let numero;
    numero=DecimalABinario(numero);
    SacarDatos(numero);
})