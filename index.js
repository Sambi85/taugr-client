
document.addEventListener("DOMContentLoaded", function (event) {

    const baseUrl = "http://localhost:3000/"
    const fetch1 = new FetchAdapter(baseUrl)
    
    fetch1.get(`costumes`)
    .then(costumeData => {
      costumeData.forEach(console.log)
    })



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



})
