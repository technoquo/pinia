<script setup>
defineProps({
      movie: Object
})
</script>
<template>
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-center pt-3">
        <img class="rounded-t-lg" :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="p-5">
          <!-- <router-link :to="`/movies/${movie.id}`"> -->
          <router-link :to="{name: 'MovieDetails', params: {id: movie.id}}">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ movie.Title }}
          </h5>
          </router-link>
         
        <span class="mr-4">{{ movie.Year }}</span>
        <span>{{ movie.Runtime }}</span>
      </div>
    </div>
</template>