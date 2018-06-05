var interval;	//定义时间间隔
var pic = 0; //定义数组图片的下标
window.onload = function() {
		var slider = document.getElementById("slider"); 	//获取对象
		var images = slider.getElementsByTagName("img");	//获取slider里的图片数组
		slider.onmouseover = function() {
				clearInterval(interval);	//当鼠标移动到图片时停止轮播
		}
		slider.onmouseout = function() {
				run(images);  //当鼠标移开图片时开始轮播
		}
		run(images);	//当鼠标没有移动到图片时也轮播图片
}
var run = function(images) {
		interval = setInterval(function() {
				images[pic].style.display = "none";	//隐藏图片
				pic = ++pic == images.length ? 0 : pic; //轮播到了最后一张图片就从头开始
				images[pic].style.display = "inline";	//显示图片
		}, 2000);	//间隔为2s
}
