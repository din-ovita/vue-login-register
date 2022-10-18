<template>
  <div class="kotak_login">
    <h1 class="tulisan_login">Login</h1>
    <form @submit="login">
      <label>Username</label>
      <input
        type="text"
        required
        name="username"
        v-model="form.username"
        class="form_login"
        placeholder="Username.."
      />
      <label>Password</label>
      <input
        type="password"
        required
        name="password"
        v-model="form.password"
        class="form_login"
        placeholder="Password.."
      />
      <button type="submit" class="btn btn-primary poll">Login</button>

      <br />
      <br />
      <center>
        <span>Belum Punya Akun</span><a href="/register">Silahkan Register</a>
      </center>
    </form>
    <br />
    <br />
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      // form = untuk menampung data input
      form: {
        username: "",
        password: "",
        useres: {},
      },
    };
  },
  methods: {
    // menjalankan 2 fungsi mengambil data pada json dan mencari data yang sama diinputkan
    async getUser() {
      const user = await axios.get("http://localhost:3000/akuns");
      this.useres = user.data;
    },
    login(e) {
      e.preventDefault();
      const login = this.useres.find(
        (data) =>
          data.username === this.form.username &&
          data.password === this.form.password
      );
      //   kondisi jika akun benar akan langsung masuk ke page home kalo salah muncul alert
      if (login === undefined) {
        alert("Username Or Password Not Found");
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        sessionStorage.setItem("role", login.role);
        // "role" = key ;  login.role = value db/key
        this.$router.push("/home");
        window.location.reload();
      }
    },
  },
  mounted() {
    this.getUser();
    // fungsi toggle pada app.vue
    this.$emit("toggleBar");
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}
</style>
