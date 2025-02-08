AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const altura = heroSection.clientHeight; 

    window.addEventListener('scroll', function() {
        const position = (window.scrollY);

        if (position < altura) {
            hideElements()
        } else {
            showElements()
        }
    })

    // Abas
    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // FAQ, Accordion
    for (let x = 0; x < questions.length; x++) {
        questions[x].addEventListener('click', openOrCloseAnswer);
    }
})

function hideElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    const dadElement = element.target.parentNode;

    dadElement.classList.toggle(classe)
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}