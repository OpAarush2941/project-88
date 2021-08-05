var canvas = new fabric.Canvas("myCanvas")

ball_width = 20;
ball_height = 20;

hole_width = 50;
hole_height = 50;

block_image_width = 5;
block_image_height = 5;

ball_x = 0;
ball_y = 0;
hole_y = 400;
hole_x = 700;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
        hole_object = Img;
        hole_object.scaleToWidth(hole_width);
        hole_object.scaleToHeight(hole_height);
        hole_object.set({
			 top:hole_y,
			 left:hole_x
			 });
        canvas.add(hole_object);
		console.log("hole_x:"+hole_x+" hole_y:"+hole_y)
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
        ball_object = Img;
        ball_object.scaleToWidth(ball_width);
        ball_object.scaleToHeight(ball_height);
        ball_object.set({
			 top:ball_y,
			 left:ball_x
			 });
        canvas.add(ball_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}

		if(ball_x > hole_x & ball_y>hole_y){
			document.getElementById("hd3").innerHTML = "YOU HIT THE GOAL"
			console.log("YOU HIT THE GOAL");
			canvas.remove(ball_object);
			canvas.remove(hole_object);	
		}

}
	
	function up()
	{
		ball_y = ball_y - block_image_height;
 		console.log("y:"+ball_y);
		canvas.remove(ball_object);
 		new_image();
	}

	function down()
	{
		ball_y = ball_y + block_image_height;
		console.log("y:"+ball_y);
		 canvas.remove(ball_object);
 		new_image();
	}

	function left()
	{
		if(ball_x >0)
		{
			ball_x = ball_x - block_image_height;
			console.log("x:"+ball_x);
			canvas.remove(ball_object);
 			new_image();
		}
	}

	function right()
	{
		if(ball_x <=780)
		{
			ball_x = ball_x + block_image_height;
			console.log("x:"+ball_x);
			canvas.remove(ball_object);
 			new_image();
		}
	}
	


