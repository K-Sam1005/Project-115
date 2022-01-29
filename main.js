function preload(){

}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose x = "+result[0].pose.nose.x);
        console.log("nose y = "+result[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,400,300);
}

function take_snapshot(){
    save("captured-image.png");
}