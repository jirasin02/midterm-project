<template>
   <div class="mt-3 ml-3 mr-3">
      <v-card>
         <v-card-title>
            <v-icon color="#02033c" class="mr-4"> mdi-account-multiple </v-icon>
            People
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
               prepend-icon="mdi-magnify"
               v-model="search"
               placeholder="Search"
               hide-details
               clearable
            ></v-text-field>
         </v-card-title>
         <v-data-table
            :headers="headers"
            :items="people"
            :search="search"
            height="600"
            fixed-header
            :single-expand="singleExpand"
            item-key="name"
            show-expand
         >
            <template v-slot:expanded-item="{ headers, item }">
               <td :colspan="headers.length">
                  More info about {{ item.name }}
               </td>
            </template>
         </v-data-table>
      </v-card>
   </div>
</template>

<script>
export default {
   data() {
      return {
         search: "",
         expanded: [],
         singleExpand: false,
         headers: [
            {
               text: "ID",
               align: "start",
               filterable: true,
               value: "id",
            },
            { text: "Name", value: "name" },
            { text: "Position", value: "position" },
            { text: "Team", value: "team" },
            { text: "Email", value: "email" },
            { text: "Status", value: "status" },
         ],
         people: [
            {
               id: "1",
               pic: "",
               name: "Jirasin",
               position: "Manager",
               team: "Admin",
               email: "jjrsinx@gmail.com",
               status: "Full-time",
               contact: "095-1146614",
               address: "------------dddddddddddddddddddddddddddd----",
               experience: "10 years",
            },
            {
               id: "2",
               pic: "",
               name: "Miyawaki Sakura",
               position: "Visual",
               team: "IZ*ONE",
               email: "sakuchan@39",
               status: "Part-time",
               contact: "02-222-2222",
               address: "-",
               experience: "2.5 years",
            },
            {
               id: "8",
               pic: "",
               name: "Minguri",
               position: "Dancer",
               team: "IZ*ONE",
               email: "minguri@wiz*one.com",
               status: "Intern",
               contact: "04-444-4444",
               address: "-",
               experience: "2.5 years",
            },
         ],
      };
   },
};
</script>

<style>
</style>