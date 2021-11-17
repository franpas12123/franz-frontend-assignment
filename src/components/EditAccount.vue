<template>
  <v-container class="mt-5">
    <div class="gravatar-container mb-n10 ml-5 d-flex">
      <v-gravatar
        :class="`rounded-xl ${$vuetify.breakpoint.xs ? 'mx-auto' : ''}`"
        :email="email"
        :size="150"
        default-img="mm"
      />
      <div class="" v-if="$vuetify.breakpoint.smAndUp">
        <div class="mx-5 mt-5">
          <h1>
            <strong>{{ firstName }} {{ lastName }}</strong>
          </h1>
          <h4 class="font-weight-light">{{ email }}</h4>
        </div>
      </div>
    </div>
    <v-card class="rounded-xl">
      <v-container class="pa-4 pt-10">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="inputField">
                <font-awesome-icon class="icon" icon="user" />
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  :append-icon="firstName ? 'mdi-close' : ''"
                  @click:append="clearFirstName"
                >
                </v-text-field>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <div class="inputField">
                <font-awesome-icon class="icon" icon="user" />
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  :append-icon="lastName ? 'mdi-close' : ''"
                  @click:append="clearLastName"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <div class="inputField">
                <font-awesome-icon class="icon" icon="at" />
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  :append-icon="email ? 'mdi-close' : ''"
                  @click:append="clearEmail"
                ></v-text-field>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <div class="inputField">
                <font-awesome-icon class="icon" icon="key" />
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <password
                  v-if="password"
                  :class="password ? 'passwordError' : ''"
                  v-model="password"
                  :strength-meter-only="true"
                />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            class="custom-btn-danger mr-3"
            @click="$router.push({ name: 'Home' })"
            fab
            depressed
          >
            <font-awesome-icon class="icon" icon="times" />
          </v-btn>
          <v-btn class="custom-btn-accent" @click="save()" fab depressed>
            <font-awesome-icon class="icon" icon="check" />
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Password from 'vue-password-strength-meter';
import { mapActions } from 'vuex';
export default {
  name: 'EditAccount',
  components: { Password },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      showPassword: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [(v) => !!v || 'Password is required'],
      editing: false,
    };
  },
  created() {
    const { firstName, lastName, email } = this.$store.getters.profile;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  },
  methods: {
    ...mapActions(['editProfile']),
    clearFirstName() {
      this.firstName = '';
    },
    clearLastName() {
      this.lastName = '';
    },
    clearEmail() {
      this.email = '';
    },
    save() {
      const { firstName, lastName, email, password } = this;
      const newAcc = { firstName, lastName, email, password };
      this.editProfile(newAcc);
      this.$router.push({ name: 'Home' });
    },
    resetForm() {
      this.clearFirstName();
      this.clearLastName();
      this.clearEmail();
      this.password = '';
    },
  },
};
</script>

<style>
.inputField .icon {
  position: absolute;
  margin-top: 20px;
  color: grey;
  margin-left: -24px;
}
.inputField {
  margin-left: 24px;
}
.passwordError {
  margin-top: -28px !important;
}
</style>
