canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


rover_width = 100;
rover_height = 90; 

img_array = ["mars.jpg","mars3.jpg","mars4.jpg"];
random = Math.floor(Math.random()*3);
background_image= img_array[random];
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;




function add()  
{
    background_NI  = new Image();
    background_NI.onload = uploadBackground;
    background_NI.src = background_image;

    rover_NI  = new Image();
    rover_NI.onload = uploadrover;
    rover_NI.src = rover_image;
}

function uploadBackground ()
{
    ctx.drawImage(background_NI, 0,0, canvas.width,canvas.height);
}

function uploadrover ()
{
    ctx.drawImage(rover_NI, rover_x, rover_y, rover_width,rover_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

   keyPressed = e.keyCode;
   console.log(keyPressed);

        if(keyPressed == "38")
        {
            up();
            console.log("up");
        }

        if(keyPressed == "40")
        {
            down();
            console.log("down");
        }

        if(keyPressed == "37")
        {
            left();
            console.log("left");
        }

        if(keyPressed == "39")
        {
            right();
            console.log("right");
        }






}




function up()
{
    if(rover_y >= 0)
      {

        rover_y -= 10;

        console.log(rover_x ,rover_y);
        uploadBackground();
        uploadrover();
      }
}


function down()
{
    if(rover_y <= 500)
      {

        rover_y += 10;

        console.log(rover_x ,rover_y);
        uploadBackground();
        uploadrover();
      }
}


function left()
{
    if(rover_x >= 0)
      {

        rover_x -= 10;

        console.log(rover_x ,rover_y);
        uploadBackground();
        uploadrover();
      }
}


function right()
{
    if(rover_x <= 700)
      {

        rover_x  += 10;

        console.log(rover_x ,rover_y);
        uploadBackground();
        uploadrover();
      }
}