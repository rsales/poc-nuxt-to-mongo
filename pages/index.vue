<template>
  <div>
    <h1>List Users</h1>
    <ul>
      <li v-for="user in users" :key="user._id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: users } = await useFetch('/api/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
</script>