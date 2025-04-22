let exBlock = document.querySelector('.example');
let condition = document.querySelector('.condition');
let nextButton = document.querySelector('.next-button')
let input = document.querySelector('.input');
let hideButton = document.querySelector('.hide-ul')
let list = document.querySelector('ul');
let lastAnswer = document.querySelector('.last-answer');
let rulesButton = document.querySelector('.rules-button');
let rules = document.querySelector('.rules');

let nounsUncountable = ['fruit', 'cabbage', 'garlic', 'lettuce', 'jam', 'sour cream', 'ice-cream',
    'cottage cheese', 'chocolate', 'champagne', 'wine', 'beer', 'pasta', 'vegetables', 'fish',
    'seafood', 'meat', 'beef', 'chicken', 'pork', 'soup', 'rice', 'buckwheat', 'mayo', 'ketchup', 'oil',
    'bread', 'poridge', 'cereal', 'omelet', 'cheese', 'butter', 'bacon', 'tea', 'coffee', 'juice', 'cream', 'milk', 'honey',
    'yogurt', 'toast'
];

let nounsCountable = ['potato/potatoes', 'onion/onions', 'carrot/carrots', 'radish/radishes',
    'pea/peas', 'cucumber/cucumbers', 'potato/potatoes', 'mushroom/mushrooms', 'pepper/peppers', 'orange/oranges', 'grape/grapes',
    'apple/apples', 'banana/bananas', 'peach/peaches', 'cherry/cherries', 'strawberry/strawberries', 'pear/pears', 'lemon/lemons',
    'watermelon/watermelons', 'melon/melons', 'pineapple/pineapples', 'plum/plums',
    'egg/eggs', 'sandwich/sandwiches', 'pancake/pancakes', 'mashed potato/mashed potatoes', 'hamburger/hamburgers',
    'cookie/cookies', 'biscuit/biscuits', 'candy/candies'];

let nounsBoth = ['pie/pies', 'cake/cakes', 'salad/salads', 'yogurt/yogurts'];

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let rnd = Math.floor(Math.random() * number.length);
let currNumber = number[rnd];
let k = 1;
let isCountable;
let chosenWord;
let started = 0;
let task;

rulesButton.addEventListener('click', () => {
    rules.classList.toggle('hidden');
})

hideButton.addEventListener('click', () => {
    list.classList.toggle('hidden');
    if (k == 1) {
        hideButton.innerHTML = 'Hide Answers'
        hideButton.classList.add('show');
        k = 0;
    } else if (k == 0) {
        hideButton.innerHTML = 'Show Answers'
        hideButton.classList.remove('show');
        k = 1;
    }
})
function chooseWord() {
    isCountable = Math.floor(Math.random() * 10);
    if (isCountable <= 3) {
        chosenWord = nounsCountable[Math.floor(Math.random() * (nounsCountable.length - 1))];
    } else if (isCountable > 3 && isCountable <= 7) {
        chosenWord = nounsUncountable[Math.floor(Math.random() * (nounsUncountable.length - 1))];
    } else if (isCountable > 7) {
        chosenWord = nounsBoth[Math.floor(Math.random() * (nounsBoth.length - 1))];
    }


}

function Example() {
    chooseWord();
    if (isCountable <= 3 || isCountable > 7) {
        exBlock.innerHTML = chosenWord.split('/')[0];
    } else {
        exBlock.innerHTML = chosenWord;
    }
}
function Reset() {
    number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    rnd = Math.floor(Math.random() * number.length);
    currNumber = number[rnd];
    started = 0;
    task = '';
    rightAnsw = '';
    document.querySelectorAll('.right').forEach((i) => {
        i.innerHTML = '';
        i.classList.remove('active');
    })
    document.querySelectorAll('.your').forEach((i) => {
        i.innerHTML = '';
        i.classList.remove('active');
    })
    lastAnswer.innerHTML = ''
    console.log('reset')
}

