export function gameScreenTemplate() {
    return `
    <div>
        <div class="container">
                <header>
                    <div class="show">
                        <div class="show__box show__box--bg">
                            <div class="show__card show__card--blue">
                                <img src="./public/assets/img/label_blue.png" alt="label-blue">
                                <span>Blue</span>
                                <span></span>
                            </div>
                            <div class="show__card show__card--orange">
                                <img src="./public/assets/img/label_orange.png" alt="label-orange">
                                <span>Orange</span>
                                <span></span>
                            </div>
                        </div>
                        <div class="show__box show__current-player">
                            <div>
                                <span>Current player:</span>
                                <span class="current-label"></span>
                            </div>
                        </div>
                    </div>
                    <button>Exit game</button>
                </header>
                <section id="field">
                    <button class="card">
                        <div class="card__inner">
                            <div class="card__face card__face--back"></div>
                            <div class="card__face card__face--front"></div>
                        </div>
                    </button>
                </section>
        </div>
    </div>
    `
}