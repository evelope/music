import "./waves.css";
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
const equipment = detectDeviceType();
export default {
  bind(el, binding) {
    let evenName = equipment == "Desktop" ? "mousedown" : "touchstart";
    el.addEventListener(
      evenName,
      e => {
        let eve = equipment == "Desktop" ? e : e.touches[0];
        const customOpts = Object.assign({}, binding.value);
        const opts = Object.assign(
          {
            ele: el, // 波纹作用元素
            type: "hit", // hit 点击位置扩散 center中心点扩展
            color: "rgba(0, 0, 0, 0.15)" // 波纹颜色
          },
          customOpts
        );
        const target = opts.ele;
        if (target) {
          if (
            !window.getComputedStyle(target, null).position ||
            window.getComputedStyle(target, null).position == "static" ||
            window.getComputedStyle(target, null).position == "initial"
          ) {
            target.style.position = "relative";
          }
          target.style.overflow = "hidden";
          const rect = target.getBoundingClientRect();
          let ripple = target.querySelector(".waves-ripple");
          if (!ripple) {
            ripple = document.createElement("span");
            ripple.className = "waves-ripple";
            ripple.style.height = ripple.style.width =
              Math.max(rect.width, rect.height) + "px";
            target.appendChild(ripple);
          } else {
            ripple.className = "waves-ripple";
          }
          switch (opts.type) {
            case "center":
              ripple.style.top =
                rect.height / 2 - ripple.offsetHeight / 2 + "px";
              ripple.style.left =
                rect.width / 2 - ripple.offsetWidth / 2 + "px";
              break;
            default:
              ripple.style.top =
                (eve.pageY -
                  rect.top -
                  ripple.offsetHeight / 2 -
                  document.documentElement.scrollTop ||
                  document.body.scrollTop) + "px";
              ripple.style.left =
                (eve.pageX -
                  rect.left -
                  ripple.offsetWidth / 2 -
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft) + "px";
          }
          ripple.style.backgroundColor = opts.color;
          ripple.className = "waves-ripple z-active";
          return false;
        }
      },
      false
    );
  }
};
