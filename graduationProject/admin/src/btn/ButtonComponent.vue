<template>
    <div>
        <slot :one='get[0]'>
        </slot>
        <slot :two='get[1]'>
        </slot>
        <slot :three='get[2]'>
        </slot>
        <slot :four='get[3]'>
        </slot>
        <slot :five='get[4]'>
        </slot>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {

  computed: {
    ...mapState(["power"]),
    get(){
        let ceshi = this.power.toString(2).split("");
        let n = 5 - ceshi.length;
        while(n--){
            ceshi.unshift("0")
        }
        return ceshi;
    }
  }
};
</script>

<style scoped>

</style>