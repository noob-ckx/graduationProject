/**
 * API 基本信息配置
 * @author ckx
 * @version 1.0
 */

//暂定版

export default {
  'SWITCH_API':{
    type: 'SWITCH_ACTION',
    moutation: 'SWITCH_MOUTATION',
    Offsetbyte: 2,
    message: '开关量'
  },
  'INPUT_VOLTAGE_API':{
    type: 'INPUT_VOLTAGE_ACTION',
    moutation: 'INPUT_VOLTAGE_MOUTATION',
    Offsetbyte: 3 ,
    message: '输入电压'
  },
  'INPUT_CURRENT_API':{
    type: 'INPUT_CURRENT_ACTION',
    moutation: 'INPUT_CURREN_MOUTATION',
    Offsetbyte: 7 ,
    message: '输入电流'
  },
  'INVERT_INPUT_VOLTAGE_API':{
    type: 'INVERT_INPUT_VOLTAGE_ACTION',
    moutation: 'INVERT_INPUT_VOLTAGE_MOUTATION',
    Offsetbyte: 11,
    message: '逆变输入电压'
  },
  'INVERT_INPUT_CURRENT_API':{
    type: 'INVERT_INPUT_CURRENT_ACTION',
    moutation: 'INVERT_INPUT_CURRENT_MOUTATION',
    Offsetbyte: 15,
    message: '逆变输入电流'
  },
  'SCM_POWER_SUPPLY_VOLTAGE_API':{
    type: 'SCM_POWER_SUPPLY_VOLTAGE_ACTION',
    moutation: 'SCM_POWER_SUPPLY_VOLTAGE_MOUTATION',
    Offsetbyte: 19,
    message: '单片机测电源电压'
  },
  'SCM_POWER_SUPPLY_CURRENT_API':{
    type: 'SCM_POWER_SUPPLY_CURRENT_ACTION',
    moutation: 'SCM_POWER_SUPPLY_CURRENT_MOUTATION',
    Offsetbyte: 23,
    message: '单片机测电源电流'
  },


  'A_OUTPUT_VOLTAGE_API':{
    type: 'A_OUTPUT_VOLTAGE_ACTION',
    moutation: 'A_OUTPUT_VOLTAGE_MOUTATION',
    Offsetbyte: 27,
    message: 'A相输出电压'
  },
  'A_OUTPUT_CURRENT_API':{
    type: 'A_OUTPUT_CURRENT_ACTION',
    moutation: 'A_OUTPUT_CURRENT_MOUTATION',
    Offsetbyte: 31,
    message: 'A相输出电流'
  },

  'B_OUTPUT_VOLTAGE_API':{
    type: 'B_OUTPUT_VOLTAGE_ACTION',
    moutation: 'B_OUTPUT_VOLTAG_MOUTATION',
    Offsetbyte: 35,
    message: 'B相输出电压'
  },
  'B_OUTPUT_CURRENT_API':{
    type: 'B_OUTPUT_CURRENT_ACTION',
    moutation: 'B_OUTPUT_CURRENT_MOUTATION',
    Offsetbyte: 39,
    message: 'B相输出电流'
  },

  'C_OUTPUT_VOLTAGE_API':{
    type: 'C_OUTPUT_VOLTAGE_ACTION',
    moutation: 'C_OUTPUT_VOLTAGE_MOUTATION',
    Offsetbyte: 43,
    message: 'C相输出电压'
  },
  'C_OUTPUT_CURRENT_API':{
    type: 'C_OUTPUT_CURRENT_ACTION',
    moutation: 'C_OUTPUT_CURRENT_MOUTATION',
    Offsetbyte: 47,
    message: 'C相输出电流'
  },
  //采样数据没写 
}
