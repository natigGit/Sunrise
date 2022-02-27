window.MouseEvent = function () {
    //ищем элемент по селектору
    var a = document.querySelector('.a_link');
    var b = document.querySelector('.a_span');
    //вешаем на него события
    a.onmouseout = function(e) {
        b.classList.remove('active');
    }
  
    a.onmouseover = function(e) {
        b.classList.add('active');
    };
  }