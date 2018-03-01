
    $(document).scroll(function() {
    	scroll_height=$(document).scrollTop();
    	if (scroll_height>10){
    		$('#header').addClass('header-min');
    		$('#header-sec').addClass('header-sec-min');
            $('#header-main').addClass('header-main-min');
            $('#search-bar').addClass('search-bar-min');
    	}

    	if (scroll_height<=10){
    		$('#header').removeClass('header-min');
            $('#header-sec').removeClass('header-sec-min');
            $('#header-main').removeClass('header-main-min');
    	    $('#search-bar').removeClass('search-bar-min');
        }
	})


    function a(vh){
        px=$(window).height()*vh;
        return (px/$(window).width());
    }

    f_1=false;
    f_2=false;
    function showMore(val){
        if(val==1){
            if(!f_1){
                $('.fil1-hid').slideDown();
                $("#sh-mr1").text('Show less');
                f_1=true;
            }else{
                $('.fil1-hid').slideUp();
                $("#sh-mr1").text('Show more');
                f_1=false;
            }
        }else{
            if(!f_2){
                $('.fil2-hid').slideDown();
                $("#sh-mr2").text('Show less');
                f_2=true;
            }else{
                $('.fil2-hid').slideUp();
                $("#sh-mr2").text('Show more');
                f_2=false;
            }
        }
    }

    function fac_viewMore(cls,ths){
        
        
        
        if($('#'+ths).text()=='more'){
            $('.'+cls).slideDown();
            $('#'+ths).text('less');
        }else{
            $('.'+cls).slideUp();
            $('#'+ths).text('more');
        }

    }