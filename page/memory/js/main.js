

$(window).on('resize',function(){
    let winWidth = $(window).width();
console.log(winWidth);
if(winWidth >1200){
   pc();
}else if(winWidth >=768){
    tablet();
}else{
    mobile();
}

})




let winWidth = $(window).width();
console.log(winWidth);
if(winWidth >=1200){
   pc();
}else if(winWidth >=768){
    tablet();
}else{
    mobile();
}

function pc(){

    $('nav').show();
    $('.sub').hide();
    $('.row2menu li').on('click',function(){
        
        let i = $(this).index();

        $('.row2con').children().eq(i).show().siblings().hide();

        $(this).addClass('on').siblings().removeClass('on');
    })
}

function mobile(){

    
    $('nav').hide();

    $('.btnNav').click(function(){
        $('nav').show();
    });
    
    $('.btnClose').click(function(){
        $('nav').hide();
    });
    
    $('.gnb>li>a').on('click',function(){
    
    
    
        $('.sub').stop().slideUp();
        $(this).siblings('.sub').stop().slideToggle()
    
    })
    
    $('.sub>li>a').on('click',function(){
    
        $('.sub1').stop().slideUp();
        $(this).siblings('.sub1').stop().slideToggle();
    
    })

    $('.row2menu li').on('click',function(){
        
        let i = $(this).index();

        $('.row2con').children().eq(i).show().siblings().hide();

        $(this).addClass('on').siblings().removeClass('on');
    })

}

function tablet(){

    $('nav').hide();

    $('.btnNav').click(function(){
        $('nav').show();
    });
    
    $('.btnClose').click(function(){
        $('nav').hide();
    });
    
    $('.gnb>li>a').on('click',function(){
    
    
    
        $('.sub').stop().slideUp();
        $(this).siblings('.sub').stop().slideToggle()
    
    })
    
    $('.sub>li>a').on('click',function(){
    
        $('.sub1').stop().slideUp();
        $(this).siblings('.sub1').stop().slideToggle();
    
    })

    $('.row2menu li').on('click',function(){
        
        let i = $(this).index();

        $('.row2con').children().eq(i).show().siblings().hide();

        $(this).addClass('on').siblings().removeClass('on');
    })






}













//mobile



