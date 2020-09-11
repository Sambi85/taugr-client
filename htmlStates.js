let enterPage = `

<div class="click-enter-page">
    <h1 class ="ml3">Welcome to Taugr</h1> 
    <button class="click-to-enter-button">Dare to Enter?</button>
  </div>

`

// Page with buttons for finding a costume and uploading your own
let homePage = `

<div class="home-page">
    <h1 class ="ml3">Welcome to Taugr</h1> 
    
    <div class="welcome-button-container">
      <div class="center">
        <button id="find-costume"> 
          Find for a Costume 
        </button>
        

        <!-- working on adding a hidden form --->

        <div class="upload-form-container">
          <button id="upload-button">
            Upload Your Own Costume
          </button>
        </div>
      </div>
    </div>
  </div>
`
// <!-- Pick a Costume -->
let costumePage = `

<div class="costume-page">

    <h1 class ="ml3">Add to your ensemble</h1> 

    <!--  Amount of likes on a UserCostume will populate in the below container  -->
    <div class ="likes-container">
    </div> 

    <div class="costume-container">
      <!--  Photos from the Api will be rendered in to this img tag below  -->
      <img src="" alt="" height=600px id="center-costume-photo" >
    </div>

    <div class="costume-button-container">
      <button id="like-button">
        I like it!
      </button>

      <button id="dislike-button">
        I don't like this!!
      </button>
    </div>

    <div class="liked-costumes-container">
    <!--  Photos will populate here after Like button is clicked   -->
        <div class="liked-costume">
            <img src="" height=125px id="liked-img-tag">
        </div>
    </div>

    <div class="scroll-up-button-container"> 
        <button id="scroll-up-button">
          ^
        </button>
    </div>

    <div class="scroll-down-button-container">
        <button id="scroll-down-button">
            v
        </button>
    </div>

</div>
`
// <!--   login pop up screen    -->
let loginMenu = `

<a class="login-trigger" href="#" data-target="#login" data-toggle="modal">Dare to enter ?!?</a>

<div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">
    
    <div class="modal-content">
      <div class="modal-body">
       
        <h4 id="what-is-name">What is your name?</h4>
        <form>
          <input type="text" name="username" class="username form-control" placeholder="Enter your name"/>
          <input class="btn login" type="submit" value="You may enter..." />
        </form>
      </div>
    </div>
  </div>  
</div>
`

let newCostumeForm = `<form class ="new-costume-form">
                  <input
                    type="text"
                    title="title"
                    value=""
                    placeholder="Title your costume"
                    class="input-text"
                    />
                    <br />
                    <input
                    type="text"
                    name="imageUrl"
                    value=""
                    placeholder="Image Url..."
                    class="input-text"
                    />
                    <br />
                    <input
                    type="text"
                    name="description"
                    value=""
                    placeholder="Describe your costume..."
                    class="input-text"
                    />
                    <br />
                    <input
                    type="submit"
                    name="submit"
                    value="Upload Costume"
                    class="submit"
                    />
                  </form>
                  `