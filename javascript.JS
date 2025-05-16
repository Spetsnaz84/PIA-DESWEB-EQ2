document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("city1-tokyo")) {
        var map = L.map("map").setView([35.682839, 139.759455], 12);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
            attribution: "&copy; CartoDB"
        }).addTo(map);

        var imageContainer = document.getElementById("image-container");
        var cityImage = document.getElementById("city-image");
        var imageTitle = document.getElementById("image-title");

        function showImage(title, src, description) {
            imageTitle.innerText = title;
            cityImage.src = src;
            imageContainer.innerHTML = `<h2>${title}</h2><img src="${src}" style="width: 80%; max-width: 700px;"><p>${description}</p>`;
            imageContainer.style.display = "block";
        }

        L.marker([35.699784, 139.771899]) 
            .addTo(map)
            .on("click", function () {
                showImage("Akihabara - Cultura Gamer y Tech", "imagenesCiudades/akihabara.jpg",
                    "El distrito tecnológico por excelencia, repleto de tiendas de electrónica, arcades y cultura otaku. Es el punto de referencia para los amantes del gaming y la innovación digital.");
            });

        L.marker([35.693840, 139.703549])
            .addTo(map)
            .on("click", function () {
                showImage("Shinjuku - Rascacielos y Pantallas Gigantes", "imagenesCiudades/shinjuku.jpg",
                    "Una zona futurista con rascacielos gigantes, luces neón y pantallas LED por todas partes. Es el corazón financiero y nocturno de Tokio, donde la tecnología se mezcla con la vida acelerada.");
            });

        L.marker([35.659494, 139.700553]) 
            .addTo(map)
            .on("click", function () {
                showImage("Shibuya - Calles de Neón y Publicidad Digital", "imagenesCiudades/shibuya.jpg",
                    "El epicentro del estilo urbano, con pantallas publicitarias masivas, intersecciones icónicas y una atmósfera hiperconectada. Aquí la tecnología y la moda definen el ritmo de la ciudad.");
            });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("city2-shanghai")) {
        setTimeout(function () { 
            var map = L.map("map").setView([31.230416, 121.473701], 12);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"}).addTo(map);

            var imageContainer = document.getElementById("image-container");
            var cityImage = document.getElementById("city-image");
            var imageTitle = document.getElementById("image-title");

            function showImage(title, src, description) {
                imageTitle.innerText = title;
                cityImage.src = src;
                imageContainer.innerHTML = `<h2>${title}</h2><img src="${src}" style="width: 80%; max-width: 700px;"><p>${description}</p>`;
                imageContainer.style.display = "block";
            }

            L.marker([31.233976, 121.505842])
                .addTo(map)
                .on("click", function () {
                    showImage("Pudong - Centro Financiero", "imagenesCiudades/pudong.jpg",
                        "El distrito de negocios más avanzado de Shanghái, con rascacielos impresionantes y tecnología de vanguardia.");
                });

            L.marker([31.238905, 121.491507])
                .addTo(map)
                .on("click", function () {
                    showImage("The Bund - Vista Nocturna", "imagenesCiudades/bund.jpg",
                        "Una de las vistas más icónicas del mundo, con luces de neón reflejándose en el río Huangpu.");
                });

            L.marker([31.173672, 121.433955])
                .addTo(map)
                .on("click", function () {
                    showImage("Xujiahui - Epicentro Tech", "imagenesCiudades/xujiahui.jpg",
                        "Área comercial y tecnológica, famosa por sus tiendas de electrónica y cultura digital.");
                });
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("city3-seoul")) {
        var map = L.map("map").setView([37.5665, 126.9780], 12);

        L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
        attribution: "© Stadia Maps"}).addTo(map);

        var imageContainer = document.getElementById("image-container");
        var cityImage = document.getElementById("city-image");
        var imageTitle = document.getElementById("image-title");

        function showImage(title, src, description) {
            imageTitle.innerText = title;
            cityImage.src = src;
            imageContainer.innerHTML = `<h2>${title}</h2><img src="${src}" style="width: 80%; max-width: 700px;"><p>${description}</p>`;
            imageContainer.style.display = "block";
        }

        L.marker([37.4979, 127.0276])
            .addTo(map)
            .on("click", function () {
                showImage("Gangnam - Innovación y Lujo", "imagenesCiudades/gangnam.jpg",
                    "El distrito más futurista y moderno de Seúl, con edificios inteligentes, tecnología avanzada y el estilo de vida más exclusivo.");
            });

        L.marker([37.5574, 126.9242])
            .addTo(map)
            .on("click", function () {
                showImage("Hongdae - Cultura Digital y Entretenimiento", "imagenesCiudades/hongdae.jpg",
                    "Barrio vibrante lleno de experiencias interactivas, conciertos holográficos y espacios dedicados a la creatividad digital.");
            });

        L.marker([37.5665, 127.0085])
            .addTo(map)
            .on("click", function () {
                showImage("Dongdaemun Design Plaza - Futurismo en Arquitectura", "imagenesCiudades/dongdaemun.jpg",
                    "Un centro de diseño de vanguardia donde la tecnología y la creatividad se fusionan en una estructura completamente futurista.");
            });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("city4-hongkong")) {
        var map = L.map("map").setView([22.3193, 114.1694], 12);

        L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
            attribution: "© Stadia Maps"
        }).addTo(map);

        var imageContainer = document.getElementById("image-container");
        var cityImage = document.getElementById("city-image");
        var imageTitle = document.getElementById("image-title");

        function showImage(title, src, description) {
            imageTitle.innerText = title;
            cityImage.src = src;
            imageContainer.innerHTML = `<h2>${title}</h2><img src="${src}" style="width: 80%; max-width: 700px;"><p>${description}</p>`;
            imageContainer.style.display = "block";
        }

        L.marker([22.3165, 114.1800])
            .addTo(map)
            .on("click", function () {
                showImage("Kowloon - Urbanismo Futurista", "imagenesCiudades/kowloon.webp",
                    "Zona de alta densidad con calles llenas de neón, mercados tecnológicos y una atmósfera cyberpunk total.");
            });

        L.marker([22.2822, 114.1589])
            .addTo(map)
            .on("click", function () {
                showImage("Central - Corazón Financiero", "imagenesCiudades/central.jpg",
                    "Distrito de rascacielos y tecnología avanzada, donde las empresas globales impulsan el futuro.");
            });

        L.marker([22.2783, 114.1825])
            .addTo(map)
            .on("click", function () {
                showImage("Causeway Bay - Epicentro Tech", "imagenesCiudades/causeway.jpg",
                    "Zona comercial hiperconectada con pantallas gigantes, tiendas electrónicas y cultura digital.");
            });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("city5-taipei")) {
        var map = L.map("map").setView([25.0330, 121.5654], 12);

        L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
            attribution: "© Stadia Maps"
        }).addTo(map);

        var imageContainer = document.getElementById("image-container");
        var cityImage = document.getElementById("city-image");
        var imageTitle = document.getElementById("image-title");

        function showImage(title, src, description) {
            imageTitle.innerText = title;
            cityImage.src = src;
            imageContainer.innerHTML = `<h2>${title}</h2><img src="${src}" style="width: 80%; max-width: 700px;"><p>${description}</p>`;
            imageContainer.style.display = "block";
        }

        L.marker([25.0335, 121.5645])
            .addTo(map)
            .on("click", function () {
                showImage("Taipei 101 - Símbolo de Innovación", "imagenesCiudades/taipei101.jpg",
                    "Uno de los rascacielos más altos del mundo, con diseño futurista y tecnología avanzada.");
            });

        L.marker([25.0685, 121.5867])
            .addTo(map)
            .on("click", function () {
                showImage("Neihu - Centro Tecnológico", "imagenesCiudades/neihu.jpg",
                    "Zona especializada en tecnología y startups, impulsando la innovación digital.");
            });

        L.marker([25.0440, 121.5078])
            .addTo(map)
            .on("click", function () {
                showImage("Ximending - Cultura Digital", "imagenesCiudades/ximending.avif",
                    "Distrito vibrante con pantallas LED, moda futurista y entretenimiento digital.");
            });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("city6-osaka")) {
        var map = L.map("map").setView([34.6937, 135.5023], 12);

        L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
            attribution: "© Stadia Maps"
        }).addTo(map);

        var imageContainer = document.getElementById("image-container");
        var cityImage = document.getElementById("city-image");
        var imageTitle = document.getElementById("image-title");

        function showImage(title, src, description) {
            imageTitle.innerText = title;
            cityImage.src = src;
            imageContainer.innerHTML = `<h2>${title}</h2><img src="${src}" style="width: 80%; max-width: 700px;"><p>${description}</p>`;
            imageContainer.style.display = "block";
        }

        L.marker([34.6685, 135.5012])
            .addTo(map)
            .on("click", function () {
                showImage("Dotonbori - Luces y Cultura Nocturna", "imagenesCiudades/dotonbori.jpg",
                    "Distrito vibrante lleno de pantallas gigantes, luces neón y vida nocturna intensa.");
            });

        L.marker([34.7025, 135.4959])
            .addTo(map)
            .on("click", function () {
                showImage("Umeda - Centro Financiero y Comercial", "imagenesCiudades/umeda.webp",
                    "Zona con rascacielos iluminados, tecnología avanzada y entretenimiento futurista.");
            });

        L.marker([34.6647, 135.5058])
            .addTo(map)
            .on("click", function () {
                showImage("Nipponbashi - Cultura Geek y Tecnología", "imagenesCiudades/nipponbashi.jpg",
                    "Epicentro del gaming, la tecnología y la cultura geek en Osaka.");
            });
    }
});