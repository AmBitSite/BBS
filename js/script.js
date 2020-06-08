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
    setInterval(runSlider, 6000)
}