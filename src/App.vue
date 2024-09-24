<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 min-h-screen transition duration-300"
  >
    <MainWrap />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import MainWrap from "@/layouts/MainWrap.vue";

export default {
  components: {
    MainWrap,
  },
};
</script>
