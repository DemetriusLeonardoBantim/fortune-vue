<template>
  <div class="bg-gray-50 border py-8 border-gray-200 px-4 rounded-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Wrapper',
});
</script>

<style></style>
