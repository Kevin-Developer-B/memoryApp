export function settingScreenTemplate() {
    return `
        <div class="setting-screen-box" id="settingScreen">
            <div class="container">
                <div class="setting-screen-container">
                    <div class="setting__headline">
                        <h2>Settings</h2>
                        <img class="underline-img" src="public/assets/img/Line 3.png" alt="">
                    </div>
                    <form id="settingForm">
                        <div>
                            <div class="small-headline">
                                <img src="public/assets/img/palette.png" alt="">
                                <h3>Game themes</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="theme" value="code vibes" checked>
                                <span class="circle"></span>
                                Code vibes theme
                                <span class="line"></span>
                                <img class="theme-img code-vibe-img" src="public/assets/img/Theme Visual.png" alt="">
                            </label>
                            <label class="option">
                                <input type="radio" name="theme" value="gaming">
                                <span class="circle"></span>
                                Gaming theme
                                <span class="line"></span>
                                <img class="theme-img code-vibe-img" src="public/assets/img/Theme_gaming.png" alt="">
                            </label>
                        </div>
                        


                        <div>
                            <div class="small-headline">
                                <img src="public/assets/img/chess.png" alt="">
                                <h3>Choose player</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="players" value="Blue Player">
                                <span class="circle"></span>
                                Blue
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="players" value="Orange Player">
                                <span class="circle"></span>
                                Orange
                                <span class="line"></span>
                            </label>
                        </div>
                        


                        <div>
                            <div class="small-headline">
                                <img src="public/assets/img/card_size.png" alt="">
                                <h3>Board size</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="cardSize" value="Board-16 Cards">
                                <span class="circle"></span>
                                16 cards
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="cardSize" value="Board-24 Cards">
                                <span class="circle"></span>
                                24 cards
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="cardSize" value="Board-32 Cards">
                                <span class="circle"></span>
                                32 cards
                                <span class="line"></span>
                            </label>
                        </div>

                        <div class="start-container" id="preview">
                            <span class="start-container__text" id="selectedTheme">Game theme</span>
                            <img class="start-container__img" src="public/assets/img/across_line.png" alt="">
                            <span class="start-container__text" id="selectedPlayer">Player</span>
                            <img class="start-container__img" src="public/assets/img/across_line.png" alt="">
                            <span class="start-container__text" id="selectedSize">Board size</span>
                            <button class="btn-start btn-start--disabled" id="startGame" disabled>
                                <img class="btn-start__smart-display btn-start__smart-display--rotate"
                                    src="public/assets/img/smart_display.png" alt="">
                                <p class="btn-start__text">Start</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}