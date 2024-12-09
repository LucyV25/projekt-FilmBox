const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

menuTlacitko.addEventListener('click', () => {
    menuPolozky.classList.toggle('show');
    menuPolozky.classList.toggle('skryte');

    const ikona = menuTlacitko.querySelector('i');
    if (menuPolozky.classList.contains('show')) {
        ikona.classList.remove('fa-bars');
        ikona.classList.add('fa-xmark');
    } else {
        ikona.classList.remove('fa-xmark');
        ikona.classList.add('fa-bars');
    }
});
