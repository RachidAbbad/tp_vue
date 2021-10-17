<template>
  <div class="about">
    <h1>Voter pour un parti</h1>

    <div class="row">
      <div class="col">
        <form @submit="handleAddVote">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="CIN"
              name="cin"
              @input="changeCin"
              :value="cinValue"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Nom"
              name="nom"
              @input="changeNom"
              :value="nomValue"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Prénom"
              name="prenom"
              @input="changePrenom"
              :value="prenomValue"
            />
          </div>
          <div class="form-group">
            <select
              class="form-select"
              name="nomPartie"
              @change="changePartie"
              :value="partieNomValue"
            >
              <option value="">List des parties</option>
              <option
                v-for="partie in parties"
                :value="partie.nom"
                :key="partie.id"
              >
                {{ partie.nom }}
              </option>
            </select>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Voter</button>
          </div>
        </form>
      </div>

      <div
        v-if="cinValue || nomValue || prenomValue || partieNomValue"
        class="col"
      >
        <div class="card">
          <div class="card-body">
            <h5 v-if="cinValue || nomValue || prenomValue" class="card-title">
              Le citoyen <span v-if="nomValue">{{ nomValue }}</span>
              <span v-if="prenomValue">{{ prenomValue }}</span> qui a le CIN :
              {{ cinValue }}
            </h5>

            <p v-if="partieNomValue" class="card-text">
              Veut voter pour le parti: {{ partieNomValue }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Citoyen from "../models/Citoyen";

export default {
  name: "Voter",
  props: ["parties", "addVote"],
  data: function() {
    return {
      cinValue: "",
      nomValue: "",
      prenomValue: "",
      partieNomValue: "",
    };
  },
  methods: {
    handleAddVote: function(event) {
      try {
        event.preventDefault();

        const citoyen = new Citoyen(
          event.target.elements.cin.value,
          event.target.elements.nom.value,
          event.target.elements.prenom.value
        );
        this.addVote(citoyen, event.target.elements.nomPartie.value);

        this.cinValue = "";
        this.nomValue = "";
        this.prenomValue = "";
        this.partieNomValue = "";

        alert("Votre vote a été soumis avec succès");
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    },
    changeCin: function(event) {
      this.cinValue = event.target.value;
    },
    changeNom: function(event) {
      this.nomValue = event.target.value;
    },
    changePrenom: function(event) {
      this.prenomValue = event.target.value;
    },
    changePartie: function(event) {
      this.partieNomValue = event.target.value;
    },
  },
};
</script>
