document.addEventListener("DOMContentLoaded", function () {
    const flutter = document.getElementById("flutter");
    const shy = document.getElementById("shy");
    const squee = new Audio("/home/e.mp3");

    function flutterAnim() {
        if (!flutter || !shy) return;

        shy.setAttribute("disabled", "true");
        
        // Attempt to play audio, catching errors (e.g., user hasn't interacted with page yet)
        squee.play().catch(e => console.log("Audio play failed:", e));

        flutter.classList.add("active");

        flutter.addEventListener("animationend", function () {
            shy.removeAttribute("disabled");
            flutter.classList.remove("active");
        }, { once: true });
    }

    if (shy) {
        shy.addEventListener("click", flutterAnim);
    }
});
