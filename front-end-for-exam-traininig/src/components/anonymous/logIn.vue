<template>
  <v-container>
    <v-card class="mx-auto my-16" max-width="574">
      <v-card-title justify-center>hello</v-card-title>
      <v-form v-model="valid" @submit.prevent="login()">
        <v-text-field justify-center v-model="username" :rules="usernameRules" :counter="10" label="username" required>
        </v-text-field>
        <v-text-field v-model="password"  label="password" type="password" required>
        </v-text-field>
      </v-form>
      <v-row>
        <v-btn class="ma-2 mx-3" type="submit" color="blue" @click="login">submit</v-btn>
        <v-btn class="ma-2" type="reset" color="blue" @click="clear">clear</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { signin } from '@/utils/queries'
const router = useRouter();
const valid = ref(false)
const username = ref('')
const password = ref('')

const usernameRules = ([
  (v: any) => !!v || 'Name is required',
  (v: any) => v.length <= 10 || 'Name must be less than 10 characters',
])
//:rules="passwordRules"
// const passwordRules = ([
//   (v: any) => !!v || 'username is required',
//   (v: any) => 'E-mail must be valid',
// ])

const clear= () => {
  router.push({
    name:'homedashboard',
    params:{
      id:'homedashboard'
    }
  })
}
const {mutate:login,onDone} = useMutation(
  signin,()=>({
    variables:{
      username:username.value,
      password:password.value
    }
  })
)
</script>