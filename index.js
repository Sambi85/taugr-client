document.addEventListener("DOMContentLoaded", function (event) {
    const costumeFetchAdapter = new Fetch
})

class FetchAdapter{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    get(relativeUrl) {
        fetch(baseUrl)
        .then(response => response.json())
        .then(costumeData => console.log(costumeData))
    }
}