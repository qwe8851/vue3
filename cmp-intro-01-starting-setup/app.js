const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '1234 567 890',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0000 000 000',
                    email: 'julie@localhost.com',
                },
            ]
        }
    },
    methods: {
    },

});

// 첫번째 인수 : 항상 -를 포함한 식별자를 사용해야 함.
// 두번째 인수 : createApp에 전달한 것과 같은 구성 객체
app.component('friend-contact', {
    template: `
        <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '1234 567 890',
                email: 'manuel@localhost.com',
            }, 
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});

app.mount('#app');