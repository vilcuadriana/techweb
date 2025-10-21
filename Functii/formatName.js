const formatString = (s, values) => {
    let modified = s
    for (let key in values) {
        if (modified.indexOf('{' + key + '}') !== -1) {
            modified = modified.replace('{' + key + '}', values[key])
        }
    }
    return modified
}

console.log(
    formatString("un {substantiv} este {adjectiv}", { substantiv: "căluț", adjectiv: "drăguț" })
)