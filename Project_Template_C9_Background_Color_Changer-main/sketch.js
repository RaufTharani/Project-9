var button
function setup() {
  createCanvas(400, 400); 
  button_red=createButton("RED")
  button_red.position(200,60)
  button_red.mousePressed(red_background)

  button_green=createButton("GREEN")
  button_green.position(350,60)
  button_green.mousePressed(green_background)
}

function red_background() {
r=255
g=0
b=0
}

function green_background(){
g=255
r=0
b=0
}
drawSprites()



