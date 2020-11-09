<template>
  <div :items="items">
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="">
                <v-card-title
                  class="headline"
                  v-text="item.name"
                ></v-card-title>
                <v-card-text>
                  <div class="caracteristics">
                    <v-row >
                      <v-col cols="6" sm="4" md="3" lg="3" offset-lg="1">
                        <p><b>Birth Year: </b>{{ item.birth_year }}</p>
                        <p><b>Gender: </b>{{ item.gender}}</p>
                        <p><b>Height: </b> {{ item.height }}</p>
                        <p><b>Mass: </b>{{ item.mass }}</p>
                        <p><b>Eye Color: </b>{{ item.eye_color}}</p>
                      </v-col>
                      <v-col cols="6" sm="4" md="3" lg="3" offset-lg="1">
                        <span><b>Films</b></span>
                        <span v-for="(film, i) in item.films" :key="i" cols="12">
                        {{film}}
                      </span>

                      </v-col>
                    </v-row>


                  </div>
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "Caracter",
  props: {
    items: {
      type: Array,
      default() {
        return {}
      }
    },
  },
}
</script>

<style scoped>

.caracteristics {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.caracteristics-column {

}
</style>
