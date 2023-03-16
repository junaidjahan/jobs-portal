import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const instance = axios.create({
  baseURL: "https://api.publish.jobs/api/user-business-jobs",
  headers: {
    Authorization: "Bearer " + "664|TZZ7zHnAkQRnVuY5wP0s2xQLoCKzZ7Kl1oLTjEeO",
  },
});

const store = new Vuex.Store({
  state: {
    jobs: [],
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await instance.get(
        "https://api.publish.jobs/api/user-business-jobs"
      );

      commit("SET_JOBS", response.data.data);
    },
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
});

export default store;
