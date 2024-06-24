function initParallax () {
    const placeholder = document.querySelector('.placeholder');
    const parallaxContainer = document.querySelector('.parallax-container');
    const navbar = document.querySelector('.navbar');

    let placeholderTop, ticking;
        
    window.addEventListener('resize', onResize);

    // On load, set placeholder height to be equal to parallaxContainer height
    updateHolderHeight();
    checkFooterHeight();

    // If the size of the parallaxContainer changes, update the placeholder height
    new ResizeObserver(updateHolderHeight).observe(parallaxContainer);
    new ResizeObserver(checkFooterHeight).observe(parallaxContainer);

    // On window resize, update placeholder height to be equal to parallaxContainer height
    function onResize() {
        updateHolderHeight();
        checkFooterHeight();
    }

    // Placeholder should always match parallaxContainer height
    function updateHolderHeight() {
        placeholder.style.height = `${parallaxContainer.offsetHeight}px`;
    }

    function checkFooterHeight() {
        if (parallaxContainer.offsetHeight > window.innerHeight) { // Check if parallaxContainer is taller than window height
            window.addEventListener('scroll', onScroll) 
            parallaxContainer.style.bottom = 'unset'
            parallaxContainer.style.top = '0px'

            navbar.classList.remove('inverted');
        } else { // If parallaxContainer height is not greater than window height, bottom is 0 for normal parllax 
            window.removeEventListener('scroll', onScroll)
            parallaxContainer.style.top = 'unset'
            parallaxContainer.style.bottom = '0px'

            navbar.classList.remove('inverted');

        }
    }

    function onScroll() {
        placeholderTop = Math.round(placeholder.getBoundingClientRect().top) 
        requestTick()
    }

    function requestTick() {
        if (!ticking) requestAnimationFrame(updateBasedOnScroll)
        ticking = true
    }

    function updateBasedOnScroll() {
        // Reset the tick so we can capture the next onScroll
        ticking = false

        // When main content disappears from view, start to move parallaxContainer up 
        // in conjunction with placeholder top value (in relation to viewport)
        if (placeholderTop <= 0) {  
            parallaxContainer.style.top = `${placeholderTop}px` // match parallaxContainer top value with placeholder's top value

            navbar.classList.add('inverted');
        }
    }
}

export default initParallax