function Excercise() {

    let pluralNoun;
    let muchMany;
    let littleFew;
    let wasWere;
    let isAre;

    if (number.length == 0) {
        exBlock.innerHTML = "It's time to check!"
        condition.innerHTML = 'You did great!'
        input.classList.add('blocked');
        nextButton.innerHTML = 'Again!'
        return false;
    }
    console.log(currNumber);

    if (isCountable <= 3) {
        pluralNoun = chosenWord.split('/')[1];
        console.log(pluralNoun)
        muchMany = 'many';
        littleFew = 'few';
        wasWere = 'were';
        isAre = 'are';

    } else if (isCountable > 3 && isCountable <= 7) {
        pluralNoun = chosenWord;
        muchMany = 'much';
        littleFew = 'little'
        wasWere = 'was';
        isAre = 'is';

    } else if (isCountable > 7) {
        pluralNoun = chosenWord.split('/')[0];
        bothPlural = chosenWord.split('/')[1]
        muchMany = 'much';
        littleFew = 'little'
        wasWere = 'was';
        isAre = 'is';
    }

    switch (currNumber) {
        case 1:
            task = "Сколько (у тебя)?";
            if (isCountable > 7) {
                rightAnsw = [`How much ${pluralNoun} do you have`, `How many ${bothPlural} do you have`];
            } else {
                rightAnsw = [`How ${muchMany} ${pluralNoun} do you have`];
            }
            break;
        case 2:
            task = "Нет вообще (у меня)";
            if (isCountable > 7) {
                rightAnsw = [`I don't have any ${pluralNoun}`, `I have no ${pluralNoun}`, `I don't have any ${bothPlural}`, `I have no ${bothPlural}`];
            } else {
                rightAnsw = [`I don't have any ${pluralNoun}`, `I have no ${pluralNoun}`];
            }
            break;
        case 3:
            task = "Мало (у меня)";
            if (isCountable > 7) {
                rightAnsw = [`I have little ${pluralNoun}`, `I have little ${bothPlural}`];
            } else {
                rightAnsw = [`I have ${littleFew} ${pluralNoun}`];
            }
            break;

        case 4:
            task = "Немного (у меня)";
            if (isCountable > 7) {
                rightAnsw = [`I have a little ${pluralNoun}`, `I have a few ${bothPlural}`, `I have some ${pluralNoun}`, `I have some ${bothPlural}`];
            } else {
                rightAnsw = [`I have a ${littleFew} ${pluralNoun}`, `I have some ${pluralNoun}`];
            }
            break;
        case 5:
            task = "Много (у меня)";
            if (isCountable > 7) {
                rightAnsw = [`I have much ${pluralNoun}`, `I have a lot of ${pluralNoun}`, `I have many ${bothPlural}`];
            } else {
                rightAnsw = [`I have ${muchMany} ${pluralNoun}`, `I have a lot of ${pluralNoun}`];
            }
            break;
        case 6:
            task = "Просим/предлагаем";
            if (isCountable > 7) {
                rightAnsw = [`Can I have some ${pluralNoun}`, `Can I have some ${bothPlural}`];
            } else {
                rightAnsw = [`Can I have some ${pluralNoun}`];
            }
            break;

        case 7:
            task = "Было (там)";
            if (isCountable > 7) {
                rightAnsw = [`There was some ${pluralNoun}`, `There were some ${bothPlural}`];
            } else {
                rightAnsw = [`There ${wasWere} some ${pluralNoun}`];
            }
            break;
        case 8:
            task = "Не было (там)";
            if (isCountable > 7) {
                rightAnsw = [`There wasn't any ${pluralNoun}`, `There weren't any ${bothPlural}`,
                `There was not any ${pluralNoun}`, `There were not any ${bothPlural}`,
                `There was no ${pluralNoun}`, `There were no ${bothPlural}`];
            } else {
                rightAnsw = [`There ${wasWere}n't any ${pluralNoun}`, `There ${wasWere} not any ${pluralNoun}`,
                `There ${wasWere} no ${pluralNoun}`];
            }
            break;
        case 9:
            task = "Было? (там)";
            if (isCountable > 7) {
                rightAnsw = [`Was there any ${pluralNoun}`, `Were there any ${bothPlural}`];
            } else {
                rightAnsw = [`${wasWere} there any ${pluralNoun}`];
            }
            break;

        case 10:
            task = "Будет (там)";
            if (isCountable > 7) {
                rightAnsw = [`There will be some ${pluralNoun}`, `There will be some ${bothPlural}`,
                `There'll be some ${pluralNoun}`, `There'll be some ${bothPlural}`,
                `There is going to be some ${pluralNoun}`, `There are going to be some ${pluralNoun}`];
            } else {
                rightAnsw = [`There will be some ${pluralNoun}`, `There'll be some ${pluralNoun}`, `There ${isAre} going to be some ${pluralNoun}`];
            }
            break;
        case 11:
            task = "Не будет (там)";
            if (isCountable > 7) {
                rightAnsw = [`There won't be any ${pluralNoun}`, `There won't be any ${bothPlural}`,
                `There isn't going to be any ${pluralNoun}`, `There aren't going to be any ${bothPlural}`,
                `There will be no ${pluralNoun}`, `There will be no ${bothPlural}`,
                `There'll be no ${pluralNoun}`, `There'll be no ${bothPlural}`,
                `There is going to be no ${pluralNoun}`, `There are going to be no ${bothPlural}`,
                `There will not be any ${pluralNoun}`, `There will not be any ${bothPlural}`,
                `There'll not be any ${pluralNoun}`, `There'll not be any ${bothPlural}`];
            } else {
                rightAnsw = [`There won't be any ${pluralNoun}`, `There ${isAre}n't going to be any ${pluralNoun}`,
                `There will be no ${pluralNoun}`, `There ${isAre} going to be no ${pluralNoun}`, `There'll be no ${pluralNoun}`,
                `There will not be any ${pluralNoun}`];
            }
            break;
        case 12:
            task = "Будет? (там)";
            if (isCountable > 7) {
                rightAnsw = [`Will there be some ${pluralNoun}`, `Will there be some ${bothPlural}`,
                `Is there going to be some ${pluralNoun}`, `Is there going to be some ${bothPlural}`];
            } else {
                rightAnsw = [`Will there be some ${pluralNoun}`, `${isAre} there going to be some ${pluralNoun}`];
            }
            break;
    }
    condition.innerHTML = task;
}

