class Card {
    constructor(nombre, costo, img) {
        this.nombre = nombre
        this.costo = costo
        this.img = img
    }
}

class Unit extends Card {
    constructor(nombre, costo, poder, resiliencia, img) {
        super(nombre, costo, img)
        this.poder = poder
        this.resiliencia = resiliencia
    }

    atacar(target) {
        target.resiliencia -= this.poder
    }

    getStatus(){
        console.log('Nombre: ' + this.nombre + '\nCosto: '+ this.costo + '\nPoder: ' + this.poder + '\nResiliencia: ' + this.resiliencia)
    }

    getCard() {
        // Crear el elemento div principal
        var cardElement = document.createElement('div');
        cardElement.className = 'carta';

        // Crear el elemento de la barra de cabecera
        var headerBarElement = document.createElement('div')
        headerBarElement.classList.add('barra_cabecera')
        headerBarElement.classList.add('cabecera_unit')

        // Añadir contenido a la barra de cabecera
        headerBarElement.innerHTML = `
            <span class="material-symbols-outlined">groups</span>
            <p>${this.nombre}</p>
            <p><span class="material-symbols-outlined">diamond</span>${this.costo}</p>
            `

        // Crear el elemento del cuerpo de la carta
        var cardBodyElement = document.createElement('div')
        cardBodyElement.classList.add('cuerpo_carta')
        cardBodyElement.classList.add('cuerpo_unit')

        // Añadir contenido al cuerpo de la carta
        cardBodyElement.innerHTML = `
            <div class="imagen_cuerpo"><img src="./icons/${this.img}" alt="img_carta"></img></div>
            <div class="info_cuerpo">
                <div class="valores_carta">
                    <p><span class="material-symbols-outlined">bolt</span><span id="power">${this.poder}</span><span>Poder</span></p>
                    <p><span class="material-symbols-outlined">security</span><span id="resilience">${this.resiliencia}</span><span>Resiliencia</span></p>
                </div>
                <div class="estrellas_tipo_carta">
                    <span class="material-symbols-outlined">grade</span>
                    <span id="type">legendary</span>
                </div>
            </div>
        `

        // Agregar la barra de cabecera y el cuerpo de la carta al elemento principal
        cardElement.appendChild(headerBarElement)
        cardElement.appendChild(cardBodyElement)

        // Devolver el elemento de la carta
        return cardElement;
    }

}

class Effect extends Card {
    constructor(nombre, costo, text, stat, magnitude, img) {
        super(nombre, costo, img)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    aplicarEfecto(target) {
        if (this.stat == 'Resiliencia') {
            target.resiliencia += this.magnitude
        } else if (this.stat == 'Poder') {
            target.poder += this.magnitude
        }
    }

    getCard() {
        // Crear el elemento div principal
        var cardElement = document.createElement('div');
        cardElement.className = 'carta';

        // Crear el elemento de la barra de cabecera
        var headerBarElement = document.createElement('div')
        headerBarElement.classList.add('barra_cabecera')
        headerBarElement.classList.add('cabecera_effect')

        // Añadir contenido a la barra de cabecera
        headerBarElement.innerHTML = `
        <span class="material-symbols-outlined">error</span>
            <p>${this.nombre}</p>
            <p><span class="material-symbols-outlined">diamond</span>${this.costo}</p>
            `

        // Crear el elemento del cuerpo de la carta
        var cardBodyElement = document.createElement('div')
        cardBodyElement.classList.add('cuerpo_carta')
        cardBodyElement.classList.add('cuerpo_effect')

        // Añadir contenido al cuerpo de la carta
        cardBodyElement.innerHTML = `
            <div class="imagen_cuerpo"><img src="./icons/${this.img}" alt="img_carta"></img></div>
            <div class="info_cuerpo">
                <div class="valores_carta">
                    <p>${this.text}</p>
                </div>
                <div class="estrellas_tipo_carta">
                    <span class="material-symbols-outlined">grade</span>
                    <span id="type">${this.stat}</span>
                </div>
            </div>
        `

        // Agregar la barra de cabecera y el cuerpo de la carta al elemento principal
        cardElement.appendChild(headerBarElement)
        cardElement.appendChild(cardBodyElement)

        // Devolver el elemento de la carta
        return cardElement;
    }
}

//Tarjetas de Unidad
const ninja_red_belt = new Unit("Ninja Cinturón Rojo", 3, 3, 4, "1.jpg")
const ninja_black_belt = new Unit("Ninja Cinturón Negro", 4, 5, 4, "cucaracha.jpg")

//Cartas de Efectos
const Algoritmo_Difícil = new Effect("Algoritmo Difícil", 2, "Aumentar la resistencia del objetivo en 3", 'Resiliencia', 3, 'comida.jpg')
const Rechazo_de_promesa_no_manejado = new Effect("Rechazo de promesa no manejado", 1, "Reducir la resistencia del objetivo en 2", 'Resiliencia', -2, 'esteee.jpg')
const Programacion_en_pareja = new Effect("Programación en pareja", 3, "Aumentar el poder del objetivo en 2", 'Poder', 2, 'nano.jpg')

document.getElementById('cartas_Unit').appendChild(ninja_red_belt.getCard())
document.getElementById('cartas_Unit').appendChild(ninja_black_belt.getCard())

document.getElementById('cartas_Effect').appendChild(Algoritmo_Difícil.getCard())
document.getElementById('cartas_Effect').appendChild(Rechazo_de_promesa_no_manejado.getCard())
document.getElementById('cartas_Effect').appendChild(Programacion_en_pareja.getCard())

//JUEGOOOOOO*********************************************

//El jugador 1 convoca a "Ninja Cinturón Rojo"
//ya cree el ninja citurón rojo más arriba
console.log('El jugador 1 convoca a "Ninja Cinturón Rojo"')
ninja_red_belt.getStatus()

//El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
console.log('El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"')
Algoritmo_Difícil.aplicarEfecto(ninja_red_belt)
ninja_red_belt.getStatus()

//El jugador 2 convoca a "Ninja Cinturón Negro"
//ya cree el ninja citurón negro más arriba
console.log('El jugador 2 convoca a "Ninja Cinturón Negro"')
ninja_black_belt.getStatus()

//El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"
console.log('//El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"')
Rechazo_de_promesa_no_manejado.aplicarEfecto(ninja_red_belt)
ninja_red_belt.getStatus()

//El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"
console.log('El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"')
Programacion_en_pareja.aplicarEfecto(ninja_red_belt);
ninja_red_belt.getStatus()

//El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"
console.log('El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"')
ninja_red_belt.atacar(ninja_black_belt)
ninja_red_belt.getStatus()
ninja_black_belt.getStatus()