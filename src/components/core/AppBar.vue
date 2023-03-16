<template>
  <div>
    <b-navbar
      class="bg-white d-flex justify-content-between"
      toggleable="lg"
      type="light"
      variant="light"
    >
      <div>
        <base-btn variant="light"> Home </base-btn>
        <base-btn class="mx-2"> Manage Jobs </base-btn>
        <base-btn variant="light"> Business </base-btn>
      </div>
      <div class="d-flex align-items-center justify-centent-center">
        <img src="images/logo 1.png" />
        <p class="mb-0 text-primary pt-1 mx-2">Publish Jobs</p>
      </div>
      <div>
        <img height="20" src="images/night-mode 1.png" alt="" srcset="" />
        <img
          height="20"
          src="images/bell 1.png"
          class="mx-2"
          alt=""
          srcset=""
        />
        <b-avatar
          size="2rem"
          variant="info"
          src="https://placekitten.com/300/300"
        ></b-avatar>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 51px;
}
</style>
