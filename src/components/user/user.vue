<template>
  <div class="container">
    <p>User Page</p>
    <!--<p>Loaded ID:  {{id}}</p>-->
    <button @click="navigateHome" class="btn btn-primary">Go to Home</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  data () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
    }
  },
  methods: {
    navigateHome () {
      this.$router.push('/')
    }
  }
}
</script>
