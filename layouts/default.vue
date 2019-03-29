<template>
  <div>
    <no-ssr>
      <notifications group="main" />
    </no-ssr>

    <div class="header">
      <b-container>
        <div class="d-flex justify-content-between">
          <h3 class="text-muted">Nuxt Boilerplate</h3>
          <b-nav class="nav-pills">
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-nav>
        </div>
      </b-container>
    </div>

    <b-container>
      <nuxt :nuxt-child-key="$route.fullPath"></nuxt>
    </b-container>

    <div class="footer">
      <b-container>
        <p class="float-right">
          Made with Love by Company
        </p>
      </b-container>
    </div>
  </div>
</template>
