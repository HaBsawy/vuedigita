<template>
  <div id="app">
    <HeaderNavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import HeaderNavBar from "@/components/HeaderNavBar";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: {
    HeaderNavBar,
    AppFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
