function navi() {
    document.getElementById("open").style.animation = "flip-horizontal-bottom 0.2s 1";
    document.getElementById("navicon").style.display= "none";
    document.getElementById("cancel").style.display= "contents";
    document.getElementById("button").style.animation = "fade-in 0.5s";
    document.getElementById("button").style.WebkitAnimation = "fade-in 0.5s"; 
    document.getElementById("button").style.display= "block";
    
}

function cancel() {
    document.getElementById("close").style.animation = "flip-horizontal-bottom 0.2s 1";
    document.getElementById("button").style.animation = "fade-out 1s";
    document.getElementById("button").style.WebkitAnimation = "fade-out 0.5s"; 
    document.getElementById("navicon").style.display= "contents";
    document.getElementById("cancel").style.display= "none";
    setTimeout(function(){
        document.getElementById("button").style.display= "none";
    },500)
}

function checkMediaQuery() {
    window.location.reload(true)
  }

  window.addEventListener('resize', checkMediaQuery);



