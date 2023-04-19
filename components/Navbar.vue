<template>
    <div class="navbar-wrapper">
      <img class="nav-logo" src="bicycle.png" alt="Bicycle logo">
      <a href="#">About</a>
      <a href="#">Events</a>
      <a href="#">News</a>
      <a href="#">Contact Us</a>
    </div>
</template>

<style scoped>
  .nav-logo {
    max-width: 100px;
  }

  .navbar-wrapper {
    max-width: var(--contentMaxWidth);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    font-family: sans-serif;
  }
</style>




