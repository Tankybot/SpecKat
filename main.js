
document.addEventListener('DOMContentLoaded', function(){

    const firstAnimation = document.querySelector('.heading-container__heading')
    const firstAnimationLeft = document.querySelector('.heading-container__line-left');

    // SHOWING NAVIGATION ON SCROLL
    function showNav(){  

        const lastMenuTile = document.querySelector('.tile:last-child');
        const scrollNav = document.querySelector('.nav-scroll');

        if(window.scrollY >= lastMenuTile.scrollHeight + 190) {
            scrollNav.style.visibility = 'visible';
            if(window.scrollY >= lastMenuTile.scrollHeight + 240) {
                scrollNav.style.opacity = '1'
            } else {
                scrollNav.style.opacity = '0'
            }
        } else {
            scrollNav.style.visibility = 'hidden';
        }
    };
    window.addEventListener('scroll', showNav);


    // function showAnim(){
    //     if(window.scrollY >= firstAnimation.scrollHeight + 50){
    //         firstAnimationLeft.style.animation = 'bounce-left 1s';
    //         firstAnimationLeft.style.opacity = '1';
    //         firstAnimationLeft.style.animationIterationCount = '1';
    //     };
    // };

    // window.addEventListener('scroll', showAnim);
});