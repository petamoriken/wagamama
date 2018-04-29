(function() {
    if (navigator.userAgent.match(/Trident.*rv:11\./)) {
        document.querySelector(".ie").style.display = "block";
        setTimeout(function() {
            location.href = "https://store.steampowered.com/app/738840/_/?l=japanese";
        }, 5000);
    }
})();