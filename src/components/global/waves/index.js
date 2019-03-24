import wave from "./waves.js";
 
const waves = {
  install(Vue) {
    Vue.directive("waves", wave);
  }
};
export default waves;
