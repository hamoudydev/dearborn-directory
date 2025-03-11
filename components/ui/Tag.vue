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
  @apply tag bg-gray-50 text-gray-600 ring-gray-500/10 bg-gray-400/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20;
}

.green-tag {
  @apply tag bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20;
}

.blue-tag {
  @apply tag bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30;
}

.indigo-tag {
  @apply tag bg-blue-50 text-indigo-700 ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30
}

.yellow-tag {
  @apply tag bg-orange-50 text-yellow-700 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30
}

.red-tag {
  @apply tag bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30
}

.purple-tag {
  @apply tag bg-purple-50 text-purple-700 ring-purple-600/20 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30
}

.pink-tag {
  @apply tag bg-pink-50 text-pink-700 ring-pink-600/20 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/30
}

.teal-tag {
  @apply tag bg-teal-50 text-teal-700 ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/30
}

.cyan-tag {
  @apply tag bg-cyan-50 text-cyan-700 ring-cyan-600/20 dark:bg-cyan-400/10 dark:text-cyan-400 dark:ring-cyan-400/30
}

.lime-tag {
  @apply tag bg-lime-50 text-lime-700 ring-lime-600/20 dark:bg-lime-400/10 dark:text-lime-400 dark:ring-lime-400/30
}

.amber-tag {
  @apply tag bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/30
}

.orange-tag {
  @apply tag bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30
}

.emerald-tag {
  @apply tag bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/30
}

.sky-tag {
  @apply tag bg-sky-50 text-sky-700 ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/30
}
</style>