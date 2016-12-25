//Box Opening
    var open_box = false;
    $(".box_area").click(function(){
        var time = 0;
        
        if(!open_box){
            open_box = true;
            
            setTimeout( function(){
                $(".zeal").addClass("remove_zeal");
            }, time);
            
            time += 1000;
            
            setTimeout( function(){
                $(".top_cover").addClass("open_top_cover");
                $(".bottom_cover").addClass("open_bottom_cover");
            }, time);
            
            time += 1000;
            
            setTimeout( function(){
                $(".left_cover").addClass("open_left_cover");
                $(".right_cover").addClass("open_right_cover");
            }, time);
            
            time += 1000;
        }
    });