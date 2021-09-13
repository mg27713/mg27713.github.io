// 0. Install uBlock Origin (different from uBlock)
// 1. Right click the ToS link
// 2. Click "Block element"
// 3. Replace TARGET_HERE below with what appears in the text box.
// 4. Click cancel.
// 5. Put this code into a JS extension like TamperMonkey or CustomJS.
const target = 'TARGET_HERE';

addEventListener("load", () => {
  document.querySelector(getSelector()).href = "https://mg27713.github.io/terms-of-service";
})

function getSelector() {
  return target.startsWith("##") ? target.substring("##".length) : target;
}
