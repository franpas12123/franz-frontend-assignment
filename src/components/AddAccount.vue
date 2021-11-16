<template>
  <v-container>
    <v-card>
      <v-container class="pa-4">
        <v-card-title><strong>Add Account</strong></v-card-title>
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
                  :class="password ? 'passwordError' : ''"
                  v-model="password"
                  :strength-meter-only="true"
                />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="accent" :block="$vuetify.breakpoint.name == 'xs' ? true : false">
            <font-awesome-icon class="icon mr-2" icon="user-plus" />
            submit
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Password from 'vue-password-strength-meter';
export default {
  name: 'AddAccount',

  components: { Password },
  data() {
    return {
      profilePic: '',
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
    };
  },
  methods: {
    clearFirstName() {
      this.firstName = '';
    },
    clearLastName() {
      this.lastName = '';
    },
    clearEmail() {
      this.email = '';
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
