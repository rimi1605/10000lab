$(function(){//스크립트 시작
    // #nav
    $("#nav>ul>li").hover(function(){
        // 마우스를 올리면 동작
        $(this).find(".sub").stop().slideDown();
    },function(){
        //마우스를 내리면
        $(this).find(".sub").stop().slideUp();
    });

    // slide
    var n=0;//번호변수, 전역변수
    var dis=0;//위치변수(거리), 전역변수
    // arrow
    $(".left").click(function(e){//0,7,6,5,4,3,2,1,0,7.....
        e.preventDefault();
        if(n>0){//76543210
            n--;
        }else{
            n=7;
        }
        sMoving();
    });
    $(".right").click(function(e){//1,2,3,4,5,6,7,0
        e.preventDefault();
        if(n<7){
            n++;
        }else{
            n=0;
        }
        // console.log(n);
        sMoving();
    });

    // 반복하는 스크립트 동작을 사용자정의 함수로 제작할수 있다.
    function sMoving(){
        dis=n*(-1)*100+"%";
        $(".slide ul").css({left: dis});
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(n).addClass("on");
    }

    // rolling li
    $(".rolling li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        // console.log(n);
        sMoving();
    });

    // setInterval
    setInterval(function(){
        if(n<7){
            n++;
        }else{
            n=0;
        }
        sMoving();
    },3000);

    // scroll이벤트
    $(window).scroll(function(){
        var t=$(this).scrollTop();
        // console.log(t);
        if(t>=80){
            $(".content1>div").addClass("on");
        }        
    });


    // more
    // console.log(n);
    var i=0;
    $(".more a").click(function(e){
        e.preventDefault();
        $(".content4 .cont ul").eq(i).css({'display':"block"});
        // console.log(i);
        if(i<2){
            i++;
            $(".content4 .cont ul").eq(i).css({'display':"block"});
            console.log(i);
        }else{
            $(".content4 .cont ul").eq(3).css({'display':"block"});
            $(".more a").hide();
        }
        
    });


});//스크립트 끝