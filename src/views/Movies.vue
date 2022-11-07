<script setup>
import { ref, onMounted } from "vue";
import { useMoviesStore } from "../stores/movies";
import MovieCard from "../components/MovieCard.vue";

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getMovies();
});

// const movieList = ref([]);
// const isLoading = ref(true)
// onMounted(async() => {
//   const result = await fetch('http://localhost:8000/movies')
//   const response = await result.json();
//   movieList.value = response;
//   isLoading.value = false
// })
</script>
<template>
  <h1 class="text-2xl font-semibold text-indigo-600">
    Movies({{ moviesStore.totalMovies }})
  </h1>
  <div class="m-2 p-2">
   <div class="flex mb-4">
      <select
        v-model="moviesStore.year"
        id="selectedMovies"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
      >
        <option value="2000">All</option>
        <option value="2010">Over 2010</option>
        <option value="2020">Over 2020</option>
      </select>
    </div>
    <div class="max-w-sw mx-auto" v-if="moviesStore.isLoading">
      <span class="text-2x1 text-indigo-700"> Loading..</span>
    </div>
    <div class="grid grid-cols-3 gap-4" v-else>
      <MovieCard
        v-for="movie in moviesStore.filterMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>