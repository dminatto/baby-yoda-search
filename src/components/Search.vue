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
                 @click="getPreviousPage"
                 :pointer-events="hasPrevious"
          >
            Previous
          </v-btn>
          <v-btn depressed
                 color="primary"
                 :pointer-events="hasNext"
                 @click="getNextPage"
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
    this.findFilms().then((res) => {
      this.getCaracteristics().then((res) => {
        this.includeFilmsToCaracter()
      })
    })
  },
  methods: {
    ...mapMutations("Persona", ["setQuery", "hasNext", "hasPrevious"]),
    ...mapMutations("Films", ["getFilms"]),
    ...mapActions("Persona", ["getCaracteristics", "findPeople", "getPrevious", "getNext"]),
    ...mapActions("Films", ["findFilms"]),
    onChange(val) {
      this.setQuery(val);
      if (val === "") {
        this.getCaracteristics().then((res) => {
          this.includeFilmsToCaracter()
        });
      } else {
        this.findPeople().then((res) => {
          this.includeFilmsToCaracter()
        });
      }
    },
    includeFilmsToCaracter: function () {
      this.entries = this.entries.map((entry) => {
        return entry.films = entry.films.map((films) => {
          let obj = this.listFilms.find(el => el.url === films)
          console.log(obj)
          let date = new Date(obj.release_date)
          return  date.getFullYear() + ' - ' + obj.title
        });
      })
    },
    getNextPage: function () {
      this.getNext().then((res) => {
        this.includeFilmsToCaracter()
      });
    },
    getPreviousPage: function () {
      this.getPrevious().then((res) => {
        this.includeFilmsToCaracter()
      });
    }
  },
  computed: {
    ...mapState("Films", {
      listFilms: state => state.results
    }),
    ...mapState("Persona", {
      entries: state => state.entries
    }),
  },

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
