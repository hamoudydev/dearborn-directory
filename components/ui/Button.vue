<script setup lang="ts">
const props = defineProps(['icon', 'color']);
</script>

<template>
  <button type="button"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white focus-visible:ring-primary-500 inline-flex items-center">
    <Icon v-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <slot />
  </button>
</template>
