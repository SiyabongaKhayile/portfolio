
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index)  => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const PageTurn = document.getElementById(pageTurnId);

        if(PageTurn.classList.contains('turn')) {
            PageTurn.classList.remove('turn');
            setTimeout(() => {
                PageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            PageTurn.classList.add('turn');
            setTimeout(() => {
                PageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})



const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn-box .btn');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
         
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) * 200 + 100 )
    })
}




let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0 ){
        pageNumber = totalPages - 1;
    }
}




const backProfileBtn = document.querySelector('.back-profile');

 backProfileBtn.onclick = () => {
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500 )
    }, (index + 1) * 200 + 100 )
  } )
}




const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


setTimeout(()  => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(()  => {
    coverRight.style.zIndex = -1;
}, 2800)

setTimeout(()  => {
    pageLeft.style.zIndex = 20;
}, 3200)




pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500 )
    }, (index + 1) * 200 + 2100 )
  } )
