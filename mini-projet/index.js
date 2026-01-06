let mynb = 23
let urnb = parseInt(window.prompt("Choisis un nombre, vas-y ... Tu ne trouveras jamais le mien", ""))

while (urnb !== mynb){
    if (urnb < mynb){
        window.alert("Trop bas, nullos")
        urnb = parseInt(window.prompt("Choisis un nombre, vas-y ... Tu ne trouveras jamais le mien", ""))
    }
    else if (urnb > mynb){
        window.alert("Trop haut, nullos")
        urnb = parseInt(window.prompt("Choisis un nombre, vas-y ... Tu ne trouveras jamais le mien", ""))
    }
}
window.alert("C'est gagné ... t'est toujours un nullos nonobstant")
