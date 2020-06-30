let buttons = document.getElementsByClassName("arrow"),
    slides  = document.getElementsByClassName("slide-card"),
    dots    = document.getElementsByClassName("black-dot"),
    i = 0,
    x = 0,
    y = 0,
    z = 0,
    S1 = window.matchMedia("(max-width: 1199.98px)"),
    S2 = window.matchMedia("(max-width: 575.98px)");

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
if(y !== x)
{
    for(i= x ; i < slides.length ; i++)
    {
        slides[i].style.display = "none";
        dots[i].classList.remove("active-dot");
    }
}
}

buttons[1].addEventListener("click",function()
{
    z++;
    let a = 0; 
    if ( z < (slides.length-x))
    {
        for(i = 0 ; i < slides.length ; i++)
        {
            slides[i].style.display = "none";
            dots[i].classList.remove("active-dot");
        }
        for(i = 0 ; i < (slides.length-x) ; i++)
        {
            a = i + z ;
            console.log(a);
            slides[a].style.display = "block";
            dots[a].classList.add("active-dot");
        } 
    } 
});

screentest();