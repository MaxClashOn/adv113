function preload(){

}
function setup(){
    canvas=createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    color_tinte="";
}
function draw(){
    image(video,0,0,600,400);
    tint(color_tinte);
}
function filtro(){
    color_tinte=document.getElementById("color_name").value ;
}
function take_snapshot(){
    save("filtro.png")
}