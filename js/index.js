let headerMain = document.getElementById('header');
let video = document.getElementById('video')?.offsetHeight;
let classes = headerMain?.className.split(' ');
let secondClass = classes && classes[1];

window.onscroll = function showheader() {
    let header = document.querySelector('header');
    const clientHeight = secondClass === 'header--main' ? video : 270
    if (window.pageYOffset > clientHeight) {
        header.classList.add('header-fix');
    } else {
        header.classList.remove('header-fix');
    }
  }