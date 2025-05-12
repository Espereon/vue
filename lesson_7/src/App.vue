<script setup></script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/dashbord">Go to Dashboar</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
        <RouterLink to="/notfound">Go to NotFound</RouterLink>
      </nav>
    </header>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
