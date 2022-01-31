
var script = document. createElement('script');
script. src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script. type = 'text/javascript';
document. getElementsByTagName('head')[0]. appendChild(script);






addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        
        slides[(index ++) % count].classList.add(classHide);
        
        
        slides[index % count].classList.remove(classHide);
        $(slides[index % count]).fadeToggle(3000);
        
        
        
        setTimeout(nextSlide, 3000);
    }
});


addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides2 = document.querySelectorAll(".slides2");
    const classHide2 = "slides-hidden2", count = slides2.length;
    nextSlide2();
    function nextSlide2() {
        slides2[(index ++) % count].classList.add(classHide2);
        slides2[index % count].classList.remove(classHide2);
        $(slides2[index % count]).fadeToggle(3000);
        
        setTimeout(nextSlide2, 3000);
    }
});

addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides3 = document.querySelectorAll(".slides3");
    const classHide3 = "slides-hidden3", count = slides3.length;
    nextSlide3();
    function nextSlide3() {
        slides3[(index ++) % count].classList.add(classHide3);
        slides3[index % count].classList.remove(classHide3);
        $(slides3[index % count]).fadeToggle(3000);
        
        setTimeout(nextSlide3, 3000);
    }
});


addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides4 = document.querySelectorAll(".slides4");
    const classHide4 = "slides-hidden4", count = slides4.length;
    nextSlide4();
    function nextSlide4() {
        slides4[(index ++) % count].classList.add(classHide4);
        slides4[index % count].classList.remove(classHide4);
        $(slides4[index % count]).fadeToggle(3000);
        
        setTimeout(nextSlide4, 3000);
    }
});