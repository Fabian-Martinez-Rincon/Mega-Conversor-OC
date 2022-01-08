const input_binario = document.querySelector("#input_binario");
const input_decimal = document.querySelector("#input_decimal");

const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const output4 = document.querySelector("#output4");
const output5 = document.querySelector("#output5");
const output6 = document.querySelector("#output6");
const output7 = document.querySelector("#output7");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error-msg");

//________________________________________________________________________________________
function BSS(binArr,Bss){
    let decNo = 0;

    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); // Lo paso a Decimal

    output2.value = "BSS: "+ Bss + "   Decimal: " + decNo.toString()  ;
    output2.style.cursor = 'text';

}
//________________________________________________________________________________________
function BCS(binArr,Bcs){
    let decNo = 0;

    binArr.pop();   //Elimino el primer bit ya que es BCS

    binArr.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);


        output3.value = "BCS: "+ Bcs + "   Decimal: -" + decNo.toString()  ;
        output3.style.cursor = 'text';
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

    output4.value = "Ca1: "+ Ca1_Mostrar + "   Decimal: -" + decNo.toString()  ;
    output4.style.cursor = 'text';

    Number(Ca1_Mostrar);

    return Ca1_Mostrar;

}
//________________________________________________________________________________________
function binaryAddition(a){
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
    output5.value = "Ca2: "+ Ca1_Mostrar + "   Decimal: -" + decNo.toString()  ;
    output5.style.cursor = 'text';
    
}
//________________________________________________________________________________________
function EX2(Bss_original){
    let decNo = 0;

    let binArr = Bss_original;
    binArr=binArr.split('').reverse();

    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); 

    decNo=decNo - Math.pow(2, (binArr.length)-1)

  
    output6.value = "Ex2: "+ Bss_original + "   Decimal: " + decNo.toString()  ;
    output6.style.cursor = 'text';
   
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

    output4.value = "Ca1: "+ Ca1_Mostrar + "   Decimal: -" + decNo.toString()  ;
    output4.style.cursor = 'text';

    Number(Ca1_Mostrar);

    return Ca1_Mostrar;

}
//________________________________________________________________________________________

function SacarDatos(numero) {
    const regEx = /^[0-1]+$/;

    const regEx2 = /^[0-1-2-3-4-5-6-7-8-9]+$/;

    if(input_binario.value.match(regEx)) {
        const binArr = input_binario.value.split('').reverse();

        let Bss = input_binario.value.split('');
        Bss = Bss.toString() ;
        
        Bss = Bss.replace(/\s|[,]/g,''); 
        Bss_original = Bss;
        let Ca1 = 0 ;

        if (Bss[0] == 1) {
            BSS(binArr,Bss);
            BCS(binArr,Bss);
            Ca1=CA1(Bss);
            CA2(Ca1);
            EX2(Bss_original);

            output7.value = "Bits: "+ Bss_original.length  ;
            output7.style.cursor = 'text';

        }
        else{
            
            let decNo = 0;
            binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
            
            output2.value = "BSS: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output2.style.cursor = 'text';
            
            output3.value = "BCS: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output3.style.cursor = 'text';
            
            output4.value = "Ca1: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output4.style.cursor = 'text';
            
            output5.value = "Ca2: "+ Bss + "   Decimal: " + decNo.toString()  ;
            output5.style.cursor = 'text';
            EX2(Bss_original);
            output7.value = "Bits: "+ Bss_original.length  ;
            output7.style.cursor = 'text';
        }
        
    }


    else if (input_decimal.value.match(regEx2)){
        decArr = numero.split('').reverse();
        

        let nroDecimal = input_decimal.value.split('');
        nroDecimal = nroDecimal.toString() ;
        
        nroDecimal = nroDecimal.replace(/\s|[,]/g,''); 

        nroDecimal = nroDecimal.toString(2);
        

        let decNo = 0;

        decArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);



        

        if (nroDecimal > 0){
            output2.value = "BSS: "+ numero + "   Decimal: " + decNo.toString()  ;
            output2.style.cursor = 'text';
            output3.value = "BCS: 0"+ numero + "   Decimal: " + decNo.toString()  ;
            output3.style.cursor = 'text';
            output4.value = "Ca1: 0"+ numero + "   Decimal: " + decNo.toString()  ;
            output4.style.cursor = 'text';
            output5.value = "Ca2: 0"+ numero + "   Decimal: " + decNo.toString()  ;
            output5.style.cursor = 'text';
            //decNo=decNo + Math.pow(2, (numero.length))
            output6.value = "Ex2: 1"+ numero + "   Decimal: " + decNo.toString()  ;
            output6.style.cursor = 'text';
            output7.value = "BSS: "+ (numero.length) +', BCS: ' + (numero.length + 1)+', CA1: ' + (numero.length + 1)+', CA2: ' + (numero.length + 1)+', EX2: ' + (numero.length + 1)   ;
            output7.style.cursor = 'text';
            

        }
        else
        {
            output2.value = "BSS: No tiene Representacion :,("  ;
            output2.style.cursor = 'text';
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

            output4.value = "Ca1: 1"+ Ca1_Mostrar + "   Decimal: -" + nro.toString()  ;
            output4.style.cursor = 'text';


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
            output5.value = "Ca2: 1"+ Ca1_Mostrar2 + "   Decimal: -" + decNo.toString()  ;
            output5.style.cursor = 'text';

            //______________________________________________

            //CA2(Ca1_Mostrar);

            decNo = 0;
            
            console.log('Numero'+numero.length);
            console.log('Numero'+nroDecimal);
            decNo =  ((Math.pow(2, ((numero.length)+1))*-1)-  (nroDecimal))*-1;

            console.log('Bien1' + decNo);
            decNo = convertToBinary (decNo);
       

            
    
            console.log('Bien' + decNo);

            
            output6.value = "Ex2: 0"+ decNo + "   Decimal: " + nroDecimal.toString()  ;
            output6.style.cursor = 'text';
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