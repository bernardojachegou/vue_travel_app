<template>
  <div id="app">
    <TheNavbar />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-5%);
}

.input {
  border: 1px solid #42b983;
  margin-bottom: 20px;
}
.btn {
  background-color: #42b983;
  color: white;
  cursor: pointer;
  transition: 300ms;
}

.btn:hover {
  background-color: #2e9265;
}

.input,
.btn {
  padding: 10px;
  border-radius: 8px;
}
</style>
