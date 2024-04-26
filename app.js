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

class CalculadoraCientifica extends Calculadora{
    constructor(){
        super();
        
    }
    potencia(){
        return Math.pow(this.operando1, this.operando2)
    }

    seno(){
        return Math.sin(this.operando1 || this.operando2)
    }

    coseno(){
        return Math.cos(this.operando1 || this.operando2)
    }
    tangente(){
        if ((Math.tan(this.operando1) || Math.tan(this.operando2)) === 0){
            throw new Error ("La tangente de pi/2 y 3pi/2 no esta definida")
        }
        return Math.tan(this.operando1 || this.operando2)
    }
    

    Raiz(){
        if (this.operando1 < 0 || this.operando2 < 0){
            throw new Error ("La raiz de números negativos no está definida")
        }
        return Math.sqrt(this.operando1 || this.operando2)
    }

    RaizCubica () {
        return Math.cbrt(this.operando1 || this.operando2)
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
        if (tipo === 'input') {
            elemento.style.width = '50%';
            elemento.style.padding = '10px';
            elemento.style.marginBottom = '10px';
            elemento.style.border = '1px solid #ccc';
            elemento.style.borderRadius = '5px';
        } else if (tipo === 'button') {
            elemento.style.padding = '10px 20px';
            elemento.style.border = 'none';
            elemento.style.borderRadius = '5px';
            elemento.style.backgroundColor = '#007BFF';
            elemento.style.color = '#fff';
            elemento.style.cursor = 'pointer';
            elemento.style.marginRight = '5px';
            elemento.style.marginBottom = '5px';
            elemento.onmouseover = function() {
                this.style.backgroundColor = '#0056b3';
            }
            elemento.onmouseout = function() {
                this.style.backgroundColor = '#007BFF';
            }
        } else if (tipo === 'h2') {
            elemento.style.fontSize = '20px';
            elemento.style.marginBottom = '20px';
        }
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
}

class interfazCalculadoraCientifica extends InterfazCalculadora {
    constructor(){
        super()
        this.calculadora= new CalculadoraCientifica();
        ['^', 'sin', 'cos', 'tan', '√', '∛'].forEach ((operacion)=>
        {
            let boton = this.crearElemento("button")
            boton.innerText= operacion
            boton.onclick= () => this.calcular(operacion)
        })
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
                case '^':
                    res = this.calculadora.potencia();
                    break;
                case 'sin':
                    res = this.calculadora.seno();
                    break;
                case 'cos':
                    res = this.calculadora.coseno();
                    break;
                case 'tan':
                    res = this.calculadora.tangente();
                    break;
                case '√':
                    res = this.calculadora.Raiz();
                    break;
                case '∛':
                    res = this.calculadora.RaizCubica();
                    break;
            }
            this.resultado.innerText = "Resultado: " + res;
        } catch (error) {
            this.resultado.innerText = error.message("malo");
        }
    }
}

new interfazCalculadoraCientifica();