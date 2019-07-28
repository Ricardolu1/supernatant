$("#button").on("click", function() {
  $(".wrapper>.float").css({
    display: "block"
  })
})
$(".wrapper").on("click", function(e) {
  e.stopPropagation()
})

$(document).on("click", function() {
  $(".wrapper>.float").css({
    display: "none"
  })
})
