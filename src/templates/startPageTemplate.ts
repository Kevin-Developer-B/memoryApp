export function startPageTemplate() {
    return `
        <div class="body-box">
            <div class="container">
                <div class="start-sceen-box bg-yellow-controller">
                    <div class="headline">
                        <h2>It's play Time</h2>
                        <h1>Ready to play?</h1>
                    </div>
                    <button class="btn" id="playBtn">
                        <img class="btn__img--rotate" src="./assets/img/stadia_controller.png" alt="arrow-left">
                        <p class="btn__text">Play</p>
                        <img class="btn__img--scale" src="./assets/img/Arrow-left.png" alt="arrow-left">
                    </button>
                </div>
            </div>
        </div>
    `
};