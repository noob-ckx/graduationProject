<template>
  <div id="app">
    {{inputVoltage}}<br>{{inputCurrent}}<br>{{invertInputVoltage}}<br>{{invertInputCurren}}<br>{{SCMPowerSupplyVoltage}}<br>
    {{SCMPowerSupplyCurrent}}<br>{{aOutputVolatge}}<br>{{aOutputCurrent}}<br>{{bOutputVolatge}}<br>{{bOutputCurrent}}<br>
    {{bOutputVolatge}}<br>{{bOutputCurrent}}

    
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
  }
};
//       inputVoltage: 0,
//       inputVoltage: 0,
//       inputCurrent: 0,
//       invertInputVoltage: 0,
//       invertInputCurren: 0,
//       SCMPowerSupplyVoltage: 0,
//       SCMPowerSupplyCurrent: 0,
//       aOutputVolatge: 0,
//       aOutputCurrent: 0,
//       bOutputVolatge: 0,
//       bOutputCurrent: 0,
//       cOutputVolatge: 0,
//       cOutputCurrent: 0,
</script>
<style>

</style>
