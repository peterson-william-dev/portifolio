function animaScroll() {
    const PercentageBar = document.querySelectorAll("[data-porcentagem]");
    const windowScrollTop = window.pageYOffset + (window.innerHeight * 1/4);

    PercentageBar.forEach((element) => {
        if (element.offsetTop >= windowScrollTop) {
            element.classList.add('animation');
        }
    })
}

function ButtonIntro() {
    let HomeScreen = $(".intro");
    let MainScreen = $(".main");

    $("#intro-text").addClass("up");
    HomeScreen.css("opacity", "0");

    setTimeout(() => {
        HomeScreen.css("display", "none")
        MainScreen.css("display", "block")

        setTimeout(() => {
            MainScreen.removeClass("main_null");
            $("#menu").removeClass('nav-anima');
        },10)
    }, 1500)
}

animaScroll();

$(document).scroll(animaScroll);

$(document).ready(() => {
    $('#intro-text').removeClass('intro-anima');

    $("#btn-intro").click(() => {
        ButtonIntro();
    })
})
