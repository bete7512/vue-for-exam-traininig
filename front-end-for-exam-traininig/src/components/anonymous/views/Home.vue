<template >

  <v-toolbar class="px-0" elevation="1"  densed  scroll-off-screen fixed >
    <v-app-bar >
      <v-app-bar-title>
        Home
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="homepage">Home</v-btn>
      <v-btn text >About</v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="signup">Signup</v-btn>
      <v-btn text @click="login">login</v-btn>
    </v-app-bar>
  </v-toolbar>
  <!-- <v-alert type="success"></v-alert> -->
  <v-container fill-height class="text--3h red--text" color="red">
    <div>
      What is the purpose of a blog?
      There are many reasons to start a blog for personal use and only a handful of strong ones for business blogging.
      Blogging for business, projects, or anything else that might bring you money has a very straightforward purpose –
      to rank your website higher in Google SERPs, a.k.a. increase your visibility.

      As a business, you rely on consumers to keep buying your products and services. As a new business, you rely on
      blogging to help you get to potential consumers and grab their attention. Without blogging, your website would
      remain invisible, whereas running a blog makes you searchable and competitive.

      So, the main purpose of a blog is to connect you to the relevant audience. Another one is to boost your traffic
      and send quality leads to your website.

      The more frequent and better your blog posts are, the higher the chances for your website to get discovered and
      visited by your target audience. This means that a blog is an effective lead generation tool. Add a great call to
      action (CTA) to your content, and it will convert your website traffic into high-quality leads. A blog also allows
      you to showcase your niche authority and build a brand.

      When you use your niche knowledge for creating informative and engaging posts, it builds trust with your audience.
      Great blogging makes your business look more credible, which is especially important if your brand is still young
      and fairly unknown. It ensures presence online and niche authority at the same time.
    </div>
    <HomeviewVue />
  </v-container>
  <FooterVue width="fullscreen"></FooterVue>
</template>
<script setup lang="ts">
import HomeviewVue from './homeview/Homeview.vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import FooterVue from '@/components/Footer.vue';
const router = useRouter()
const gotodashboard =()=>{
  router.push({
    name: 'dashboard'
  })
}
const cards = reactive([
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
],
)
const signup = ()=>{
  router.push({
    name:'signup'
  })
}
const login =()=>{
    router.push({
    name:'login'
  })
}
const homepage =()=>{
    router.push({
    name:'home'
  })
}
</script>
<style >
</style>