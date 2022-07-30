<template>
  <v-container color="green">
    <v-card class="mx-auto my-16" max-width="574">
      <v-card-title justify-center class="px-10">register</v-card-title>
      <v-form v-model="valid" @submit.prevent="signup()">
        <v-text-field justify-center v-model="name" :rules="nameRules" :counter="10" label="name" required>
        </v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="email" required>
        </v-text-field>
        <v-text-field justify-center v-model="username" :rules="usernameRules" :counter="10" label="username" required>
        </v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="password" type="password" required>
        </v-text-field>
        <v-text-field v-model="confirmpassword" :rules="passwordRules" label="confirmpassword" type="password" required>
        </v-text-field>
      </v-form>
      <v-row>
        <v-btn class="ma-2 mx-3" type="submit" color="blue" @click="signup">submit</v-btn>
        <v-btn class="ma-2" type="reset" color="blue" @click="reset">clear</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { useMutation} from '@vue/apollo-composable';
import {register} from '../../utils/queries'
import { ref } from 'vue'
const confirmpassword = ref('')
const valid = ref(false)
const username = ref('')
const password = ref('')
const name = ref('')
const email = ref('')
const nameRules = ([
  (v: any) => !!v || 'username is required',
  (v: any) => 'Name must be less than 10 characters',
])
const emailRules = ([
  (v: any) => !!v || 'username is required',
  (v:any) => /.+@.+/.test(v) || 'E-mail must be valid',
])
const usernameRules = ([
  (v: any) => !!v || 'Name is required',
  (v: any) => v.length <= 10 || 'username must be less only small characters characters',
])
const passwordRules = ([
  (v: any) => !!v || 'password is required',
  (v: any) => v.length <= 10 || 'password must be at least 6 characters',
])
const validate = () => {
  
}
const {mutate:signup,onDone} =useMutation(
  register,()=>({
    variables:{
      name:name.value,
      username:username.value,
      email:email.value,
      password:password.value,
      confirmpassword:confirmpassword.value
    }
  })
) 
onDone((response)=>{
  console.log(response);
})
const reset  = ()=>{
  name.value = '',
  username.value = '',
  password.value = ''
  confirmpassword.value = ''
  email.value = ''
}
</script>