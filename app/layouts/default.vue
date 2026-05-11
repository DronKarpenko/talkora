<template>
  <div class='layout layout-default'>
    <header class='layout-header'>
      <nav class='nav-menu'>
        <NuxtLink to='/'>Главная</NuxtLink>
        <NuxtLink to='/about'>О проекте</NuxtLink>
        <NuxtLink to='/login'>Вход</NuxtLink>
        <NuxtLink to='/profile'>Профиль</NuxtLink>
      </nav>
    </header>
    <main class='layout-content'>
      <slot />
    </main>
  </div>
</template>
