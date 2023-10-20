let submenuLinks = document.querySelectorAll("#submenu a");

submenuLinks.forEach(link => {
    link.addEventListener("click", function () {
        disableLinks();

        link.style["text-decoration"] = "underline";
        route();
    });
});

function disableLinks() {
    submenuLinks.forEach(link => {
        link.style["text-decoration"] = "none";
    });
}

function disableContent() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id == "submenu") {
            return;
        }

        section.style.display = "none";
    });
}

function enableLinkByRoute(route) {
    if (!route) {
        return;
    }

    let link = document.querySelector("#submenu a[href='#" + route + "']");
    link.style["text-decoration"] = "underline";
}

function showContentByRoute(route) {
    disableContent();

    if (!route) {
        return;
    }

    let section = document.querySelector("#" + route + "-content")
    section.style.display = "block";
}

function getRoute() {
    let currentUrl = window.location.href;
    let split = currentUrl.split("#");

    if (split.length != 2) {
        console.log("Keine route angegeben")
        return;
    }

    return split[1];
}

function route() {
    let route = getRoute();

    enableLinkByRoute(route);
    showContentByRoute(route);
}


function routeToActiveLink() {
    let link = document.querySelector("#submenu a[active]").hash;
    window.location.hash = link;
    route();
}

routeToActiveLink();