<template>
<section>
    <h2>My Friends</h2>
    <ul>
        <friend-contact />
    </ul>
</section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '1234 5678 90',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0000 0000 00',
                    email: 'julie@localhost.com',
                },
            ]      
        }
    },

};
</script>