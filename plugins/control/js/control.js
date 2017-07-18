// 控件常用事件特效

var playClickState = 0;

/*
 * @function onHiddenOrShow--实现隐藏或显示控件
 * @params   object--要实现功能的控件
 */
function onHiddenOrShow(object)
{
	if(object.style.visibility == "visible")
		object.style.visibility = "hidden";
	else 
		object.style.visibility = "visible";
}


/*
 * @function onPlayerClick--当播放按钮被点击时
 * @params   object--传入播放按钮的对象
 */
function onPlayerClick(object)
{
	if(playClickState == 0)
	{
		object.src = "../../../assets/images/stop.svg";
		playClickState = 1;

		//调用onDisabled
		onDisabled(document.getElementById("toPreview"), 1);
		onDisabled(document.getElementById("toNext"), 1);
					
		//接下来要调用的方法
		onPlay();
	}
	else
	{
		object.src = "../../../assets/images/play.svg";
		playClickState = 0;	

		//调用onDisabled
		onDisabled(document.getElementById("toPreview"), 2);
		onDisabled(document.getElementById("toNext"), 2);	

		//接下来要调用的方法
		onStop();
	}
}

/*
 * @function onDisabled--禁用控件
 * @params object--要禁用的对象
 * @params state-- 1:禁用, 2:不禁用
 */
function onDisabled(object, state)
{
	switch(state)
	{
		case 1:

		object.style.opacity = "0.5";

		break;

		case 2:

		object.style.opacity = "1";

		break;
	}

}