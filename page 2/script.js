// * Loading
onload = function() {
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

// * Hitung Function
const hitung = () => {
    const a = document.getElementById("inputA").value
    const t = document.getElementById("inputT").value
    let luas = (parseInt(a) * parseInt(t)) / 2
    const formatter = new Intl.NumberFormat('Id', {
        style : 'unit',
        unit : 'centimeter'
    });

    if (!luas) {
        document.getElementById("result").innerHTML = "Error! Ulang lagi"
    } else if(a < 0 || t < 0){
        document.getElementById("result").innerHTML = "Error! nilai harus positif"
    } else{
        document.getElementById("result").innerHTML = `${formatter.format(luas)}<sup>2</sup>` 
    }
}

// * Reset Function
const reset = () => {
    luas = 0
    document.getElementById("result").innerHTML = luas
    document.getElementById("inputA").value = "";
    document.getElementById("inputT").value = "";
}

// * navigate to Luas Lingkaran
const navigateF = () => {
    window.location.href = '../index.html'
}