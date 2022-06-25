leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;

function preload()
{
    goggle = loadImage("https://i.postimg.cc/gJRDhP5J/goggle.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(goggle,leftEyeX,leftEyeY,30,30);
    image(goggle,rightEyeX,rightEyeY,30,30);
}

function modelloaded()
{
    console.log("poseNet model is loaded");
}


function gotposes(results)
{
    function gotposes(results) {
        if (results.length > 0) {
            console.log(results);
            leftEyeX = results[0].pose.leftEye.x;
            rightEyeY = results[0].pose.rightEye.y;
            console.log("leftEye X = " + leftEyeX);
            console.log("leftEye Y = " + leftEyeY);
            console.log("rightEye X = " + rightEyeX);
            console.log("rightEye Y = " + rightEyeY);
        }
    
    }
    
}

