<template>
  <div class="text-gray-600">
    <label for="" class="text-xs font-semibold px-1">{{ label }}</label>
    <div class="flex items-center">
      <BookmarkIcon
        class="pl-2 pointer-events-none z-10 h-7 w-7 text-gray-400"
      />
      <input
        type="text"
        :placeholder="`Informe o ${placeholder || label.toLowerCase()}`"
        class="
          w-full
          -ml-7
          pl-9
          focus:ring-green-500 focus:border-green-500
          transition-colors
          duration-300
          block
          border
          shadow-sm
          sm:text-sm
          border-gray-300
          rounded-md
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BookmarkIcon } from '@heroicons/vue/outline';

export default defineComponent({
  name: 'FInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
  components: {
    BookmarkIcon,
  },
});
</script>

<style></style>
