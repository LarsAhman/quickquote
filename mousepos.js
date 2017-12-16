var mouse = {
	x: 0,
	y: 0
}

document.onmousemove = function(e)
{
    mouse.x = e.pageX;
    mouse.y = e.pageY;
};

