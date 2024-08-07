document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.728346771418!2d-75.62018682602745!3d6.167120827204268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683d4d35f0749%3A0x3bc05bbc56e47fb5!2sDg.%2043%20%2337b-7%2C%20Germania%2C%20Itag%C3%BCi%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1722990513207!5m2!1ses-419!2sco" width="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    }, 500);

});