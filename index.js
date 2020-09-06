
document.addEventListener("DOMContentLoaded", function (event) {
    const findCostumeButton = document.querySelector("#find-costume")
    // const findHomePage = document.querySelector(".home-page")
    const enterButton = document.querySelector(".click-to-enter-button")
    const enterPage = document.querySelector(".click-enter-page")
    
    
    const baseUrl = "http://localhost:3000/"
    const fetch1 = new FetchAdapter(baseUrl)
    
    // this is the fetch for the costumes photo
    fetch1.get(`costumes`)
    .then(costumeData => {
      costumeData.forEach()  // COME BACK TO THIS --------------------------------- !
    })
    
    
    // This is the code for the animated title 
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
    .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    
    // Click listener to bring us to the login menu
    function enterPageClicks(){
        document.addEventListener('click', (e) => {
            if(e.target === enterButton){
                enterPage.innerHTML = `${loginMenu}`
            } 
            
        })
    }
    
    // Trying to get a submit listener on the login for to then bring us to the 'homePage'
    // Instead it is bringing us to a blank (null) click-enter-page
    // moved loginForm in to the submit listener since it hadn't been created yet in any other scope
    function loginPageSubmit(){
        document.addEventListener('submit', (e) =>{
            e.preventDefault()
            const loginForm = document.querySelector("form")
                if(e.target === loginForm){
                    // enterPage.innerHTML = ``
                    enterPage.innerHTML = `${homePage}`
                }

        
    })
}

  function homePageClicks() {
    document.addEventListener("click", (e) => {
      if (e.target === document.querySelector("#find-costume")) {
            enterPage.innerHTML = `${costumePage}`
      }
      if (e.target === document.querySelector("#upload")) {
           enterPage.innerHTML = "<h1> Upload Form goes here/ hide and seek/ toy tale !!! <h1>" 
      }
    
    }) 
  }

enterPageClicks();
loginPageSubmit();
homePageClicks();
})
