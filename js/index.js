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