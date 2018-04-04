<template>
  <div>
    这里显示第二个组件的信息：{{this.propsT}}
  </div>
</template>

<script>
  export default {
    props:['propsT'],
  } 
</script>

<style scoped>

</style>