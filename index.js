// create all element's content
document.querySelector(".title").innerHTML = "Power Tree"
document.querySelector(".home-el").innerHTML = "home"
document.querySelector(".products-el").innerHTML = "products"
document.querySelector(".clients-el").innerHTML = "clients"
document.querySelector(".contact-el").innerHTML = "contact"
document.querySelector(".subProduct-briquette").innerHTML = "Biomass Briquette"
document.querySelector(".subProduct-pellet").innerHTML = "Biomass Pellet"
document.querySelector(".description").innerHTML = "White coal is what\n\twe manufacture"
document.querySelector(".client-el").innerHTML = "Our clientele are from"

// create a function to display 'biomass briquette' and 'biomass pellet' buttons.
function displaySubProduct() {
    document.querySelector(".subProduct-briquette").style.top = "100px"
    document.querySelector(".subProduct-briquette").style.transition = "500ms"
    document.querySelector(".subProduct-pellet").style.top = "100px"
    document.querySelector(".subProduct-pellet").style.transition = "500ms"
}

// create a function to hide 'biomass briquette' and 'biomass pellet' buttons
function hideSubProduct() {
    if (
        document.querySelector(".subProduct-briquette").style.top == "100px" && 
        document.querySelector(".subProduct-pellet").style.top == "100px"
    ) {
        topZeroSubProduct()
    }     
}
function topZeroSubProduct() {
    document.querySelector(".subProduct-briquette").style.top = "0"
    document.querySelector(".subProduct-briquette").style.transition = "500ms"
    document.querySelector(".subProduct-pellet").style.top = "0"
    document.querySelector(".subProduct-pellet").style.transition = "500ms"
}

// create a function to display the description on 'home'  when 'home' button is clicked 
function homeEl() {
    document.querySelector(".description").innerHTML = "White coal is what\n\twe manufacture"
    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
        hideSubProduct() 
}

/* create a function to display and hide 'biomass briquette' and 'biomass pellet' buttons on 
each alternative clicks of 'product' button */
function productsEl() {
    if (
        document.querySelector(".subProduct-briquette").style.top == "0px" && 
        document.querySelector(".subProduct-pellet").style.top == "0px"
    ) {
        displaySubProduct()
    } else {
        topZeroSubProduct() 
    }
}

// when subproduct biomass briquette button is clicked, <main><h1>'s inner text should change to description on biomass briquette
function briquetteEl() {
    document.querySelector(".description").innerHTML = "briquette"

        // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
            hideSubProduct() 
}

// when subproduct biomass pellet button is clicked, <main><h1>'s inner text should change to description on biomass pellet
function pelletEl() {
    document.querySelector(".description").innerHTML = "pellet"

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
           hideSubProduct() 
}


// when contact button is clicked, <main><h1>'s inner text should change to description on contact

function clientsEl() {
    document.querySelector(".description").innerHTML = "clients"

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
        hideSubProduct() 
}

// when testimonials button is clicked, <main><h1>'s inner text should change to description on testimonials
function contactEl() {
    document.querySelector(".description").innerHTML = "contact"

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
            hideSubProduct() 
}

// create and call a function to display the items of the variable industry as h6 element with .industry-el, one item at a time and 
// repeat the cycle.
const industryEl = document.querySelector(".industry-el")
const industry = ["textile industry", "pharmaceutical industry", "bewarage industry", "and few other industries too"]
let i = 0
function industries() {    
    industryEl.innerHTML = industry[i]
    i++
    if (i >= industry.length) {
        i = 0
    }
}
setInterval(industries , 2000)
