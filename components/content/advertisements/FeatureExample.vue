<script setup>
const item = computed(() => ({
  title: "My Business",
  description: "This is a business description.",
  featured: true,
}));
</script>


<template>
  <DirectoryItem class="block w-96 h-42 my-8" :item="item" />
</template>