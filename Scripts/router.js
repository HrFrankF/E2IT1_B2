let submenuLinks = document.querySelectorAll("#submenu a");

submenuLinks.forEach(link => {
    link.onclick = (e) => {
        disableLinks();
        
        link.style["text-decoration"] = "underline";
        route(link.hash);
    };
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

    console.log(route);
    let link = document.querySelector("#submenu a[href='" + route + "']");
    link.style["text-decoration"] = "underline";
}

function showContentByRoute(route) {
    disableContent();

    if (!route) {
        return;
    }

    let section = document.querySelector(route);
    section.style.display = "block";
}

function route(route) {
    enableLinkByRoute(route);
  
    showContentByRoute(route);
}


function routeToActiveLink() {
    let link = document.querySelector("#submenu a[active]").hash;
    window.location.hash = link;

    route(link);
}

routeToActiveLink();