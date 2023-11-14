function refresh(palette) {
    let root = document.querySelector(":root");

    for (var key in palette) {
        if(key == "images") {
            refreshImages(palette[key]);

            continue;
        }

        var cssName = "--" + key.replaceAll("_", "-");

        root.style.setProperty(cssName, palette[key]);
    }
}

function refreshImages(images) {
    for(var img in images) {
        var element = document.querySelector(img);
        element.src = "Images/" + images[img];
    }
}

function getPalette(isDarkMode) {
    return isDarkMode ? dark : light;
}

function setTheme() {
    var switchInput = document.querySelector("#theme_switch");

    localStorage.setItem("isDarkMode", switchInput.checked);

    initThemeToggleIcon(switchInput.checked);
    refresh(getPalette(switchInput.checked));
}

function onload() {
    var hasValue = localStorage.getItem("isDarkMode") != null;

    if(!hasValue) {
        localStorage.setItem("isDarkMode", true); 
    }

    let isDarkMode = localStorage.getItem("isDarkMode") == "true";
    var switchInput = document.querySelector("#theme_switch");
    
    initThemeToggleIcon(isDarkMode);

    switchInput.checked = isDarkMode;

    refresh(getPalette(switchInput.checked));
};

function initThemeToggleIcon(isDarkMode) {
    var moonMask = document.querySelector("#moon-mask");

    moonMask.style.visibility = isDarkMode ? "visible" : "hidden";
}

function initTheme() {
    let isDarkMode = localStorage.getItem("isDarkMode") == "true";

    refresh(getPalette(isDarkMode));
}

initTheme();