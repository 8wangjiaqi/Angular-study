//animate函数
window.onload=function(){
   console.log('开始了');			
    function start(){				
        $(".picBox").animate({left:"-1257px"},1000,
        function(){					
            $(this).css({left:"0px"});					
            $(this).children("li").first().remove().clone(true).appendTo(".picBox");				
        });			
    }			
    var start1=setInterval(start,2000);			
    $(".box").hover(function () {				
        clearInterval(start1);			
        }, function () {				
            start1=setInterval(round,2000);			
        });		
}	
 
//点击切换
$("#left").onload=function(){
    console.log('点击下一张');
}

