import { createApp } from 'vue'
import './css/style.scss'

import Experience from './experience/experience'

import UI from './ui.vue'

const experience = new Experience(document.querySelector('#webgl'))

const app = createApp(UI)
app.mount('#ui')
