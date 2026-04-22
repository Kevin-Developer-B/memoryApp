(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
        <div class="body-box">
            <div class="container">
                <div class="start-sceen-box bg-yellow-controller">
                    <div class="headline">
                        <span class="headline__h2">It's play Time</span>
                        <span class="headline__h1">Ready to play?</span>
                    </div>
                    <button class="btn" id="playBtn">
                        <img class="btn__img--rotate" src="./assets/img/stadia_controller.png" alt="arrow-left">
                        <span class="btn__text">Play</span>
                        <img class="btn__img--scale" src="./assets/img/Arrow-left.png" alt="arrow-left">
                    </button>
                </div>
            </div>
        </div>
    `}function t(){return`
        <div class="setting-screen-box" id="settingScreen">
            <div class="container">
                <div class="setting-screen-container">
                    <div class="setting__headline">
                        <h2>Settings</h2>
                        <img class="underline-img" src="./assets/img/Line 3.png" alt="">
                    </div>
                    <form id="settingForm">
                        <div class="respnd">
                            <div class="small-headline">
                                <img src="./assets/img/palette.png" alt="">
                                <h3>Game themes</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="theme" value="codeVibes" checked>
                                <span class="circle"></span>
                                Code vibes theme
                                <span class="line"></span>
                                <img class="theme-img code-vibe-img" src="./assets/img/Theme Visual.png" alt="">
                            </label>
                            <label class="option">
                                <input type="radio" name="theme" value="gaming">
                                <span class="circle"></span>
                                Gaming theme
                                <span class="line"></span>
                                <img class="theme-img code-vibe-img" src="./assets/img/Theme_gaming.png" alt="">
                            </label>
                        </div>
                        


                        <div>
                            <div class="small-headline">
                                <img src="./assets/img/chess.png" alt="">
                                <h3>Choose player</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="players" value="blue">
                                <span class="circle"></span>
                                Blue
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="players" value="orange">
                                <span class="circle"></span>
                                Orange
                                <span class="line"></span>
                            </label>
                        </div>
                        


                        <div>
                            <div class="small-headline">
                                <img src="./assets/img/card_size.png" alt="">
                                <h3>Board size</h3>
                            </div>
                        
                            <label class="option">
                                <input type="radio" name="cardSize" value="16">
                                <span class="circle"></span>
                                16 cards
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="cardSize" value="24">
                                <span class="circle"></span>
                                24 cards
                                <span class="line"></span>
                            </label>
                            <label class="option">
                                <input type="radio" name="cardSize" value="36">
                                <span class="circle"></span>
                                36 cards
                                <span class="line"></span>
                            </label>
                        </div>

                        <div class="start-container" id="preview">
                            <div class="start-container__box">
                                <span class="start-container__text" id="selectedTheme">Game theme</span>
                                <img class="start-container__img" src="./assets/img/across_line.png" alt="">
                                <span class="start-container__text" id="selectedPlayer">Player</span>
                                <img class="start-container__img" src="./assets/img/across_line.png" alt="">
                                <span class="start-container__text" id="selectedSize">Board size</span>
                            </div>
                            <button type="button" class="btn-start btn-start--disabled" id="startGame" disabled>
                                <img class="btn-start__smart-display btn-start__smart-display--rotate"
                                    src="./assets/img/smart_display.png" alt="">
                                <p class="btn-start__text">Start</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `}var n={theme:`codeVibes`},r={currentPlayer:n.playerColor,blueScore:0,orangeScore:0};function i(){return`
        <div class="gamingBox">
            <div class="container">
                <header>
                    <div class="playerdisplay">
                        <div class="playerdisplay__scoreboard playerdisplay__scoreboard--revers">
                            <div class="playerdisplay__player">
                                <span class="playerdisplay__icon--blue"></span>
                                <span id="blueScore" class="playerdisplay__number"></span>
                            </div>
                            <div class="playerdisplay__player">
                                <span class="playerdisplay__icon--orange"></span>
                                <span id="orangeScore" class="playerdisplay__number"></span>
                            </div>
                        </div>
                        <div class="currentplayer">
                            <span class="currentplayer__text">Current player:</span>
                            <span id="icon">
                                <span class="white-chess"></span>
                            </span>
                        </div>
                    </div>
                    <button class="respond-btn" id="selectionBtn">
                        <div class="exit"></div>
                    </button>
                </header>
                <section class="box">
                    <div id="field" class="field"></div>
                </section>
            </div>
        </div>
        <div class="Overlay" id="overlay">
            <div class="PopUp PopUp--closing" id="popUp">
                <h3>Are you sure you want to quit the game?</h3>
                <div class="PopUp__btn-box">
                    <button class="popUp-btn popUp-btn--back" id="closeBtn">
                        <span class="PopUp__text">Back to game</span>
                    </button>
                    <button class="popUp-btn popUp-btn--exit" id="exitBtn">
                        <span class="PopUp__text">Exit game</span>
                    </button>
                </div>
            </div>
        </div>
    `}function a(){return`
        <div class="endscreen">
            <div class="container">
                <div class="endscreen__box">
                    <div class="gameover">
                        <span class="gameover__img"></span>
                        <div class="score">
                            <h3 class="score__text">Final score</h3>
                            <div class="score__board score__board--revers">
                                <div class="playerdisplay__player">
                                    <span class="playerdisplay__icon--blue"></span>
                                    <span id="endBlueScore" class="playerdisplay__number"></span>
                                </div>
                                <div class="playerdisplay__player">
                                    <span class="playerdisplay__icon--orange"></span>
                                    <span id="endOrangeScore" class="playerdisplay__number"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="winnerScreen" class="winnerOverlay">
            <span class="confetti"></span>
            <div class="winner">
                <div class="winner__headline">
                    <h3>The winner is</h3>
                    <h2 id="winnerPlayer"></h2>
                </div>
                <span id="winnerImg" class="winnerImg"></span>
                <button id="backToStartBtn">
                    <p class="button__text"></p>
                </button>
            </div>
        </div>
    `}function o(e){e.length!==0&&e.every(e=>e.isMatched)&&s()}function s(){c(),l(),u()}function c(){let e=document.getElementById(`endScreen`),t=document.getElementById(`gameScreen`);e&&t&&(e.style.display=`flex`,t.style.display=`none`)}function l(){let e=document.getElementById(`endScreen`);e&&(e.innerHTML=a(),d(),f())}function u(){document.getElementById(`backToStartBtn`)?.addEventListener(`click`,J)}function d(){let e=document.getElementById(`endBlueScore`),t=document.getElementById(`endOrangeScore`);e&&(e.textContent=r.blueScore.toString(),e.style.color=`#2BB1FF`),t&&(t.textContent=r.orangeScore.toString(),t.style.color=`#F58E39`)}function f(){let e=document.getElementById(`winnerPlayer`),t=document.getElementById(`winnerImg`);!e||!t||(r.blueScore>r.orangeScore?(e.textContent=`BLUE PLAYER`,e.style.color=`blue`,t.classList.add(`winner__blue`)):r.orangeScore>r.blueScore?(e.textContent=`ORANGE PLAYER`,e.style.color=`orange`,t.classList.add(`winner__orange`)):e.textContent=`DRAW`)}var p=[];p=z(R(n.cardSize??16));var m=null,h=null,g=!1;function _(){v(),y(),b(),I()}function v(){let e=document.getElementById(`settingScreen`),t=document.getElementById(`gameScreen`);e&&t&&(e.style.display=`none`,t.style.display=`flex`)}function y(){let e=document.getElementById(`gameScreen`);e&&(e.innerHTML=i(),E(),F(),P(),N())}function b(){r.currentPlayer=n.playerColor;let e=n.cardSize??16;p=z(R(e)),x(p,e)}function x(e,t){let n=document.getElementById(`field`);n&&(e.forEach(e=>n.appendChild(S(e))),w(n,t),n.addEventListener(`click`,T))}function S(e){let t=document.createElement(`button`);return t.classList.add(`card`),t.dataset.id=e.id.toString(),t.dataset.value=e.value,t.innerHTML=C(e),t}function C(e){return`
        <div class="card__inner">
            <div class="card__face card__face--back"></div>
            <div class="card__face card__face--front">
                <img src="./assets/img/Themes/${n.theme}/${e.value}.png" alt="${e.value}">
            </div>
        </div>
    `}function w(e,t){e.classList.remove(`grid-16`,`grid-24`,`grid-32`),t===16&&e.classList.add(`grid-16`),t===24&&e.classList.add(`grid-24`),t===36&&e.classList.add(`grid-32`)}function T(e){let t=e.target.closest(`.card`);if(!(!t||g||t.classList.contains(`is-flipped`))){if(D(t),!m){m=t;return}h=t,O()}}function E(){let e=document.getElementById(`gameScreen`),t=document.getElementById(`endScreen`);if(!e||!t)return;let r=[`codeVibes-theme`,`gaming-theme`];e.classList.remove(...r),t.classList.remove(...r),e.classList.add(`${n.theme}-theme`),t.classList.add(`${n.theme}-theme`)}function D(e){e.classList.add(`is-flipped`)}function O(){if(!m||!h)return;let e=m.dataset.value===h.dataset.value;e?(k(),M(e),o(p)):A()}function k(){if(!m||!h)return;let e=Number(m.dataset.id),t=Number(h.dataset.id),n=p.find(t=>t.id===e),r=p.find(e=>e.id===t);n&&(n.isMatched=!0),r&&(r.isMatched=!0),m?.classList.add(`matched`),h?.classList.add(`matched`)}function A(){g=!0,setTimeout(()=>{m?.classList.remove(`is-flipped`),h?.classList.remove(`is-flipped`),M(!1)},800)}function j(){m=null,h=null,g=!1}function M(e){e===!0?(r.currentPlayer===`blue`?r.blueScore++:r.orangeScore++,P()):r.currentPlayer=r.currentPlayer===`blue`?`orange`:`blue`,N(),j()}function N(){let e=document.getElementById(`icon`);e&&(r.currentPlayer===`blue`?(e.classList.add(`blue-label`),e.classList.remove(`orange-label`)):(e?.classList.add(`orange-label`),e?.classList.remove(`blue-label`)))}function P(){let e=document.getElementById(`blueScore`),t=document.getElementById(`orangeScore`);e&&(e.textContent=r.blueScore.toString(),e.style.color=`#2BB1FF`),t&&(t.textContent=r.orangeScore.toString(),t.style.color=`#F58E39`)}function F(){r.blueScore=0,r.orangeScore=0,P(),N()}function I(){let e=document.getElementById(`overlay`),t=document.getElementById(`popUp`),n=document.getElementById(`selectionBtn`),r=document.getElementById(`closeBtn`),i=document.getElementById(`exitBtn`);e?.addEventListener(`click`,n=>{n.target===e&&L(e,t)}),n?.addEventListener(`click`,()=>{e?.classList.toggle(`open`),setTimeout(()=>{t?.classList.toggle(`open`)},0)}),r?.addEventListener(`click`,()=>L(e,t)),i?.addEventListener(`click`,B)}function L(e,t){e&&(e.classList.add(`closing`),t?.classList.add(`closing`),setTimeout(()=>{e.classList.remove(`open`,`closing`),t?.classList.remove(`open`,`closing`)},1e3))}function R(e){let t=e/2,n=[];for(let e=0;e<t;e++){let t={id:e*2,value:`card-${e}`,isFlipped:!1,isMatched:!1},r={id:e*2+1,value:`card-${e}`,isFlipped:!1,isMatched:!1};n.push(t,r)}return n}function z(e){return e.map(e=>({...e})).sort(()=>Math.random()-.5)}function B(){V(),H(),U(),W()}function V(){let e=document.getElementById(`startScreen`),t=document.getElementById(`settingScreen`),n=document.getElementById(`gameScreen`),r=document.getElementById(`endScreen`);e&&t&&n&&r&&(e.style.display=`none`,t.style.display=`flex`,n.style.display=`none`,r.style.display=`none`)}function H(){let e=document.getElementById(`settingScreen`);e&&(e.innerHTML=t(),n.theme=`codeVibes`,G())}function U(){let e=(e,t)=>document.querySelectorAll(`input[name="${e}"]`).forEach(n=>n.addEventListener(`change`,()=>{t(document.querySelector(`input[name="${e}"]:checked`).value),K()}));e(`theme`,e=>n.theme=e),e(`players`,e=>n.playerColor=e),e(`cardSize`,e=>n.cardSize=Number(e)),document.querySelectorAll(`input[type="radio"]`).forEach(e=>e.addEventListener(`change`,q))}function W(){document.getElementById(`startGame`)?.addEventListener(`click`,_)}function G(){let e=document.getElementById(`selectedTheme`),t=document.querySelector(`input[name="theme"]:checked`);e&&t&&(e.textContent=t.value)}function K(){let e=document.getElementById(`selectedTheme`),t=document.getElementById(`selectedPlayer`),r=document.getElementById(`selectedSize`);e&&(e.textContent=n.theme),t&&(t.textContent=n.playerColor??`Player`),r&&(r.textContent=n.cardSize?`Board-${n.cardSize} size`:`Board size`)}function q(){let e=document.querySelector(`input[name="players"]:checked`),t=document.querySelector(`input[name="cardSize"]:checked`),n=document.getElementById(`startGame`);n&&(e&&t?(n.disabled=!1,n.classList.remove(`btn-start--disabled`)):(n.disabled=!0,n.classList.add(`btn-start--disabled`)))}function J(){Y(),X()}function Y(){let e=document.getElementById(`startScreen`),t=document.getElementById(`endScreen`);e&&t&&(e.style.display=`flex`,t.style.display=`none`)}function X(){let t=document.getElementById(`startScreen`);t&&(t.innerHTML=e(),document.getElementById(`playBtn`)?.addEventListener(`click`,B))}J();