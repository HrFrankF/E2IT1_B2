function refreshColors(palette) {
    let root = document.querySelector(":root");

    for (var key in palette) {
        var cssName = "--" + key.replace("_", "-");

        root.style.setProperty(cssName, palette[key]);
    }
}

function getPalette(isDarkMode) {
    return isDarkMode ? dark : light;
}

function setTheme() {
    var switchInput = document.querySelector("#theme_switch");

    localStorage.setItem("isDarkMode", switchInput.checked)
    refreshColors(getPalette(switchInput.checked));
}

function setThemeSwitch() {
    let isDarkMode = localStorage.getItem("isDarkMode") == "true";
    var switchInput = document.querySelector("#theme_switch");

    switchInput.checked = isDarkMode;
};

function initTheme() {
    let isDarkMode = localStorage.getItem("isDarkMode") == "true";
    refreshColors(getPalette(isDarkMode));
}

initTheme();