<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style>
.app {
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  gap: 50px;

  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
