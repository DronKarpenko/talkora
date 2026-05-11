<template>
  <div class='layout layout-profile'>
    <aside class='profile-sidebar'>
      <NuxtLink to='/profile'>Профиль</NuxtLink>
      <NuxtLink to='/'>На главную</NuxtLink>
    </aside>
    <main class='layout-content'>
      <slot />
    </main>
  </div>
</template>
