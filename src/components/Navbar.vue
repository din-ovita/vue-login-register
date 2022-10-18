<template>
  <div class="all">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="adminAccess">
              <a class="nav-link active" aria-current="page" href="/home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" v-if="adminAccess"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" v-if="adminAccess"
                >Contact</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/produk" class="nav-link">Produk</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/detail" class="nav-link">Detail</router-link>
            </li>
          </ul>
          <div class="log">
            <a href="/" @click="out"
              ><i class="fas fa-sign-out-alt">LOG OUT</i></a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
  computed: {
    adminAccess() {
      return sessionStorage.getItem("role") === "admin";
    },
  },
};
</script>

<style scoped>
.log > a {
  text-decoration: none;
  color: black;
}
.log {
  text-align: right;
}
</style>
