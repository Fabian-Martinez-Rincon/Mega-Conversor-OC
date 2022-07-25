import * as pf from'./constans.js'; //pf: punto flotante


function entera(){
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

function fraccionaria(){
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

function fraccionariaBitImplicito(){
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

/*
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
*/