<template>
   <v-container fluid>
      <v-data-iterator
         :items="items"
         :items-per-page.sync="itemsPerPage"
         :page.sync="page"
         :search="search"
         :sort-by="sortBy.toLowerCase()"
         :sort-desc="sortDesc"
         hide-default-footer
      >
         <template v-slot:header>
            <v-toolbar dark color="#023E8A" class="mb-1">
               <v-text-field
                  height="10px"
                  v-model="search"
                  clearable
                  flat
                  solo-inverted
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
               ></v-text-field>
               <template v-if="$vuetify.breakpoint.mdAndUp">
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-btn-toggle v-model="sortDesc" mandatory>
                     <v-btn
                        large
                        depressed
                        color="#0077B6"
                        :value="false"
                        rounded
                     >
                        <v-icon>mdi-arrow-up</v-icon>
                     </v-btn>
                     <v-btn
                        large
                        depressed
                        color="#0077B6"
                        :value="true"
                        rounded
                     >
                        <v-icon>mdi-arrow-down</v-icon>
                     </v-btn>
                  </v-btn-toggle>
               </template>
            </v-toolbar>
         </template>

         <template v-slot:default="props">
            <v-row class="mt-1">
               <v-col
                  v-for="item in props.items"
                  :key="item.name"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
               >
                  <v-card color="#EDFAFD">
                     <v-img :src="item.image" height="180px"></v-img>
                     <v-divider></v-divider>
                     <v-card-title
                        class="subheading font-weight-bold justify-center pb-0"
                     >
                        {{ item.name }}
                     </v-card-title>

                     <v-list class="text-center" color="#EDFAFD">
                        <v-list-item
                           v-for="(key, index) in filteredKeys"
                           :key="index"
                           class="text-center"
                        >
                           <v-list-item-content class="d-flex justify-center">
                              {{ key }}:
                              {{ item[key.toLowerCase()] }}
                           </v-list-item-content>
                        </v-list-item>
                     </v-list>
                  </v-card>
               </v-col>
            </v-row>
         </template>

         <template v-slot:footer>
            <v-row class="mt-2 mr-2 ml-2" align="center" justify="center">
               <span class="grey--text">Items per page</span>
               <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                     <v-btn
                        dark
                        text
                        color="primary"
                        class="ml-2"
                        v-bind="attrs"
                        v-on="on"
                     >
                        {{ itemsPerPage }}
                        <v-icon>mdi-chevron-down</v-icon>
                     </v-btn>
                  </template>
                  <v-list>
                     <v-list-item
                        v-for="(number, index) in itemsPerPageArray"
                        :key="index"
                        @click="updateItemsPerPage(number)"
                     >
                        <v-list-item-title>{{ number }}</v-list-item-title>
                     </v-list-item>
                  </v-list>
               </v-menu>

               <v-spacer></v-spacer>

               <span class="mr-4 grey--text">
                  Page {{ page }} of {{ numberOfPages }}
               </span>
               <v-btn
                  fab
                  plain
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
               >
                  <v-icon>mdi-chevron-left</v-icon>
               </v-btn>
               <v-btn
                  fab
                  dark
                  plain
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
               >
                  <v-icon>mdi-chevron-right</v-icon>
               </v-btn>
            </v-row>
         </template>
      </v-data-iterator>
   </v-container>
</template>

<script>
export default {
   data() {
      return {
         itemsPerPageArray: [4, 8, 12],
         search: "",
         filter: {},
         sortDesc: false,
         page: 1,
         itemsPerPage: 4,
         sortBy: "name",
         keys: ["Name", "Members"],
         items: [
            {
               name: "Design",
               members: 25,
               image: "design.jpg",
            },
            {
               name: "Administrator",
               members: 6,
               image: "admin.jpg",
            },
            {
               name: "Finance",
               members: 10,
               image: "finance.jpg",
            },
            {
               name: "Manager",
               members: 20,
               image: "manager.jpg",
            },
            {
               name: "Technical",
               members: 15,
               image: "Technical.jpg",
            },
            {
               name: "Marketing",
               members: 35,
               image: "Marketing.png",
            },
            {
               name: "Lollipop",
               members: 392,
               image: "Lollipop.jpg",
            },
            {
               name: "Honeycomb",
               members: 408,
               image: "Honeycomb.jpg",
            },
            {
               name: "Dunkin Donuts",
               members: 452,
               image: "Donut.jpg",
            },
            {
               name: "KitKat",
               members: 518,
               image: "kitkat.jpg",
            },
         ],
      };
   },
   computed: {
      numberOfPages() {
         return Math.ceil(this.items.length / this.itemsPerPage);
      },
      filteredKeys() {
         return this.keys.filter((key) => key !== "Name");
      },
   },
   methods: {
      nextPage() {
         if (this.page + 1 <= this.numberOfPages) this.page += 1;
      },
      formerPage() {
         if (this.page - 1 >= 1) this.page -= 1;
      },
      updateItemsPerPage(number) {
         this.itemsPerPage = number;
      },
   },
};
</script>

<style>
</style>