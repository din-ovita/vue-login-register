<template>
  <div id="produk">
    <Navbar />
    <div class="provinsi">
      <!-- Data Jakarta -->
      <div class="jakartas">
        <h1>DKI JAKARTA</h1>
        <img src="../assets/ondel.gif" alt="" width="80" height="80" />
      </div>
      <hr />

      <!-- Table Data Jakarta -->
      <table class="table table-striped">
        <thead>
          <tr bgcolor="teal">
            <th>No</th>
            <th>Kota Administrasi</th>
            <th>Wali Kota</th>
            <th>Luas Wilayah</th>
            <th>Jumlah Penduduk</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in jakartas" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.kota }}</td>
            <td>{{ user.bupati }}</td>
            <td>{{ user.luas }} km²</td>
            <td>{{ user.jumlah }} jiwa</td>
          </tr>
        </tbody>
      </table>

      <!-- Data Jateng -->
      <div class="jakartas">
        <h1>JAWA TENGAH</h1>
        <img src="../assets/ondel.gif" alt="" width="80" height="80" />
      </div>
      <hr />

      <!-- Table Data Jateng -->
      <table class="table table-striped">
        <thead>
          <tr bgcolor="teal">
            <th>No</th>
            <th>Kota Administrasi</th>
            <th>Wali Kota</th>
            <th>Luas Wilayah</th>
            <th>Jumlah Penduduk</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prov, index) in jatengs" :key="prov.id">
            <td>{{ index + 1 }}</td>
            <td>{{ prov.kota }}</td>
            <td>{{ prov.bupati }}</td>
            <td>{{ prov.luas }} km²</td>
            <td>{{ prov.jumlah }} jiwa</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "ProdukPage",
  components: {
    Navbar,
  },
  data() {
    return {
      formJakarta: {
        id: "",
        kota: "",
        bupati: "",
        luas: "",
        jumlah: "",
      },
      jakartas: "",
      updateSubmitJakarta: false,
      formJateng: {
        id: "",
        kota: "",
        bupati: "",
        luas: "",
        jumlah: "",
      },
      jatengs: "",
      updateSubmitJateng: false,
    };
  },
  mounted() {
    this.loadJakarta();
    this.loadJateng();
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
  methods: {
    loadJakarta() {
      axios
        .get("http://localhost:3000/jakartas")
        .then((res) => {
          this.jakartas = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadJateng() {
      axios
        .get("http://localhost:3000/jatengs")
        .then((res) => {
          this.jatengs = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.jakartas {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.jakartas > h1 {
  color: teal;
}
.provinsi {
  margin-left: 100px;
  margin-right: 100px;
  top: 0;
}
table {
  /* width: 100%; */
  border-collapse: collapse;
  border: 1px solid #cccccc;
}
th {
  font-size: 17px;
  text-align: center;
  color: #fff;
  height: 60px;
  padding: 10px;
  border: 1px solid #cccccc;
}
td {
  font-size: 15px;
  padding: 10px;
  border: 1px solid #cccccc;
}
@media screen and (max-width: 900px) {
  table {
    width: 100%;
  }
  .provinsi {
    margin-left: 50px;
    margin-right: 50px;
  }
  th {
    font-size: 12px;
    padding: 5px;
  }
  td {
    font-size: 10px;
    padding: 5px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 17px;
  }
}
</style>
