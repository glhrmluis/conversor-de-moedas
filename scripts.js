const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas


    const dolarToday = 4.98
    const euroToday = 5.40
    const euroToDolar = 1.08
    const dolarToEuro = 0.92


    if (currencySelectConverted.value == "dolar" && currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    } else if (currencySelectConverted.value == "dolar" && currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToDolar)

    } else if (currencySelectConverted.value == "dolar" && currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectConverted.value == "real" && currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }


    if (currencySelectConverted.value == "euro" && currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    } else if (currencySelectConverted.value == "euro" && currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToEuro)

    } else if ((currencySelectConverted.value == "euro" && currencySelectToConvert.value == "euro")) {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if ((currencySelectConverted.value == "real" && currencySelectToConvert.value == "euro")) {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelectConverted.value == "real" && currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }


    if (currencySelectToConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if (currencySelectToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }






}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert")
    const currencyImgConverted = document.querySelector(".currency-img-converted")

    if (currencySelectConverted.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImgConverted.src = "./assets/dolar.png"
    }

    if (currencySelectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImgConverted.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImgConverted.src = "./assets/real.png"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImgToConvert.src = "./assets/dolar.png"
    }

    if (currencySelectToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./assets/euro.png"
    }

    if (currencySelectToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real"
        currencyImgToConvert.src = "./assets/real.png"
    }

    convertValues()
}


currencySelectConverted.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)