<template>
  <v-app>
    <MainScreen></MainScreen>
    <Forms></Forms>

  </v-app>

</template>

<script>
  import MainScreen from "./components/MainScreen.vue"
  import Forms from "./components/Forms.vue"


  export default {
    components: {
      MainScreen,
      Forms,

    }
  }
</script>