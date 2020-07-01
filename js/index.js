let buttons = document.getElementsByClassName("arrow"),
    slides  = document.getElementsByClassName("slide-card"),
    dots    = document.getElementsByClassName("black-dot"),
    i = 0,
    x = 0,
    z = 0,
    S1 = window.matchMedia("(max-width: 1199.98px)"),
    S2 = window.matchMedia("(max-width: 767.98px)");
screentest();
function screentest()
{
    if(S2.matches)
    {
        x = 1;
    }
    else if(S1.matches)
    {
        x = 2;
    }
    else
    {
        x = 3;
    }
    buttons[1].onclick =  function()
    {
        z++;
        if(z === slides.length)
        {
            z = slides.length-1;
        } 
    }
    buttons[0].onclick =  function()
    {
        z--;
        if(z === -1)
        {
            z = 0;  
        }
    }
    for(i= 0 ; i < slides.length ; i++)
    {
        slides[i].style.display = "none";
        dots[i].classList.remove("active-dot");
    }
    for(i = z ; i < (x+z) ; i++)
    {
        slides[i].style.display = "block";
        dots[i].classList.add("active-dot");
    }
    setInterval(screentest,100);
}