export function startPageTemplate() {
    return `
        <div class="body-box">
            <div class="container">
                <div class="start-sceen-box bg-yellow-controller">
                    <div class="headline">
                        <span class="headline__h2">It's play Time</span>
                        <span class="headline__h1">Ready to play?</span>
                    </div>
                    <button class="btn" id="playBtn">
                        <img class="btn__img--rotate" src="public/assets/img/stadia_controller.png" alt="arrow-left">
                        <span class="btn__text">Play</span>
                        <img class="btn__img--scale" src="public/assets/img/Arrow-left.png" alt="arrow-left">
                    </button>
                </div>
            </div>
        </div>
    `
};