<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'testhttp',
  created () {
    this.getInfoPost()
    this.getInfoGet()
  },
  methods: {
    getInfoPost () {
      this.$http('getInfoPost')
        .then(res => {
          console.log(res)
        })
    },
    getInfoGet () {
      this.$http('getInfoGet')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>script
