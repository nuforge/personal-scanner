<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-main class="mx-auto">
        <router-view></router-view>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const theme = ref('dark')

</script>

<style scoped></style>
