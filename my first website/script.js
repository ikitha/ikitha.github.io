var numImages = 0;
var currentImage = 1;
var totalWidth = 0;

$(document).ready(function(){


	$('.gallery-li').each(function(){
		numImages++;
		totalWidth+= 570;
	});
	$('.gallery-ul').css('width' , totalWidth 'px');
	$('.gallery-mask').click(function(){
		moveLeft();
	$('.rightbtn').click(function(){
		moveLeft();
	});
	$('.leftbtn').click(function(){
		moveRight();
	});
});

function moveLeft()
{
	if( currentImage < numImages)
	{
		$('.gallery-ul').animate( { 'marginLeft' : '-=570px' } , 1000 , 'swing' );
		currentImage++;
	}
}

function moveRight()
{
	if( currentImage > 1 )
	{
		$('.gallery-ul').animate( { 'marginLeft' : '+=570px' } , 1000 , 'swing' );
		currentImage--;
	}
}