const apiKey = localStorage.getItem("apiKey")

if (apiKey) {
    window.API_KEY = apiKey
    console.log("window.API_KEY")
    console.log(window.API_KEY)
} else {
    localStorage.setItem("apiKey", "8642EySRM9pClNI3TWzeJj8RRyJxjWMN")
    alert("Был добавлен ключ запросов ограниченного пользования, " +
        "пожалуйста добавьте свой клчю после перезагрузки...")
    location.reload()
}