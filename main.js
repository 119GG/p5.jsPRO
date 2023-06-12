function preload()
{
}

function setup() { 
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() { 
    image(video, 180, 100, 300, 300); 
    fill(0, 0, 255); 
    stroke(0, 0, 255); 
    circle(50, 50, 80); 
    circle(50, 430, 80); 
    circle(590, 50, 80); 
    circle(590, 430, 80); 
    fill(150, 50, 0); 
    stroke(150, 50, 0); 
    rect(90, 40, 460, 20); 
    rect(90, 420, 460, 20);
     rect(40, 90, 20, 300); 
     rect(580, 90, 20, 300); }


function take_snapshot() 
{
    save('student_name.png');
}

// CIRCLE - circle(30, 30, 20); describe('white circle with black outline in mid of gray canvas');
// REC - rect(30, 20, 55, 55);  describe('white rect with black outline in mid-right of canvas');
