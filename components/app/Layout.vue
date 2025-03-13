<template>
  <div
    class="font-display grid min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white transition-colors"
  >
    <AppHeaderBanner />
    <AppNavbar />
    <div class="w-full h-full">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
