const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();
menu.getDate();

/*
const questions = [
  {
  type: "list",
  name: "status",
  message: "Are you hungry?: ",
  choices: [
    "Yes",
    "No"
  ]
 }
]


inquirer.prompt(questions).then((answers) => {
  if (answers.status === "Yes") {
    console.log("Go eat ya dingus!");
  } else {
    console.log("Get back to work, slacker!")
  }
})
.catch((err) => {
  console.log(err);
});
*/
