<template>
  <v-app>
    <v-app-bar app color="#54D6C0">
      <div class="d-flex align-center">
        <strong>VIRTUSIZE FE ASSIGNMENT</strong>
      </div>

      <v-spacer></v-spacer>
      <div>
        <v-btn href="https://github.com/franpas12123" text>
          <v-icon>mdi-github</v-icon>
          Github
        </v-btn>
      </div>
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