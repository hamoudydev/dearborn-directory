<script setup lang="ts">
import type { DirectoryCollectionItem } from '@nuxt/content';

const cardConfig = useAppConfig().directory?.grid?.card;

const props = withDefaults(defineProps<{
  item: DirectoryCollectionItem;
  fullPath?: boolean;
}>(), { fullPath: false });

const link = props.fullPath ? props.item.path : `/${props.item.path.split('/')[2]}`;
</script>

<template>
  <NuxtLink
    v-if="cardConfig?.type !== 'bullet'"
    :to="link"
    class="border col-span-1 border-gray-200 hover:border-primary-400 hover:border-solid rounded relative group transition-all"
    :class="cardConfig?.type === 'shadow' ? 'shadow-sm' : cardConfig?.type === 'dashed' ? 'border-dashed' : ''"
  >
    <DirectoryFeaturedTag
      v-if="item.featured"
      class="ml-6"
    />
    <NuxtImg
      v-if="item.card_image"
      sizes="400px"
      :alt="`${item.title} banner`"
      class="w-full h-48 rounded-t object-contain"
      :src="item.card_image ?? '/logo.png'"
    />
    <div
      v-else
      class="w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200"
    >
      {{ item.title }}
    </div>
    <div class="p-6">
      <h3 class="m-0 text-lg font-semibold">
        {{ item.title }}
      </h3>
      <p class="line-clamp-4 mt-2">
        {{ item.description }}
      </p>
      <div class="p-0 mt-2 flex gap-2 flex-wrap">
        <UiTag
          v-for="tag in item.tags"
          :key="tag"
          :tag="tag"
        />
      </div>
    </div>
  </NuxtLink>
  <NuxtLink
    v-else
    :to="item.path"
  >
    <div class="inline-flex gap-2 items-center">
      <img
        class="h-5 w-5"
        :src="item.cover ?? '/logo.png'"
      >
      <span class="font-semibold">{{ item.title }}</span> -
      <span class="text-gray-600">{{ item.description }}</span>
    </div>
  </NuxtLink>
</template>
