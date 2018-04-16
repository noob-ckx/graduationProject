import api from '../config'

export default {
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
}