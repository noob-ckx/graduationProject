<template>
  <div id="app">
    {{inputVoltage}}<br>{{inputCurrent}}<br>{{invertInputVoltage}}<br>{{invertInputCurren}}<br>{{SCMPowerSupplyVoltage}}<br>
    {{SCMPowerSupplyCurrent}}<br>{{aOutputVolatge}}<br>{{aOutputCurrent}}<br>{{bOutputVolatge}}<br>{{bOutputCurrent}}<br>
    {{bOutputVolatge}}<br>{{bOutputCurrent}}

    <button @click="send()">发送</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["inputVoltage","inputCurrent",
    "invertInputVoltage","invertInputCurren","SCMPowerSupplyVoltage",
    "SCMPowerSupplyCurrent","aOutputVolatge","aOutputCurrent",
    "bOutputVolatge","bOutputCurrent","bOutputVolatge","bOutputCurrent",
    ])
  },
  methods: {
    send() {
      this.$socket.emit('test', "something");
    }
  },
};
</script>
<style>

</style>
