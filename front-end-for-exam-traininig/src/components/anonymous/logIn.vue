<template>
  <v-container>
    <v-card class="mx-auto my-16" max-width="574">
      <v-card-title justify-center>hello</v-card-title>
      <v-form v-model="valid" @submit.prevent="validate">
        <v-text-field justify-center v-model="username" :rules="usernameRules" :counter="10" label="username" required>
        </v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="password" type="password" required>
        </v-text-field>
      </v-form>
      <v-row>
        <v-col>
          <v-btn class="mr-4 " type="submit" color="red" @click="validate">submit</v-btn>
          </v-col>
          <v-col>
            <v-btn class="mr-4" type="submit" color="red" @click="validate">clear</v-btn>
          </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const router = useRouter();
const valid = ref(false)
const username = ref('')
const password = ref('')
const usernameRules = ([
  (v: any) => !!v || 'Name is required',
  (v: any) => v.length <= 10 || 'Name must be less than 10 characters',
])
const passwordRules = ([
  (v: any) => !!v || 'username is required',
  (v: any) => 'E-mail must be valid',
])
const validate = () => {
  console.log("login succefull")
  router.push({
    name:'homedashboard',
    params:{
      id:'homedashboard'
    }
  })
}
</script>