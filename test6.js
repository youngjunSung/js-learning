var list = document.querySelectorAll('li');

for (var i = 0; i < list.length; i++) {
  list[j].addEventListener('click', function () {
    console.log(j);
  })
}

for (var i = 0; i < list.length; i++) {
  (function (j) {
    list[j].addEventListener('click', function () {
      console.log(j);
    })
  })(i)
}


