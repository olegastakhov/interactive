window["webgl-fluid"].default(document.querySelector("canvas"));

const canvas = document.querySelector("canvas");
const overlay = document.querySelector(".page-kids");

if (canvas && overlay) {
  [
    "mousedown",
    "mousemove",
    "mouseup",
    "touchstart",
    "touchmove",
    "touchend",
  ].forEach((eventName) => {
    overlay.addEventListener(eventName, (event) => {
      const updatedEvent = new event.constructor(event.type, event);
      canvas.dispatchEvent(updatedEvent);
    });
  });
}
