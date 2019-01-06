/*移入移出开始*/
var left = document.getElementsByClassName("left")[0];
var small1 = document.getElementsByClassName("small1")[0];
var	small2 = document.getElementsByClassName("small2")[0];
var right = document.getElementsByClassName("right")[0];
var im = document.getElementById("im");
console.log(im);
small1.onmouseover = function(){
	small1.setAttribute("style","border: 2px solid #ff9003;");
	small2.setAttribute("style","border: 2px solid #ffffff;");
	im.setAttribute("src","../img/pp0.jpeg");
}
small2.onmouseover = function(){
	small1.setAttribute("style","border: 2px solid #ffffff;");
	small2.setAttribute("style","border: 2px solid #ff9003;");
	im.setAttribute("src","../img/pp1.jpeg");
}
left.onclick = function(){
	if(im.getAttribute("src")=="../img/pp0.jpeg"){
		im.setAttribute("src","../img/pp1.jpeg");
		small1.setAttribute("style","border: 2px solid #ffffff;");
		small2.setAttribute("style","border: 2px solid #ff9003;");
	}
	else{
		im.setAttribute("src","../img/pp0.jpeg");	
		small1.setAttribute("style","border: 2px solid #ff9003;");
		small2.setAttribute("style","border: 2px solid #ffffff;");
	}
}
right.onclick = function(){
	if(im.getAttribute("src")=="../img/pp0.jpeg"){
		im.setAttribute("src","../img/pp1.jpeg");
		small1.setAttribute("style","border: 2px solid #ffffff;");
		small2.setAttribute("style","border: 2px solid #ff9003;");
	}
	else{
		im.setAttribute("src","../img/pp0.jpeg");	
		small1.setAttribute("style","border: 2px solid #ff9003;");
		small2.setAttribute("style","border: 2px solid #ffffff;");
	}
}
/*移入移出的结束*/
/*选择净含量开始*/
var pink = document.getElementsByClassName("pink")[0];
var front = document.getElementsByClassName("front")[0];
var back = document.getElementsByClassName("back")[0];
var capacity = document.getElementsByClassName("capacity")[0];
front.onclick=function(){
	front.setAttribute("class","front pink");
	back.setAttribute("class","back");
	capacity.innerHTML = '"150ml"';
}
back.onclick=function(){
	back.setAttribute("class","back pink");
	front.setAttribute("class","front");
	capacity.innerHTML = '"200ml"';
}
/*选择净含量结束*/

/*选择数量开始*/
var one = document.getElementsByClassName("one")[0];
var two = document.getElementsByClassName("two")[0];
var three = document.getElementsByClassName("three")[0];
one.onclick = function(){
	var i = parseInt(two.value);
	if(i>1 && i<6){
		two.value = i - 1;
	}
	if(i == 2){
		one.setAttribute("style","cursor:not-allowed");
		three.setAttribute("style","cursor:pointer");
	}else{
		three.setAttribute("style","cursor:pointer");
		one.setAttribute("style","cursor:pointer");
	}
}
three.onclick = function(){
	var i = parseInt(two.value);
	if(i>0 && i<5){
		two.value = i + 1;
	}
	if(i == 0){
		one.setAttribute("style","cursor:not-allowed");
		three.setAttribute("style","cursor:pointer");
	}else if(i == 4){
		three.setAttribute("style","cursor:not-allowed");
		one.setAttribute("style","cursor:pointer");
	}else{
		three.setAttribute("style","cursor:pointer");
		one.setAttribute("style","cursor:pointer");
	}
}
/*选择数量结束*/
// 弹出框开始
var instant = document.getElementsByClassName("instant")[0];
var join = document.getElementsByClassName("join")[0];
instant.setAttribute("onclick","open1('gouwuche','last')");
join.setAttribute("onclick","open1('gouwuche','last')");
function open1(content,bg){
	var height = document.body.scrollHeight; //文档高度
	document.getElementById(bg).style.height=height+'px';
	document.getElementById(content).style.display='block';
	document.getElementById(bg).style.display='block';
}
function close1(content,bg){
	document.getElementById(content).style.display='none';
	document.getElementById(bg).style.display='none';
}
//弹出框结束
// 放大镜开始
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementsByClassName('box')[0];
var im = document.getElementById("im");
img1.onmouseover = function () {
	if (im.getAttribute("src")=="../img/pp0.jpeg") {
		Bimg.setAttribute("src","../img/pp0.jpeg");
	}
	if (im.getAttribute("src")=="../img/pp1.jpeg") {
		Bimg.setAttribute("src","../img/pp1.jpeg");
	}
	slider.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function () {
	if (im.getAttribute("src")=="../img/pp0.jpeg") {
		Bimg.setAttribute("src","../img/pp0.jpeg");
	}
	if (im.getAttribute("src")=="../img/pp1.jpeg") {
		Bimg.setAttribute("src","../img/pp1.jpeg");
	}
	slider.style.display = 'none';
	img2.style.display = 'none';
}

img1.onmousemove = function (ev) {
	if (im.getAttribute("src")=="../img/pp0.jpeg") {
		Bimg.setAttribute("src","../img/pp0.jpeg");
	}
	if (im.getAttribute("src")=="../img/pp1.jpeg") {
		Bimg.setAttribute("src","../img/pp1.jpeg");
	}
	var ev = ev || window.event;
	var stt = document.documentElement.scrollTop || document.body.scrollTop;
	var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2-90;
	var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2-90+stt;
	var oL1 = ev.clientX - box.offsetLeft - slider.offsetWidth / 2-85;
	var oT1 = ev.clientY - box.offsetTop - slider.offsetHeight / 2-195+stt;
	var oMaxw = img1.offsetWidth - slider.offsetWidth;
	var oMaxh = img1.offsetHeight - slider.offsetHeight;
	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL1;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT1;
	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';
	// 放大系数：右边的大（小）盒子/左边的大（小）盒子
	var scale = Bimg.offsetWidth / img1.offsetWidth;
	
	// 放大的盒子的左右位置与透明的相反
	Bimg.style.left = -scale * oL +100+'px';
	Bimg.style.top = -scale * oT +100+ 'px';
}
//放大镜结束s