quick_draw=["castle,clock,apple,watch,mouse,computer,book,pen,bottle,logo,ant,eraser,sharpener"];

random_no=Math.floor((Math.random()*quick_draw.lenght)+1);
console.log(quick_draw([random_no]));
sketch=quick_draw[random_no];
document.getElementById("sketch_name").innerHtml="Image to be drawn:"+sketch;
timer=0;
check="";
drawn="";
anshold="";
score=0;
function updateCanvas(){
    background("white");
    random_no=Math.floor((Math.random()*quick_draw.lenght)+1);
console.log(quick_draw([random_no]));
sketch=quick_draw[random_no];
document.getElementById("sketch_name").innerHtml="Image to be drawn:"+sketch;
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    background("white");
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}

function classifyCanvas(){
    classifier.classify(canvas,gotResults);
}
function draw(){
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
check_sketch()
if(drawn==sketch){
    anshold="set"
    score++;
    document.getElementById("score").innerHTML="Score:"+score;
}
function gotResults(error,results){
if(error){
    console.error(error);
}
console.log(results);
document.getElementById("label").innerHTML="label:"+results[0].label;
document.getElementById("confidence").innerHTML="confidence:"+ Math.round(results[0].confidence*100)+"%";
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);

}
function check_sketch(){
    timer++;
    document.getElementById("time").innerHTML="timer:"+timer;
    console.log(timer);
    if(timer>400){
        timer=0;
        check="completed";
    }
    if(check=="completed"|| anshold=="set"){
        check="";
        anshold ="";
        updateCanvas();
    }
}