(() => {

    const form = document.querySelector("#contact");
    const refs = {
        openModalBtn: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.forEach(function(btn) {
        btn.addEventListener("click", toggleModal);
        console.log("fdsasdafaew");
    });

    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-modal");
        console.log("asdga");
      }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var subscribe__email = document.getElementById("email").value;
        var subscribe__name = document.getElementById("name").value;
        var subscribe__phone = document.getElementById("phone").value;
        var subscribe__comment = document.getElementById("comment").value;

        var subscribe = `Користувач ${subscribe__name} хоче з вами зв'язатися.%0AПошта: ${subscribe__email}%0AТелефон: ${subscribe__phone}%0AКоментар: ${subscribe__comment}`

        var token = '6926757237:AAF2PiXfLNSV53zfmrQanRjiUWvDm9fEWoM'
        var chat_id = '948384331';
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        form.reset()
        toggleModal();
    });
})();

