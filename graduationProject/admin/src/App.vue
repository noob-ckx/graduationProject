<template>
  <div id="app">
    {{inputVoltage}}<br>{{inputCurrent}}<br>{{invertInputVoltage}}<br>{{invertInputCurren}}<br>{{SCMPowerSupplyVoltage}}<br>
    {{SCMPowerSupplyCurrent}}<br>{{aOutputVolatge}}<br>{{aOutputCurrent}}<br>{{bOutputVolatge}}<br>{{bOutputCurrent}}<br>
    {{bOutputVolatge}}<br>{{bOutputCurrent}}<br>
    <button @click="send()">发送</button>

    <button-component>
      <p>这是测试</p>
      <template slot-scope="props">
        <span>{{ props.one }}</span>
      </template>
    </button-component>

    <button-component>
      <template slot-scope="props">
        <!-- <span>这是按钮2</span> -->
        <span>{{ props.two }}</span>
      </template>
    </button-component>
    <button-component>
      <template slot-scope="props">
        <!-- <span>这是按钮2</span> -->
        <span>{{ props.three }}</span>
      </template>
    </button-component>
    <button-component>
      <template slot-scope="props">
        <!-- <span>这是按钮2</span> -->
        <span>{{ props.four }}</span>
      </template>
    </button-component>
    <button-component>
      <template slot-scope="props">
        <!-- <span>这是按钮2</span> -->
        <span>{{ props.five }}</span>
      </template>
    </button-component>

  </div>
</template>

<script>
import { mapState } from "vuex";
import buttonComponent from "./btn/ButtonComponent";

export default {
  computed: {
    ...mapState([
      "inputVoltage",
      "inputCurrent",
      "invertInputVoltage",
      "invertInputCurren",
      "SCMPowerSupplyVoltage",
      "SCMPowerSupplyCurrent",
      "aOutputVolatge",
      "aOutputCurrent",
      "bOutputVolatge",
      "bOutputCurrent",
      "bOutputVolatge",
      "bOutputCurrent"
    ])
  },
  components: {
    buttonComponent
  },
  methods: {
    send() {
      this.$socket.emit("test", "something");
    }
  }
};
</script>
<style>

</style>
