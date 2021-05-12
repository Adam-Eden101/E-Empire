<template>
    <section>
        <p>Users</p>
        <p v-for="user in users" :key="user.id">{{ user.username }}</p>
    </section>
</template>

<script>
const axios = require('axios');

export default {
    name: "Users",
    data() {
        return {
            users: [],
        }
    },
    async mounted() {
        const response = await axios.get('http://localhost:3000/users');
        this.users = response.data;
    }
}

</script>
