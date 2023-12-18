<template>
  <wrapper>
    <p class="text-2xl">Não encontrado</p>
  </wrapper>
</template>

<script lang="ts">
import Wrapper from '@/components/Wrapper.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Wrapper,
  },
});
</script>

<style></style>
