<template>
    <div class="navbar-wrapper">
      <a href="#">
        <img class="nav-logo" src="bicycle.png" alt="Bicycle logo">
      </a>
      <a href="#">Route Planner</a>
      <Star/>
      <a href="#">My Route</a>

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




