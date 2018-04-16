import api from '../config'

export default {
    [api.INPUT_VOLTAGE_API.moutation](state, payload) {
        state.inputVoltage = payload
      },
      //输入电压
      [api.INPUT_VOLTAGE_API.moutation](state, payload) {
        state.inputVoltage = payload
      },
      //输入电流
      [api.INPUT_CURRENT_API.moutation](state, payload) {
        state.inputCurrent = payload
      },
      //逆变输入电压
      [api.INVERT_INPUT_VOLTAGE_API.moutation](state, payload) {
        state.invertInputVoltage = payload
      },
      //逆变输入电流
      [api.INVERT_INPUT_CURRENT_API.moutation](state, payload) {
        state.invertInputCurren = payload
      },

      //单片机测电源电压
      [api.SCM_POWER_SUPPLY_VOLTAGE_API.moutation](state, payload) {
        state.SCMPowerSupplyVoltage = payload
      },
      //单片机测电源电流
      [api.SCM_POWER_SUPPLY_CURRENT_API.moutation](state, payload) {
        state.SCMPowerSupplyCurrent = payload
      },

      //A相输出电压
      [api.A_OUTPUT_VOLTAGE_API.moutation](state, payload) {
        state.aOutputVolatge = payload
      },
      //A相输出电流
      [api.A_OUTPUT_CURRENT_API.moutation](state, payload) {
        state.aOutputCurrent = payload
      },

      //B相输出电压
      [api.B_OUTPUT_VOLTAGE_API.moutation](state, payload) {
        state.bOutputVolatge = payload
      },
      //B相输出电流
      [api.B_OUTPUT_CURRENT_API.moutation](state, payload) {
        state.bOutputCurrent = payload
      },
      //C相输出电压
      [api.C_OUTPUT_VOLTAGE_API.moutation](state, payload) {
        state.cOutputVolatge = payload
      },
      //C相输出电流
      [api.C_OUTPUT_CURRENT_API.moutation](state, payload) {
        state.cOutputCurrent = payload
      },
}