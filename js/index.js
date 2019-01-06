var image = document.getElementById('image');
var bann = document.getElementById('bann');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;

var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
image.onmouseover = function () {
	animate(left, {
		opacity: 0.6
	})
	animate(right, {
		opacity: 0.6
	})
	clearInterval(timer); //图片停止滚动
	}
image.onmouseout = function () {
	animate(left, {
		opacity: 0
	})
	animate(right, {
		opacity: 0
	})
	timer = setInterval(next, 2000); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;
function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(bann, {
		left: -809 * index
	}, function () {
		if (index == 7) {//图片下标
			bann.style.left = '-809px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(bann, {
		left: -809 * index
	}, function () {
		if (index == 0) {
			bann.style.left = '-4854px';
			index = 6;
		}
		isMoving = false;
	});
}
		//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(bann, {
			left: -809 * index
		});
	}
}
		//图片切换时按钮样式跟着切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
		//页面打开时自动滚动切换
timer = setInterval(next, 2000);
function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

function animate(obj, json, callback) {
	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }
window.onload = function(){
	var cover = document.getElementsByClassName("cover")[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			cover.style.position = 'fixed'
		}else{
			cover.style.position = 'static'
		}
	}
} 
var ul = document.getElementById("list");
    function show() {
        var top = ul.offsetTop - 1; 
        ul.style.top = top + "px"; 
        //走完一半再返回
        if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
            ul.style.top = 0;
        }
    }
    var t = setInterval(show, 20);

    var li = document.getElementsByClassName("gonggao");
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseout = function () {
            t = setInterval(show, 20);
        };
        li[i].onmouseover = function () {
            clearInterval(t);
    	};
	}
var money = document.getElementById("money");
var money2 = document.getElementById("money2");
function select(that){
	var value = that.value;
	money2.innerHTML = value;
}
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
first.onmouseover = function(){
	first.style.position="fixed";
	first.setAttribute("style","left:1240px");
}
first.onmouseout = function(){
	first.style.position="fixed";
	first.setAttribute("style","left:1310px"); 
}
second.onmouseover = function(){
	second.style.position="fixed";
	second.setAttribute("style","left:1240px");
}
second.onmouseout = function(){
	second.style.position="fixed";
	second.setAttribute("style","left:1310px"); 
}
third.onmouseover = function(){
	third.style.position="fixed";
	third.setAttribute("style","left:1240px");
}
third.onmouseout = function(){
	third.style.position="fixed";
	third.setAttribute("style","left:1310px"); 
}
fourth.onmouseover = function(){
	fourth.style.position="fixed";
	fourth.setAttribute("style","left:1240px");
}
fourth.onmouseout = function(){
	fourth.style.position="fixed";
	fourth.setAttribute("style","left:1310px"); 
}