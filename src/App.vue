<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Elections Maroc 2021</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/partis"
              >Ajouter un parti</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/voter"
              >Voter pour un parti</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resulat"
              >Afficher les résulats</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <div class="container">
      <router-view
        :parties="parties"
        :addPartie="addPartie"
        :addVote="addVote"
      />
    </div>
  </main>
</template>

<script>
import Partie from "./models/Partie";

export default {
  data: function() {
    return {
      parties: [
        new Partie("Nom 1", "Description"),
        new Partie("Nom 2", "Description"),
        new Partie("Nom 3", "Description"),
      ],
    };
  },
  methods: {
    addPartie: function(partie) {
      for (let i = 0; i < this.parties.length; i++)
        if (this.parties[i].nom === partie.nom)
          throw new Error("Ce nom est déjà utilisé");

      this.parties.push(partie);
    },
    addVote: function(citoyen, nomPartie) {
      for (let i = 0; i < this.parties.length; i++) {
        for (let j = 0; j < this.parties[i].votes.length; j++) {
          if (this.parties[i].votes[j].cin == citoyen.cin)
            throw new Error("Ce cityoen a déjà voté");
        }
      }
      for (let i = 0; i < this.parties.length; i++)
        if (this.parties[i].nom == nomPartie) {
          this.parties[i].votes.push(citoyen);
          return true;
        }
      throw new Error("Ce parti n'existe pas");
    },
  },
  // watch: {
  //   parties: function(partie) {
  //     partie.id = this.parties[this.parties.length - 1].id + 1;
  //     console.log(this.parties);
  //     // this.parties.push(partie);
  //   },
  // },
};
</script>

<style>
main {
  padding: 30px 0;
}
main h1 {
  margin-bottom: 20px;
}
main form .form-group {
  margin-bottom: 15px;
}

.navbar-nav .nav-link.router-link-active {
  font-weight: 600;
  color: #42b983;
}
.navbar-nav .nav-link:focus {
  color: #42b983 !important;
}

.btn-primary {
  background-color: #42b983;
  border-color: #42b983;
  box-shadow: none !important;
}
.btn-primary:hover {
  background-color: #319b6b;
  border-color: #319b6b;
}
.btn-primary:focus {
  background-color: #319b6b;
  border-color: #319b6b;
}
.form-control:focus,
.form-select:focus {
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgb(49, 155, 107, 0.25);
}
/* color: #42b983; */
</style>
