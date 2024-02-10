
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
    
}

function activateMenuAtCurrentSection(section){

    const targetLine = scrollY + innerHeight / 2
    
    // O topo da seção
    const sectionTop = section.offsetTop
    // A altura da seção
    const sectionHeight = section.offsetHeight
    // O topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 
    // Verifica onde a seção termina
    const sectionEndsAt = sectionTop + sectionHeight
    // Verifica se a base está passando da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


    // Limites da seção

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
    
}

function showNavOnScroll(){
    if(scrollY > 0){
        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px', 
    duration: 700,
}).reveal(`#home, 
#home img,
#home .stats, 
#services,
#services header, 
#services .card,
#about, 
#about header, 
#about .content, 
#contact,
#contact header,
#contact .content, 
footer`);
