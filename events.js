const card=document.querySelector("div");
card.innerHTML=`<img src="https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980:*"width="300px"height="170px"> 
<p>flowers</p>
<button>ExploreMore</button>`
card.style.display="inline-block"
card.style.padding="20px"
card.style.backgroundColor="grey"
card.style.border="2px solid black"
card.style.width="300px"
card.style.textAlign="center"

const newCard=document.getElementById("two");
newCard.innerHTML=`<img src="https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980:*"width="300px"height="170px"> 
<p>flowers</p>
<button>ExploreMore</button>`
newCard.style.display="inline-block"
newCard.style.padding="20px"
newCard.style.backgroundColor="grey"
newCard.style.border="2px solid black"
newCard.style.width="300px"
newCard.style.textAlign="center"


var newCard1=document.createElement("div");
newCard1.innerHTML=`<img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"width="300px"height="170px"> 
<p>Rose</p>
<button>ExploreMore</button>`

newCard1.style.display="inline-block"
newCard1.style.padding="20px"
newCard1.style.backgroundColor="grey"
newCard1.style.border="2px solid black"
newCard1.style.gap="20px"
newCard1.style.textAlign="center"

console.log(newCard1)
document.body.appendChild(newCard1)

var newCard2=document.createElement("div");
newCard2.innerHTML=`<img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"width="300px"height="170px"> 
<p>Rose</p>
<button>ExploreMore</button>`

newCard2.style.display="inline-block"
newCard2.style.padding="20px"
newCard2.style.backgroundColor="grey"
newCard2.style.border="2px solid black"
newCard2.style.width="300px"
newCard2.style.gap="20px"
newCard2.style.textAlign="center"


console.log(newCard2)
document.body.appendChild(newCard2)

document.body.style.display="flex"
document.body.style.gap="20px"