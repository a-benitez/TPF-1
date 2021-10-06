
//------------------------------------------------------SALUDO DE BIENVENIDA
//Prompt + Alert para saludar al usuario
let nombre = prompt("Ingresar nombre");
alert("¡Bienvenido a ABASTO SOCIAL CLUB " + nombre + "!");

//------------------------------------------------------CARTELERA CENTRO CULTURAL
//Constructor para ingresar informacion de cartelera
class Obra{
    constructor(nombre, duracion, clasificacion, modalidad){
        this.name = nombre.toLowerCase();
        this.time = duracion;
        this.type = clasificacion;
        this.mode = modalidad;
    }
}

let cartelera = confirm("Deseas agregar una obra a la cartelera?");
//Declaración del array para agrupar las obras en cartelera
const listaObras = []

    while(cartelera == true){
        let nombre = prompt("Ingrese nombre de la obra");
        let duracion = prompt("Ingrese duracion de la obra");
        let clasificacion = prompt("Ingrese clasificacion de la obra");
        let modalidad = prompt("Ingrese modalidad de la obra");

        const obra = new Obra(nombre, duracion, clasificacion, modalidad);

        listaObras.push(obra)
        cartelera = confirm('Deseas seguir agregando obras a la cartelera?');
    }

//Mensaje por consola para ver las obras que fueron agregadas a la cartelera
    console.log(listaObras);


//--------------------------------------------------CONSULTAR SOBRE LA MODALIDAD DE LAS OBRAS EN CARTELERA
//Información por entrada de usuario
let modObra = prompt("Ingrese la obra a la que gustaria asistir ");
modObra = modObra.toLowerCase();

//Declaración de un switch para las diferentes opciones disponibles con un alert como respuesta
    while(modObra != "salir"){
        switch (modObra){
            case "claudia en la montaña":
                alert("Disponible solo en modalidad online");
                break;
            case "marchita":
                alert("Disponible solo en modalidad online");
                break;
            case "discepolo las casas":
                alert("Disponible en modalidad online y presencial");
                break;
            case "alfonsina dispuesta a todo":
                alert("Disponible en modalidad online y presencial");
                break;
            default:
                alert("Lo sentimos, esa obra no se encuentra en cartelera en este momento");
                break;
        }
        modObra = prompt("Ingrese la obra a la que gustaria asistir ");
        modObra  = modObra.toLowerCase();
    }
