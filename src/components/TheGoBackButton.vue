<template>
  <span class="go-back">
    <button @click="goBack" id="back-button">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </button>
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
button {
  border: 0;
  margin: 16px;
  cursor: pointer;
}

.go-back {
  display: flex;
}

#back-button {
  background-color: #42b983;
  padding: 12px;
  border-radius: 8px;
  color: White;
  transition: 300ms;
  font-weight: bold;
  width: 100px;
}

#back-button:hover {
  background-color: #2e9265;
}
</style>