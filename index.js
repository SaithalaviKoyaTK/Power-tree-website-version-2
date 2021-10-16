// h6 element with .industry-el 
// should display the items of the variable industry 
// as per index order, repeatedly

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

const intervalIndustries = setInterval(industries , 2000)



// when function is called, biomass briquette and biomass pellet buttons should be displayed.

function displaySubProduct() {

        document.querySelector(".subProduct-briquette").style.top = "100px"
        document.querySelector(".subProduct-briquette").style.transition = "500ms"
        document.querySelector(".subProduct-pellet").style.top = "100px"
        document.querySelector(".subProduct-pellet").style.transition = "500ms"

}

// when function is called, biomass briquette and biomass pellet buttons should be hidden
function topZeroSubProduct() {

    document.querySelector(".subProduct-briquette").style.top = "0"
    document.querySelector(".subProduct-briquette").style.transition = "500ms"
    document.querySelector(".subProduct-pellet").style.top = "0"
    document.querySelector(".subProduct-pellet").style.transition = "500ms"
}

function hideSubProduct() {
    if (

        document.querySelector(".subProduct-briquette").style.top == "100px" && 
        document.querySelector(".subProduct-pellet").style.top == "100px"

    ) {

        topZeroSubProduct()

    }     
}



// when about button is clicked, <main><h1>'s inner text should change to description on about 

function homeEl() {

    document.querySelector(".caption").innerHTML = " White coal is what    we manufacture "

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
    
        hideSubProduct() 
       
}


// when product button is clicked, biomass briquette and biomass pellet buttons should appear and disappear on alternative clicks.

function productsEl() {

    if (
        document.querySelector(".subProduct-briquette").style.top == "0px" && 
        document.querySelector(".subProduct-pellet").style.top == "0px"
    ) {
        displaySubProduct()
    } else  {
        topZeroSubProduct()
    }

}


// when subproduct biomass briquette button is clicked, <main><h1>'s inner text should change to description on biomass briquette

function briquetteEl() {

    document.querySelector(".caption").innerHTML = "briquette"

        // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
    
        hideSubProduct() 
   
}


// when subproduct biomass pellet button is clicked, <main><h1>'s inner text should change to description on biomass pellet

function pelletEl() {

    document.querySelector(".caption").innerHTML = "pellet"

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
   
        hideSubProduct() 
}


// when contact button is clicked, <main><h1>'s inner text should change to description on contact

function contactEl() {

    document.querySelector(".caption").innerHTML = "contact"

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.

        hideSubProduct() 
}

// when testimonials button is clicked, <main><h1>'s inner text should change to description on testimonials

function testimonialsEl() {

    document.querySelector(".caption").innerHTML = "testimonials"

    // when any button other than product is clicked, biomass briquette and biomass pellet buttons should be hidden.
    
        hideSubProduct() 
}