const greetings = [
  'Hello.',
  'Greetings!',
  'Hail fellow, well met.',
  '[Hat tip]',
  'Yo moron!',
  'Excuse me!',
  'Ahoy!',
  'There you are!',
  'Salutations!',
  'Howdy!',
]

const middleQuestion = [
  'Spare any change?',
  'Have you heard the gospel of Jesus Christ?',
  'Want to see my abs?',
  'Want to fistfight me?',
  'Do you think I\'m cool?',
  'Will you go out with me?',
  'Can I use your bathroom?',
  'Ever seen a dead alien?',
  'Does God exist?',
  'Will I ever find true happiness?'
]

const endStatement =[
  'There haven\'t been as many birds around lately because they\'re changing the batteries in them.',
  'I found a hundred dollars in that lady\'s purse. Finders keepers!',
  'Don\'t blame me. I voted for Kodos.',
  'I need a new diaper.',
  'I\'m on an all-milk diet.',
  'I am the second coming of Jesus Christ.',
  'I am two hundred years old.',
  'There are more stars in our solar system than there are atoms in the universe.',
  'Music peaked at MC Hammer. Everything after that is just noise.',
  'You\'re my best friend now.'
]

function printMessage() {
  const randGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  const randMiddle = middleQuestion[Math.floor(Math.random() * middleQuestion.length)];
  const randEnd = endStatement[Math.floor(Math.random() * endStatement.length)];
  console.log(randGreeting, randMiddle, randEnd);
};

printMessage();
