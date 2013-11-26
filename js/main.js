var menu = $(".menu-interactive");
var anchors = menu.find("a");
if(anchors.length > 0){
    var servContent = $(".services-content");
    anchors.on("click", function(e){
        e.preventDefault();
        var $this = $(this);
        var to = $this.attr("href");
        console.log("Clicked menu! " + to);
        var art = servContent.find("article:visible");
        art.fadeOut(200, function(){
            $(to).fadeIn(200);
        });
        menu.find("li").removeClass("selected");
        $this.parent().addClass("selected");
    });
    servContent.find("article:not(:first-child)").hide();
}

var $win = $(window);
var services = $("section.services").offset().top;
var pry_menu = $("ul.primary-menu");
$win.scroll(function (e) {
    var removeClass = function(){
        pry_menu.find("li.selected").removeClass("selected");
    }

    var scrollTop = $win.scrollTop()+50;
    var scrollBottom = scrollTop + $win.height();

    if(scrollTop >= services){
        removeClass();
        pry_menu.find("li.services").addClass("selected");
    }else{
        if(scrollTop < services){
            removeClass();
            pry_menu.find("li.home").addClass("selected");
        }else{
            if(scrollTop + $win.height() == scrollBottom){
                removeClass();
                pry_menu.find("li.contact").addClass("selected");
            }
        }
    }
});
