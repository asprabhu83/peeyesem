<template>
  <main class="h-screen w-screen bg-white flex flex-col">
    <NavBar  v-if="$route.name!=='Editor'"/>
    <section class="relative flex flex-1 flex-row">
      <section
        class="relative flex flex-1 flex-col overflow-hidden flex-shrink-0 ">
        <router-view/>
        </section>
    </section>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'Dashboard',
  components: {
    NavBar
  }
}
</script>
