import { defineStore } from "pinia"
import { useRouter } from "vue-router"

export const useMoviesStore = defineStore('movies', {
    state: () => (
        {
           movies: [],
           isLoading: false,
           query: "",
           singleMovie:{},
           year:2000
        }),
    getters: {
      totalMovies() {
         return this.filterMovies.length;
      },
      filterMovies(){
        return this.movies.filter((movies)=>{
          return movies.Year >= this.year
        })
      }
    },
    actions: {
      async  getMovies() {
        const result = await fetch('http://localhost:8000/movies?q=' + this.query)
        const response = await result.json()
        this.movies = response
      },
      async getSingleMovie(id) {
        this.isLoading = true;
        const result = await fetch(
          `http://localhost:8000/movies/${parseInt(id)}`
        );
        if (result.status === 404) {
          this.router.push({ name: "NotFound" });
        }
        const response = await result.json();
        this.singleMovie = response;
        this.isLoading = false;
      },
    },
  })