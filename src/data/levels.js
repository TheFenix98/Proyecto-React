import tlouimg from '../assets/images/tlou.webp'
import bbimg from "../assets/images/breakingbad.jpg"
import stimg from "../assets/images/strangerthings.jpg"
import gotimg from "../assets/images/gameofthorones.jpg"
import pbimg from "../assets/images/prisonbreak.jpg"
import pb2img from "../assets/images/peakyblinders.jpg"
import twdimg from "../assets/images/thewalkingdead.jpg"
import darkimg from "../assets/images/dark.jpg"
import vikingsimg from "../assets/images/vikings.jpg"
import lcdpimg from "../assets/images/lacasadepapel.jpg"
import inceptionimg from "../assets/images/inception.jpg"
import interstellarimg from "../assets/images/interestellar.jpg"
import darkknightimg from "../assets/images/thedarkknight.jpg"
import endgameimg from "../assets/images/avengersendgame.jpg"
import gladiatorimg from "../assets/images/gladiador.jpg"
import titanicimg from "../assets/images/titanic.jpg"
import matriximg from "../assets/images/thematrix.jpg"
import jokerimg from "../assets/images/joker.jfif"
import forrestimg from "../assets/images/forrestgump.jpg"
import jurassicimg from "../assets/images/jurassicpark.jpg"

