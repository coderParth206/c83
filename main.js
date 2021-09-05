canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
var mousEvent = "empty";
var touchEvent = "empty"
var last_mouse_x, last_mouse_y;
var last_touch_x, last_touch_y;
color="black";
width_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width_line=document.getElementById("width_line").value;
mousEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_mouse_x = e.clientX - canvas.offsetLeft;
current_mouse_y = e.clientY - canvas.offsetTop;
if (mousEvent=="mouseDown"){
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.linewidth = width_line;
ctx.moveTo(last_mouse_x, last_mouse_y);
ctx.lineTo(current_mouse_x, current_mouse_y);
ctx.stroke();
}
var last_mouse_x = current_mouse_x;
var last_mouse_y = current_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mousEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mousEvent="mouseleave";
}
var last_position_of_touch_x, last_position_of_touch_y;
var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    }
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_touch_y = e.touches[0].clientY - canvas.offsetTop;
if (touchEvent=="touchdown"){
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.linewidth = width_line;
ctx.moveTo(last_touch_x, last_touch_y);
ctx.lineTo(current_touch_x, current_touch_y);
ctx.stroke();
}
var last_touch_x = current_touch_x;
var last_touch_y = current_touch_y;
}
canvas.addEventListener("touchdown", my_touchdown);
function my_touchdown(e){
color = document.getElementById("color").value;
width_line= document.getElementById(width_line).value;
touchEvent="touchdown";
}


