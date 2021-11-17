<template>
  <div>
    <v-img src="../assets/bg.jpg" max-height="150"></v-img>
    <v-container>
      <div class="gravatar-container mt-n16 d-flex">
        <v-gravatar
          :class="`rounded-xl ${$vuetify.breakpoint.xs ? 'mx-auto' : ''}`"
          :email="email"
          :size="150"
          default-img="mm"
        />
        <div class="my-auto" v-if="$vuetify.breakpoint.smAndUp">
          <div class="mx-5 mt-10">
            <h1>
              <strong>{{ firstName }} {{ lastName }}</strong>
            </h1>
            <h4 class="font-weight-light">{{ email }}</h4>
          </div>
        </div>
        <v-spacer></v-spacer>

        <v-btn
          class="custom-btn mt-16"
          @click="$router.push({ name: 'EditAccount' })"
          fab
          depressed
        >
          <font-awesome-icon class="icon" icon="user-edit" />
        </v-btn>
      </div>
    </v-container>
    <v-divider class="mt-3 mx-16"></v-divider>
    <v-divider class="mx-16"></v-divider>
    <v-container>
      <h1 class="my-3">Gallery</h1>
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-card elevation="5">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              max-height="400"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    const { firstName, lastName, email } = this.$store.getters.profile;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    };
  },
};
</script>
