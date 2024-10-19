// * Loading
onload = () => {
    // initialitation
    let id = document.getElementById("app")
    let loading = document.createElement("div")

    // fill content
    loading.textContent = "Loading"
    id.appendChild(loading)

    let loaded = setInterval(() => {
        loading.textContent = loading.textContent + "."
    }, 1000)

    // set time out
    setTimeout(() => {
        this.clearInterval(loaded)
        id.style.display = 'none'
    }, 5000)
}

// * Hitung luas
const hitung = () => {
    const r = document.getElementById("inputR").value
    const pi = 3.14
    let luas = pi * parseInt(r) ** 2
    const formatter = new Intl.NumberFormat('Id', {
        style : 'unit',
        unit : 'centimeter'
    });
    
    if (!luas) {
        document.getElementById("result").innerHTML = "Error! Ulang lagi"
    } else if(r < 0){
        document.getElementById("result").innerHTML = "Error! r harus positif"
    } else {
        document.getElementById("result").innerHTML = `${formatter.format(luas)}<sup>2</sup>` 
    }
}

// * Reset
const reset = () => {
    luas = 0
    document.getElementById("result").innerHTML = luas
    document.getElementById("inputR").value = ""
}

// * Navigate to Luas Segitiga
const navigateF = () => {
    window.location = './page 2/index.html'
}