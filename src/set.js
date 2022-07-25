import * as conversion from'./conversion.js'; 

/**
    * Recibe un binario y convierte a sus respestivos tipos.
    * @param  {'1101'} BIN  Binario recibido como ejemplo.
    * @return {{
    * BSS: [ '1101', 13 ], 
    * BCS: [ '1101', -5 ],
    * CA1: [ '0010', -2 ],
    * CA2: [ '0011', -3 ],
    * EX2: [ '1101', 5 ] 
    * }} Conversiones a  BSS, BCS, CA1, CA2, EX2 
*/
export function Binario(BIN){
    
    var dict = {};
    const DEC = conversion.toDecimal(BIN);
    const BSS = conversion.toBss(BIN, DEC);
    const EX2 = conversion.toEx2(BIN, DEC);

    if ( BIN[0] === '0' ){

        dict['BSS'] = BSS;
        dict['BCS'] = BSS;
        dict['CA1'] = BSS;
        dict['CA2'] = BSS;
        dict['EX2'] = EX2;

        return dict;
    }

    dict['BSS'] = BSS;
    dict['BCS'] = conversion.toBcs(BIN);
    dict['CA1'] = conversion.toCa1(BIN);
    dict['CA2'] = conversion.toCa2(BIN);
    dict['EX2'] = EX2;

    return dict;
}

/**
    * Recibe un binario y convierte a sus respestivos tipos.
    * @param  {'11'} BIN  Binario recibido como ejemplo.
    * @return {{
    * BSS: [ '0.11', 0.75 ], 
    * BCS: [ '0.11', -0.5 ]
    * }} Conversiones a  BSS, BCS
*/
export function BinarioFraccionario(BIN){

    var dict = {};
    const DEC = conversion.toDecimalFraccionario(BIN);
    const BIN_CONVERT = '0, ' + BIN;
    const BSS = conversion.toBss(BIN_CONVERT, DEC);

    if ( BIN[0] === '0' ){
        
        dict['BSS'] = BSS;
        dict['BCS'] = BSS;
        
        return dict;
    }
    
    const BCS = conversion.toBcsFraccionario(BIN);
    
    dict['BSS'] = BSS;
    dict['BCS'] = BCS;

    return dict;
}


/**
    * Recibe un decimal y convierte a sus respestivos tipos.
    * @param  {'-9'} DEC  Decimal recibido como ejemplo.
    * @return {{
    * BSS: [ 'No tiene', 'No tiene' ],
    * BCS: [ '11001', '-9' ],
    * CA1: [ '10110', '-6' ],
    * CA2: [ '10111', '-7' ],
    * EX2: [ '0111', 7 ]
    * }} Conversiones a  BSS, BCS, CA1, CA2, EX2 
*/
export function Decimal(DEC){
    
    var dict = {};
    const BIN = conversion.toBinario(DEC);
    var bin = BIN.substring(1)

    const BITS = BIN.length - 1;
    const BCS = conversion.toBss(BIN, DEC);
    const BSS = conversion.toBss(bin, DEC);
    const EX2 = conversion.toBinarioEx2(DEC, BITS); 

    if ( DEC[0] !== '-' ){

        dict['BSS'] = BSS;
        dict['BCS'] = BCS;
        dict['CA1'] = BCS;
        dict['CA2'] = BCS;
        dict['EX2'] = EX2;

        return dict;
    }
    
    const CA1 = conversion.toBinarioCa1(BIN);
    const CA2 = conversion.toBinarioCa2(CA1[0]);

    dict['BSS'] = ['No tiene', 'No tiene'];
    dict['BCS'] = BCS;
    dict['CA1'] = CA1;
    dict['CA2'] = CA2;
    dict['EX2'] = EX2;
    
    return dict;
}

/**
    * Recibe un decimal y los bits para convertirlo a sus respestivos tipos.
    * @param  {'-9'} DEC  Decimal recibido .
    * @param  {'6'} BITS  Bits recibido .
    * @return {{
    * BSS: [ 'No tiene', 'No tiene' ],
    * BCS: [ '101001', '-9' ],        
    * CA1: [ '110110', '-22' ],       
    * CA2: [ '110111', '-23' ],       
    * EX2: [ '010111', 23 ]
 * }} Conversiones a  BSS, BCS, CA1, CA2, EX2 
*/
export function DecimalBit(DEC, BITS){
    
    var dict = {};
    const BIN = conversion.toBinarioBit(DEC, BITS);
    const BSS = conversion.toBss(BIN, DEC);
    const EX2 = conversion.toBinarioBitEx2(DEC, BITS);
    
    if ( DEC[0] !== '-' ){
        
        dict['BSS'] = BSS;
        dict['BCS'] = BSS;
        dict['CA1'] = BSS;
        dict['CA2'] = BSS;
        dict['EX2'] = EX2;
        
        return dict;
    }
    
    const CA1 = conversion.toBinarioCa1(BIN);
    const CA2 = conversion.toBinarioCa2(CA1[0]);

    dict['BSS'] = ['No tiene', 'No tiene'];
    dict['BCS'] = BSS;
    dict['CA1'] = CA1;
    dict['CA2'] = CA2;
    dict['EX2'] = EX2;

    return dict;
}

