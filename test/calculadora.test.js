const {soma, subtracao}  = require("../src/calculadora"); 

    test('Dados válidos positivos - SOMA', () => {
        expect(soma(75, 5)).toBe(80); 
    });

    test('Dados válidos positivos - SUBTRACAO', () => {
        expect(subtracao(75, 5)).toBe(70);
    });

    test('Entradas inválidas', () => {
                
    });

    test('Números decimais', () => {
                
    });