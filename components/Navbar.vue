<template>
    <div class="navbar-wrapper">
      <a href="#">
        <img class="nav-logo" src="bicycle.png" alt="Bicycle logo">
      </a>
      <div class="flex gap-8">
        <a href="#">Route Planner</a>
        <div class="flex items-center gap-1">
          <Star/>
          <a href="#">My Route</a>
        </div>
      </div>

    </div>
</template>

<style scoped>
  .nav-logo {
    max-width: var(--spacer-9);
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




