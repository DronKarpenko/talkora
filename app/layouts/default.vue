<template>
  <div class='layout layout-default'>
    <header class='layout-header'>
      <nav>
        <NuxtLink to='/'>Главная</NuxtLink>
        <NuxtLink to='/about'>About</NuxtLink>
        <NuxtLink to='/auth/login'>Login</NuxtLink>
        <NuxtLink to='/profile'>Profile</NuxtLink>
      </nav>
    </header>
    <main class='layout-content'>
      <slot />
    </main>
  </div>
</template>
