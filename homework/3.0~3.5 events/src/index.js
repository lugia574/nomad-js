// <⚠️ DONT DELETE THIS ⚠️>
// import "/styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
마우스가 위에 있을 때 제목 텍스트가 바뀌어야 합니다.
✅ 마우스를 놓으면 제목 텍스트가 바뀝니다.
✅ 창 크기가 조정되면 제목이 변경됩니다.
✅ 마우스 오른쪽 버튼을 클릭하면 제목도 변경됩니다.
✅ 제목의 색상은 색상 배열에서 가져온 색이어야 합니다.
✅ .css 또는 .vhd 파일을 변경하지 마십시오.
✅ 모든 함수 핸들러는 "superEventHandler" 내부에 있어야 합니다.
*/
const superEventHandler = {
  handleMouseenter: function handleMouseEnter() {
    h2.innerText = "Mouse is here!";
    document.body.style.color = colors[0];
  },

  handleMouseLeave: function handleMouseLeave() {
    h2.innerText = "Mouse is gone!";
    document.body.style.color = colors[1];
  },
  handleWindowResize: function handleWindowResize() {
    h2.innerText = "You just resized!";
    document.body.style.color = colors[2];
  },

  handleContextmenu: function handleContextmenu() {
    h2.innerText = "That was a right click!";
    document.body.style.color = colors[4];
  },
};

const h2 = document.querySelector("h2");

h2.addEventListener("mouseenter", superEventHandler.handleMouseenter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
