 $(document).mousemove(function(e){
 var xcoord = e.pageX;
 var ycoord = e.pageY;
 }); 

$(window).mousewheel(function(e){
	console.log(e.deltaY)
})
var tl = new TimelineMax();
$('.cards').mousewheel((function(e){
	e.preventDefault();
	TweenMax.to(".cards",1.3,{
		x: "+=" + (e.deltaY*90) + "px"
	});
   
}))

var tl = new TimelineMax({repeat:2, repeatDelay:1});
tl.add( TweenLite.to(".button", 1, {scale:0.9}) );
tl.add( TweenLite.to(".button", 1, {scale:1.1}) );
tl.add( TweenLite.to(".button", 1, {scale:1}) );
