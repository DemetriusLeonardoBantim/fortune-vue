<template>
  <nav class="bg-white text-gray-600 border-b-2">
    <div class="mx-auto px-2">
      <div class="flex items-center justify-between h-16">
        <p class="text-sm sm:text-xl ml-2 md:ml-10 sm:font-extralight mr-2">
          {{ currentRouteName }}
        </p>
        <div class="flex-grow"></div>
        <div
          class="
            flex
            items-center
            justify-end
            bg-gray-100
            rounded-md
            px-3
            py-2
            cursor-pointer
            h-12
            mr-2
          "
          @click="toggleShowMoney"
        >
          <p class="text-xs sm:text-sm font-medium">
            {{
              showMoney
                ? currentMoney.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : 'R$ ' +
                  currentMoney
                    .toString()
                    .split('')
                    .map((c) => '~')
                    .join('')
            }}
          </p>
          <eye-icon
            class="h-5 w-5 ml-1 text-gray-500"
            v-show="!showMoney"
          ></eye-icon>
          <eye-off-icon
            class="h-5 w-5 ml-1 text-gray-500"
            v-show="showMoney"
          ></eye-off-icon>
        </div>
        <div
          class="
            flex
            items-center
            bg-gray-100
            rounded-md
            px-3
            py-2
            cursor-pointer
            h-12
          "
        >
          <p class="mr-2 text-xs hidden sm:block">RanielApostador1337</p>
          <div
            class="
              bg-gray-500
              h-8
              w-8
              rounded-full
              text-white
              flex
              items-center
              justify-center
            "
          >
            R
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    EyeIcon,
    EyeOffIcon,
  },
  name: 'HeaderBar',
  setup() {
    const route = useRoute();

    const currentMoney = 751.12;

    const showMoney = ref(false);

    const toggleShowMoney = () => {
      showMoney.value = !showMoney.value;
    };

    return {
      showMoney,
      toggleShowMoney,
      currentMoney,
      currentRouteName: computed(() => route.name),
    };
  },
});
</script>

<style></style>
