//La mayoria de las cosas me las he copiado y no tengo ni idea de que hacen, PERO FUNCIONAN.
// API information.

//Variable para mostrar la página 1. No lo he usado en todos los HTML porque la API me repite las peliculas nuevas y las relacianodas incluso cuando el json me dice que me 
//esta mostrando una pagina más
var page = 1;
let language = window.localStorage;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=18ef69cc57d3bb121a044122e1e6ecf4&language=${localStorage.getItem("idioma")}&page=`;
const IMGPATH = "https://image.tmdb.org/t/p/w300";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&language=es&query=";
// Selecting our Elements.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
/* call the showMovies function that requests the movie data from the Api using fetch.
 Then it puts those data in the main HTML tag by creating elments for those data. */
showMovies(apiUrl, page);
function showMovies(url, page) {
    fetch(url + page).then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {
                // Creating elemnts for our data inside the main tag. 
                const el = document.createElement('div');
                el.className="divisor"
                //Los dos contenedores, en el segundo elemento ira la foto y la descripcion y en el tercero el titulo y la nota
                const el2 = document.createElement("div");
                const el3 = document.createElement("div");
                
                el3.className = "cabecerapeli has-background-danger-dark  "
                const text = document.createElement('h2');
                text.className="subtitle is-5 has-text-warning"
                const image = document.createElement('img');
                const descripcion = document.createElement('p');
                const valoracion = document.createElement("h5");
                const cajainfo = document.createElement("div");
                var video = document.createElement("a");
                video.className="button has-background-dark has-text-warning"
                const br = document.createElement("br");
                const peliculasparecidas = document.createElement("a");
                peliculasparecidas.className="button has-background-dark has-text-warning"
                cajainfo.className = "infopeli has-background-warning";
                el2.className = "cajapeli";

                text.innerHTML = `${element.title}`;
                image.src = IMGPATH + element.poster_path;
                descripcion.innerHTML = `${element.overview}`;
                valoracion.innerHTML = `${"Valoración : " + element.vote_average}`;
                video.innerHTML = "Ver trailer ";
                peliculasparecidas.innerHTML = "Ver peliculas relacionadas";
                //cambiart cuando lo ordene
                peliculasparecidas.target="_blank";
                peliculasparecidas.href = "relacionadas.html?id=" + element.id;

               //le doy clases al voto de la api dependiendo de la nota para cambiarlo en css
                if (element.vote_average>=8){
                    valoracion.className="excelente subtitle is-5"
                }else if (element.vote_average>=7){
                    valoracion.className="buena subtitle is-5"
                }else if (element.vote_average>=6){
                    valoracion.className="normal subtitle is-5"
                }else if (element.vote_average>=5){
                    valoracion.className="mediocre subtitle is-5"
                }else if (element.vote_average==0){
                    valoracion.className="sininfo subtitle is-5"
                }else{ 
                    valoracion.className="mala subtitle is-5"
                }




                video.href = "https://www.youtube.com/results?search_query=" + element.original_title;


                el.appendChild(el3);
                el.appendChild(el2);
                el3.appendChild(text);
                el3.appendChild(valoracion);



                el2.appendChild(image);


                el2.appendChild(cajainfo);
                cajainfo.appendChild(descripcion);
                cajainfo.appendChild(video);
                cajainfo.appendChild(peliculasparecidas);

                main.appendChild(el);
                main.appendChild(br);



            });
        });
}

// Prevent the Form from submitting if the search bar is empty.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;
    /* Adding the value wriiten in the search bar to the search Api,
       in order to get the movies we search for. */
    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm, "");
        search.value = "";
    }
});



var nextPageButton = document.getElementById("nextpage");
nextPageButton.onclick = function () {
    page++;
    showMovies(apiUrl, page);

}

//funciones para cambiar el idioma
var Espanyol = document.getElementById("español");
    Espanyol.onclick = function () {
        localStorage.setItem("idioma","es");
        document.location.reload();
    
}

var English = document.getElementById("ingles");
    English.onclick = function () {
    localStorage.setItem("idioma","en-US");
    
    
    
    document.location.reload();
    
}

var Russian = document.getElementById("ruso");
    Russian.onclick = function () {
    localStorage.setItem("idioma","ru");
    
    
    
    document.location.reload();
    
}