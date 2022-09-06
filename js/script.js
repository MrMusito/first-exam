const trip = document.getElementById("trip");
trip.addEventListener("mouseenter", function(event) {
    this.classList.add("bigger")
});
trip.addEventListener("mouseleave", function(event) {
    this.classList.remove("bigger")
});
const book = document.getElementById("book");
book.addEventListener("mouseenter", function(event) {
    this.classList.add("bigger")
});
book.addEventListener("mouseleave", function(event) {
    this.classList.remove("bigger")
});
const movie = document.getElementById("movie");
movie.addEventListener("mouseenter", function(event) {
    this.classList.add("bigger")
});
movie.addEventListener("mouseleave", function(event) {
    this.classList.remove("bigger")
});
const music = document.getElementById("music");
music.addEventListener("mouseenter", function(event) {
    this.classList.add("bigger")
});
music.addEventListener("mouseleave", function(event) {
    this.classList.remove("bigger")
});
const all = document.querySelectorAll("about");
all.addEventListener("click", function(event){
    console.log(event)
});