let winhig = $(window).height();
$(window).on('scroll',function(){
    let scr = $(window).scrollTop();
    

    for(let i=0; i<5; i++){
        if(scr >= i*winhig && scr <= (i+1)*winhig){
            $('.menu button').removeClass().eq(i).addClass('on');

        }
        }


});

$('.menu button').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('html,body').animate({'scrollTop':winhig*i})
})





$('.weplist li').click(function(){
    let i = $(this).index();
    $('.con').children().eq(i).show().siblings().hide();

    $(this).addClass('active').siblings().removeClass('active');
    


})

$('.designmenu li').click(function(){
    let i = $(this).index();
    $('.designbox').children().eq(i).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
})

/*
.item을 클릭하면

1. view 가 나타납니다  (V)
2. 클릭했던 item 안의 사진이 
   view내부의 figure안에 나타납니다 (V)
3. 클릭했던 item 안의 h4내용이
   view내부의 txtBox h4에 나타납니다
4.클릭했던 item 안의 p내용이
   view 내부의 txtBox p에 나타납니다*/

        $('.item').on('click',function(e){
            e.preventDefault(); 

            $('.view').fadeIn();

            let pic = $(this).find('.pic').html();
            $('.view figure').html(pic);

            let h4Txt = $(this).find('h4').text();
            let pTxt = $(this).find('p').text();

            $('.view').find('h4').text(h4Txt);
            $('.view').find('p').text(pTxt);
 
        });

        //close버튼 누르면 view 사라지게!

        $('.btnClose, .wrapClose').on('click',function(){

            $('.view').hide();

        });


        $('.vidCard').click(function(){

            $('.show').stop().fadeIn();
        
            let vidSrc = $(this).children('.vidThumb').children('video').html();
            let vidTit = $(this).find('.vidTit').children('h4').text();
            let vidTxt = $(this).find('.vidTit').children('p').text();
        
            $('.videoBox').children('video').html(vidSrc);
            $('.videoBox').children('video').css({'width':'100%'});
        
            $('.videoTxt').children('h4').text(vidTit);
            $('.videoTxt').children('p').text(vidTxt);
            $('.videoTxt').css({'textAlign' : 'center'});
        
        });//vidCard 클릭하면 일어날 일!!!!!
        
        
        $('.showCloseWrap, .videoClose').click(function(){
            $('.videoBox').children('video').html('');
            $('.show').stop().fadeOut()
        });//닫기
        
