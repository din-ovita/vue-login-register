<template>
  <div id="home">
    <Navbar />
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
                @click="edit(user)"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>
              ||
              <button @click="del(user)" class="btn btn-danger">Delete</button>
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
              From <span v-show="!updateSubmit">Tambah</span>
              <span v-show="updateSubmit">Update</span>
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
            <form @submit.prevent="add">
              <label>Kota Administrasi</label> <br />
              <input type="text" v-model="form.kota" required /> <br />
              <label>Wali Kota</label> <br />
              <input type="text" v-model="form.bupati" required /><br />
              <label>Luas Wilayah</label> <br />
              <input type="text" v-model="form.luas" required /><br />
              <label>Jumlah Penduduk</label> <br />
              <input type="text" v-model="form.jumlah" required /><br />

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
                  v-show="!updateSubmit"
                >
                  Save
                </button>
                <button
                  class="btn btn-primary"
                  type="button"
                  v-show="updateSubmit"
                  @click="update(form)"
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
  name: "HomePage",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        id: "",
        kota: "",
        bupati: "",
        luas: "",
        jumlah: "",
      },
      jakartas: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jakartas")
        .then((res) => {
          this.jakartas = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/jakartas/", this.form).then(() => {
        this.load();
        this.form.kota = "";
        this.form.bupati = "";
        this.form.luas = "";
        this.form.jumlah = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.kota = user.kota;
      this.form.bupati = user.bupati;
      this.form.luas = user.luas;
      this.form.jumlah = user.jumlah;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jakartas/" + form.id, {
          kota: this.form.kota,
          bupati: this.form.bupati,
          luas: this.form.luas,
          jumlah: this.form.jumlah,
        })
        .then(() => {
          this.load();
          this.form.id = "";
          this.form.kota = "";
          this.form.bupati = "";
          this.form.luas = "";
          this.form.jumlah = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/jakartas/" + user.id).then(() => {
        this.load();
        let index = this.jakartas.indexOf();
        this.jakartas.splice(index, 1);
      });
    },
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
