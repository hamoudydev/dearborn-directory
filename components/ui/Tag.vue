<script setup lang="ts">
import type Tag from '~/types/Tag';
const config = useAppConfig().directory.tags as Tag[] | undefined;

const props = defineProps(['tag']);

const configTag = config?.find(element => element.name === props.tag);

const tagClass = computed(() => {
  return configTag?.color ? `${configTag.color}-tag` : 'gray-tag';
});
</script>

<template>
  <span :class="tagClass">
    {{ tag }}
  </span>
</template>


<style scoped lang="postcss">
.tag {
  @apply inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset;
}

.gray-tag {
  @apply tag bg-gray-50 text-gray-600 ring-gray-500/10 bg-gray-400/10;
}

.green-tag {
  @apply tag bg-green-50 text-green-700 ring-green-600/20;
}

.blue-tag {
  @apply tag bg-blue-50 text-blue-700 ring-blue-600/20;
}

.indigo-tag {
  @apply tag bg-blue-50 text-indigo-700 ring-indigo-600/20;
}

.yellow-tag {
  @apply tag bg-orange-50 text-yellow-700 ring-yellow-600/20;
}

.red-tag {
  @apply tag bg-red-50 text-red-700 ring-red-600/20;
}

.purple-tag {
  @apply tag bg-purple-50 text-purple-700 ring-purple-600/20;
}

.pink-tag {
  @apply tag bg-pink-50 text-pink-700 ring-pink-600/20;
}

.orange-tag {
  @apply tag bg-orange-50 text-orange-700 ring-orange-600/20;
}
</style>