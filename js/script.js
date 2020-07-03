var sliderWrap = document.querySelector('.slider-wrap')
var blockSliderPagination = document.querySelector('.slider-control__pagination')
var sliderBtnNext = document.querySelector('.next-slide')


if (sliderBtnNext) {
    sliderBtnNext.addEventListener('click', runSlider)
    function runSlider() {
        var arrSliderItems = document.querySelectorAll('.slider__item')
        sliderWrap.appendChild(arrSliderItems[0])
        blockSliderPagination.children[0].innerText = arrSliderItems[arrSliderItems.length - 1].getAttribute('data-index')
        blockSliderPagination.children[2].innerText = arrSliderItems.length
    }
    runSlider()
    runSlider()
    setInterval(runSlider, 10000)
}
var stagesSliderWrap = document.querySelector('.stages-slider-wrap')
var stagesSliderLineProgress = document.querySelector('.stages-slider-controls__line')
var stagesSliderBlockControl = document.querySelector('.stages-slider-controls__points-block')
function stagesRunSlider() {
    var arrSlide = document.getElementsByClassName('stages-slider-wrap__item')
    var arrSliderPoint = document.getElementsByClassName('stages-slider-controls__point')
    for (var count = 0; count < arrSlide.length; count++) {
        if (arrSlide[count].classList.contains('stages-slider-wrap__item_active')) {
            arrSlide[count].classList.remove('stages-slider-wrap__item_active')
            arrSliderPoint[count].classList.remove('stages-slider__point_active')
            var test = count
            if ((++test) < arrSlide.length) {
                var test2 = count + 1
                arrSlide[test2].classList.add('stages-slider-wrap__item_active')
                arrSliderPoint[test2].classList.add('stages-slider__point_active')
            }
            else {
                arrSlide[0].classList.add('stages-slider-wrap__item_active')
                arrSliderPoint[0].classList.add('stages-slider__point_active')
            }
            count = arrSlide.length
        }
    }
}

setInterval(stagesRunSlider, 10000)

function changeSlide() {
    if (this.getAttribute('data-index')) {
        var arrSlide = document.getElementsByClassName('stages-slider-wrap__item')
        var arrSliderPoint = document.getElementsByClassName('stages-slider-controls__point')
        document.getElementsByClassName('stages-slider-wrap__item_active')[0].classList.remove('stages-slider-wrap__item_active')
        document.getElementsByClassName('stages-slider__point_active')[0].classList.remove('stages-slider__point_active')
        if ((this.getAttribute('data-index') - 2) === -1) {
            arrSlide[arrSlide.length - 1].classList.add('stages-slider-wrap__item_active')
            arrSliderPoint[arrSlide.length - 1].classList.add('stages-slider__point_active')

        }
        else {
            arrSlide[this.getAttribute('data-index') - 1].classList.add('stages-slider-wrap__item_active')
            arrSliderPoint[this.getAttribute('data-index') - 1].classList.add('stages-slider__point_active')
        }
    }
    stagesRunSlider
}
if (stagesSliderBlockControl) {
    for (countPoint = 0; countPoint < stagesSliderBlockControl.children.length; countPoint++) {
        stagesSliderBlockControl.children[countPoint].addEventListener('click', changeSlide)
    }
}

$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
})
var galleryWrap = document.getElementsByClassName('gallery-wrap')[0]
if (galleryWrap) {
    function toggleVisibleElem() {
        for (var count = 0; count < galleryWrap.children.length; count++) {
            if (count > 3 && galleryWrap.children[count].classList.contains('popup-gallery')) {
                galleryWrap.children[count].classList.toggle('hide-item')
            }
        }
    }
    toggleVisibleElem()
    var btnShowMore = document.getElementsByClassName('show-more')[0]
    btnShowMore.addEventListener('click', function () {
        toggleVisibleElem()
    })
}
var mobileNav = document.getElementById('mobile-nav')
var mobileInputCheck = document.getElementById('nav-toggle')
mobileNav.addEventListener('click', function(){
    mobileInputCheck.checked = false
})