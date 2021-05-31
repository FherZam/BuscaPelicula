const app = Vue.createApp({
    data() {
        return {
            title: 'Peliculas Vue 3',
            movieData: {},
            movieTitle: "Rocky",

            movies: []
        }
    },
    mounted() {
        this.getMovie();
    },
    methods:{
       async getMovie() {
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");
            console.log(search);

            if (search===""){
                alert('Debe especificar un nombre de película...')    
                return;
            }

            const data =await fetch(`https://www.omdbapi.com/?apikey=b09874c0&t=${search}`);
            const jsonData = await data.json();
            this.movieData = jsonData;

            const dataLista = await fetch(`https://www.omdbapi.com/?apikey=b09874c0&s=${search}`);
            const jsonDataLista = await dataLista.json();
            console.log(jsonDataLista.Search[0])
            this.movies = jsonDataLista.Search
            
        },
        BuscarTitulo(name){
            this.movieTitle = name;
            this.getMovie();

        }
    }

})