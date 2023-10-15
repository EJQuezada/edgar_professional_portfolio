/* Toggle menu on small screens */

function toggleMenu() {
    let menu = document.querySelector('.menu-container');
    menu.classList.toggle('visible');
}

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);

/* Hide Mobile menu after a menu item has been clicked */

function hideMenu() {
    let menu = document.querySelector('.menu-container');
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    }
}

menuList = document.querySelector('.menu');
menuList.addEventListener('click', hideMenu);

/*Toggle read more ChatApp */

function readMoreChatApp() {
    let moreChatApp = document.querySelector('.read-more-chatapp');
    let chatAppBtn = document.querySelector('.btn-toggle-chatapp');
    moreChatApp.classList.toggle('visible');

    if (moreChatApp.classList.contains('visible')) {
        chatAppBtn.innerHTML = 'Read Less';
    } else {
        chatAppBtn.innerHTML = 'Read More';
    }
}

let chatAppBtn = document.querySelector('.btn-toggle-chatapp');

chatAppBtn.addEventListener('click', readMoreChatApp);

/* Toggle read more myFlix */

function readMoreMyFlix() {
    let moreMyFlix = document.querySelector('.read-more-myflix');
    let myFlixBtn = document.querySelector('.btn-toggle-myflix');
    moreMyFlix.classList.toggle('visible');

    if (moreMyFlix.classList.contains('visible')) {
        myFlixBtn.innerHTML = 'Read Less';
    } else {
        myFlixBtn.innerHTML = 'Read More';
    }
}

let myFlixBtn = document.querySelector('.btn-toggle-myflix');

myFlixBtn.addEventListener('click', readMoreMyFlix);

/* Add active class to currently clicked menu-item */
let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function () {
        menuItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});