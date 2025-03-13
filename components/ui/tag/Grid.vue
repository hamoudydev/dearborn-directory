<script setup lang="ts">
import type Tag from '~/types/Tag';

const tags = useAppConfig().directory.tags as Tag[] | undefined;
const { selectedTags, toggleTagByName } = useTags();
</script>

<template>
  <div class="flex flex-wrap gap-2 mt-4">
    <span
      v-for="tag in tags"
      class="border rounded-md px-2 py-1 hover:bg-gray-50 cursor-pointer select-none"
      :class="selectedTags.includes(tag.name) ? 'border-primary-500' : ''"
      @click="toggleTagByName(tag.name)"
    >
      {{ tag.name }}
    </span>
  </div>
</template>
