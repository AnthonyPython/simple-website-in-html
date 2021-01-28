$(document).ready(function () {
    
//buttons and div initialization

    var profilebutton = $('#button-pmenu');
    var profilediv = $('#pmenu');
    
    var menubutton = $('#button-bmenu');
    var menudiv = $('#bmenum');   
    
    var bodyflow = $("body");

//profile button click
    
    profilebutton.click(function (e) {
        profilebutton.toggleClass('active');
        profilediv.toggleClass('enabled');

//        if (bodyflow.hasClass('flow_auto')) bodyflow.removeClass('flow_auto'); bodyflow.toggleClass('flow_hidden');
//        if (bodyflow.hasClass('flow_hidden')) bodyflow.removeClass('flow_hidden'); bodyflow.toggleClass('flow_auto');
        
//        $("html,body").css("overflow","hidden");
        
        // if menu is opened - close it now!
        if (menubutton.hasClass('active') && menudiv.hasClass('enabled')) {
            menubutton.removeClass('active');
            menudiv.removeClass('enabled');
        }
        
        e.stopPropagation();
        
    });

//menu button click

    menubutton.click(function (e) {
        menubutton.toggleClass('active');
        menudiv.toggleClass('enabled');

//        if (bodyflow.hasClass('flow_auto')) bodyflow.removeClass('flow_auto'); bodyflow.toggleClass('flow_hidden');
//        if (bodyflow.hasClass('flow_hidden')) bodyflow.removeClass('flow_hidden'); bodyflow.toggleClass('flow_auto');

        // if profile is opened - close it now!        
        if (profilebutton.hasClass('active') && profilediv.hasClass('enabled')) {
            profilebutton.removeClass('active');
            profilediv.removeClass('enabled');
        }
        
        e.stopPropagation();
        
    });

//if you click somewhere - menu and profile will be closed



        $('body').click(function (e) {
        var link = $('#button-pmenu');
        if (link.hasClass('active') && !profilediv.is(e.target) && profilediv.has(e.target).length === 0) {
            link.click();
        }
    });
    
        $('body').click(function (w) {
        var link = $('#button-bmenu');
        if (link.hasClass('active') && !menudiv.is(w.target) && menudiv.has(w.target).length === 0) {
            link.click();
        }
    });

});