function buttonClick() {

    if (nextButton.innerHTML == 'Again!') {
        nextButton.innerHTML == 'Start!';
        Reset();
    }

    if (started == 0) {
        Example();
        Excercise();
        nextButton.innerHTML = 'Next!';
        input.classList.remove('blocked')
        console.log('sda')
    } else {
        // if (input.value == '') return;
        document.querySelector(`.a${currNumber}`).children[0].innerHTML = rightAnsw[0];
        document.querySelector(`.a${currNumber}`).children[0].classList.add('active');

        document.querySelector(`.a${currNumber}`).children[1].innerHTML = input.value;
        let trueAns = false;
        rightAnsw.forEach((answ, i) => {
            if (input.value.toLowerCase().includes(rightAnsw[i].toLowerCase())) {
                trueAns = true;
            }
        });
        if (trueAns) {
            document.querySelector(`.a${currNumber}`).children[1].classList.add('true');
        } else {
            document.querySelector(`.a${currNumber}`).children[1].classList.add('active');
        }

        lastAnswer.innerHTML = `<div class="label">Last answer</div>${rightAnsw[0]}`;
        number.splice(rnd, 1);
        rnd = Math.floor(Math.random() * (number.length - 1));
        currNumber = number[rnd];
        Excercise();
        input.value = '';
    }
    started++;
}

document.addEventListener("keypress", () => {
    if (event.key === "Enter") buttonClick();
});

nextButton.addEventListener("click", () => {
    buttonClick();
});




