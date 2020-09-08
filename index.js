
document.addEventListener("DOMContentLoaded", function (event) {
    const findCostumeButton = document.querySelector("#find-costume")
    // const findHomePage = document.querySelector(".home-page")
    const enterButton = document.querySelector(".click-to-enter-button")
    const enterPage = document.querySelector(".click-enter-page")
    let counter = 11
    const baseUrl = "http://localhost:3000/" 
    const fetch1 = new FetchAdapter(baseUrl)
    
    
    // this is the fetch for the costumes photo 
    
    // function iterateCostumes(costumeData) {
        //     for (let costume of costumeData ) {
            //         console.log(costume)
            //         // console.log(costumeData )
            
            //     }
            // }
            
            // function renderCostume(costumeData) {
            //     const firstPhoto = baseUrl + counter
            // }
            
            
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
                        fetch1.get(`costumes/${counter}`)
                        .then(costumeData => {
                            document.querySelector("#center-costume-photo").src = costumeData.url,
                            document.querySelector("#center-costume-photo").alt = costumeData.description
                            document.querySelector("#center-costume-photo").id = costumeData.id
                        })
                            
                        }
                        if (e.target === document.querySelector("#upload")) {
                            enterPage.innerHTML = "<h1> Upload Form goes here/ hide and seek/ toy tale !!! <h1>" 
                        }
                        
                    }) 
                }
                
                function costumePageClicks() {
                    document.addEventListener("click", (e) => {
                        if (e.target === document.querySelector("#like-button")) {
                            console.log(e.target)
                            // renderCostume(); // pull id from photo using e.target, traverse dom/ save to const, add that +1
                              // COME BACK TO THIS --------------------------------- !
                            // if counter < object collection.length or .last ?  grab counter += 1
                            // else set counter to  6 or .first ?  
                    }
                    if (e.target === document.querySelector("#dislike-button")) {
                        counter = e.target.parentElement.previousElementSibling.children[0].id
                        counter = parseInt(counter)
                        counter = counter + 1 
                        enterPage.innerHTML = `${costumePage}`
                        
                        // document.querySelector("#center-costume-photo").src = costumeData.url,
                        fetch1.get(`costumes/12`)
                        .then(costumeData => {
                            
                            document.querySelector("#center-costume-photo").src = costumeData.url
                            document.querySelector("#center-costume-photo").alt = costumeData.description    
                            debugger
                        })
                    

                  
                    }

                })
            }  

enterPageClicks();
loginPageSubmit();
homePageClicks();
costumePageClicks();
})
