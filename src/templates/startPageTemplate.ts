export function startPageTemplate() {
    return `
        <div class="body-box">
            <div class="container">
                <div class="start-sceen-box bg-yellow-controller">
                    <div class="headline">
                        <h2 class="headline__h2">It's play Time</h2>
                        <h1 class="headline__h1">Ready to play?</h1>
                    </div>
                    <button class="btn" id="playBtn">
                        <img class="btn__img--rotate" src="./assets/img/stadia_controller.png" alt="arrow-left">
                        <span class="btn__text">Play</span>
                        <img class="btn__img--scale" src="./assets/img/Arrow-left.png" alt="arrow-left">
                    </button>
                </div>
            </div>
        </div>
    `
};