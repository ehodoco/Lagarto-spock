const boton_piedra = document.getElementById("piedra")
const boton_papel = document.getElementById("papel")
const boton_tijera = document.getElementById("tijera")
const boton_lagarto = document.getElementById("lagarto")
const boton_spock = document.getElementById("spock")

const boton_jugar = document.getElementById("jugar")
const resultado = document.getElementById("result")
const puntuacion = document.getElementById("puntuacion")
let jugada = null
const jugadas_posibles = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]
let victorias_jugador = 0
let victorias_ia = 0

boton_piedra.addEventListener("click", () => {
    jugada = "Piedra"
    resultado.textContent = `Jugada actual: ${jugada}`
})

boton_papel.addEventListener("click", () => {
    jugada = "Papel"
    resultado.textContent = `Jugada actual: ${jugada}`
})

boton_tijera.addEventListener("click", () => {
    jugada = "Tijera"
    resultado.textContent = `Jugada actual: ${jugada}`
})

boton_lagarto.addEventListener("click", () => {
    jugada = "Lagarto"
    resultado.textContent = `Jugada actual: ${jugada}`
})

boton_spock.addEventListener("click", () => {
    jugada = "Spock"
    resultado.textContent = `Jugada actual: ${jugada}`
})



boton_jugar.addEventListener("click", () => {
    if (jugada === null){
        resultado.textContent = "No se ha escogido una jugada, elige una jugada y pulsa jugar"
    }
    else{
        let jugada_ia = jugadas_posibles[Math.floor(Math.random() * 5)]
        var jugadas = `${jugada} ${jugada_ia}`
        let resultado_victoria = ""
        if (jugada === jugada_ia){
            resultado_juego = "Empate"
        }
        //Piedra
        else if (jugadas.includes("Piedra") && jugadas.includes("Papel")){
            resultado_juego = "Papel cubre piedra"
            if (jugada === "Papel"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }else if (jugadas.includes("Piedra") && jugadas.includes("Tijera")){
            resultado_juego = "Piedra rompe tijera"
            if (jugada === "Piedra"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }else if (jugadas.includes("Piedra") && jugadas.includes("Lagarto")){
            resultado_juego = "Piedra aplasta lagarto"
            if (jugada === "Piedra"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }else if (jugadas.includes("Piedra") && jugadas.includes("Spock")){
            resultado_juego = "Spock vaporiza piedra"
            if (jugada === "Spock"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        //Papel
        }else if (jugadas.includes("Papel") && jugadas.includes("Tijera")){
            resultado_juego = "Tijera corta papel"
            if (jugada === "Tijera"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }else if (jugadas.includes("Papel") && jugadas.includes("Lagarto")){
            resultado_juego = "Lagarto devora papel"
            if (jugada === "Lagarto"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }else if (jugadas.includes("Papel") && jugadas.includes("Spock")){
            resultado_juego = "Papel desautoriza Spock"
            if (jugada === "Papel"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        //Tijera
        }else if (jugadas.includes("Tijera") && jugadas.includes("Lagarto")){
            resultado_juego = "Tijera decapita lagarto"
            if (jugada === "Tijera"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }else if (jugadas.includes("Tijera") && jugadas.includes("Spock")){
            resultado_juego = "Spock aplasta tijera"
            if (jugada === "Spock"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        //Lagarto
        }else if (jugadas.includes("Lagarto") && jugadas.includes("Spock")){
            resultado_juego = "Lagarto envenena spock"
            if (jugada === "Lagarto"){
                victorias_jugador += 1
                resultado_victoria = "Gana el jugador"
            }else{
                victorias_ia += 1
                resultado_victoria = "Gana la CPU"
            }
        }
        resultado.textContent = `Tu has sacado ${jugada} y la CPU ${jugada_ia}. ${resultado_juego}. ${resultado_victoria}`
        puntuacion.textContent = `Jugador ${victorias_jugador} - ${victorias_ia} CPU`
        
        if (victorias_jugador - victorias_ia >= 2){
            document.getElementById("resultado_partida").textContent = "GANA EL JUGADOR"
            boton_jugar.disabled = "disabled";
        }else if (victorias_jugador - victorias_ia <= -2){
            document.getElementById("resultado_partida").textContent = "GANA LA CPU"
            boton_jugar.disabled = "disabled";
        }
            
        
    }
})