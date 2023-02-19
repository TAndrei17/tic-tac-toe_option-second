# The-game. Tic-Tac-Toe. Option 2

['Tic-Tac-Toe' is a simple game for two people on one field.](https://tandrei17.github.io/tic-tac-toe_option-second/ "To GitHub pages")

It is my second project as a front-end developer. My purpose was to apply my skills and knowledge which I received in the process of self-studying at an online school ['Hexlet'](https://hexlet.io/my "Hexlet's page") for the first 4 months.

- Created a npm-package and installed eslint/prettier/jest;
- Created updated JS-code myself without copy & paste;
- Polished my skills on Git/GitHub and the command line.
- Polished the skills of managing and manipulating the DOM-tree,
- Created abstractions in a separate file for using in the main code.
- Created friendly names of functions and variables to make it easy for another developer to read the code.
- Worked out the skills of bypassing JS-objects.
- Polished the skills of testing functions by the Jest framework.
- Checked the code by Jest on the command line.

The main idea of this code is to use the properties of-DOM elements to parse and find the winner. At the moment of formation the playing field each cell (‘td’ element) acquires a 'row' and 'column' properties. In the main code (scrypt.js), these properties are retrieved and used to pass to the 'createCell()' abstraction. Data processing occurs mainly with the help of abstractions located in the file 'my_abstractions.js'

AT
