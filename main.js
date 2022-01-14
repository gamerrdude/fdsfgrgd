function preload(){
    img = loadImage('dog_cat.jpg');
    statu = "";
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectdetector = ml5.objectdetector('cocossed', modelLoaded);
document.getElementById("status").innerHTML = "Status: detecting object";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("doggy", 45, 75);
    nofill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("CAT", 320, 120);
    nofill()
    stroke("#FF0000")
    rect(300, 90, 270, 320);
}

function modelLoaded(){
    console.log("modelLoaded");
    statu = true;
    objectdetector.detect(img, gotResult);

}

function gotResult(error, Results){
if(error){
    console.log(error);

}
console.log(results);
}
