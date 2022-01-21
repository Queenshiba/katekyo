
// pricing div show and hide
let morePricingBtn = document.getElementsByClassName('more-pricing-btn')
for (let i = 0; i < morePricingBtn.length; i++) {
    morePricingBtn[i].addEventListener('click', () => {
        console.log('morePricingBtn', i)
        let morePricingBtnIndex = i
        morePricingBtnTrigger(morePricingBtnIndex)
    })
}

function morePricingBtnTrigger(morePricingBtnIndex) {
// show and hide div
    let pricingHiddenWrap = document.getElementsByClassName('pricing-hidden-wrap')

    if (pricingHiddenWrap[morePricingBtnIndex].style.display === "block") {
        pricingHiddenWrap[morePricingBtnIndex].style.display = "none";
    } else {
        pricingHiddenWrap[morePricingBtnIndex].style.display = "block";        
    }
    // swich btn more to close
        let morePricingBtnMore = document.getElementsByClassName('more-pricing-btn-more')
    if (morePricingBtnMore[morePricingBtnIndex].textContent === "More") {
        morePricingBtnMore[morePricingBtnIndex].textContent = "×";
    } else {
    morePricingBtnMore[morePricingBtnIndex] .textContent= "More";
        
    }
}

// hamburger menu
(function () {
    'use strict';

    class Menu {
        constructor(settings) {
            this.menuRootNode = settings.menuRootNode;
            this.isOpened = false;
        }

        changeMenuState(menuState) {
            return this.isOpened = !menuState;
        }

        changeToggleHint(toggleHint, toggleNode) {
            toggleNode.textContent = toggleHint;
            return toggleHint;
        }
    }

    const menuClassesNames = {
        rootClass: 'menu',
        activeClass: 'menu_activated',
        toggleClass: 'menu__toggle',
        toggleHintClass: 'menu__toggle-hint'
    }

    const jsMenuNode = document.querySelector(`.${menuClassesNames.rootClass}`);
    const demoMenu = new Menu({
        menuRootNode: jsMenuNode
    });

    function getCurrentToggleHint(currentMenuState) {
        return (currentMenuState !== true) ? 'Open menu' : 'Close menu';
    }

    function toggleMenu(event) {

        let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
        let toggleHint = getCurrentToggleHint(currentMenuState);

        demoMenu.changeToggleHint(
            toggleHint,
            demoMenu.menuRootNode.querySelector(`.${menuClassesNames.toggleHintClass}`)
        );
        demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);

        return currentMenuState;
    }

    jsMenuNode.querySelector(`.${menuClassesNames.toggleClass}`).addEventListener('click', toggleMenu);
})();


// click slides

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// window.setInterval(function () {
//     ("a.next").trigger("click");
// }, 5000);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
// window.setInterval(change, 1000)
// window.setInterval(plusSlides, 1100)


// copyEmailBtn
// let copyEmailBtn = document.getElementById('copyEmailBtn');

function copyEmailBtn() {
    /* Get the text field */
    let copyText = document.getElementById("copyEmailText");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Successfully Copied. メールアドレスがコピーされました。");





}