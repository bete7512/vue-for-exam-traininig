import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VeeValidatePlugin from "./plugins/validation"
//0992115567 mestawet  re)
//0924251760 alemayehu re)
loadFonts()
const app = createApp(App)
app.use(VeeValidatePlugin)
    .use(router)
   .use(vuetify)
   .mount('#app')