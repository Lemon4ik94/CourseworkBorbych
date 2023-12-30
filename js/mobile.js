(() => {
    const refs = {
      openMobileBtn: document.querySelector("[mobile-open]"),
      closeMobile: document.querySelectorAll("[mobile-close]"),
      modal: document.querySelector("[mobile-menu]"),
    };
    
    refs.closeMobile.forEach(function(btn) {
        btn.addEventListener("click", toggleMobile);
    });
  
    refs.openMobileBtn.addEventListener("click", toggleMobile);
  
    function toggleMobile() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();