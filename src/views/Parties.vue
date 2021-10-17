<template>
  <div class="home">
    <h1>Ajouter un parti</h1>

    <div class="row">
      <div class="col">
        <form @submit="handleAddPartie">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Nom de partie"
              name="nom"
              @input="changeNom"
              :value="nomValue"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Description"
              name="desc"
              @input="changeDesc"
              :value="descValue"
            />
          </div>
          <div>
            <button type="submit" class="btn btn-primary">
              Ajouter le parti
            </button>
          </div>
        </form>
      </div>

      <div v-if="nomValue || descValue" class="col">
        <div class="card">
          <div class="card-body">
            <h5 v-if="nomValue" class="card-title">
              Nom du parti: {{ nomValue }}
            </h5>
            <p v-if="descValue" class="card-text">
              Description: {{ descValue }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Partie from "../models/Partie";

export default {
  name: "Partis",
  props: ["addPartie"],
  data: function() {
    return {
      nomValue: "",
      descValue: "",
    };
  },
  methods: {
    handleAddPartie: function(event) {
      try {
        event.preventDefault();

        const newPartie = new Partie(
          event.target.elements.nom.value,
          event.target.elements.desc.value
        );
        this.addPartie(newPartie);

        this.nomValue = "";
        this.descValue = "";

        alert("Le parti a été ajouté avec succès");
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    },
    changeNom: function(event) {
      this.nomValue = event.target.value;
    },
    changeDesc: function(event) {
      this.descValue = event.target.value;
    },
  },
};
</script>
