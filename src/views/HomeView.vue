<template>
  <h1>Home</h1>
  <nav>
    <RouterLink to="/defense">Personal Defense</RouterLink><br />
    <RouterLink to="/scanner">Personal Scanner</RouterLink>
  </nav>
  <v-card>
    <v-row>
      <v-col>
        <PersonalScanner />
      </v-col>
      <v-col>
        <PersonalDefense />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import PersonalDefense from './PersonalDefense.vue';
import PersonalScanner from './PersonalScanner.vue';

</script>
