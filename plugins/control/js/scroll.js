//进度条控制

var scroll = document.getElementById('scroll'); 
var bar = document.getElementById('bar');
var mask = document.getElementById('mask');
var barleft = 0;
var progress = document.getElementById("progressShow"); 

bar.onmousedown = function(event){
  var event = event || window.event;
  var leftVal = event.clientX - this.offsetLeft;
  var that = this;

  // 拖动一定写到 down 里面才可以
  document.onmousemove = function(event){
    var event = event || window.event;
    barleft = event.clientX - leftVal;     
    if(barleft < 0)
      barleft = 0;
    else if(barleft > scroll.offsetWidth - bar.offsetWidth)
      barleft = scroll.offsetWidth - bar.offsetWidth;
      mask.style.width = barleft +'px' ;
      that.style.left = barleft + "px";

      progress.innerHTML = parseInt(barleft/(scroll.offsetWidth-bar.offsetWidth) * 100) + "%";
 
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
  }
 
  document.onmouseup = function(){//弹起鼠标更新进度，加载模型
    document.onmousemove = null; 
				
		var percentStr = document.getElementById("progressShow").innerHTML; 
				
		var percent = Number(percentStr.substr(0, percentStr.length-1));
		var eIdx = parseInt(comp.length * percent/100);

		console.log("Update progress bar to " + eIdx)

		if (iter < eIdx) // 加载
		{
			for (; iter <= eIdx; iter++)
			{
				loadObject(comp[iter]);
			}
		}
		else //卸载
		{
			for (; iter > eIdx; iter--)
			{
				unloadObjectByName(comp[iter].name);
			}
		}
	}
}