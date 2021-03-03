<template>
  <v-card class="overflow-hidden" height="60px">
    <v-app-bar
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#02033c">mdi-message-outline</v-icon>
      </v-btn>

      <v-btn icon class="mr-3">
        <v-icon color="#02033c">mdi-bell-outline</v-icon>
      </v-btn>
      <v-divider vertical inset></v-divider>
      <div class="user d-flex flex-row ml-5">
        <v-icon color="#02033c">mdi-account-circle</v-icon>
        <v-toolbar-items class="pl-3">Jirasin</v-toolbar-items>
      </div>

      <v-menu bottom left transition="fade-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain v-bind="attrs" v-on="on">
            <v-icon color="#02033c" small class="mt-1">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list width="120px" class="userInfo pl-1">
          <v-list-item>
            <v-list-item-subtitle class="black--text">
              My Profile</v-list-item-subtitle
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-subtitle class="black--text">
              My Team</v-list-item-subtitle
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.userInfo {
  color: #02033c;
}
</style>
