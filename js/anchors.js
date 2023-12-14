const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault()
      
      const goto = anchor.getAttribute('href')
      
      document.querySelector(goto).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }