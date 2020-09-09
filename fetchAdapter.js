
class FetchAdapter{
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
  
    get(relativeUrl) {
      return fetch(`${this.baseUrl}${relativeUrl}`)
      .then(response => response.json())
    }

    
    
}
