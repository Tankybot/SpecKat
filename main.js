
document.addEventListener('DOMContentLoaded', function(){

    // SHOWING NAVIGATION ON SCROLL
    function showNav(){  

        const lastMenuTile = document.querySelector('.tile:last-child');
        const scrollNav = document.querySelector('.nav-scroll');

        if(window.scrollY >= lastMenuTile.scrollHeight + 190) {
            scrollNav.style.visibility = 'visible';
            if(window.scrollY >= lastMenuTile.scrollHeight + 240) {
                scrollNav.style.opacity = '1';
            } else {
                scrollNav.style.opacity = '0';
            }
        } else {
            scrollNav.style.visibility = 'hidden';
        }
    };

    window.addEventListener('scroll', showNav);

    // ANIMATIONS
    //ABOUTUS anim
    //ABOUTUS heading
    function showAnimAboutusHeading () {
        const lineFirstLeft = document.querySelector('.heading-aboutus__line-left');
        const lineFirstRight = document.querySelector('.heading-aboutus__line-right');
        const firstHeading = document.querySelector('.heading-aboutus__heading');

        if(window.scrollY >= lineFirstLeft.scrollHeight + 220) {
            lineFirstLeft.style.animation = 'bounce-left 1s';
            lineFirstLeft.style.animationIterationCount = '1';
            lineFirstLeft.style.opacity = '1';

            lineFirstRight.style.animation = 'bounce-right 1s';
            lineFirstRight.style.animationIterationCount = '1';
            lineFirstRight.style.opacity = '1';
            
            firstHeading.style.opacity = '1';
        } else {
            lineFirstLeft.style.animation = null;
            lineFirstRight.style.animation = null;
            lineFirstLeft.style.opacity = '0';
            lineFirstRight.style.opacity = '0';   
            firstHeading.style.opacity = '0';
        };
    };

    window.addEventListener('scroll', showAnimAboutusHeading)
    //ABOUTUS TILES 
    const tiles = document.querySelectorAll('.tile-container__tile');
    const tilesArray = Array.from(tiles);
    const tile = document.querySelector('.tile-container__tile');
    const lastTile = document.querySelector('.tile-container__tile:last-child');

    function ShowAnimTiles() {
        if (window.scrollY >= tile.scrollHeight + 300) {
                tilesArray.map( tile => {
                    tile.style.animation = "slide-top 1s forwards";
                    lastTile.addEventListener('animationend', () => {
                        tile.style.opacity = 1;  
                    });
                });
            } else {
                tilesArray.map( tile => {
                    tile.style.animation = "slide-down 1s forwards"
                    lastTile.addEventListener('animationend', () => {
                        tile.style.opacity = 0;  
                    });
                });
            }
        };


    window.addEventListener('scroll', ShowAnimTiles);
    




    // PRICES Anim
    function showAnimPrices () {
        const lineSecondLeft = document.querySelector('.heading-prices__line-left');
        const lineSecondRight = document.querySelector('.heading-prices__line-right');
        const secondHeading = document.querySelector('.heading-prices__heading');

        if(window.scrollY >= lineSecondLeft.scrollHeight + 600) {
            lineSecondLeft.style.animation = 'bounce-left 1s';
            lineSecondLeft.style.animationIterationCount = '1';
            lineSecondLeft.style.opacity = '1';

            lineSecondRight.style.animation = 'bounce-right 1s';
            lineSecondRight.style.animationIterationCount = '1';
            lineSecondRight.style.opacity = '1';
            
            secondHeading.style.opacity = '1';
        } else {
            lineSecondLeft.style.animation = null;
            lineSecondRight.style.animation = null;
            lineSecondLeft.style.opacity = '0';
            lineSecondRight.style.opacity = '0';   
            secondHeading.style.opacity = '0';
        };
    };




    window.addEventListener('scroll', showAnimPrices);
    
    const map = document.querySelector('.map-responsive');

    mapObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            map.style.opacity = 1
        }
    })

    mapObserver.observe(map);

    



});