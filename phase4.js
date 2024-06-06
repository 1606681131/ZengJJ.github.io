var UI = {};
UI.appWidth = window.innerWidth > 600 ? 600 : window.innerWidth ;
UI.appHeight = window.innerHeight;
 const LETTERS = 22 ;
const baseFont = UI.appWidth / LETTERS;

//通过更改body对象的字体大小，这个属性能够遗传其子子孙孙
document.body.style.fontSize = baseFont + "px"; 
//通过把body对象的宽度和高度设置为设备/屏幕的宽度和高度，实现全屏。
//通过CSS对子对象百分比（纵向）的配合，从而实现响应式设计的目标。
document.body.style.width = UI.appWidth - 2*baseFont + "px" ;
document.body.style.height = UI.appHeight - 8*baseFont + "px";

if(window.innerWidth < 900){
$("aid").style.display='none';
}
$("aid").style.width=window.innerWidth - UI.appWidth - 2*baseFont + 'px';
$("aid").style.height= document.body.clientHeight + 'px';

//尝试对鼠标设计UI控制
var mouse={};
mouse.isDown= false;
mouse.x= 0;
mouse.deltaX=0;
$("bookface").addEventListener("mousedown",function(ev){
let x= ev.pageX;
let y= ev.pageY;

console.log("鼠标按下了，坐标为："+"("+x+","+y+")");
$("bookface").textContent= "鼠标按下了，坐标为："+"("+x+","+y+")";
});
$("bookface").addEventListener("mousemove",function(ev){
let x= ev.pageX;
let y= ev.pageY;

console.log("鼠标正在移动，坐标为："+"("+x+","+y+")");
$("bookface").textContent= "鼠标正在移动，坐标为："+"("+x+","+y+")";
});
$("bookface").addEventListener("mouseout",function(ev){
//console.log(ev);
$("bookface").textContent="鼠标已经离开";

});
$("body").addEventListener("keypress",function(ev){
let k = ev.key;
let c = ev.keyCode;
$("keyboard").textContent = "您的按键 ：" + k + " ，"+ "字符编码 ：" + c;
});

function $(ele){
    if (typeof ele !== 'string'){
       throw("自定义的$函数参数的数据类型错误，实参必须是字符串！");
       return
    }
    let dom = document.getElementById(ele) ;
      if(dom){
        return dom ;
      }else{
        dom = document.querySelector(ele) ;
        if (dom) {
            return dom ;
        }else{
            throw("执行$函数未能在页面上获取任何元素，请自查问题！");
            return ;
        }
      }
   } //end of $