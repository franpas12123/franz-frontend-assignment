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
