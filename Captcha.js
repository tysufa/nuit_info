let run=function () {
   
    if(window.confirm("RADIUM SECURITY CHECK TM\nTo continue, you must solve the captcha by getting a score of at least 300.\n")){
        document.location.href = "dino/index.html";
    }
    
    else document.location.href = "index.html";
}

setTimeout(run,1);