<script setup lang="ts">
const search: Ref<string> = useState('search');
const selectedTags: Ref<string[]> = useState('tags', () => []);

const searchConfig = useAppConfig().directory.search;
const searchPlaceholder = await getSearchPlaceholder();

async function getSearchPlaceholder() {
  if (searchConfig?.placeholder && searchConfig.placeholder.includes('{0}')) {
    const { data: count } = await useAsyncData('content-count', () => queryCollection('directory').count());
    return formatString(searchConfig?.placeholder ?? 'Search {0} businesses', count.value);
  }

  return searchConfig?.placeholder ?? 'Search';
}

const searchInput = useKeyFocus();
</script>

<template>
  <div class="mb-10 not-prose">
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div
          v-if="searchConfig?.icon"
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <Icon
            :name="searchConfig.icon"
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          ref="searchInput"
          v-model="search"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          :class="searchConfig?.icon ? 'pl-10' : ''"
          :placeholder="searchPlaceholder"
        >
<!--      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400 dark:border-gray-500 dark:text-gray-500"
          >⌘K</kbd>
        </div>-->
      </div>
    </div>
    <UiTagSelect v-if="searchConfig?.tags?.display === 'select'" />
    <UiTagGrid v-else-if="searchConfig?.tags?.display === 'show-all'" />
  </div>
</template>
