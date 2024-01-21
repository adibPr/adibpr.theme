var darkTheme = {
    '--theme': 'dark',
    '--font-color': '#d6d6d6',
    '--background-color': '#161b1d',
    '--link-color': '#e87d3e',
    '--pre-code-color': 'white',
}

var whiteTheme = {
    '--theme': 'white',
    '--font-color': 'black',
    '--background-color': 'white',
    '--link-color': 'blue',
    '--pre-code-color': 'black',
}

function updateTheme(theme) {
    for (var key in theme) {
        if (theme.hasOwnProperty(key)) {
            document.documentElement.style.setProperty(key, theme[key]);
        }
    }
    // change the css for syntax
    var link = document.createElement("link");
    link.href = "/css/syntax_" + theme['--theme'] +".css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName( "head" )[0].appendChild( link );
}

function changeTheme() {
    var currentTheme = getComputedStyle(document.body).getPropertyValue('--theme');
    console.log(currentTheme);
    if (currentTheme == "dark") {
        var theme = whiteTheme;
    } else {
        var theme = darkTheme;
    }
    updateTheme(theme);
    localStorage.setItem('mine.theme', theme['--theme'])
}

/* get default theme on first check */
var storageTheme = localStorage.getItem('mine.theme')
if (storageTheme) {
    if (storageTheme == 'dark') {
        updateTheme(darkTheme);
    } else {
        updateTheme(whiteTheme);
    }
}
