<template>
  <div id="app">
      <text-props :propsa="count"></text-props>
      <text-props-t :propsT="test"></text-props-t>
  </div>
</template>

<script>
import { mapState} from "vuex";
import TextProps from './components/props/TextProps'
import TextPropsT from './components/props/TextPropsT'
export default {
  computed: {
    ...mapState(["count", "test"]),
  },
  components:{
    TextProps,TextPropsT
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
