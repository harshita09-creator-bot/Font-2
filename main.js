function setup(){

    video = createCapture(VIDEO);
    video.size(500,600);
    video.position(50,45);

    canvas = createCanvas(500,500);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){

    background('#8dbef2');

}

function gotPoses(){

    if(results.length > 0){
        console.log(results);
    }
}


function modelLoaded(){
    console.log("I am in the machine");
}

