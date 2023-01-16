// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happpy birthday to me!`);
};


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     };

//   return gifts;
// };


function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

// function writeCards(name, event) {
//     let thankYouCards = [];
//     for (let i = 0; i < name.length; i++) {
//         thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
//     }
//     return thankYouCards;
// };

function writeCards(names, event) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
};


// function countDown(i = 10) {
//     while (i >= 0) {
//         console.log(i--);
//     };
// };

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}