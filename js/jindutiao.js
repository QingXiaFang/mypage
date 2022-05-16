//$(window).on(function(){ 
// 	
//});
//$(window).load(function(){ 
// 	
//});
//加载完毕后 执行
 $(document).ready(function(){  
 	setTimeout(function (){
 		init();
		}, 100);//延时函数
        	
}); 
 
 
function init(){ 
	// var scale =function(input,yuan,jindu,tiao){
    //     this.input =document.getElementById(input);
    //     this.yuan =document.getElementById(yuan);
    //     this.jindu=document.getElementById(jindu);
    //     this.tiao=document.getElementById(tiao);
    //     this.tiaoW =this.tiao.offsetWidth;
    //     this.init()
    // }
    // scale.prototype ={
    //     init: function(){
    //         var isfalse =false, 
    //             f = this,
    //             m = Math,
    //             b = document.body,
    //             minValue =0,
    //             maxValue =100;
            
    //         f.yuan.onmousedown =function(e){
    //             isfalse =true;
    //             var X =e.clientX;
    //             var offleft =this.offsetLeft;
    //             var max = f.tiao.offsetWidth - this.offsetWidth;

    //             b.onmousemove =function(e){
    //                 if (isfalse == false){
    //                     return;
    //                 }
    //                 var changeX= e.clientX;
    //                 var moveX =m.min(max,m.max(-2,offleft+(changeX-X)));
    //                 f.input.value =m.round(m.max(0,moveX / max) * 100);
    //                 f.yuan.style.marginLeft =m.max(0, moveX) +"px";
    //                 f.jindu.style.width =moveX +"px";
    //             }
    //         }
    //         b.onmouseup =function(){
    //             isfalse =false;
    //         }

    //         f.input.onblur =function(){
    //             var theV =this.value*1;
    //             if(theV >maxValue || theV <minValue){
    //                 alert("输入的数值不正确");
    //                 f.input.value ="";
    //                 f.yuan.style.marginLeft ="0px";
    //                 f.jindu.style.width ="0px";
    //                 return;
    //             }
    //             var xxx =theV/100*f.tiaoW;
    //             f.yuan.style.marginLeft =xxx +"px";
    //             f.jindu.style.width =xxx +"px";
    //         }
    //     }
    // }

    // new scale("input","yuan","jindu","tiao");

    var input =document.getElementById("input");
    var yuan =document.getElementById("yuan");
    var jindu =document.getElementById("jindu");
    var tiao =document.getElementById("tiao");
    var tiaoW =tiao.offsetWidth;

    function schedule(){

        var isfalse =false; //控制滑动

        yuan.onmousedown =function(e){
            isfalse =true;

            var X =e.clientX; //获取当前元素相对于窗口的X左边
            
            var offleft =this.offsetLeft; //当前元素相对于父元素的左边距
            
            var max = tiao.offsetWidth - this.offsetWidth; //宽度的差值
            
            document.body.onmousemove=function(e){
                if (isfalse == false){
                    return;
                }
                var changeX= e.clientX; //在移动的时候获取X坐标
                
                var moveX =Math.min(max,Math.max(-2,offleft+(changeX-X))); //超过总宽度取最大宽
                input.value =Math.round(Math.max(0,moveX / max) * 100);
                yuan.style.marginLeft =Math.max(0, moveX) +"px";
                jindu.style.width =moveX +"px";
            }
        }
        document.body.onmouseup =function(){
            isfalse =false; 
        }

        var minValue =0;
        var maxValue =100;
        input.onblur =function(){
            var theV =this.value*1;
            if(theV >maxValue || theV <minValue){
                alert("输入的数值不正确");
                input.value ="";
                jindu.style.width ="0px";
                yuan.style.marginLeft ="0px";
                return;
            }
            var xxx =theV/100*tiaoW;
            yuan.style.marginLeft =xxx +"px";
            jindu.style.width =xxx +"px";
        }
    }
    schedule();
} 