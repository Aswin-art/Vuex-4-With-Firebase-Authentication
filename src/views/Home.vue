<template>
  <div class="home">
    <!-- Vuex Basics -->
    <!-- <div class="points">
      <p>Points: {{ points }}</p>
      <button @click="updatePoints(1)">Add a point</button>
      <button @click="updatePoints(-1)">Remove a point</button>
    </div> -->

    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur consectetur doloremque sunt ducimus enim iure animi fugit nulla et! Perferendis autem deleniti quo eum corrupti reiciendis voluptatem ab ducimus?</p>
        <div class="icons" v-if="authIsReady && user">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const blogs = ref([
      { title: 'Why Coffee is Better than Tea', id: 1 },
      { title: '...Then I Took an Arrow in the Knee', id: 2 },
      { title: 'Mario vs Luigi, Ultimate Showdown', id: 3 },
    ])

    const store = useStore();

    // const points = computed(() => store.state.points)

    // const updatePoints = (p) => store.commit('updatePoints', p)



    return { 
      blogs,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
      // points,
      // updatePoints
    }
  },
}
</script>
