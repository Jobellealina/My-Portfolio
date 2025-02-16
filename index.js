const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("close");
const descriptionText = document.getElementById("description-text");

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        descriptionText.innerHTML = this.alt + " - This is a description of the image.";
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

<script>
document.querySelectorAll('.hobby-image').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'translateY(10px)'; 
        image.style.transition = 'transform 0.3s ease'; 
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'translateY(0)'; 
    });
});
</script>