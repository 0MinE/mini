// $(function(){
   

// });


const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const clearBtn = document.getElementById("clear");

const INITIAL_COLOR = "#2c2c2";
const CANVAS_SIZE = 700;


canvas.width =  CANVAS_SIZE;
canvas.height =  CANVAS_SIZE;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE );

ctx.strokeStyle = "INITIAL_COLOR";
ctx.fullingStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;
ctx.clearRect(0, 0, 700, 700)


let painting = false;
let filling = false;

function stopPainting(){

 painting = false;
}
function startPainting() {
    painting = true;
  }
  function onMouseMove(event) {
   const x = event.offsetX;
   const y = event.offsetY;
   if (!painting) {
       ctx.beginPath();
       ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        
      }
}

function handleColorClick (event){
   const color = event.target.style.backgroundColor;
   ctx.strokeStyle = color;
   ctx.fillStyle = color;
}
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}
function Cm(event){
   event.preventDefault();
}

function handleModeClick() {
    if (filling === true) {
      filling = false;
      mode.innerText = "Fill";
    } else {
      filling = true;
      mode.innerText = "Paint";
    }
  }
   function  handleCavasClick (){
    if(filling) {

        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE );
       
    }
   }
   function saveClick (){
       const image = canvas.toDataURL("image/png")
       const link = document.createElement("a");
       link.href = image;
       link.download = "hi";
       link.click();
    }

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click",  handleCavasClick);
    canvas.addEventListener("contextmenu", Cm);
  }
Array.from(colors).forEach(color =>
     color.addEventListener("click", handleColorClick)
     );

     if(range){
         range.addEventListener("input",handleRangeChange);
     }

     if (mode) {
        mode.addEventListener("click", handleModeClick);
      }
      if(saveBtn) {
          saveBtn.addEventListener("click", saveClick)
      }