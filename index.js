
document.addEventListener("DOMContentLoaded", function (event) {
    const findCostumeButton = document.querySelector("#find-costume")
    // const findHomePage = document.querySelector(".home-page")
    const enterButton = document.querySelector(".click-to-enter-button")
    const enterPage = document.querySelector(".click-enter-page")
    let counter = 11
    const costumeUrl = "http://localhost:3000/costumes/" 
    const userCostumeUrl = "http://localhost:3000/user_costumes/" 
    const userUrl = "http://localhost:3000/users/"
    const fetchCostume = new FetchAdapter(costumeUrl)
    const fetchUserCostume = new FetchAdapter(userCostumeUrl)
    const fetchUser = new FetchAdapter(userUrl)


    
    
    // this is the fetch for the costumes photo 
    
    // function iterateCostumes(costumeData) {
        //     for (let costume of costumeData ) {
            //         console.log(costume)
            //         // console.log(costumeData )
            
            //     }
            // }
            
            // function renderCostume(costumeData) {
                //     const firstPhoto = costumeUrl + counter
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
                            // debugger
                            const userName = e.target.children[0].value
                            // fetchUser.get(userUrl).then(userData=> {
                                const userPost = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Accept": "application/json"
                                    },
                                    body: JSON.stringify({
                                        name: userName //need a user id from magic
                                    })
                                }
                                fetch(userUrl, userPost).then(response => response.json()).then(userData => {
                                    let userId = userData.id
                                    let userIdContainer = document.querySelector(".user-id")
                                    userIdContainer.dataset.id = userId
                                })
                            enterPage.innerHTML = `${homePage}`
                        }
                    })
                }
                
                function randomNumber(min, max) {  
                    return Math.floor(Math.random() * (max - min) + min); 
                }  
                
                function homePageClicks() {
                    document.addEventListener("click", (e) => {
                        if (e.target === document.querySelector("#find-costume")) {
                            enterPage.innerHTML = `${costumePage}`
                            const costumeImage = document.querySelector("#center-costume-photo")
                            fetchCostume.get(randomNumber(1,75)).then(costumeData => {
                                costumeImage.src = costumeData.url
                                costumeImage.dataset.id = costumeData.id
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
                            const costumeImage = document.querySelector("#center-costume-photo")
                            const imageContainer = document.querySelector(".liked-costume")
                            const newImgTag = document.createElement('img')
                            console.log(newImgTag)
                            newImgTag.src = costumeImage.src
                            imageContainer.append(newImgTag)

                            const userLikeId = document.querySelector(".user-id").dataset.id
                            // create a magical fetch POST to get ID of photo
                            const options = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json"
                                },
                                body: JSON.stringify({
                                    user_id: userLikeId, 
                                    costume_id: costumeImage.dataset.id
                                })
                            }

                            
                            fetch(userCostumeUrl, options).then(response => response.json()).then(console.log)
                            

                            fetchCostume.get(randomNumber(1,75)).then(costumeData => {
                                costumeImage.src = costumeData.url
                                costumeImage.dataset.id = costumeData.id
                            })

                    }

                    if (e.target === document.querySelector("#dislike-button")) {
                        enterPage.innerHTML = `${costumePage}`
                        const costumeImage = document.querySelector("#center-costume-photo")
                        fetchCostume.get(randomNumber(1,75)).then(costumeData => {
                            costumeImage.src = costumeData.url
                            costumeImage.dataset.id = costumeData.id
                        })


                  
                    }

                })
            }  


// increment the 'likes' of a cosutume by counting the .length of all the usercostumes that match that costume's id
// upload a photo. on form submission a post request is made to the db
            // make page and a form
// css n jazz


enterPageClicks();
loginPageSubmit();
homePageClicks();
costumePageClicks();
})
