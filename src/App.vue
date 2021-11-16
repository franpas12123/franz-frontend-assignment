<template>
  <v-app>
    <v-app-bar app color="#54D6C0">
      <div class="d-flex align-center">
        <strong>VIRTUSIZE</strong>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
.v-application {
  font-family: 'Open Sans', sans-serif !important;
}
</style>
