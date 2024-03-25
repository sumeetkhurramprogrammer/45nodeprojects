//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

import inquirer from 'inquirer';

  let answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'size',
      message: 'What is the size of your shirt? (Small, Medium, Large)',
      default: 'Large', // Default size
    },
    {
      type: 'input',
      name: 'message',
      message: 'What message would you like on your shirt?',
      default: 'I love TypeScript', // Default message
    }
  ]);

  console.log("`The shirt size is",(answers.size), "and it says" ,(answers.message))

