<template>
  <div id="app">
    <AppBar />
    <div class="p-3">
      <div class="mt-4 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <p>Manage Jobs</p>
          <div class="vl mx-2"></div>
          <img height="20" src="images/home-icon.png" alt="" srcset="" />
        </div>
        <div>
          <base-btn @click="increment()">
            <img
              height="15"
              src="images/plus.png"
              class="mr-2"
              alt=""
              srcset=""
            />
            Add New Job
          </base-btn>
        </div>
      </div>

      <div class="mt-4">
        <b-form-select
          class="select bg-primary text-white"
          size="md"
          v-model="selected"
          :options="options"
        ></b-form-select>
      </div>
      <div class="mt-4">
        <div class="mt-3" v-for="(job, index) in jobs" :key="index">
          <job-card-component :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "./components/core/AppBar.vue";
export default {
  components: { AppBar },
  name: "App",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "All Categories" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "This is Second option" },
        { value: "c", text: "This is Third option" },
        { value: "d", text: "Selected Option" },
      ],
    };
  },
  methods: {
    increment() {
      console.log("helo", this.$store.state);
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    jobs: function () {
      return this.$store.state.jobs;
    },
  },
};
</script>

<style>
.select {
  width: 20% !important;
}
</style>
