<template>
  <div
    class="
      absolute
      from-green-800
      to-green-700
      bg-gradient-to-tl
      h-screen
      w-64
      transform
      transition-transform
      ease-in-out
      duration-300
    "
    :class="{
      'translate-x-0': extended,
      'pl-44 -translate-x-44': !extended,
    }"
  >
    <div class="h-20 px-2 py-4 flex items-center justify-center">
      <p class="ml-4 text-2xl text-white font-semibold" v-show="extended">
        fortune
      </p>
      <div class="flex-grow" v-show="extended"></div>
      <menu-icon
        class="text-white w-6 h-6 cursor-pointer"
        :class="{
          'mr-2': extended,
        }"
        @click="toggleSidebar"
      />
    </div>
    <ul class="px-2">
      <router-link
        :to="item.to"
        v-for="(item, index) in menuItems"
        :key="index"
      >
        <li
          @click="extended ? toggleSidebar() : () => ({})"
          class="
            text-green-200
            rounded-md
            my-1
            py-2
            px-3
            flex
            items-center
            cursor-pointer
            hover:bg-black hover:bg-opacity-20
            transition-colors
            duration-100
          "
          :class="{
            'bg-black bg-opacity-20': verifyActiveRoute(item.to),
            'justify-center': !extended,
          }"
        >
          <component
            v-if="item.icon"
            :is="item.icon"
            class="h-6 w-6 bg-red"
            :class="{
              'text-green-300': verifyActiveRoute(item.to),
              'text-green-400': !verifyActiveRoute(item.to),
              'mr-3 ml-2': extended,
            }"
          ></component>
          <div
            v-else
            class="
              from-green-400
              to-green-100
              bg-gradient-to-tr
              rounded-full
              w-6
              h-6
              block
            "
            :class="{
              'mr-3 ml-2': extended,
            }"
          ></div>
          <p
            class="text-sm"
            v-show="extended"
            :class="{ 'text-green-50': verifyActiveRoute(item.to) }"
          >
            {{ item.label }}
          </p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { CogIcon, MenuIcon } from '@heroicons/vue/outline';
import { TransitionRoot } from '@headlessui/vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    MenuIcon,
    TransitionRoot,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const menuItems = ref([
      {
        label: 'Dashboard',
        to: '/dashboard',
      },
      {
        label: 'Sorteios',
        to: '/sorteios',
      },
      {
        label: 'Clientes',
        to: '/clientes',
      },
      {
        label: 'Endereços',
        to: '/enderecos',
      },
      {
        label: 'Configurações',
        icon: CogIcon,
        to: '/configuracoes',
      },
    ]);

    const currentRoute = computed(() => route.fullPath);

    const verifyActiveRoute = (routePath: string) => {
      return currentRoute.value === routePath;
    };

    return {
      extended: computed(() => store.state.UIModule.extended),
      toggleSidebar: () => store.dispatch('UIModule/toggleSidebar'),
      menuItems,
      currentRoute,
      verifyActiveRoute,
    };
  },
});
</script>

<style></style>
