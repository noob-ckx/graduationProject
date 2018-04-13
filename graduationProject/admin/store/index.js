import Vue from 'vue'
import Vuex from 'vuex'
import api from './config'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = () => {
  return new Vuex.Store({
    state: {
      inputVoltage: 0,
      inputCurrent: 0,
      invertInputVoltage: 0,
      invertInputCurren: 0,
      SCMPowerSupplyVoltage: 0,
      SCMPowerSupplyCurrent: 0,
      aOutputVolatge: 0,
      aOutputCurrent: 0,
      bOutputVolatge: 0,
      bOutputCurrent: 0,
      cOutputVolatge: 0,
      cOutputCurrent: 0,
    },
    actions: {
      someActions({commit}, {data,success,fail}) {
        let BUF = Buffer.from(data)//复制传入的Buffer实例的数据，并返回一个新的Buffer，不复制无法进行Buffer操作
        //输入电压
        commit(api.INPUT_VOLTAGE_API.moutation,BUF.readFloatBE(api.INPUT_VOLTAGE_API.Offsetbyte))
        //输入电流
        commit(api.INPUT_CURRENT_API.moutation,BUF.readFloatBE(api.INPUT_CURRENT_API.Offsetbyte))
        //逆变输入电压
        commit(api.INVERT_INPUT_VOLTAGE_API.moutation,BUF.readFloatBE(api.INVERT_INPUT_VOLTAGE_API.Offsetbyte))
        //逆变输入电流
        commit(api.INVERT_INPUT_CURRENT_API.moutation,BUF.readFloatBE(api.INVERT_INPUT_CURRENT_API.Offsetbyte))
        //单片机测电源电压
        commit(api.SCM_POWER_SUPPLY_VOLTAGE_API.moutation,BUF.readFloatBE(api.SCM_POWER_SUPPLY_VOLTAGE_API.Offsetbyte))
        //单片机测电源电流
        commit(api.SCM_POWER_SUPPLY_CURRENT_API.moutation,BUF.readFloatBE(api.SCM_POWER_SUPPLY_CURRENT_API.Offsetbyte))
        //A相输出电压
        commit(api.A_OUTPUT_VOLTAGE_API.moutation,BUF.readFloatBE(api.A_OUTPUT_VOLTAGE_API.Offsetbyte))
        //A相输出电流
        commit(api.A_OUTPUT_CURRENT_API.moutation,BUF.readFloatBE(api.A_OUTPUT_CURRENT_API.Offsetbyte))
        //B相输出电压
        commit(api.B_OUTPUT_VOLTAGE_API.moutation,BUF.readFloatBE(api.B_OUTPUT_VOLTAGE_API.Offsetbyte))
        //B相输出电流
        commit(api.B_OUTPUT_CURRENT_API.moutation,BUF.readFloatBE(api.B_OUTPUT_CURRENT_API.Offsetbyte))
        //C相输出电压
        commit(api.C_OUTPUT_VOLTAGE_API.moutation,BUF.readFloatBE(api.C_OUTPUT_VOLTAGE_API.Offsetbyte))
        //C相输出电流
        commit(api.C_OUTPUT_CURRENT_API.moutation,BUF.readFloatBE(api.C_OUTPUT_CURRENT_API.Offsetbyte))
      }
    },
    mutations: {
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
    },
    modules: {},
    strict: debug
  })
}
export default store