<template>
   <div>
      <component :is="currentComponent" :employeeID="employeeID" :key="updateComponent"></component>
   </div>
</template>

<script>

export default {
   computed: {
      isAddEmployee() {
         return this.$route.name === 'AddEmployee'
      },
      isEditEmployee() {
         return this.$route.name === 'EditEmployee'
      }
   },
   created() {
      this.employeeID = this.$route.params && Object.keys(this.$route.params).length === 0 && this.$route.params.constructor === Object ? null : this.$route.params.employeeID

      if (this.isAddEmployee) {
         this.currentComponent = () => import(/* webpackPrefetch: true */ '../components/AddEmployee')
      }
      if (this.isEditEmployee) {
         this.currentComponent = () => import(/* webpackPrefetch: true */ '../components/EditEmployee')
      }
   },
   data() {
      return {
         employeeID: null,
         currentComponent: null,
         updateComponent: 1
      }
   },
   watch: {
    $route(to) {
       console.log(to)
      if (to.name === 'AddEmployee') {
         this.currentComponent = () => import(/* webpackPrefetch: true */ '../components/AddEmployee')
      }
      if (to.name === 'EditEmployee') {
         this.currentComponent = () => import(/* webpackPrefetch: true */ '../components/EditEmployee')
      }
      this.updateComponent++
    }
  }
}
</script>

<style lang="scss" scoped>
   
</style>
