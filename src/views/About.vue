<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  },
  created () {
    console.log('a')
  }
}
</script>

<style lang="scss">
.about {
  h1 {
    font-size: 30px;
  }
}
</style>
