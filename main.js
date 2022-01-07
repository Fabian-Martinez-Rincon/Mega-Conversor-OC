const input = document.querySelector("#input");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error-msg");


function Bin2Dec() {
    const regEx = /^[0-1]+$/;

    if(input.value.match(regEx)) {
        const binArr = input.value.split('').reverse();

        let Bss = input.value.split('');
        Bss = Bss.toString() ;
        
        Bss = Bss.replace(/\s|[,]/g,''); 

        let decNo = 0;

        binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);



        output2.value = "BSS: "+ Bss + "   Decimal: " + decNo.toString()  ;
        output2.style.cursor = 'text';
    }else {
        error.style.display = 'block';
    }
}


function BinarioSS() {
    const regEx = /^[0-1]+$/;

    if(input.value.match(regEx)) {
        let binArr = input.value.split('').reverse();

        let Bcs = input.value.split('');
        
        let decNo = 0;

        Bcs = Bcs.toString() ;
        
        Bcs = Bcs.replace(/\s|[,]/g,''); 

        binArr.pop();

        binArr.forEach((item, index) =>  item === '1' ? decNo += Math.pow(2, index) : void 0);


        if (Bcs[0] == 1) {
            output3.value = "BCS: "+ Bcs + "   Decimal: -" + decNo.toString()  ;
            output3.style.cursor = 'text';
        }
        else
        {
            output3.value = "BCS: "+ Bcs + "   Decimal: +" + decNo.toString()  ;
            output3.style.cursor = 'text';
        }

    }else {
        error.style.display = 'block';
    }
}



btn.addEventListener('click', () => {
    error.style.display = 'none';
    Bin2Dec();
    BinarioSS();
})