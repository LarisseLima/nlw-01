function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCitites(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}


document
    // seleciona o seletor de nome uf
    .querySelector("select[name=uf]")
    // acionado quando tiver uma mudança
    .addEventListener("change", getCitites)