import { getComponentMap, getPropsMap } from './mapping'

export function arcoDesignVue2() {
  return {
    uiName: '@arco-design/web-vue2',
    map: getPropsMap(),
    lib: '@arco-design/web-vue',
  }
}

export function arcoDesignVue2Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'a',
    lib: '@arco-design/web-vue',
    isReact: false,
  }
}
