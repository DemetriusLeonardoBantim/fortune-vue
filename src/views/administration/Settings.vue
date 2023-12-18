<template>
  <wrapper>
    <div class="grid grid-cols-3 gap-6">
      <div class="px-4 sm:px-0 lg:col-span-1 col-span-3">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Configurações padrões
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          Aqui pode ser definido as configurações de interface do seu site.
        </p>
      </div>
      <div class="grid grid-cols-6 gap-4 lg:col-span-2 col-span-3">
        <f-input class="col-span-6 md:col-span-3" label="Nome do site" />
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <button
        class="bg-green-600 w-full md:w-auto px-4 py-2 text-white rounded-md"
      >
        Salvar
      </button>
    </div>
  </wrapper>
</template>

<script lang="ts">
// name
// contact_number
// logo
// banner
// primary_color
// secondary_color

import { defineComponent } from 'vue';
import Wrapper from '@/components/Wrapper.vue';
import FInput from '@/components/forms/FInput.vue';

export default defineComponent({
  name: 'SettingsView',
  components: {
    Wrapper,
    FInput,
  },
});
</script>

<style></style>
