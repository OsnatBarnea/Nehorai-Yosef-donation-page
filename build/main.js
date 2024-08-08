//get elements:
const switchImages = document.getElementById("switchImages");
const donateSpan = document.getElementById("donateSpan");
const donateDetails = document.getElementById("donateDetails");
const video = document.getElementById("video");
const article = document.getElementById("article");
const explanation = document.getElementById("explanation");
const imagesSrc = ["assets/images/Nehorai_1.jpg", "assets/images/Nehorai_2.jpg", "assets/images/Nehorai_3.jpg", "assets/images/Nehorai_4.jpg", "assets/images/Nehorai_5.jpg"];
let index = 0;
function switchImage() {
    index = (++index) % imagesSrc.length;
    switchImages.src = imagesSrc[index];
}
//switch image every 3 seconds
setInterval(switchImage, 3000);
const fontColor = ["#ff0000", "#ffffff"];
function donationColor() {
    index = (++index) % fontColor.length;
    donateSpan.style.color = fontColor[index];
}
setInterval(donationColor, 500);
//hover to see donation information:
donateSpan.addEventListener("mouseenter", () => {
    donateSpan.style.cursor = "pointer";
    donateSpan.style.color = "Blue";
    donateDetails.innerHTML = `<p>
    לתרומה בביט 050-910-0003
    <br>
    להעברה בנקאית - שירה הראלי מס' חשבון 4610401
    בנק הפועלים
    סניף 698</p>`;
});
donateSpan.addEventListener("mouseleave", () => {
    donateSpan.style.color = "";
    donateDetails.innerHTML = "";
});
//the video starts when the page is uploaded
window.onload = function () {
    video.play();
};
article.addEventListener("click", () => {
    window.open("https://www.rarediseaseadvisor.com/features/sarepta-looks-to-expand-new-gene-therapy-to-more-patients-with-dmd/", "_blank");
});
article.addEventListener("mouseenter", () => {
    article.style.cursor = "pointer";
    article.style.color = "Blue";
});
article.addEventListener("mouseleave", () => {
    article.style.color = "";
});
