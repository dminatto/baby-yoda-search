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
                    <v-row>
                      <v-col-6 class="caracteristics-column">
                        <p><b>Birth Year: </b>{{ item.birth_year }}</p>
                        <p><b>Gender: </b>{{ item.gender}}</p>
                        <p><b>Height: </b> {{ item.height }}</p>
                        <p><b>Mass: </b>{{ item.mass }}</p>
                        <p><b>Eye Color: </b>{{ item.eye_color}}</p>
                      </v-col-6>
                      <v-col-6 class="caracteristics-column">
                        <p><b>Films</b></p>
                        <p v-for="(film, i) in item.films" :key="i" cols="12">
                        {{  find(film)}}
                      </p>

                      </v-col-6>
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

  methods: {
    ...mapMutations("Films", ["setUrl"]),
    ...mapActions("Films", ["getFilms"]),
    find(val){
      this.setUrl(val);
      let obj = this.getFilms();
      return obj.title
    }
  }
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
