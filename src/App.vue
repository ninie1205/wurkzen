<template>
  <div id="app">
    <AppHeader />
    <AppSidebar />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppSidebar from '@/components/Sidebar'

export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>


<style lang="scss">

#app {
   font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   background-color: #e8eef1;
   min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
