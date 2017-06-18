/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("navbar").style.display="none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navbar").style.display="block";
}


function openNav2() {
    closeNav();
    document.getElementById("navbar").style.display="none";
    document.getElementById("mySidenav2").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("navbar").style.display="block";
}

