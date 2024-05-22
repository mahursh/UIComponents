//============INFO NOTIFICATION================

function showInfoPopup(title,text){

    console.log("  showInfoPopup method called");
    const popupInfo = document.getElementById("popup");
    const popupProgress = document.getElementById("popup-progress");
    const popupClose = document.getElementById("popup-close");
    const popupTitle = document.getElementById("popup-title");
    const popupText = document.getElementById("popup-text");
    const popupIconInfo = document.getElementById("popup-info");

    const rootInfo = document.querySelector(":root");

    let closeTimer, progressTimer , iconTimer  ;

    popupInfo.classList.add("active");
    popupProgress.classList.add("active");
    popupIconInfo.style.display = "block";
    popupIconInfo.style.color = "#4070f4" ;
    rootInfo.style.setProperty("--popup-progress-before", '#4070f4');
    rootInfo.style.setProperty("--border-left-color",'#4070f4');


    popupTitle.innerHTML = title;
    popupText.innerHTML = text;


    closeTimer = setTimeout(() =>{
        popupInfo.classList.remove("active");
        
    },5000)

    progressTimer = setTimeout(() =>{
        popupProgress.classList.remove("active");
    },5300)

    iconTimer = setTimeout(() =>{
        popupIconInfo.style.display="none";
    },6000)

    popupClose.addEventListener("click", ()=>{
        popupInfo.classList.remove("active");
       

        setTimeout (()=>{
            popupProgress.classList.remove("active");
            popupIconInfo.style.display="none";
        }, 300);

        clearTimeout(closeTimer);
        clearTimeout(progressTimer);
        clearTimeout(iconTimer);
    })
}

//============ERROR NOTIFICATION================

function showErrorPopup(title,text){

    console.log("  showErrorPopup method called");
    const popupError = document.getElementById("popup");
    const popupProgress = document.getElementById("popup-progress");
    const popupClose = document.getElementById("popup-close");
    const popupTitle = document.getElementById("popup-title");
    const popupText = document.getElementById("popup-text");
    const popupIconError = document.getElementById("popup-error");

    const rootError = document.querySelector(":root");

    let closeTimer, progressTimer , iconTimer ;

    popupError.classList.add("active");
    popupProgress.classList.add("active");
    popupIconError.style.display = "block";
    popupIconError.style.color = "#ff7782" ;
    rootError.style.setProperty("--popup-progress-before", '#ff7782');
    rootError.style.setProperty("--border-left-color",'#ff7782');


    popupTitle.innerHTML = title;
    popupText.innerHTML = text;
    


    closeTimer = setTimeout(() =>{
        popupError.classList.remove("active");
        // window.location.replace("/person");
       
    },5000)

    progressTimer = setTimeout(() =>{
        popupProgress.classList.remove("active");
    },5300)

    iconTimer = setTimeout(() =>{
        popupIconError.style.display="none";
    },6000)

    popupClose.addEventListener("click", ()=>{
        popupError.classList.remove("active");
        

        setTimeout (()=>{
            popupProgress.classList.remove("active");
            popupIconError.style.display="none";
            // window.location.replace("/person");
        }, 300);
        

        clearTimeout(closeTimer);
        clearTimeout(progressTimer);
        clearTimeout(iconTimer);
    })
}