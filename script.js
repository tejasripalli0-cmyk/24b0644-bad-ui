function startLoading() {

    let progress = 0;

    const messages = [
        "Loading...",
        "Almost there...",
        "Actually no...",
        "Consulting a wizard...",
        "Loading the loading bar...",
        "Counting pixels...",
        "Questioning existence..."
    ];

    const bar = document.getElementById("bar");
    const percent = document.getElementById("percent");
    const message = document.getElementById("message");

    const interval = setInterval(() => {

        let random = Math.floor(Math.random() * 20);

        if (Math.random() < 0.3)
            progress -= random;
        else
            progress += random;

        if (progress < 0)
            progress = 0;

        if (progress > 100)
            progress = 100;

        bar.style.width = progress + "%";
        percent.innerText = progress + "%";

        message.innerText =
            messages[Math.floor(Math.random() * messages.length)];

        message.style.fontSize =
            Math.floor(Math.random() * 20 + 20) + "px";

        if (progress > 90 && progress < 95) {
            message.innerText =
                "Fatal Error... Just kidding.";
        }

        if (progress === 100) {
            clearInterval(interval);
            message.innerText =
                "Congratulations. It finally loaded.";
        }

    }, 800);

}
