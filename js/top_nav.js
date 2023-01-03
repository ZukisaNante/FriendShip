// Toggle between responsive and normal screen size on user click
function topNav() {
    var topNavLinks = document.getElementById("nav_top");
    if (topNavLinks.className === "top-nav") {
        topNavLinks += " responsive";
    } else {
        topNavLinks.className = "top-nav";
    }
}