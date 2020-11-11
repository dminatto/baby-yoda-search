<template>
  <div :items="items">
    <v-container>
      <v-flex v-for="(item, i) in items" :key="i" cols="12">
        <div class="caracteristics">
          <v-card>
            <v-card-title
              class="headline"
              v-text="item.name"
            ></v-card-title>
            <v-card-text>
              <div class="caracteristics">
                <v-layout wrap>
                  <v-flex xs12 sm6 class="pa-1">
                    <p><b>Birth Year: </b>{{ item.birth_year }}</p>
                    <p><b>Gender: </b>{{ item.gender }}</p>
                    <p><b>Height: </b> {{ item.height }}</p>
                    <p><b>Mass: </b>{{ item.mass }}</p>
                    <p><b>Eye Color: </b>{{ item.eye_color }}</p>
                  </v-flex>
                  <v-flex xs12 sm6 class="pa-1">
                    <p><b>Films</b></p>
                    <span v-for="(film, i) in item.films" :key="i" cols="12">
                        <p>{{ film }}</p>
                      </span>
                  </v-flex>
                </v-layout>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-container>
  </div>
</template>

<script>

import {mapMutations, mapState, mapActions} from "vuex";

export default {
  name: "Caracter",
  data: () => ({
    model: null,
  }),
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
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