const niveles= [
    {
        id:1,
        respuesta: "THE LAST OF US",
        pista1: "Fecha de estreno: 2023. Genero: Drama, aventura, accion",
        pista2: "Protagonistas: Pedro Pascal, Bella Ramsey",
        pista3: "Serie post apocaliptica de HBO",
        imagen: tlouimg,
        tipo: "Serie"
    },
    {
        id:2,
        respuesta: "BREAKING BAD",
        pista1: "Fecha de estreno: 2008. Genero: Drama, crimen, thriller",
        pista2: "Protagonista: Bryan Cranston",
        pista3: "Profesor que cocina cosas ilegales",
        imagen: bbimg,
        tipo: "Serie"
    },

    {
        id:3,
        respuesta: "STRANGER THINGS",
        pista1: "Fecha de estreno: 2016. Genero: Ciencia ficcion, drama, terror",
        pista2: "Protagonistas: Millie Bobby Brown, Finn Wolfhard",
        pista3: "En un pueblo en los años 80 pasan cosas raras",
        imagen: stimg,
        tipo: "Serie"
    },
    {
        id:4,
        respuesta: "GAME OF THRONES",
        pista1: "Fecha de estreno: 2011. Genero: Drama, fantasia, aventura",
        pista2: "Protagonistas: Emilia Clarke, Kit Harington",
        pista3: "Reinos y dragones",
        imagen: gotimg,
        tipo: "Serie"
    },
    
    {
        id:5,
        respuesta: "PRISON BREAK",
        pista1: "Fecha de estreno: 2005. Genero: Drama, crimen, thriller",
        pista2: "Protagonistas: Wentworth Miller, Dominic Purcell",
        pista3: "Un hombre va a morir y su hermano intenta sacarlo de la carcel",
        imagen: pbimg,
        tipo: "Serie"
    },
    
    {
        id:6,
        respuesta: "PEAKY BLINDERS",
        pista1: "Fecha de estreno: 2013. Genero: Drama, crimen",
        pista2: "Protagonista: Cillian Murphy",
        pista3: "Banda criminal en Inglaterra después de la guerra",
        imagen: pb2img,
        tipo: "Serie"
    },
    {
        id:7,
        respuesta: "THE WALKING DEAD",
        pista1: "Fecha de estreno: 2010. Genero: Terror, drama, supervivencia",
        pista2: "Protagonistas: Andrew Lincoln, Norman Reedus",
        pista3: "Apocalipsis zombie y grupos luchando por sobrevivir",
        imagen: twdimg,
        tipo: "Serie"
    },
    {
        id:8,
        respuesta: "DARK",
        pista1: "Fecha de estreno: 2017. Genero: Ciencia ficcion, suspenso",
        pista2: "Protagonistas: Louis Hofmann, Lisa Vicari",
        pista3: "Viajes en el tiempo en un pueblo alemán",
        imagen: darkimg,
        tipo: "Serie"
    },
    {
        id:9,
        respuesta: "VIKINGS",
        pista1: "Fecha de estreno: 2013. Genero: Drama, accion, historia",
        pista2: "Protagonista: Travis Fimmel",
        pista3: "Guerreros nórdicos conquistando territorios",
        imagen: vikingsimg,
        tipo: "Serie"
    },
    {
        id:10,
        respuesta: "LA CASA DE PAPEL",
        pista1: "Fecha de estreno: 2017. Genero: Crimen, suspenso, drama",
        pista2: "Protagonistas: Úrsula Corberó, Álvaro Morte",
        pista3: "Un grupo realiza el robo más grande de España",
        imagen: lcdpimg,
        tipo: "Serie"
    },
        {
        id: 11,
        respuesta: "INCEPTION",
        pista1: "Fecha de estreno: 2010. Género: Ciencia ficción, acción",
        pista2: "Protagonista: Leonardo DiCaprio",
        pista3: "Sueños dentro de sueños",
        imagen: inceptionimg,
        tipo: "Pelicula"
    },
    {
        id: 12,
        respuesta: "INTERSTELLAR",
        pista1: "Fecha de estreno: 2014. Género: Ciencia ficción, drama",
        pista2: "Protagonistas: Matthew McConaughey, Anne Hathaway",
        pista3: "Viajes espaciales para salvar a la humanidad",
        imagen: interstellarimg,
        tipo: "Pelicula"
    },
    {
        id: 13,
        respuesta: "BATMAN: THE DARK KNIGHT",
        pista1: "Fecha de estreno: 2008. Género: Acción, crimen, drama",
        pista2: "Protagonista: Christian Bale",
        pista3: "Batman enfrenta a su villano más caótico",
        imagen: darkknightimg,
        tipo: "Pelicula"
    },
    {
        id: 14,
        respuesta: "AVENGERS ENDGAME",
        pista1: "Fecha de estreno: 2019. Género: Acción, ciencia ficción",
        pista2: "Protagonistas: Robert Downey Jr., Chris Evans",
        pista3: "Los héroes intentan revertir una catástrofe",
        imagen: endgameimg,
        tipo: "Pelicula"
    },
    {
        id: 15,
        respuesta: "GLADIATOR",
        pista1: "Fecha de estreno: 2000. Género: Drama, acción",
        pista2: "Protagonista: Russell Crowe",
        pista3: "Un general romano busca venganza",
        imagen: gladiatorimg,
        tipo: "Pelicula"
    },
    {
        id: 16,
        respuesta: "TITANIC",
        pista1: "Fecha de estreno: 1997. Género: Drama, romance",
        pista2: "Protagonistas: Leonardo DiCaprio, Kate Winslet",
        pista3: "Una historia de amor en un barco famoso",
        imagen: titanicimg,
        tipo: "Pelicula"
    },
    {
        id: 17,
        respuesta: "THE MATRIX",
        pista1: "Fecha de estreno: 1999. Género: Ciencia ficción, acción",
        pista2: "Protagonista: Keanu Reeves",
        pista3: "La realidad no es lo que parece",
        imagen: matriximg,
        tipo: "Pelicula"
    },
    {
        id: 18,
        respuesta: "JOKER",
        pista1: "Fecha de estreno: 2019. Género: Drama, thriller",
        pista2: "Protagonista: Joaquin Phoenix",
        pista3: "El origen de un villano icónico",
        imagen: jokerimg,
        tipo: "Pelicula"
    },
    {
        id: 19,
        respuesta: "FORREST GUMP",
        pista1: "Fecha de estreno: 1994. Género: Drama, comedia",
        pista2: "Protagonista: Tom Hanks",
        pista3: "La vida es como una caja de chocolates",
        imagen: forrestimg,
        tipo: "Pelicula"
    },
    {
        id: 20,
        respuesta: "JURASSIC PARK",
        pista1: "Fecha de estreno: 1993. Género: Aventura, ciencia ficción",
        pista2: "Director: Steven Spielberg",
        pista3: "Dinosaurios vuelven a la vida",
        imagen: jurassicimg,
        tipo: "Pelicula"
    }

];


export default niveles;