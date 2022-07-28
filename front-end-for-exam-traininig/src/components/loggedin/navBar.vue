<template>
    <nav>
        <v-toolbar rounded shaped>
            <v-app-bar-nav-icon class="" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Vuetify getting started</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="mx-4" @click="signout">
                <v-toolbar-title >sign out</v-toolbar-title>
                <v-icon class="px-4" >mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer   v-model="drawer" temporary>
            <v-list-item row wrap class="px-6 py-4 ">
                <v-list-item-avatar color="green" class="px-2" size="100">
                    <img src="https://images.pexels.com/photos/12367877/pexels-photo-12367877.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt="hera">
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item-title class="px-6 py-3" color="red--text">Bete Goshme</v-list-item-title>
            <v-list-item-subtitle class="px-6 py-2">Logged In</v-list-item-subtitle>
            <v-divider></v-divider>
            <v-list nav dense class="py-6">
                <v-list-item link >
                    <v-list-item-icon class="px-2">
                        mdi-view-dashboard
                    </v-list-item-icon>
                    <v-list-item-title class="px-2 py-4" @click="gotodashboard">Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        mdi-folder
                    </v-list-item-icon>
                    <v-list-item-title class="px-2 py-4">My Files</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>mdi-home-city</v-list-item-icon>
                    <v-list-item-title class="px-2 py-4" @click="routetoprojects">My projects</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>mdi-account-multiple</v-list-item-icon>
                    <v-list-item-title class="px-2 py-4">Team</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>mdi-email</v-list-item-icon>
                    <v-list-item-title class="px-2 py-4">Messages</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="pt-10"></v-list-item>
                <v-list-item class="pt-10"></v-list-item>
                <v-list-item link  >
                    <v-list-item-icon >mdi-email</v-list-item-icon>
                    <v-list-item-title class="px-2 ">setting</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>mdi-help-box</v-list-item-icon>
                    <v-list-item-title class="px-2 ">Help</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
          
    </nav>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue'


const drawer = ref(false)
const router = useRouter()
const route = useRoute()
const routetoprojects = ()=>{
    router.push({
        name:'projects',
        params:{
            id:'projects'
        }
})

}
const signout =()=>{
    router.push({
        name:'home'
    })
}

const gotodashboard = ()=>{
    router.push({
        name:'dashboard'
    })
}
</script>
<style >
</style>