
document.addEventListener("DOMContentLoaded", function (event) {
    const findCostumeButton = document.querySelector("#find-costume")
    // const findHomePage = document.querySelector(".home-page")
    const enterButton = document.querySelector(".click-to-enter-button")
    const enterPage = document.querySelector(".click-enter-page")
    const welcomeButtonContainer = document.querySelector(".center")
    
    const costumeUrl = "http://localhost:3000/costumes/" 
    const userCostumeUrl = "http://localhost:3000/user_costumes/" 
    const userUrl = "http://localhost:3000/users/"
    const fetchCostume = new FetchAdapter(costumeUrl)
    const fetchUserCostume = new FetchAdapter(userCostumeUrl)
    const fetchUser = new FetchAdapter(userUrl)
    
    
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
                
                function loginPageSubmit(){
                    document.addEventListener('submit', (e) =>{
                        e.preventDefault()
                        const loginForm = document.querySelector("form")
                        if(e.target === loginForm){
                            
                            const userName = e.target.children[0].value
                            const userPost = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json"
                                },
                                body: JSON.stringify({
                                    name: userName
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
                    
                    
                    /// JUST BROKE OUR CLICK LISTENER, TRYING TO GET OUR COSTUME.USER_COSTUMES.LENGTH
                    
                    
                    function homePageClicks() {
                        enterPage.addEventListener("click", (e) => {
                            if (e.target === document.querySelector("#find-costume")) {
                                enterPage.innerHTML = `${costumePage}`
                                const costumeImage = document.querySelector("#center-costume-photo")
                                const likesContainer = document.querySelector(".likes-container")
                                
                                fetchCostume.get(randomNumber(1,81)).then(costumeData => {
                                    const likesSpan = document.createElement("span")
                                    likesSpan.className = "likes-span"
                                    costumeImage.src = costumeData.url
                                    costumeImage.dataset.id = costumeData.id
                                    likesSpan.innerText = " "
                                    likesSpan.innerText = parseInt(`${costumeData.user_costumes.length}`) + ` People Have Liked This Costume`
                                    likesContainer.appendChild(likesSpan)
                                })
                                
                    // vv This is closing the if statement for the find-costume button         
                        }
                        
                        if (e.target === document.querySelector("#upload-button")) {
                            const uploadCostumeBtn = document.querySelector("#upload-button");
                            const uploadFormContainer = document.querySelector(".upload-form-container");
                            uploadFormContainer.innerHTML = `${newCostumeForm}`                      
                            addCostume() 
                        } 
                    }) 
                }

                
                function addCostume(){
                    const uploadFormContainer = document.querySelector(".upload-form-container");
                    uploadFormContainer.addEventListener('submit', function(e){
                        
                        e.preventDefault()
                        let newTitle = e.target.title.value
                        let imageUrl = e.target.imageUrl.value
                        let description = e.target.description.value
                        
                      const options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            title: newTitle, 
                            url: imageUrl,
                            description: description
                        }) 
                    }

                    fetch(costumeUrl, options).then(resp => resp.json()).then(data => console.log(data))
                })
                }
                
                function costumePageClicks() {
                    document.addEventListener("click", (e) => {
                        if (e.target === document.querySelector("#like-button")) {
                            
                            const costumeImage = document.querySelector("#center-costume-photo")
                            const imageContainer = document.querySelector(".liked-costume")
                            const newImgTag = document.createElement('img')
                            newImgTag.className = "indiv-liked-costume"
                            newImgTag.src = costumeImage.src
                            imageContainer.append(newImgTag)

                            const userLikeId = document.querySelector(".user-id").dataset.id
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
                            fetch(userCostumeUrl, options)
                            .then(response => response.json())
                            // The above fetch is POSTing our new UserCostume to the DB
                            
                            fetchCostume.get(randomNumber(1,81)).then(costumeData => {
                                costumeImage.src = costumeData.url
                                costumeImage.dataset.id = costumeData.id
                            })

                    }

                    if (e.target === document.querySelector("#dislike-button")) {
                        enterPage.innerHTML = `${costumePage}`
                        const costumeImage = document.querySelector("#center-costume-photo")
                        fetchCostume.get(randomNumber(1,81)).then(costumeData => {
                            costumeImage.src = costumeData.url
                            costumeImage.dataset.id = costumeData.id
                        })
                  
                    }

                })
            }  


// increment the 'likes' of a cosutume by counting the .length of all the usercostumes that match that costume's id
// upload a photo. on form submission a post request is made to the db
    // make page and a form
// get like images to persist reguards of liking or disliking current photo
// serializer, let's get it working ! 
// css n jazz


enterPageClicks();
loginPageSubmit();
homePageClicks();
costumePageClicks();
})
