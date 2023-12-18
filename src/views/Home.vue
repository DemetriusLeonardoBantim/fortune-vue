<template>
  <div class="bg-gray-100 w-screen h-screen flex items-start">
    <aside class="min-w-20 z-20 h-screen">
      <side-bar />
    </aside>
    <main class="flex flex-col h-screen flex-grow">
      <header-bar />
      <div class="overflow-auto flex-grow">
        <div class="mt-8 mx-4">
          <router-view />
        </div>
      </div>
    </main>
    <div
      class="w-screen h-screen ease-in-out bg-black bg-opacity-25 absolute z-10"
      v-show="extended"
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import SideBar from '@/components/Sidebar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    HeaderBar,
  },
  setup() {
    const store = useStore();

    return {
      extended: computed(() => store.state.UIModule.extended),
      toggleSidebar: () => store.dispatch('UIModule/toggleSidebar'),
    };
  },
});
</script>
