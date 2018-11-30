let audrey = document.querySelector("#audrey")


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
    if (window.scrollY < 100) {
        audrey.style.height = 100
        audrey.style.width = 100
    } else {
        if (window.scrollY >= 100)
            audrey.style.width = (window.scrollY) / 3 + "px"
        audrey.style.height = (window.scrollY) / 4 + "px"
    }

    console.log(event)




    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
});