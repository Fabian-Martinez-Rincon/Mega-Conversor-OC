function BSS(binArr,Bss){
    let decNo = 0;
    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0); // Lo paso a Decimal
    OUTPUT_BSS.value = "BSS: "+ Bss + " Decimal: " + decNo.toString() ;
}

function BCS(binArr,Bcs){
    let decNo = 0;
    binArr.pop();   //Elimino el primer bit ya que es BCS
    binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);
    output_BCS.value = "BCS: "+ Bcs + " Decimal: -" + decNo.toString();
}

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