// const er naar vi ikke forventer at et elementet aendrer sig. 
// Getelementsbyclassname, saa finder den det element paa siden som har den specificerede klasse.
const mobileNavBtn = document.getElementsByClassName("mobile-nav__button");
const flipCardContainer = document.getElementsByClassName("flip-card__navigation");


//window.onload udfoerer funktionen naar hjemmesiden er loaded.
window.onload = function() {
    // paa det foerste element tilfoejer vi et event, som er af type click, naar man klikker paa knappen skal den udfoerer den specificerede function.
    mobileNavBtn[0].addEventListener("click", toggleActiveClass);
    
}

function toggleActiveClass(){
    
    // i en variabel ser vi om containeren har en klasse der hedder active.
    const checkClass = flipCardContainer[0].classList.contains("active");
    if(checkClass){
        // hvis den har en active klasse skal den fjerne den fra elementet (containeren)
        flipCardContainer[0].classList.remove("active");
    }else{
        // hvis den ikke har klassen skal den tilfoeje den.
        flipCardContainer[0].classList.add("active");
    }
}

