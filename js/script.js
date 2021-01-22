const modalWindow = {
    open: function(img) {
        document.body.insertAdjacentHTML('afterbegin', 
                    `<div class="overlay">
                        <div class="popup">
                            <span class="close">&times;</span>                                
                            <img src="${img}" alt="">
                        </div>
                    </div>
                    `)},

    close: function() {
        document.body.querySelector('.overlay').remove()
    }
}

const classImg = document.querySelectorAll('.content__img')
classImg.forEach((el, i) => {
    const getImg = classImg[i].getAttribute('src')
    el.addEventListener('click', () => {
        modalWindow.open(getImg)
    })
})

function event(){
    (document.body.addEventListener('click', (ev) => {
        if (ev.toElement.className === 'close') {
            modalWindow.close()
        }
    }))
}

event()

// получем все элементы с классом content__num-card
let image = document.querySelectorAll('.content__num-card')

// Проходим циклом по каждому элементу и присваиваем значения
image.forEach((elem, i) => image[i].textContent =  i + 1)