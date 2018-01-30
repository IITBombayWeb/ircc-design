
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