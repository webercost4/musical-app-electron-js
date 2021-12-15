const api = require("./resources/api");

api.get('/list').then(response => {

    for (const iterator of response.data) {

        document.getElementById('navs').innerHTML +=
            `<li id="nav" class="text-white">
                &#9834;
                <a href="#${iterator._id}" id="${iterator._id + 1}" accesskey="${iterator._id}" class="nav">${iterator.name_chords}</a>
            </li>`;

        document.getElementById('chords').innerHTML +=
            `<section class="slide ${iterator._id}" id="${iterator._id}">
                <h2 class="text-white">${iterator.name_chords}</h2>
                <img src="${iterator.image_chords}" />
            </section>`;

    }

    const setTimeChord = localStorage.getItem('setTimeChord');
    const links = response.data;
    const max = Object.keys(links).length;
    let index = 0;


    if (localStorage.getItem('setTimeChord')) {

        function defineTimeoutSlide() {
            const lo = setInterval(() => {
                console.log(document.getElementById(`${links[index]._id + 1}`).click());

                index++;

                if (index >= max) {
                    clearInterval(lo)
                    index = 0;
                    defineTimeoutSlide();

                }
            }, setTimeChord);
        }
        defineTimeoutSlide();
    }

    document.querySelectorAll('.nav').forEach((response) => {
        response.addEventListener("click", (resp) => {

            $(`.${resp.target.accessKey}`).change(function () {
                var select = $(this).find(':selected').val();
                $(".mystyle").removeClass('mystyle');
                $('.' + select).show();

            }).change();

            document.getElementById(`${resp.target.accessKey}`).classList.add('mystyle');
        });

    });


}).catch(err => {
    document.getElementById('error').innerText = 'Verfique sua conexão e tente novamente!';
});