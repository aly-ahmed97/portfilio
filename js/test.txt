let menuButton = document.getElementById("menu"),
    nav = document.getElementsByClassName("nava"),
    i = 0 ;
menuButton.addEventListener("click",function()
    {
        
        for(i = 0; i < 3 ; i++)
        {
            nav[i].classList.toggle("mobile");
        }
    });

    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $("article");
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible")
          }
        else {
            $(tag).removeClass("visible")
          }
        }
    });