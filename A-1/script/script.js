$(function(){

    //header menu--------------------------------------------------------
    /* 전체슬라이드 */
/*     $('header nav >ul').mouseenter(function(){
        $('ul.lv2').slideDown(800)
    })
    
    $('header nav >ul').mouseleave(function(){
        $('ul.lv2').stop().slideUp(500)
    }) */
    
    /* 한개슬라이드 */
/*     $('li.lv1').mouseenter(function(){
        $(this).find('ul.lv2').stop().slideDown()
    })
    $('li.lv1').mouseleave(function(){
        $('ul.lv2').stop().slideUp()
    }) */

    /* 전체배경슬라이드 */
    $('header nav >ul').mouseenter(function(){
        $('ul.lv2, .headerBg').stop().slideDown()
    })
    $('header nav >ul').mouseleave(function(){
        $('ul.lv2, .headerBg').stop().slideUp()
    })

    //slide---------------------------------------------------------------
    /* 상하 */
/*     setInterval(function(){
      $('.slideWrap').animate({'margin-top':'-300'},function(){
          $('.slide:first').appendTo('.slideWrap')
          $('.slideWrap').css({'margin-top':'0'})
      })
    },3000) */

    /* 좌우 */
/*     setInterval(function(){
        $('.slideWrap').animate({'margin-left':'-1200'},function(){
            $('.slide:first').appendTo('.slideWrap')
            $('.slideWrap').css({'margin-left':'0'})
        })
      },3000) */

    /* 페이드 */
      $('.slide:gt(0)').hide()
    setInterval(function(){
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slideWrap')
    },3000)
    
    //tab-----------------------------------------------------------------
    $('.tabMenu li').click(function(){
        var idx=$(this).index()
        
        $('.tabItem >*').hide().removeClass('on')
        $('.tabItem >*').eq(idx).show().addClass('on')
        
        $('.tabMenu li').removeClass('on')
        $(this).addClass('on')
    })
    
    //popUpBox---------------------------------------------------------
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
    
    })