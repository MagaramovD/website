function showMessage() {
    alert("Привет, мир!")
}


function zoomImage(image) {
    if (image.classList.contains('zoomed')) {
        image.classList.remove('zoomed');
    } else {
        image.classList.add('zoomed');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var reviewForm = document.getElementById('reviewForm');
    var addReviewButton = document.getElementById('addReviewButton');
    var reviewsContainer = document.getElementById('reviewsContainer');

    addReviewButton.addEventListener('click', function(event) {
        event.preventDefault();

        var fnameInput = document.getElementById('fname');
        var lnameInput = document.getElementById('lname');
        var reviewInput = document.getElementById('reviewInput');
        
        var fname = fnameInput.value;
        var lname = lnameInput.value;
        var reviewText = reviewInput.value;

        if (reviewText.trim() === '') {
            alert("Please enter a review.");
            return;
        }

        var reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        var reviewContent = document.createElement('p');
        reviewContent.textContent = `${fname} ${lname}: ${reviewText}`;
        reviewDiv.appendChild(reviewContent);
        reviewsContainer.appendChild(reviewDiv);

        fnameInput.value = '';
        lnameInput.value = '';
        reviewInput.value = '';
    });
});


function startAnimation() {
    var animation = document.getElementById("animation");
    animation.style.display = "block";
    animation.src = "img/VOCG.gif";
    setTimeout(function() {
        animation.style.display = "none";
        alert("DONT FORGET TO REST");
    }, 3000); 
}

