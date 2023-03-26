// log
const log = function (l) {
  return l;
};

// sleep
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// calculate
const calculate = (str) => {
  str = str.replace("÷", "/").replace("×", "*").replace("=", "");
  return Function(`'use strict'; return (${str})`)();
};

const selectorGarage =
  "ttr-root > ttr-root-app > div > mat-sidenav-container > mat-sidenav-content > div > section > ttr-studio";
const selectorFootpedal = `${selectorGarage} > ttr-game-holder > div > div.game.game-holder-inner.ng-star-inserted > div.pedal-holder > ttr-game-footpedal > section.width-100`;
const selectorNumpad = `${selectorFootpedal} > ttr-game-numpad > div`;

const doMath = async () => {
  question = document.querySelector(
    `${selectorFootpedal} > section > section > ttr-game-question > span`
  ).textContent;
  answer = calculate(question).toString();
  for (let i = 0; i < answer.length; i++) {
    let c = answer[i];
    if (c == "1") {
      // click 1
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(1) > div:nth-child(1)`
        )
        .click();
    } else if (c == "2") {
      // click 2
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(1) > div:nth-child(2)`
        )
        .click();
    } else if (c == "3") {
      // click 3
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(1) > div:nth-child(3)`
        )
        .click();
    } else if (c == "4") {
      // click 4
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(2) > div:nth-child(1)`
        )
        .click();
    } else if (c == "5") {
      // click 5
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(2) > div:nth-child(2)`
        )
        .click();
    } else if (c == "6") {
      // click 6
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(2) > div:nth-child(3)`
        )
        .click();
    } else if (c == "7") {
      // click 7
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(3) > div:nth-child(1)`
        )
        .click();
    } else if (c == "8") {
      // click 8
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(3) > div:nth-child(2)`
        )
        .click();
    } else if (c == "9") {
      // click 9
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(3) > div:nth-child(3)`
        )
        .click();
    } else if (c == "0") {
      // click 0
      document
        .querySelector(
          `${selectorNumpad} > div:nth-child(4) > div:nth-child(2)`
        )
        .click();
    }
    await sleep(100);
  }

  // click enter
  document
    .querySelector(`${selectorNumpad} > div:nth-child(4) > div:nth-child(3)`)
    .click();

  return answer;
};

const repeatedPlay = async () => {
  round = 20;
  for (var n = 0; n < round; n++) {
    for (var i = 0; i < 70; i++) {
      await doMath();
      await sleep(500);
    }

    await sleep(20000);

    if (n < round - 1) {
      // play again
      document
        .querySelector(
          `${selectorGarage} > ttr-game-holder > div > div > ttr-game-results-details > div > div.flex.flex-col.w-full.justify-center.items-center > div > div > div > button:nth-child(2)`
        )
        .click();
    }

    await sleep(10000);
  }
};

repeatedPlay();
