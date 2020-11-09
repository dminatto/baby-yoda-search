<template>
  <div>
    <v-container>
      <v-card class="mx-auto">
        <v-card-text>
          <div>
            <h2>Baby Yoda Search</h2>
          </div>
          <div>
            <img class="img" src="./../assets/baby-yoda.jpg"/>
          </div>

          <p><i>- "Find a person, I will"</i></p>
          <p class="">
            <v-text-field
              v-model="model"
              :items="entries"
              @input="onChange"
              label="Find a person"
            ></v-text-field>
          </p>
        </v-card-text>
      </v-card>
      <Caracter :items="entries"/>
      <div class="buttons">
        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn depressed
                 @click="getPrevious"
                 :pointer-events="hasPrevious"
          >
            Previous
          </v-btn>
          <v-btn depressed
                 color="primary"
                 :pointer-events="hasNext"
                 @click="getNext"
          >
            Next
          </v-btn>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import {mapMutations, mapState, mapActions} from "vuex";
import Caracter from "./Caracter";

export default {
  name: "Search",
  components: {Caracter},
  data: () => ({
    model: null,
  }),
  created() {
    this.getCaracteristics();
  },
  methods: {
    ...mapMutations("Persona", ["setDados", "getDados", "setQuery", "hasNext", "hasPrevious"]),
    ...mapActions("Persona", ["getCaracteristics", "findPeople", "getPrevious", "getNext"]),
    onChange(val) {
      this.setQuery(val);
      if (val === "") {
        this.getCaracteristics();
      } else {
        this.findPeople();
      }
    },
  },
  computed: {
    ...mapState("Persona", {
      entries: state => state.entries
    }),
  },
  watch: {},
};
</script>

<style scoped>

.img {
  max-width: 35%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.buttons {
  display: inline-flex;

}
</style>
