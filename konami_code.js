const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var capList = [];
function onKeyDownHandler(e){
  const key = e.key;
  switch (key){
    case ((key === "ArrowUp") && (capList === [])):
      capList.push(key);
      break;
    case ((key === "ArrowUp") && (capList[0] === "ArrowUp")):
      capList.push(key);
      break;
    case ((key === "ArrowDown") && (capList[1] === "ArrowUp")):
      capList.push(key);
      break;
    case ((key === "ArrowDown") && (capList[2] === "ArrowDown")):
      capList.push(key);
      break;
    case ((key === "ArrowLeft") && (capList[3] === "ArrowDown")):
      capList.push(key);
      break;
    case ((key === "ArrowRight") && (capList[4] === "ArrowLeft")):
      capList.push(key);
      break;
    case ((key === "ArrowLeft") && (capList[5] === "ArrowRight")):
      capList.push(key);
      break;
    case ((key === "ArrowRight") && (capList[6] === "ArrowLeft")):
      capList.push(key);
      break;
    case ((key === "b") && (capList[7] === "ArrowRight")):
      capList.push(key);
      break;
    case ((key === "a") && (capList[8] === "b")):
      capList.push(key);
      break;
    default:
      capList = []

  }
}
function init() {
  document.body.addEventListener("keydown", onKeyDownHandler) {
    return capList
  }
}
