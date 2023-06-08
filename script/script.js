



const creazioneTabellone = function () {
    for (let i = 0; i < 90; i++) {
        let celleTabellone = document.createElement("div")
        celleTabellone.classList.add("celle")
        let numeroCella = document.createElement("h4")
        numeroCella.innerText = i + 1
        const tabellone = document.getElementById("tabellone")
        tabellone.appendChild(celleTabellone)
        celleTabellone.appendChild(numeroCella)
    }
}

creazioneTabellone()


const bottoneEstrazione = document.getElementById("button-estrazione")
bottoneEstrazione.addEventListener("click", () =>{
    let numeroEstratto = Math.floor((Math.random()*90) + 1)
    let celle = document.querySelectorAll(".celle")
    celle.forEach(cella => {
        if (Number(cella.innerText) === numeroEstratto) {
            cella.classList.add("estratto")
        }
    })
})