import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VeeValidatePlugin from "./plugins/validation"
import { createPinia } from 'pinia'
import apolloclient from './apollo'
loadFonts()
const pinia = createPinia()
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloclient)
    },
    render: () => h(App),
});
app.use(VeeValidatePlugin)
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')










//0992115567 mestawet  re)
//0924251760 alemayehu re)