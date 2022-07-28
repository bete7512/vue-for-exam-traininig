<template>
    <navBarVue />
        <v-container>
        <router-view>
        </router-view>
    </v-container>
</template>
<script setup lang="ts">
import FooterVue from '@/components/Footer.vue';
import navBarVue from '../navBar.vue'
import Homedashboard from './homedashboard.vue'
</script>
<style>
</style>