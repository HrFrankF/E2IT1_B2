let submenuLinks = document.querySelectorAll("#submenu a");

submenuLinks.forEach(link => {
    link.addEventListener("click", function () {
        disableLinks();

        link.style["text-decoration"] = "underline";
    });
});

function disableLinks() {
    submenuLinks.forEach(link => {
        link.style["text-decoration"] = "none";
    });
}

function enableLinkByRoute() {
    let currentUrl = window.location.href;
    let split = currentUrl.split("#");

    if(split.length != 2) {
        return;
    }

    let route = split[1];
    let link = document.querySelector("#submenu a[href='#" + route + "']");
    link.style["text-decoration"] = "underline";
}

enableLinkByRoute();