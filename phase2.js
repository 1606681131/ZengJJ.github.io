var UI = {};
    UI.appWidth = window.innerWidth > 800 ? 800 : window.innerWidth ;
    UI.appHeight = window.innerHeight;
 	const LETTERS = 22 ;
	const baseFont = UI.appWidth / LETTERS;
    //通过把body对象的宽度和高度设置为设备/屏幕的宽度和高度，实现全屏。
    //通过CSS对子对象百分比（纵向）的配合，从而实现响应式设计的目标。
    document.body.style.width = UI.appWidth - 1*baseFont + "px" ;
    document.body.style.height = UI.appHeight - 4*baseFont + "px";