<template>
  <div class="about">
    <h1>Les résultats</h1>

    <div v-for="partie in parties" :key="partie.id" class="card mb-4">
      <div class="card-header">
        {{ partie.votes.length }} Votes
        <span v-if="partie.id === getWinner().id" class="badge bg-success"
          >Parti gagnant</span
        >
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ partie.nom }}</h5>
        <p class="card-text">{{ partie.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Partie from "../models/Partie";

export default {
  name: "Resultat",
  props: ["parties"],
  methods: {
    getWinner: function() {
      let partie = new Partie();
      let max = 0;

      for (let i = 0; i < this.parties.length; i++) {
        if (this.parties[i].votes.length > max) {
          max = this.parties[i].votes.length;
          partie = this.parties[i];
        }
      }
      return partie;
    },
  },
};
</script>
