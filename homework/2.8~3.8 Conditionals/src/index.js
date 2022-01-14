const windowEvent = {
  defultBgColorEvent: function defultBgColorEvent() {
    const intFrameWidth = window.innerWidth;
    const wrap = document.querySelector(".wrap");
    if (intFrameWidth > 900) {
      wrap.classList.add("yellow");
    } else if (intFrameWidth > 600 && intFrameWidth <= 900) {
      wrap.classList.add("violet");
    } else {
      wrap.classList.add("blue");
    }
  },
  resizeBgColorEvent: function resizeBgColorEvent() {
    const intFrameWidth = window.innerWidth;
    const wrap = document.querySelector(".wrap");
    const color = wrap.classList.item(1);
    if (intFrameWidth > 900) {
      wrap.classList.remove(color);
      wrap.classList.add("yellow");
    } else if (intFrameWidth > 600 && intFrameWidth <= 900) {
      wrap.classList.remove(color);
      wrap.classList.add("violet");
    } else {
      wrap.classList.remove(color);
      wrap.classList.add("blue");
    }
  },
};
windowEvent.defultBgColorEvent();
window.addEventListener("resize", windowEvent.resizeBgColorEvent);
