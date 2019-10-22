<template>
  <div class="header">
    <div class="header-inner">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="nav">
        <div class="menu"></div>
        <div class="tool">
          <a class="github" href="https://github.com/Teacher-Li/leo-ui">

            <o-icon type="github" size="24"></o-icon>

            {{ $Version }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>