const list = document.querySelector('.list'),
      items = document.querySelectorAll('.blocks__item')
      listItems = document.querySelectorAll('.list__item')
      block = document.querySelectorAll('.blocks__row')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }


        switch(targetId) {
            case 'all':
                getItems('blocks__item')
                block.forEach(item => {
                    item.style.justifyContent = 'space-evenly'
                })
                break
            case 'design':
                getItems(targetId)
                block.forEach(item => {
                    if(window.innerWidth > 800)item.style.justifyContent = 'start'
                })
                break
            case 'front':
                getItems(targetId)
                block.forEach(item => {
                    if(window.innerWidth > 800)item.style.justifyContent = 'start'
                })
                break
            case 'android':
                getItems(targetId)
                block.forEach(item => {
                    if(window.innerWidth > 800)item.style.justifyContent = 'start'
                })
                break
            case 'back':
                getItems(targetId)
                block.forEach(item => {
                    if(window.innerWidth > 800)item.style.justifyContent = 'start'
                })
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}