<script lang="ts" setup>
const config = useAppConfig();
useHead({
  htmlAttrs: {
    lang: config.general.language,
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png',
    },
  ],
});
</script>

<template>
  <AppLayout>
    <NuxtLayout>
      <DocumentProse>
        <NuxtPage class="page-enter-active" />
      </DocumentProse>
    </NuxtLayout>
  </AppLayout>
</template>

<style>
.dark body {
  @apply bg-gray-800;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(.5rem)
  }

  to {
    opacity: 1;
    transform: none
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(.5rem)
  }
}

.page-enter-active {
  animation: fadeInUp .6s forwards
}

.page-leave-active {
  animation: fadeOutDown .6s backwards;
}
</style>
