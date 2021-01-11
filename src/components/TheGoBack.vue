<template>
  <span class="go-back">
    <button @click="goBack" id="back-button">Go back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}

button {
  border: 0;
}

#back-button {
  background-color: #42b983;
  border-radius: 8px;
  color: White;
  transition: 300ms;
}

#back-button:hover {
  background-color: #2e9265;
}
</style>