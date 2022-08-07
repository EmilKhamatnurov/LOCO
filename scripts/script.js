document.addEventListener('click', function (e) {
    if (e.target.classList.contains("addition-button")) {
      $(".number-input").val($(".number-input").val()-1);
    } else if (e.target.classList.contains("subtraction-button")) {
      $(".number-input").val($(".number-input").val()+1);
    }
  })

