import { createApp } from 'vue'
import App from './App.vue'
import { Button, Card, Col, Row } from 'vant'

const app = createApp(App)

app.use(Button)
app.use(Card)
app.use(Col)
app.use(Row)

app.mount('#app')
