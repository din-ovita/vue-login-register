<template>
  <div id="detail">
    <Navbar />
    <!-- Data Jakarta -->
    <div class="provinsi">
      <div class="jakartas">
        <h1>DKI JAKARTA</h1>
        <img src="../assets/ondel.gif" alt="" width="80" height="80" />
      </div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD
      </button>
      <hr />
      <!-- Tabel Data -->
      <table class="table table-striped">
        <thead>
          <tr bgcolor="teal">
            <th>No</th>
            <th>Kota Administrasi</th>
            <th>Wali Kota</th>
            <th>Luas Wilayah</th>
            <th>Jumlah Penduduk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in jakartas" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.kota }}</td>
            <td>{{ user.bupati }}</td>
            <td>{{ user.luas }} km²</td>
            <td>{{ user.jumlah }} jiwa</td>
            <td style="text-align: center">
              <button
                @click="editJakarta(user)"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>
              ||
              <button @click="delJakarta(user)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Add-->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              From <span v-show="!updateSubmitJakarta">Tambah</span>
              <span v-show="updateSubmitJakarta">Update</span>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addJakarta">
              <label>Kota Administrasi</label> <br />
              <input type="text" v-model="formJakarta.kota" required /> <br />
              <label>Wali Kota</label> <br />
              <input type="text" v-model="formJakarta.bupati" required /><br />
              <label>Luas Wilayah</label> <br />
              <input type="text" v-model="formJakarta.luas" required /><br />
              <label>Jumlah Penduduk</label> <br />
              <input type="text" v-model="formJakarta.jumlah" required /><br />

              <!-- modal footer -->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="close"
                >
                  Close
                </button>
                ||
                <button
                  class="btn btn-primary"
                  type="submit"
                  v-show="!updateSubmitJakarta"
                >
                  Save
                </button>
                <button
                  class="btn btn-primary"
                  type="button"
                  v-show="updateSubmitJakarta"
                  @click="updateJakarta(formJakarta)"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Jateng -->
    <div class="provinsi">
      <div class="jakartas">
        <h1>JAWA TENGAH</h1>
        <img src="../assets/ondel.gif" alt="" width="80" height="80" />
      </div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#jateng"
      >
        ADD
      </button>
      <hr />
      <!-- Tabel Data -->
      <table class="table table-striped">
        <thead>
          <tr bgcolor="teal">
            <th>No</th>
            <th>Kota Administrasi</th>
            <th>Wali Kota</th>
            <th>Luas Wilayah</th>
            <th>Jumlah Penduduk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prov, index) in jatengs" :key="prov.id">
            <td>{{ index + 1 }}</td>
            <td>{{ prov.kota }}</td>
            <td>{{ prov.bupati }}</td>
            <td>{{ prov.luas }} km²</td>
            <td>{{ prov.jumlah }} jiwa</td>
            <td style="text-align: center">
              <button
                @click="editJateng(prov)"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#jateng"
              >
                Edit
              </button>
              ||
              <button @click="delJateng(prov)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Add-->
    <div
      class="modal fade"
      id="jateng"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              From <span v-show="!updateSubmitJateng">Tambah</span>
              <span v-show="updateSubmitJateng">Update</span>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addJateng">
              <label>Kota Administrasi</label> <br />
              <input type="text" v-model="formJateng.kota" required /> <br />
              <label>Wali Kota</label> <br />
              <input type="text" v-model="formJateng.bupati" required /><br />
              <label>Luas Wilayah</label> <br />
              <input type="text" v-model="formJateng.luas" required /><br />
              <label>Jumlah Penduduk</label> <br />
              <input type="text" v-model="formJateng.jumlah" required /><br />

              <!-- modal footer -->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="close"
                >
                  Close
                </button>
                ||
                <button
                  class="btn btn-primary"
                  type="submit"
                  v-show="!updateSubmitJateng"
                >
                  Save
                </button>
                <button
                  class="btn btn-primary"
                  type="button"
                  v-show="updateSubmitJateng"
                  @click="updateJateng(formJateng)"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "DetailPage",
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
    // methods jakarta
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
    addJakarta() {
      axios
        .post("http://localhost:3000/jakartas/", this.formJakarta)
        .then(() => {
          this.loadJakarta();
          this.formJakarta.kota = "";
          this.formJakarta.bupati = "";
          this.formJakarta.luas = "";
          this.formJakarta.jumlah = "";
        });
      window.location.reload();
    },
    editJakarta(user) {
      this.updateSubmitJakarta = true;
      this.formJakarta.id = user.id;
      this.formJakarta.kota = user.kota;
      this.formJakarta.bupati = user.bupati;
      this.formJakarta.luas = user.luas;
      this.formJakarta.jumlah = user.jumlah;
    },
    updateJakarta(formJakarta) {
      return axios
        .put("http://localhost:3000/jakartas/" + formJakarta.id, {
          kota: this.formJakarta.kota,
          bupati: this.formJakarta.bupati,
          luas: this.formJakarta.luas,
          jumlah: this.formJakarta.jumlah,
        })
        .then(() => {
          this.loadJakarta();
          this.formJakarta.id = "";
          this.formJakarta.kota = "";
          this.formJakarta.bupati = "";
          this.formJakarta.luas = "";
          this.formJakarta.jumlah = "";
          this.updateSubmitJakarta = false;
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delJakarta(user) {
      axios.delete("http://localhost:3000/jakartas/" + user.id).then(() => {
        this.loadJakarta();
        let index = this.jakartas.indexOf();
        this.jakartas.splice(index, 1);
      });
      window.location.reload();
    },

    // methods jateng
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
    addJateng() {
      axios.post("http://localhost:3000/jatengs/", this.formJateng).then(() => {
        this.loadJateng();
        this.formJateng.kota = "";
        this.formJateng.bupati = "";
        this.formJateng.luas = "";
        this.formJateng.jumlah = "";
      });
      window.location.reload();
    },
    editJateng(prov) {
      this.updateSubmitJateng = true;
      this.formJateng.id = prov.id;
      this.formJateng.kota = prov.kota;
      this.formJateng.bupati = prov.bupati;
      this.formJateng.luas = prov.luas;
      this.formJateng.jumlah = prov.jumlah;
    },
    updateJateng(formJateng) {
      return axios
        .put("http://localhost:3000/jatengs/" + formJateng.id, {
          kota: this.formJateng.kota,
          bupati: this.formJateng.bupati,
          luas: this.formJateng.luas,
          jumlah: this.formJateng.jumlah,
        })
        .then(() => {
          this.loadJateng();
          this.formJateng.id = "";
          this.formJateng.kota = "";
          this.formJateng.bupati = "";
          this.formJateng.luas = "";
          this.formJateng.jumlah = "";
          this.updateSubmitJateng = false;
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delJateng(prov) {
      axios.delete("http://localhost:3000/jatengs/" + prov.id).then(() => {
        this.loadJateng();
        let index = this.jatengs.indexOf();
        this.jatengs.splice(index, 1);
      });
      window.location.reload();
    },

    // methods close
    close() {
      window.location.reload();
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
