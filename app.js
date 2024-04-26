class Calculadora {
    constructor() {
        this.operando1 = 0;
        this.operando2 = 0;
    }

    sumar() {
        return this.operando1 + this.operando2;
    }

    restar() {
        return this.operando1 - this.operando2;
    }

    multiplicar() {
        return this.operando1 * this.operando2;
    }

    dividir() {
        if (this.operando2 == 0) {
            throw new Error("No se puede dividir por cero");
        }
        return this.operando1 / this.operando2;
    }
}

class InterfazCalculadora {
    constructor() {
        this.calculadora = new Calculadora();
        this.divCalculadora = document.getElementById('calculadora');
        this.crearInterfaz();
    }

    crearInterfaz() {
        this.input1 = this.crearElemento('input');
        this.input2 = this.crearElemento('input');
        this.resultado = this.crearElemento('h2');
        ['+', '-', '*', '/'].forEach((operacion) => {
            let boton = this.crearElemento('button');
            boton.innerText = operacion;
            boton.onclick = () => this.calcular(operacion);
        });
    }

    crearElemento(tipo) {
        let elemento = document.createElement(tipo);
        this.divCalculadora.appendChild(elemento);
        return elemento;
    }

    calcular(operacion) {
        this.calculadora.operando1 = parseFloat(this.input1.value);
        this.calculadora.operando2 = parseFloat(this.input2.value);
        let res;
        try {
            switch (operacion) {
                case '+':
                    res = this.calculadora.sumar();
                    break;
                case '-':
                    res = this.calculadora.restar();
                    break;
                case '*':
                    res = this.calculadora.multiplicar();
                    break;
                case '/':
                    res = this.calculadora.dividir();
                    break;
            }
            this.resultado.innerText = "Resultado: " + res;
        } catch (error) {
            this.resultado.innerText = error.message;
        }
    }



new InterfazCalculadora();