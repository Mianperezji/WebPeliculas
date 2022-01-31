//La mayoria de las cosas me las he copiado y no tengo ni idea de que hacen, PERO FUNCIONAN.
// API information.
var page = 1;
let language = window.localStorage;

const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=18ef69cc57d3bb121a044122e1e6ecf4&language=${localStorage.getItem("idioma")}&page=1`;
const IMGPATH = "https://image.tmdb.org/t/p/w300";
const SEARCHAPI =
    'https://api.themoviedb.org/3/search/tv?api_key=04c35731a5ee918f014970082a0088b1&language=es&page=1&query=';
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
                //Los dos contenedores, en el segundo elemento ira la foto y la descripcion y en el tercero el titulo y la nota
                const el2 = document.createElement("div");
                const el3 = document.createElement("div");
                el3.className = "cabecerapeli has-background-dark"
                const text = document.createElement('h2');
                text.className="subtitle is-5 has-text-warning has-background-dark"
                const image = document.createElement('img');
                const descripcion = document.createElement('p');
                const valoracion = document.createElement("h5");
                const cajainfo = document.createElement("div");
                var video = document.createElement("a");
                video.className="button has-background-dark has-text-warning"
                const br = document.createElement("br");
                const peliculasparecidas = document.createElement("a");
                peliculasparecidas.className="button has-background-dark has-text-warning"
                cajainfo.className = "infopeli has-background-link";
                el2.className = "cajapeli";

                text.innerHTML = `${element.name}`;
                image.src = IMGPATH + element.poster_path;
                descripcion.innerHTML = `${element.overview}`;
                valoracion.innerHTML = `${"Valoración : " + element.vote_average}`;
                video.innerHTML = "Ver trailer ";
                peliculasparecidas.innerHTML = "Ver series relacionadas";
                //cambiart cuando lo ordene
                peliculasparecidas.target="_blank";
                peliculasparecidas.href = "Srelacionadas.html?id=" + element.id;

                 //le doy clases al voto de la api dependiendo de la nota para cambiarlo en css
                 if (element.vote_average>=8){
                    valoracion.className="excelente"
                }else if (element.vote_average>=7){
                    valoracion.className="buena"
                }else if (element.vote_average>=6){
                    valoracion.className="normal"
                }else if (element.vote_average>=5){
                    valoracion.className="mediocre"
                }else if (element.vote_average==0){
                    valoracion.className="sininfo"
                }else{ 
                    valoracion.className="mala"
                }




                video.href = "https://www.youtube.com/results?search_query=" + element.name + " trailer";


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


//funcion para que cargue mas paginas
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