<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Oops we couldn't find that page. Try back to the
      <router-link :to="{ name: 'Home' }"
        ><strong>home page.</strong></router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
strong {
  color: #42b983;
}

strong:hover {
  text-decoration: underline;
}
</style>