const list = document.querySelector('.list'),
      items = document.querySelectorAll('.blocks__item')
      listItems = document.querySelectorAll('.list__item')

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
                break
            case 'design':
                getItems(targetId)
                break
            case 'front':
                getItems(targetId)
                break
            case 'android':
                getItems(targetId)
                break
            case 'back':
                getItems(targetId)
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