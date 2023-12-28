document.addEventListener("DOMContentLoaded", function () {
    const curtain = document.querySelector(".curtain-img");
    const lampHead = document.querySelector(".lamp-head");
    const lampLeg = document.querySelector(".lamp-leg");
    const switchButton = document.querySelector(".switch");
    const light = document.querySelector(".light");
    const witch = document.querySelector(".witch");
    const cylinder = document.querySelector(".cylinder");
    const rabbit = document.querySelector(".rabbit");
    const pigeon = document.querySelector(".pigeon");
    const trigger = document.querySelector(".trigger");

    let isCurtainClicked = false;
    let isLightOn = false;
    let lampClickTime = 0;
    let isRabbitUp = true;

    curtain.addEventListener("mouseenter", function () {
        if (!isCurtainClicked) {
            curtain.style.transform = "translateY(-5%)";
        }
    });

    curtain.addEventListener("mouseleave", function () {
        if (!isCurtainClicked) {
            curtain.style.transform = "translateY(0)";
        }
    });

    curtain.addEventListener("click", function () {
        if (!isCurtainClicked) {
            isCurtainClicked = true;
            curtain.style.transition = "transform 1s ease-in-out";
            curtain.style.transform = "translateY(-100%)";

            light.style.transition = "opacity 0.1s ease-in-out, transform 0.1s ease-in-out";
            light.style.opacity = "0";
            witch.style.transition = "opacity 0.1s ease-in-out, transform 0.1s ease-in-out";
            witch.style.opacity = "0";
            cylinder.style.opacity = "0";
            rabbit.style.transition = "opacity 0.1s ease-in-out, transform 0.1s ease-in-out";
            rabbit.style.opacity = "0";
            pigeon.style.transition = "opacity 0.1s ease-in-out, transform 0.1s ease-in-out";
            pigeon.style.opacity = "0";
        }
    });

    lampHead.addEventListener("mousedown", function () {
        switchButton.style.transform = "translateY(20px)";
        lampClickTime = Date.now();
    });

    lampHead.addEventListener("mouseup", function () {
        switchButton.style.transform = "translateY(-20px)";
        if (Date.now() - lampClickTime >= 100) {
            isLightOn = !isLightOn;
            if (isLightOn) {
                cylinder.style.transition = "none";
                rabbit.style.transition = "opacity 0.1s ease-in-out, transform 0.1s ease-in-out";
                light.style.opacity = "0.5";
                witch.style.opacity = "1";
                cylinder.style.opacity = "1";
                rabbit.style.opacity = "1";
                pigeon.style.opacity = "1";
            } else {
                cylinder.style.transition = "opacity 0.15s ease-in-out, transform 0.1s ease-in-out";
                pigeon.style.transition = "none";
                light.style.opacity = "0";
                witch.style.opacity = "0";
                cylinder.style.opacity = "0";
                rabbit.style.opacity = "0";
                pigeon.style.opacity = "0";
            }
        }
    });

    lampLeg.addEventListener("mousedown", function () {
        switchButton.style.transform = "translateY(20px)";
        lampClickTime = Date.now();
    });

    lampLeg.addEventListener("mouseup", function () {
        switchButton.style.transform = "translateY(-20px)";
        if (Date.now() - lampClickTime >= 100) {
            isLightOn = !isLightOn;
            if (isLightOn) {
                cylinder.style.transition = "none";
                pigeon.style.transition = "opacity 0.1s ease-in-out, transform 0.1s ease-in-out";
                light.style.opacity = "0.5";
                witch.style.opacity = "1";
                cylinder.style.opacity = "1";
                rabbit.style.opacity = "1";
                pigeon.style.opacity = "1";
            } else {
                cylinder.style.transition = "opacity 0.15s ease-in-out, transform 0.1s ease-in-out";
                pigeon.style.transition = "none";
                light.style.opacity = "0";
                witch.style.opacity = "0";
                cylinder.style.opacity = "0";
                rabbit.style.opacity = "0";
                pigeon.style.opacity = "0";
            }
        }
    });

    trigger.addEventListener("click", function () {
        if (!isCurtainClicked) {
            isCurtainClicked = true;
            curtain.style.transition = "transform 1s ease-in-out";
            curtain.style.transform = "translateY(-100%)";
        }

        if (isRabbitUp) {
            rabbit.style.transition = "transform 0.5s ease-in-out";
            pigeon.style.transition = "transform 0.5s ease-in-out";

            rabbit.style.transform = "translateY(98px)";
            setTimeout(() => {
                pigeon.style.transform = "translateY(-98px)";
                setTimeout(() => {
                    isRabbitUp = false;
                }, 500);
            }, 500);
        } else {
            rabbit.style.transition = "transform 0.5s ease-in-out";
            pigeon.style.transition = "transform 0.5s ease-in-out";

            pigeon.style.transform = "translateY(0)";
            setTimeout(() => {
                rabbit.style.transform = "translateY(-0)";
                setTimeout(() => {
                    isRabbitUp = true;
                }, 500);
            }, 500);
        }
    });

});
