/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// the navbar__list li section

let allSections = document.querySelectorAll("section");
let ul = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();

// create and append the list items inside a fragment
allSections.forEach((element) => {
    const sectionName = element.getAttribute("data-nav");
    let li = document.createElement("li");
    li.innerText = sectionName;
    fragment.appendChild(li);

});

ul.appendChild(fragment);
let allLi = document.querySelectorAll("#navbar__list li");
allLi[0].setAttribute("class", "active");

// add event to scroll into the desired section when it's link is clicked
allLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        allLi.forEach((ele) => { (ele.className === "active") ? ele.className = "" : false })
        e.target.setAttribute("class", "active");
        allSections.forEach((ele) => {
            (ele.getAttribute("data-nav") == e.target.innerText) ? ele.scrollIntoView({ behavior: "smooth" }) : false
        })
    })
});

// This part is to change the background of the active section and li
document.onscroll = () => {
    allSections.forEach((element) => {
        (element.getBoundingClientRect().top > -200 && element.getBoundingClientRect().top < 250) ?
            element.className = "your-active-class" : element.className = "";

        if (element.className == "your-active-class") {
            let sectionNumber = element.getAttribute("data-nav");
            allLi.forEach((li) => {
                (li.innerText == sectionNumber) ? li.className = "active" : li.className = "";
            })
        }
    })
}