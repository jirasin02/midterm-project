<template>
   <div class="sidebar">
      <v-card>
         <v-navigation-drawer
            app
            permanent
            expand-on-hover
            width="220px"
            class="rounded-0"
            color="#02033c"
            dark
         >
            <v-list>
               <v-list-item>
                  <v-list-item-content>
                     <div class="d-flex flex-row">
                        <v-icon color="#5EA3FD"> mdi-lightbulb-on</v-icon>
                        <v-list-item-title class="title ml-5 mt-1">
                           UNTITLED
                        </v-list-item-title>
                     </div>
                  </v-list-item-content>
               </v-list-item>
            </v-list>

            <v-list nav dense>
               <v-list-item link class="mt-2" to="/Dashboard">
                  <v-list-item-icon>
                     <v-icon>mdi-view-dashboard</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Dashboard</v-list-item-title>
               </v-list-item>
               <v-list-item link class="mt-2" to="/Calendar">
                  <v-list-item-icon>
                     <v-icon>mdi-calendar-blank</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Calendar</v-list-item-title>
               </v-list-item>
               <v-list-item link class="mt-2" to="/People">
                  <v-list-item-icon>
                     <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>People</v-list-item-title>
               </v-list-item>
               <v-list-item link class="mt-2" to="/Team">
                  <v-list-item-icon>
                     <v-icon>mdi-account-group</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Team</v-list-item-title>
               </v-list-item>
            </v-list>
            <template #append>
               <v-list-item link class="mt-2" to="/">
                  <v-list-item-icon
                     ><v-icon>mdi-logout-variant</v-icon></v-list-item-icon
                  >
                  <v-list-item-title>Sign out</v-list-item-title>
               </v-list-item>
            </template>
         </v-navigation-drawer>
      </v-card>
   </div>
</template>

<script>
export default {
   name: "Sidebar",
};
</script>

<style scoped>
* {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>