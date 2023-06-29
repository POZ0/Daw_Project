
var button = document.querySelector('#go-to-example-button');
// button.addEventListener('click', goToExample);



function goToExample() {
    window.location.href = 'profile2.html';
  }
  function goToProfile() {
    window.location.href = 'profile.html';
  }
  function goToProfeedbak() {
    window.location.href = 'profile3.html';
  }
  const stars = document.querySelectorAll('.fa-star');

function fillStars(selectedStar) {
    const selectedValue = parseInt(selectedStar.getAttribute('data-value'));
    console.log("jj");

    for (let i = 0; i < stars.length; i++) {
        const starValue = parseInt(stars[i].getAttribute('data-value'));

        if (starValue <= selectedValue) {
          stars[i].style.color = 'gold';
        } else {
          stars[i].style.color = 'white';
        }
        
    }
    
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        fillStars(star);
    });
});
