<template>
   <v-app>
      <Navbar v-if="this.$route.path != '/'" />
      <Sidebar v-if="this.$route.path != '/'" />
      <v-main>
         <router-view></router-view>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: "App",

   components: {
      Sidebar: () => import("./components/Sidebar"),
      Navbar: () => import("./components/Navbar"),
   },
   methods: {},
};
</script>
<style scoped>
* {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>