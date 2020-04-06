const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
         modalOverlay.classList.add('active')
     
      const photoId = card.getAttribute("id");
      modalOverlay.querySelector("iframe").src=`http://www.youtube.com/embed/${photoId}?autoplay=1&origin=http://example.com`
    
    })
}



document.querySelector('.modalclose').addEventListener('click', function(){
 modalOverlay.classList.remove('active')
 modalOverlay.querySelector("iframe").src=""
})





