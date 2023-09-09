import { createApp } from 'vue';

import App from './App.vue';
import FriendContant from './components/FriendContant.vue';

const app = createApp(App);

app.component('friend-contact', FriendContant );
app.mount('#app');