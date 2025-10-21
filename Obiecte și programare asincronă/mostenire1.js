class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} rulează`);
    }
}
class Plugin {
    constructor(name) {
        this.name = name;
    }

    install() {
        console.log(`Plugin-ul ${this.name} a fost instalat`);
    }
}
class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }

    addPlugin(plugin) {
        this.plugins.push(plugin);
        plugin.install();
    }

    listPlugins() {
        console.log(`Browser-ul ${this.name} are plugin-uri:`);
        for (const p of this.plugins) {
            console.log(`- ${p.name}`);
        }
    }
}
const chrome = new Browser("Chrome");
chrome.run(); // moștenit de la Software

const adblock = new Plugin("AdBlock");
const darkMode = new Plugin("DarkMode");

chrome.addPlugin(adblock);
chrome.addPlugin(darkMode);

chrome.listPlugins();