// import { database } from './appDatabase';

const database = [
  [
      [
          {
              theoryHeading: 'Welcome to JavaScript',
              theoryText: '<p>Do we even need to introduce JavaScript? It’s one of the most popular programming languages on the planet!</p><p>Ever visited a website that made you think…"Hey, this website is really cool and interactive"? Well, JavaScript was probably making it happen.</p><p>So it’s just useful for websites right? Wrong! Process data, mobile and desktop apps, games, the world’s your oyster with JavaScript.</p>',
              specialTheoryText: 'Whether it’s client-side or server-side, create the program of your dreams by unlocking the fundamentals of JavaScript.',
              questionText: 'Which is the correct statement?',
              answerOptions: ['JavaScript can be used to create interactive web elements', 'JavaScript is not a client-side language', 'JavaScript is only for web apps'],
              correctAnswer: 'JavaScript can be used to create interactive web elements',
          }
      ],
      [
          {
              theoryHeading: 'Ready. Set. JavaScript!',
              theoryText: 'Let’s start with the basics and add some JavaScript to a webpage. On the web, JavaScript code lives inside the HTML document, and needs to be enclosed by &lt;script&gt; and &lt;/script&gt: <br><div class="code-example">&lt;script&gt;<br>&nbsp&nbsp  ...  <br> &lt;/script&gt;</div>',
              specialTheoryText: 'Heads up! You can put the script tag anywhere in the HTML document.',
              questionText: 'What tag do you need to use to enclose the JavaScript code?',
              answerOptions: ['script', 'body', 'style', 'code'],
              correctAnswer: 'script',
          },
          {
              theoryHeading: 'Output',
              theoryText: `<p>Let's use JavaScript to print "Hello World" to the browser. This is what that would look like.</p><div class="code-example">&lt;script&gt;<br>&nbsp&nbsp document.write("Hello World!"); <br> &lt;/script&gt;</div><p>Notice some extra stuff there?
              Nothing gets past you!</p>Time to introduce the document.write() function. This is what we need to use to write text into our HTML document</p><p>You can also use standard HTML markup language to customize the appearance text in the output:<div class="code-example">&lt;script&gt;<br>&nbsp&nbsp document.write("&lt;h1&gt;Hello World!&lt;h1&gt;"); <br> &lt;/script&gt;</div>`,
              specialTheoryText: 'Heads up! document.write() should be used only for testing. We’ll cover some other output mechanisms real soon.',
              questionText: 'Output "Hello!" in the browser.',
              codeFragment: '<input type="text" required>("Hello!")',
              correctAnswer: 'document.write',
          },
          {
              theoryHeading: 'Output to console',
              theoryText: '<p>Right, we’re now experts in writing HTML output with document.write(). Time for a different type of output. Let’s learn about output to the browser console.</p><p> For this we’ll be needing the trusty console.log() function.</p><p> Wait, not so fast! What’s this console we’re talking about?</p><p>The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings.</p><p><b>It looks like this:</b></p><div class="code-example">console.log("Hello from console!")</div>',
              specialTheoryText: 'Heads up! Devs mostly use the console to test their JavaScript code.',
              questionText: 'Complete the code to output "Hi!" to the console.',
              codeFragment: '<input type="text" required>("Hi!")',
              correctAnswer: 'console.log',
          }
      ],
      [
          {
              theoryHeading: 'JavaScript Comments',
              theoryText: '<p>Ok, let’s talk about comments in JavaScript.</p>So we know about statements, these are the instructions within our program  that get "executed" when the program runs. <p>But! Not all JavaScript statements are "executed". Any code after a double slash //, or between /* and */, is treated as a comment, and will be ignored, and not executed.</p><p>To write a Single line comment we use double slashes. Like this:</p><div class="code-example">// This is a single line comment <br>alert("This is an alert box!");</div>',
              specialTheoryText: 'Heads up! alert() is used to create a message box.',
              questionText: 'What does a single line comment look like?',
              answerOptions: ['%%this is a comment', '// this is a comment', '**this is a comment', '<!--this is a comment-->'],
              correctAnswer: '// this is a comment',
          },
          {
              theoryHeading: 'Multiple-Line Comments',
              theoryText: '<p>What if we have more to say?</p>If we want to create a multi-line comment, we write it between /*and */.</p><p><b>Like this:</b></p><div class="code-example">/* This code <br>creates an <br> alert box */ <br> alert("This is an alert box!");</div>',
              specialTheoryText: 'Heads up! We use comments to describe and explain what the code is doing.',
              questionText: 'Create a multi-line comment in JavaScript.',
              codeFragment: '<input type="text" required>This is a<br>multiline<br>comment <input type="text" required>',
              correctAnswer: ['/*', '*/'],
          }
      ],
      [
          {
              theoryHeading: 'Variables',
              theoryText: '<p>Variables are containers for storing data values. The value of a variable can change throughout the program.</p><p>Declaring a variable is as simple as using the keyword <b>var</b>. Which would look like this:</p><div class="code-example">var x = 10;</div><p>In this example we’ve assigned a value of 10 to the variable x.</p> <p>We’ve used the word assigned deliberately here, because in JavaScript, the equal sign (=) is actually called the "assignment" operator, rather than an "equal to" operator.</p><p>Which means that in JavaScript, x = y will assign the value of y to x variable.</p>',
              specialTheoryText: 'Heads up! JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.',
              questionText: `How do we tell JavaScript that we're working with a variable?`,
              answerOptions: ['int', 'var', 'vrb', 'variable'],
              correctAnswer: 'var',
          },
          {
              theoryHeading: 'Using Variables',
              theoryText: '<p>Ok, let’s put some of what we’ve learned together!</p><p>How about we assign a value to a variable and output it to the browser.</p><div class="code-example">var x = 100;<br>document.write(x);</div><p>But what’s the point of variables anyway? Well, imagine your program has 1000 lines of code that include the variable x. With variables you can change the value of the variables and use them multiple times in your code:</p><p><b>Like this:</b></p><div class="code-example">var x = 100;<br>console.log(x);<br><br>x = 42;<br>console.log(x);</div>',
              specialTheoryText: 'Heads up! Every written "instruction" is called a statement. JavaScript statements are separated by semicolons.',
              questionText: `Choose the correct keyword to declare a variable and assign the value of 32.`,
              codeFragment: '<input type="text" required> my_variable = <input type="text" required>;',
              correctAnswer: ['var', '32'],
          },
          {
              theoryHeading: 'Naming Variables',
              theoryText: '<p>It’s super important to remember that JavaScript variable names are case-sensitive.</p><p>What do you think the output of the following code would be?<div class="code-example">var x = 100;<br>document.write(X);</div><p>That’s right! Absolutely nothing. That’s because x and X are two different variables.</p><p>Brace yourself for more rules!<br /> - The first character of a variable name must be a letter, underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs).<br /> - The first character of a variable name can’t be a number. <br /> - Variable names can’t include a mathematical or logical operator in their name. For instance, 2*something or this+that; <br />- Variable names can’t contain spaces. <br /> - You’re not allowed to use any special symbols, like my#num, num%, etc.</p>',
              specialTheoryText: 'Heads up! JavaScript is a hyphen free zone. They’re reserved for subtractions.',
              questionText: `Which of these characters can we use to start a variable?`,
              answerOptions: ['Letters', 'Underscore sign(_)', 'Mathematical Operators', 'Numbers'],
              correctAnswer: ['Letters', 'Underscore sign(_)'],
          }
      ],
      [
          {
              theoryHeading: 'Data Types',
              theoryText: `<p>The term <b>data type</b> refers to the types of values a program can work with. The sky's the limit with JavaScript variables, which can hold a bunch of different data types–numbers, strings, arrays, you name it.</p><p>Let's start simple though.</p><p>Numbers can be written with or without decimals.Like this:</p><div class="code-example">var num = 42; // A number without decimals</div><div class="code-example">var price = 55.55; // A number with decimals <br>document.write(price);</div>`,
              specialTheoryText: 'Heads up! Changing this variable is a breeze, just assign to it any other data type value, like num = "some random string".',
              questionText: 'Fill in the blanks to declare a variable age and assign it the number 18:',
              codeFragment: '<input type="text" required> age = <input type="text" required>;',
              correctAnswer: ['var', '18'],
          },
          {
              theoryHeading: 'Strings',
              theoryText: `<p>Ok, let’s turn up the heat...</p><p>In JavaScript we can use strings to store and manipulate text.</p><p>A string can be any text wrapped in quotes. Single or double quotes, it doesn’t matter, so long as you’re consistent with them. Like this:</p><div class="code-example">var name = 'John';<br>var text = "My name is John Smith";</div><p>What if we want to use quotes inside a string though?? No problem! You can use quotes inside a string, as long as they don't match the quotes enclosing the string itself.Take a look:</p><div class="code-example">var text = "My name is 'John' ";</div>`,
              specialTheoryText: 'Heads up! You can get double quotes inside of double quotes using the escape character like this: \" or \' inside of single quotes.',
              questionText: `To create a string, we need to put the text inside…`,
              answerOptions: ['<string> </string> tag', '/ symbols', 'Quotation marks'],
              correctAnswer: 'Quotation marks',
          },
          {
              theoryHeading: 'Strings',
              theoryText: `<p>Now is a good time to talk about the <b>backslash (\) escape character.</b> He comes to the rescue when you need to put quotes within strings (and a bunch of other situations) by transforming special characters into string characters.</p><p><b>Take a look</b></p><div class="code-example">var sayHello = 'Hello world! \\'I am a JavaScript programmer.\' ';<br>document.write(sayHello);</div><p>But the escape character (\) isn’t just for quotes, it works when you need to put other special characters inside strings too!</p><br><img src="./assets/img/quotes.png" alt="quotes-types">`,
              specialTheoryText: 'Heads up! If you start a string with a single quote, then you need to end it with a single quote too. This applies to double quotes. Otherwise, JavaScript will get confused. Poor JavaScript.',
              questionText: `Which of the following is the escape character?`,
              answerOptions: [`/`, "\\", `'*/'`, `"`],
              correctAnswer: "\\",
          },
          {
              theoryHeading: 'Booleans',
              theoryText: `<p>Not just fun to say, Booleans in JavaScript serve a useful function by leting you have one of two values, either <b>true</b> or <b>false</b>.</p> <p>So when you need a data type that can only have one of two possible values, like Yes/No, on/off or true/false, look no further than Mr Boolean. Let’s look at an example:</p><div class="code-example">var isActive = true;<br>var isHoliday = false;</div>`,
              specialTheoryText: 'Heads up! The Boolean value of 0 (zero), null, undefined, empty string is false. Everything with a "real" value is true.',
              questionText: `Which two values does the Boolean data type accept?`,
              answerOptions: ['true', 'wrong', 'false', 'right'],
              correctAnswer: ['true', 'false'],
          }
      ],
      [
        {
            questionText: 'Fill in the blanks to output "JS is cool!" to the console:',
            codeFragment: '<input type="text" required>("JS is cool!");',
            correctAnswer: 'console.log',
        },
        {
            questionText: 'Declare a variable called x, assign the value 42 to it and output it to the console.',
            codeFragment: 'x = <input type="text">;<br><input type="text">.log(<input type="text">);',
            correctAnswer: ['42', 'console', 'x'],
        },
        {
            questionText: 'What is the output of this code? <br /> //x=8; <br /> x=2; <br /> //x=3; <br />console.log(x);',
            answerOptions: ['3', '0', '2', '8'],
            correctAnswer: '2',
        }
    ],
  ],
  [
      [
          {
              theoryHeading: 'Arithmetic Operators',
              theoryText: `<p>The name might be a bit of a giveaway but, Arithmetic operators pretty perform arithmetic functions on numbers (both literals and variables).</p><img src="./assets/img/arithmeticOperators.png" alt="arithmetic-operators"> <p>The addition operator (+) in action determining the sum of two numbers.</p><div class="code-example">var x = 10 + 5 <br>document.write(x) // 15</div> <p>You can add as many numbers or variables together as you want or need to.</p><div class="code-example">var x = 10 <br>var y = x + 5 + 22 + 45 + 6548 <br>document.write(y) // 6630</div>`,
              specialTheoryText: 'Heads up! You can get the result of a string expression using the eval() function, which takes a string expression argument like eval("10 * 20 + 8") and returns the result. If the argument is empty, it returns undefined.',
              questionText: `What will the following statements display? <br />var test=5+7 <br/>document.write(test);`,
              answerOptions: ['Test', '12', '5+7'],
              correctAnswer: '12',
          },
          {
              theoryHeading: 'Multiplication',
              theoryText: `<p>Want to hear a joke?</p><p>What tool is best suited for math?...Multi-pliers!</p> <p>JavaScript is pretty good at math too though!</p><p>We use the * operator to multiply one number by the other.<b>Like this:</b><div class="code-example">var x = 10 *5 <br>document.write(x)</div>`,
              specialTheoryText: 'Heads up! 10 * "5" or "10" * "5" will give the same result. But trying to multiply a number with string values that aren’t numbers, like "sololearn" * 5 will return NaN (Not a Number).',
              questionText: `What character do we use for multiplication?`,
              answerOptions: ['&', '*', 'x'],
              correctAnswer: '*',
          },
          {
              theoryHeading: 'Division',
              theoryText: `<p>We use the / operator to perform division operations. <p>Like this:</p><div class="code-example">var x = 100 / 5 <br>document.write(x)</div>`,
              specialTheoryText: 'Heads up! 10 * "5" or "10" * "5" will give the same result. But trying to multiply a number with string values that aren’t numbers, like "sololearn" * 5 will return NaN (Not a Number).',
              questionText: `What character do we use for division?`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '/',
          },
          {
              theoryHeading: 'The Modulus',
              theoryText: `<p>Time to talk remainders. You hated them in school, but they’re pretty easy here, promise.</p> <p>The Modulus (%) operator returns the division remainder (what’s left over).<b>Like this:</b></p><div class="code-example">var x = 26 % 6</div><p>Because you’re left with a remainder of 2 when you divide 26 by 6.</p>`,
              specialTheoryText: 'Heads up! In JavaScript, we can use the modulus operator on integers AND on floating point numbers.',
              questionText: `What’s the result of using a modulus operator for 38%5?`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '3',
          },
          {
              theoryHeading: 'Increment & Decrement',
              theoryText: `<p><b>The increment operator (++)</b> increases the numeric value of its operand by 1. When placed before the operand, it’ll return the incremented value. When placed after it, it’ll return the original value and then increments the operand.</p> <p><b>The decrement operator(--)</b> decreases the numeric value of its operand by 1. When placed before the operand, it’ll return the decremented value. When placed after the operand, it’ll return the original value and then decrements the operand.</p><p><b>Some examples</b></p><img src="./assets/img/inc&decOperators.png" alt="examplesOfInc&DecOperators">`,
              specialTheoryText: 'Heads up! Just like the math you learned in school, you can change the order of the arithmetic operations by using parentheses. Like this: var x = (100 + 50) * 3;',
              questionText: `What are increment and decrement are used for?`,
              answerOptions: ['To get the remainder of the division of two numbers', 'Adding or subtracting 1 from a number', 'To change the sign of the number to "+" or "-"'],
              correctAnswer: 'Adding or subtracting 1 from a number',
          }
      ],
      [
          {
              theoryHeading: 'Assignment Operators',
              theoryText: `<p>Next in a series very logically named operators is... <b>Assignment operators!</b></p><p> And you guessed it, we use these guys to assign values to JavaScript <b>variables</b>.</p><img src="./assets/img/assignmentOperators.png" alt="assignment Operators">`,
              specialTheoryText: 'Heads up! You can use multiple assignment operators in one line, such as x -= y += 9.',
              questionText: `Calculate and enter the resulting value of this expression: <br />var result = 20; <br />result *= 5;`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '100',
          },

      ],
      [
          {
              theoryHeading: 'Comparison Operators',
              theoryText: `<p>We can use <b>comparison operators</b> in logical statements to find out if variables or values are different.</p> <p>You get either <b>true</b> or <b>false</b>.</p><p>For example, the equal to (==) operator checks whether the operands' values are equal.</p><div class="code-example">var num = 10;<br> // num == 8 will return false</div>`,
              specialTheoryText: 'Heads up! You can compare all types of data with comparison operators, they’ll always return true or false.',
              questionText: `What do comparison operators return?`,
              answerOptions: ['true', 'wrong', 'false', 'right'],
              correctAnswer: ['true', 'false'],
          },
          {
              theoryHeading: 'Comparison Operators',
              theoryText: `<p>Check out this table to see a breakdown of comparison operators.</p><img src="./assets/img/comparsionOperators.png" alt="comparsion Operators">`,
              specialTheoryText: 'Heads up! One important thing to remember when we use operators, is that they only work when they’re comparing the same data type; numbers with numbers, strings with strings, you get the idea.',
              questionText: `What are increment and decrement are used for?`,
              codeFragment: 'val1 <input type="text" required> val2 // are equal <br> val1 <input type="text" required> val2 // not equal <br> val1 <input type="text" required> val2 // less than <br> val1 <input type="text" required> val2 // are strict equal (identical)',
              correctAnswer: ['==', '!=', '<', '==='],
          }
      ],
      [
          {
              theoryHeading: 'Logical Operators',
              theoryText: `<p><b>Logical</b> Operators, also known as <b>Boolean</b> Operators, (or the Vulcan Operators….ok, that one isn't <b>true</b>) evaluate an expression and return <b>true</b> or <b>false</b>.</p> <p>Check out the table below to see more details on the logical operators (<b>AND, OR, NOT</b>).</p><img src="./assets/img/logicalOperators.png" alt="logical Operators">`,
              specialTheoryText: 'Heads up! You can check all types of data; comparison operators always return true or false.',
              questionText: `Logical AND (&&) returns true if:`,
              answerOptions: ['If one of the operands is true, but not both', 'If both operands are true', 'If only one of the operands is true'],
              correctAnswer: 'If both operands are true',
          },
          {
              theoryHeading: 'Conditional (Ternary) Operator',
              theoryText: `<p>Let's take a look at an example. Here we’ve connected two Boolean expressions with the <b>AND</b> operator.</p><div class="code-example">(4 &gt; 2) && (10 &lt; 15)</div><p>For this expression to be true, both conditions need to be true.<br>- The first condition determines whether 4 is greater than 2, which is true.<br>- The second condition determines whether 10 is less than 15, which is also true.</p><b>Conditional</b>, or <b>Ternary</b>, <b>operators</b> assign a value to a variable, based on some condition.</p> <p>This is what the syntax would look like:</p><div class="code-example">variable = (condition) ? value1: value2 </div><p>And here’s an example:</p><div class="code-example">var isAdult = (age &lt; 18) ? "Too young": "Old enough";</div><p>If the variable age is a value below 18, the value of the variable isAdult will be "Too young". Otherwise the value of isAdult will be "Old enough".</p>`,
              specialTheoryText: 'Heads up! With logical operators you can connect as many expressions as you want or need to.',
              questionText: `Logical NOT returns true, if: `,
              answerOptions: ['The operand is true', 'The operand is false'],
              correctAnswer: 'The operand is false',
          }
      ],
      [
          {
              theoryHeading: 'String Operators',
              theoryText: `<p>Time to introduce the most useful operator for strings - <b>concatenation</b>.</p><p>We can use concatenation (represented by the + sign) to build strings made up of multiple smaller strings, or by joining strings with other types. Check it out:<div class="code-example">var myString1 = "I am learning ";<br>var myString2 = "JavaScript with SoloLearn.";<br>document.write(myString1 + myString2); // I am learning JavaScript with SoloLearn. </div>`,
              specialTheoryText: 'Heads up! Numbers in quotes are treated as strings: So "42" is not the number 42, it’s a string that includes the two separate characters, 4 and 2.',
              questionText: `What’s the output of the following code? <br />var x = "50";<br />var y = "100";<br />document.write(x+y);`,
              answerOptions: ['5000', '50100', 'Null', '150'],
              correctAnswer: '50100',
          }
      ],
      [
          {
              questionText: `Which of these names are acceptable for JavaScript variables?`,
              answerOptions: ['1tv', 'total%sum', '_module', 'firstNumber'],
              correctAnswer: ['_module','firstNumber'],
          },
          {
              questionText: `Fill in the data types of the data shown below in the comments field:`,
              codeFragment: '12 // number; <br> "some text" //&nbsp;<input type="text"><br>true //&nbsp;<input type="text">',
              correctAnswer: ['string', 'boolean'],
          },
          {
              questionText: `What's the result of the expression var1 && var2, if var1 = true and var2 = false?`,
              answerOptions: ['undefined', 'true', 'false'],
              correctAnswer: 'false',
          }
      ]
  ],
  [
      [
          {
              theoryHeading: 'The if Statement',
              theoryText: `<p>Often when we write code, we want to perform different actions based on different conditions.</p><p>And this is where <b>conditional statements</b> come in.</p> <p>There are a bunch of different conditionals, to cover, but we’re starting with one of the most useful: "if".</p><p>We use <b>if</b> to specify a block of code that we want to be executed if a specified condition is true.</p><div class="code-example">if (condition) {<br>&nbsp;&nbsp;statements <br>}</div><p>The statements will only be executed if the specified condition is <b>true</b>. Let’s take a look at an example:</p><div class="code-example">var nyNum = 7;<br>var myNum = 10;<br>if (myNum &lt; myNum) {<br>&nbsp;&nbsp;alert("JavaScript is easy to learn."); <br>}</div>`,
              specialTheoryText: 'Heads up! You can see from the example above, we’ve used the JavaScript alert() to generate a popup alert box that contains the information inside the parentheses.',
              questionText: `Add the characters that complete the statement:`,
              codeFragment: 'if <input type="text" required> var1 > var2 <input type="text" required><br><input type="text" required><br>document.write("OK");<br><input type="text" required>',
              correctAnswer: ['(', ')', '{', '}'],
          },
          {
              theoryHeading: 'The if Statement',
              theoryText: `<p>Here’s a little more detail on the if statement.</p><p>This is an example of a <b>false</b> conditional statement:</p><div class="code-example">var nyNum = 7;<br>var myNum = 10;<br>if (myNum &gt; myNum) {<br>&nbsp;&nbsp;alert("JavaScript is easy to learn."); <br>}</div><p>Because the condition evaluates to false, the alert statement gets skipped and the program continues with the line after the if statement's closing curly brace.</p>`,
              specialTheoryText: 'Heads up! if is in lowercase letters. Uppercase letters (If or IF) won’t work.',
              questionText: `What happens if the tested condition is false?`,
              answerOptions: ['The code does nothing and moves to the next section', "The code's execution will be stopped", 'The code in the braces is executed anyway'],
              correctAnswer: 'The code does nothing and moves to the next section',
          },
      ],
      [
          {
              theoryHeading: 'The else Statement',
              theoryText: `<p>Right, so we’ve seen that the action gets skipped when a code block using the if statement evaluates to false, but what if we want something else to happen. Well, we use the "else" statement, of course!</p><p>We can use the <b>else</b> statement to specify a block of code that will execute if the condition is <b>false</b>.Like this:</p><div class="code-example">if (expression) {<br>&nbsp;&nbsp;&nbsp;// executed if condition is true <br>} else {<br>&nbsp;&nbsp;&nbsp;// executed if condition is true <br>}</div>`,
              specialTheoryText: 'Heads up! You can skip the curly braces if the code under the condition contains only one command.',
              questionText: `The "else" statement is created to do what?`,
              answerOptions: ['Ignore the condition testing', 'Tell JavaScript to execute something if the condition is false', 'Test a new condition for true or false'],
              correctAnswer: 'Tell JavaScript to execute something if the condition is false',
          },
          {
              theoryHeading: 'The else Statement',
              theoryText: `<p>Here’s another example of the <b>if</b> and <b>else</b> statements working together:</p><div class="code-example">var myNum = 7;<br>var myNum = 10;<br>if (myNum > myNum) {<br>&nbsp;&nbsp;&nbsp;alert("This is my first condition");<br>} else {<br>&nbsp;&nbsp;&nbsp;alert("This is my second condition");<br>}</div><p>Let's translate that example. It says:</p>- <b>If</b> myNum1 is greater than myNum2, alert "This is my first condition";</p><p>- <b>Else</b>, alert "This is my second condition".</p>`,
              specialTheoryText: `Heads up! There's another way to do this check using the ? operator: a > b ? alert(a) : alert(b).`,
              questionText: `Fill in the blanks to create a valid if...else statement:`,
              codeFragment: 'var age = 25;<br><input type="text"> (age &gt;= 18) {<br>&nbsp;&nbsp;&nbsp;alert("Allowed.");<br>}<br><input type="text"> {<br>&nbsp;&nbsp;&nbsp;alert("Not allowed.");<br>}',
              correctAnswer: ['if', 'else'],
          },
      ],
      [
          {
              theoryHeading: 'The else if Statement',
              theoryText: `<p>We've seen <b>else</b>, we've seen <b>if</b>, time to meet <b>else if</b>.</p><p>The <b>else if</b> statement is useful because it lets us specify a new condition if the first condition is false.</p><p><b>Like this:</b><p><div class="code-example">var course = 1;<br>if (course == 1) {<br>&nbsp;&nbsp;&nbsp;document.write("&lt;h1&gt;HTML Tutorial&lt;/h1&gt;");<br>} else if (course == 2) {<br>&nbsp;&nbsp;&nbsp;document.write("&lt;h1&gt;CSS Tutorial&lt;/h1&gt;");<br>} else {<br>&nbsp;&nbsp;&nbsp;document.write("&lt;h1&gt;JS Tutorial&lt;/h1&gt;");</div><p>This is what's happening in the code above:<br>- If course is equal to 1, output "HTML Tutorial";<br>- Else, if course is equal to 2, output "CSS Tutorial";<br>- If none of the above condition is true, then output "JavaScript Tutorial";`,
              specialTheoryText: `Heads up! The final else statement "ends" the else if statement and should be always written after the if and else if statements.`,
              questionText: `What keyword is used to end the "else if" statement?`,
              answerOptions: ['end', 'else', 'stop'],
              correctAnswer: 'else',
          },
      ],
      [
          {
              theoryHeading: 'Switch',
              theoryText: `<p>What if you need to test for multiple conditions? In those cases, writing <b>if else</b> statements for each condition might not be the best solution.</b></p><p>Instead, we can use the <b>switch</b> statement to perform different actions based on different conditions.</p><p>Here's what that looks like:</p><div class="code-example">switch ​(expression) {<br>&nbsp;&nbsp;&nbsp;case n1: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;​statements <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br>case n2: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;​statements <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;default: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;​statements <br>}</div> <p>The switch expression is evaluated once. The value of the expression is compared with the values of each case, and if there’s a match, that block of code is executed.</p>`,
              specialTheoryText: 'Heads up! You can achieve the same result with multiple if...else statements, but the switch statement is more effective in such situations.',
              questionText: `The switch statement can be used to replace…`,
              answerOptions: ['multiple if else statements', 'comments', 'variable declarations'],
              correctAnswer: 'multiple if else statements',
          },
          {
              theoryHeading: 'The break Keyword',
              theoryText: `<p>So we have learned that the switch statement tests a code block, but we won't always want it to test the whole block. The <b>break</b> keyword essentially switches the switch statement off.</p> Breaking out of the switch block stops the execution of more code and case testing inside the block.</p>`,
              specialTheoryText: 'Heads up! Usually, a break should be put in each case statement.',
              questionText: `What’s the output of this code?<br />var x = 3;<br />switch (x) {<br />case 1:<br />document.write(x);<br />break;<br />case 2:<br />document.write(x+2);<br />break;<br />default:<br />document.write(x+5);<br />}`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '8',
          },
          {
              theoryHeading: 'The default Keyword',
              theoryText: `<p>Often there will be no match, but we still need the program to output something...for this we use the default keyword, which specifies the code to run if there’s no case match.</p>`,
              specialTheoryText: 'Heads up! The default block can be omitted, if there is no need to handle the case when no match is found.',
              questionText: `The "default" statement is used …`,
              answerOptions: ['To finish the "case" statement', 'When no match is found', 'Because it is obligatory'],
              correctAnswer: 'When no match is found',
          },
      ],
      [
          {
              theoryHeading: 'Loops',
              theoryText: `<p>Loops can execute a block of code a number of times. They’re handy when you want to run the same code repeatedly, adding a different value each time.</p> <p>JavaScript has three types of loops: <b>for</b>, <b>while</b>, and <b>do while</b>.</p><p>We’ll start here with the classic <b>for</b> loop.</p><p><b>Here's the syntax:</b><p><div class="code-example">for (statement 1; statement 2; statement 3) {<br>&nbsp;&nbsp;&nbsp;code block to be executed <br>}</div><p>And here’s what happens when it runs:</p><p><b>Statement 1</b> is executed before the loop (the code block) starts.</p> <p><b>Statement 2</b> defines the condition for running the loop (the code block).</p> <p><b>Statement 3</b> is executed each time after the loop (the code block) has been executed.</p>`,
              specialTheoryText: 'Heads up! As you can see, the classic for loop has three components, or statements.',
              questionText: `The classic "for" loop consists of how many components?`,
              answerOptions: ['1', '2', '3', '4'],
              correctAnswer: '3',
          },
          {
              theoryHeading: 'The For Loop',
              theoryText: `<p>Now we've got the theory, let's look at a specific example.</p><p>This example creates a for loop that prints numbers 1 through 5:</p><div class="code-example">for (i = 1; i &lt;= 5; i++) {<br>&nbsp;&nbsp;&nbsp;document.write(i + "&lt;br /&gt;");<br>} </div><p>So what's actually happening?</p><p>In this example, <b>Statement 1</b> sets a variable before the loop starts (var i = 1).<br><b>Statement 2</b> defines the condition for the loop to run (it must be less than or equal to 5).<br><b>Statement 3</b> increases a value (i++) each time the code block in the loop has been executed.</p><p><b>Statement 1</b> is optional, and can be left out, if your values are set before the loop starts.<div class="code-example">var i = 1; <br>for (; i &lt;= 5; i++) {<br>&nbsp;&nbsp;&nbsp;document.write(i + "&lt;br /&gt;");<br>} </div>`,
              specialTheoryText: 'Heads up! ES6 introduces other for loop types; you can learn about them in the ES6 course later.',
              questionText: `Fill in the blanks to compose a valid for loop:`,
              codeFragment: 'var i = 1;<br><input type="text"> (k = 1; k &lt; 10<input type="text"> k++)<input type="text"><br>&nbsp;&nbsp;&nbsp;i += k;<br>}',
              correctAnswer: ['for', ';', '{'],
          },
          {
              theoryHeading: 'The For Loop',
              theoryText: `<p>If <b>statement 2</b> returns true, the loop will start over again, if it returns false, the loop will end.</p> <p>Statement 2 is also optional, but only if you put a <b>break</b> inside the loop. Otherwise, the loop will never end!</b> <p><b>Statement 3</b> is used to change the initial variable. It can do anything, including negative increment (i--), positive increment (i = i + 15).</p> <p>Statement 3 is also optional, but only if you increment your values inside the loop. Like this:</p><div class="code-example">var i = 0; <br>for (; i &lt; 10; ) {<br>&nbsp;&nbsp;&nbsp;document.write(i);<br>&nbsp;&nbsp;&nbsp;i++;<br>}</div>`,
              specialTheoryText: 'Heads up! You can have multiple nested for loops.',
              questionText: `Fill in the blanks to print EVEN values from 0 to 20 using a for loop:`,
              codeFragment: 'var x = 0;<br>for(; x &lt; 20; x += 2) {<br>  document.write(x);<br>}',
              correctAnswer: ['20', '2'],
          }
      ],
      [
          {
              theoryHeading: 'The While Loop',
              theoryText: `<p>Time to move on to the second of our three loop statements, <b>while</b>.</p><p>The <b>while</b> loop repeats through a block of code, but only as long as a specified condition is true.</b><p><b>Here's the syntax:</b></p><div class="code-example">while ​(condition) { <br>&nbsp;&nbsp;&nbsp;code block <br>}</div>`,
              specialTheoryText: 'Heads up! The condition can be any conditional statement that returns true or false.',
              questionText: `The result of the condition statement is always:`,
              answerOptions: ['A Boolean value (true or false)', 'A string value', 'A numeric value'],
              correctAnswer: 'A Boolean value (true or false)',
          },
          {
              theoryHeading: 'The While Loop',
              theoryText: `<p>Ok, we've got the theory, let's look at a real example:</p><div class="code-example">var i = 0; <br>while (i &lt; 10) {<br>&nbsp;&nbsp;&nbsp;document.write(i);<br>&nbsp;&nbsp;&nbsp;i++;<br>}</div><p>The loop in this code will continue to run as long as i is less than, or equal to, 10. And each time the loop runs, it will increase by 1.</p>`,
              specialTheoryText: 'Heads up! Be careful when writing conditions. If a condition is always true, the loop will run forever!',
              questionText: `Fill in the blanks to print x's values from 1 to 5.`,
              codeFragment: '<div class="code-fragment">var x = 1;<br><input type="text">(x &lt;= <input type="text">) {<br>&nbsp;&nbsp;&nbsp;document.write(x + "&lt;br /&gt;");<br>&nbsp;&nbsp;&nbsp;x = <input type="text"> + 1;<br>} </div>',
              correctAnswer: ['while', '5', 'x'],
          },
          {
              theoryHeading: 'The While Loop',
              theoryText: `<p>Endless loops are not good. And one way of this happening is if we forget to increase the variable used in the condition.</p>`,
              specialTheoryText: 'Heads up! Make sure that the condition in a <b>while</b> loop eventually becomes <b>false</b>.>',
              questionText: `How many times will the while loop run, if we remove the counting variable increment statement?`,
              answerOptions: ['1', '4', 'Infinite'],
              correctAnswer: 'Infinite',
          }
      ],
      [
          {
              theoryHeading: 'The Do...While Loop',
              theoryText: `<p>Almost done with loops! You're doing great!</p> <p>The last loop we’re looking at in this module is the <b>do...while</b> loop, it's a variant of the while loop but with one important difference.</p> <p>This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.</p><p><b>Here’s the Syntax:</b></p><div class="code-example">do {<br>&nbsp;&nbsp;&nbsp;code block <br>} <br>while (condition);</div>`,
              specialTheoryText: 'Heads up! Note the semicolon used at the end of the do...while loop. This is important.',
              questionText: `Apply the "do" and "while" keywords in their corresponding positions.`,
              codeFragment: 'var count = 1;<br><input type="text" required> { <br>  document.write("hello!");<br>  count++;<br>}<br><input type="text" required> (count &lt; 10);',
              correctAnswer: ['do', 'while'],
          }
      ],
      [
          {
              theoryHeading: 'Break',
              theoryText: `<p>We've met the <b>break</b> statement earlier in this module, we use it to "jump out" of a loop and continue executing the code after the loop.</p><p><b>Like this:</b></p><div class="code-example">for (i = 0; i &lt; 10; i++) {<br>&nbsp;&nbsp;&nbsp;if (i == 5) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;document.write(i + "&lt;br /&gt;");<br>}</div><p>In this example, once i reaches 5, it will break out of the loop.</p>`,
              specialTheoryText: 'Heads up! You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.',
              questionText: `The "break" statement:`,
              answerOptions: ['Ends the execution of the loop', 'Stops the whole script', 'Ignores the current iteration and passes to the next'],
              correctAnswer: 'Ends the execution of the loop',
          },
          {
              theoryHeading: 'Continue',
              theoryText: `<p>We're nearly done with module 3! One last thing to cover.</p><p>Unlike the <b>break</b> statement, the <b>continue</b> statement breaks only one iteration in the loop, and continues with the next iteration.</p><p><b>Like this:</b></p><div class="code-example">for (i = 0; i &lt; 10; i++) {<br>&nbsp;&nbsp;&nbsp;if (i == 5) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;document.write(i + "&lt;br /&gt;");<br>}</div>`,
              specialTheoryText: 'Heads up! The value 5 is not printed, because continue skips that iteration of the loop.',
              questionText: `What’s the output of this code?<br />var sum=0; <br />for(i=4; i<8; i++) {<br />if (i == 6) {<br />continue; <br />}<br />sum += i;<br />}<br />document.write(sum);`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '16',
          }
      ],
      [
          {
              questionText: `What’s the output of this code? <br>var x = 0;<br>whie (x &lt; 6) {<br>&nbsp;&nbsp;x++;<br>} <br>document.write(x);`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '6',
          },
          {
              questionText: `Fill in the right keywords to test the conditions:`,
              codeFragment: '<input type="text">(day_of_week) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;case 3:<br>&nbsp;&nbsp;case 4:<br>&nbsp;&nbsp;case 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;document.write("Working Days");<br>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text">;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 6: <br>&nbsp;&nbsp;&nbsp;&nbsp; document.write("Saturday");<br>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text">;<br>&nbsp;&nbsp;default: <br>&nbsp;&nbsp;&nbsp;&nbsp;document.write("Today is Sunday");<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}',
              correctAnswer: ['switch', 'break', 'break'],
          },
          {
              questionText: `Please fill in the right keywords to compose a loop:`,
              codeFragment: '<input type="text"> {<br>&nbsp;&nbsp;document.write(i);<br>&nbsp;&nbsp;i++;<br>} <input type="text"> (i &lt; 10);',
              correctAnswer: ['do', 'while'],
          }
      ]
  ],
  [
      [
          {
              theoryHeading: 'JavaScript Functions',
              theoryText: `<p>A JavaScript <b>function</b> is a block of code designed to perform a particular task. The main advantages of using functions:</p> <p>- Code reuse: Define the code once, and use it many times.</p> <p>- Use the same code many times with different <b>arguments</b>, to produce different results.</p>`,
              specialTheoryText: 'Heads up! A JavaScript function is executed when "something" invokes, or calls, it.',
              questionText: `What is a function?`,
              answerOptions: ['Arithmetical term', 'Profession', 'A certain block of code that can be reused over and over again'],
              correctAnswer: 'A certain block of code that can be reused over and over again',
          },
          {
              theoryHeading: 'Defining a Function',
              theoryText: `<p>To define a JavaScript function, use the <b>function</b> keyword, followed by a <b>name</b>, followed by a set of <b>parentheses ()</b>.</p> <p>The code to be executed by the function is placed inside curly brackets {}.</p><div class="code-example">function name() {<br>&nbsp;&nbsp;&nbsp;// code to be executed <br>} </div>`,
              specialTheoryText: 'Heads up! Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).',
              questionText: `Add the corresponding keyword and symbols to create a function named "test".`,
              codeFragment: '<input type="text" required> test() <input type="text" required><br>/* some code /* <br><input type="text" required>',
              correctAnswer: ['function', '{', '}'],
          },
          {
              theoryHeading: 'Calling a Function',
              theoryText: `<p>To execute the function, you need to call it.</p> <p>To call a function, start with the name of the function, then follow it with the arguments in parentheses.</p><p><b>Example:</b></p><div class="code-example">function myFunction() {<br>&nbsp;&nbsp;&nbsp;alert("Calling a Function!");<br>} <br><br>myFunction(); </div>`,
              specialTheoryText: 'Heads up! Always remember to end the statement with a semicolon after calling the function.',
              questionText: `Fill in the blanks to define and call the "hello" function.`,
              codeFragment: '<input type="text" required>hello() { <br>  alert("Hi there");<br>}<br><input type="text" required>',
              correctAnswer: ['function', 'hello'],
          },
          {
              theoryHeading: 'Calling Functions',
              theoryText: `<p>Once the function is defined, JavaScript allows you to call it as many times as you want to.</p><div class="code-example">function myFunction() {<br>&nbsp;&nbsp;&nbsp;alert("Alert box!");<br>} <br><br>myFunction();<br>// "Alert box!"<br><br>// some other code <br><br>myFunction();<br>// "Alert box!"</div>`,
              specialTheoryText: `You can also call a function using this syntax: myFunction.call(). The difference is that when calling in this way, you're passing the 'this' keyword to a function. You'll learn about it later.`,
              questionText: `How many times can the function be executed inside a web page?`,
              answerOptions: ['1024', '2', 'As many as needed'],
              correctAnswer: 'As many as needed',
          },
      ],
      [
          {
              theoryHeading: 'Function Parameters',
              theoryText: `<p>Functions can take <b>parameters</b>.</p> <p>Function <b>parameters</b> are the names listed in the function's definition.</p><p><b>Syntax:</b></p><div class="code-example">functionName(param1, param2, param3) {<br>&nbsp;&nbsp;&nbsp;// some code <br>}</div>`,
              specialTheoryText: `As with variables, parameters should be given <b>names</b>, which are separated by commas within the parentheses.`,
              questionText: `What do you need to do to create a parameter?`,
              answerOptions: ['Use the "param" keyword', 'Write a variable name in the parentheses', 'Use the "var" keyword'],
              correctAnswer: 'Write a variable name in the parentheses',
          },
          {
              theoryHeading: 'Using Parameters',
              theoryText: `<p>After defining the parameters, you can use them inside the function.</p><div class="code-example">function sayHello(name) {<br>&nbsp;&nbsp;&nbsp;alert("Hi, " + name);<br>} <br><br>sayHello("David");</div> <p>This function takes in one parameter, which is called <b>name</b>. When calling the function, provide the parameter's value (argument) inside the parentheses.</p>`,
              specialTheoryText: `Function arguments are the real values passed to (and received by) the function.`,
              questionText: `When and how is the parameter used?`,
              answerOptions: ['By calling the function and placing the value in the parentheses', 'By placing the value before the function call', 'By placing the value before the function name'],
              correctAnswer: 'By calling the function and placing the value in the parentheses',
          },
          {
              theoryHeading: 'Function Parameters',
              theoryText: `<p>You can define a single function, and pass different parameter values (arguments) to it.</p><div class="code-example">function sayHello(name) {<br>&nbsp;&nbsp;&nbsp;alert("Hi, " + name);<br>} <br><br>sayHello("David");<br>sayHello("Sarah");<br>sayHello("John");</div>`,
              specialTheoryText: `This will execute the function's code each time for the provided argument.`,
              questionText: `Fill the blanks to declare a function and call it, by passing "Test" as the argument:`,
              codeFragment: '<input type="text" required> myAlert(txt) {<br>  alert("Hello " + txt);<br>}<br><input type="text" required><input type="text" required>;',
              correctAnswer: ['function', 'myAlert', '("Test")'],
          }
      ],
      [
          {
              theoryHeading: 'Multiple Parameters',
              theoryText: `<p>You can define multiple parameters for a function by <b>comma-separating</b> them.</p><div class="code-example">function myFunc(x ,y) {<br>&nbsp;&nbsp;&nbsp;// some code <br>}</div>`,
              specialTheoryText: `The example above defines the function <b>myFunc</b> to take two parameters.`,
              questionText: `What character is used to separate parameters from each other?`,
              answerOptions: [':', '&', ';', ','],
              correctAnswer: ',',
          },
          {
              theoryHeading: 'Multiple Parameters',
              theoryText: `<p>When calling the function, provide the arguments in the same order in which you defined them.</p><div class="code-example">function sayHello(name, age) {<br>&nbsp;&nbsp;&nbsp;document.write(name + " is " + age + " years old."); <br>} <br><br>sayHello("John", 20);</div>`,
              specialTheoryText: `If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.`,
              questionText: `Fill in the blanks to create a function alerting the sum of the two parameters.`,
              codeFragment: '<input type="text" required> myFunction(x, y) {<br>  alert(x <input type="text" required> <input type="text" required>);<br>}',
              correctAnswer: ['function', '+', 'y',]
          },
          {
              theoryHeading: 'Multiple Parameters',
              theoryText: `<p>After defining the function, you can call it as many times as needed. JavaScript functions do not check the number of arguments received.</p>`,
              specialTheoryText: `If a function is called with missing arguments (fewer than declared), the missing values are set to undefined, which indicates that a variable has not been assigned a value.`,
              questionText: `How many times can the declared function be used?`,
              answerOptions: ['Any', 'Maximum ten', 'Only once'],
              correctAnswer: 'Any',
          }
      ],
      [
          {
              theoryHeading: 'Function Return',
              theoryText: `<p>A function can have an optional <b>return</b> statement. It is used to return a value from the function.</p><p>This statement is useful when making calculations that require a result.</p>`,
              specialTheoryText: `When JavaScript reaches a <b>return</b> statement, the function stops executing.`,
              questionText: `When is the "return" statement most frequently needed?`,
              answerOptions: ['When you need to make a calculation and receive the result', 'When you need to input data', 'When you need to add a pop-up window to the screen'],
              correctAnswer: 'When you need to make a calculation and receive the result',
          },
          {
              theoryHeading: 'Function Return',
              theoryText: `<p>Use the <b>return</b> statement to return a value.</p><p>For example, let's calculate the product of two numbers, and return the result.</p><div class="code-example">function myFunction(a, b) { <br>&nbsp;&nbsp;&nbsp; return a + b;<br>} <br><br>var x = myFunction(5, 6);<br>// Return value will end up in x</div>`,
              specialTheoryText: `If you do not return anything from a function, it will return <b>undefined</b>.`,
              questionText: `Where is the "return" statement placed?`,
              answerOptions: ['At the end of the function description', 'Outside the curly braces', 'At the beginning of the function description'],
              correctAnswer: 'At the end of the function description',
          },
          {
              theoryHeading: 'Function Return',
              theoryText: `<p><b>Another example:</b></p><div class="code-example">function addNumbers(a, b) {<br>&nbsp;&nbsp;&nbsp;var c = a + b;<br>&nbsp;&nbsp;&nbsp;return c;<br>} <br>document.write(addNumbers(40, 2));</div>`,
              specialTheoryText: `The document.write command outputs the value returned by the function, which is the sum of the two parameters.`,
              questionText: `Please enter the corresponding keyword to have the result of the function below displayed on the screen:`,
              codeFragment: '<div class="code-fragment">function substrNumbrs(first, second) {<br>&nbsp;&nbsp;&nbsp;var result = first - second; <br>&nbsp;&nbsp;&nbsp;<input type="text"> result; <br>}</div>',
              correctAnswer: 'return',
          }
      ],
      [
          {
              theoryHeading: 'The Alert Box',
              theoryText: `<p>JavaScript offers three types of popup boxes, the <b>Alert</b>, <b>Prompt</b>, and <b>Confirm</b> boxes.</p> <p>An <b>alert box</b> is used when you want to ensure that information gets through to the user.</p> <p>When an alert box pops up, the user must click OK to proceed. The <b>alert</b> function takes a single parameter, which is the text displayed in the popup box.</p><p><b>Example:</b><p><div class="code-example">alert("Do you realy want to leave this page?");</div>`,
              specialTheoryText: `Be careful when using alert boxes, as the user can continue using the page only after clicking OK.`,
              questionText: `How many parameters can be accepted by the "alert" function?`,
              answerOptions: ['3', '1', '2'],
              correctAnswer: '1',
          },
          {
              theoryHeading: 'Prompt Box',
              theoryText: `<p>A <b>prompt box</b> is often used to have the user input a value before entering a page.</p> <p>When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.</p> <p>If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.</p> <p>The <b>prompt()</b> method takes two parameters: <br />- The first is the label, which you want to display in the text box. <br />- The second is a default string to display in the text box (optional).</p><p><b>Example:</b></p><div class="code-example">var user = prompt("Please enter your name");<br>alert(user);</div>`,
              specialTheoryText: `When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. Do not overuse this method, because it prevents the user from accessing other parts of the page until the box is closed.`,
              questionText: `How many parameters can be accepted by the "alert" function?`,
              codeFragment: 'var name = <input type="text" required>("Enter your name:"); <br>alert(<input type="text" required>);',
              correctAnswer: ['prompt', 'name'],
          },
          {
              theoryHeading: 'Confirm Box',
              theoryText: `<p>A <b>confirm box</b> is often used to have the user verify or accept something. When a confirm box pops up, the user must click either OK or Cancel to proceed.</p> <p>If the user clicks OK, the box returns <b>true</b>. If the user clicks Cancel, the box returns <b>false</b>. <p><b>Example</b></p><div class="code-example">var result = confirm("Do you really want to leave this page?") <br>if (result == true) {<br>&nbsp;&nbsp;&nbsp;alert ("Thanks for visiting");<br> } else {<br>&nbsp;&nbsp;&nbsp;alert("Thanks for staying with us");<br>}</div>`,
              specialTheoryText: `Be careful when using alert boxes, as the user can continue using the page only after clicking OK.`,
              questionText: `In the "confirm" dialog box, "OK" returns true, and "Cancel" returns ...`,
              answerOptions: ['true', 'false', 'undefined'],
              correctAnswer: 'false',
          }
      ],
      [
          {
              questionText: `The following code will result in what value?<br>function test(number) { <br>&nbsp;&nbsp;while (number &lt; 5) {<br>&nbsp;&nbsp;&nbsp;&nbsp;number++;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return number;<br>}<br>alert(test(2));`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '5',
          },
          {
              questionText: `What is the output of the following expression?<br>function multNmbrs(a, b) {<br>&nbsp;&nbsp;var c = a*b;<br>} <br> multNmbrs(2, 6);`,
              answerOptions: ['Nothing', '12', '26'],
              correctAnswer: 'Nothing',
          },
          {
              questionText: `Please fill in the corresponding names for the built-in dialog boxes:`,
              codeFragment: '<input type="text"> is for getting input from the user;<br><input type="text">is for displaying a message in a box;',
              correctAnswer: ['prompt', 'alert'],
          },
          {
              questionText: `Fill in the blanks to calculate the maximum of the parameters:`,
              codeFragment: 'function max(a, b) {<br>&nbsp;&nbsp;<input type="text"> (a >= b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return <input type="text">;<br>&nbsp;&nbsp;} <input type="text"> {<br>&nbsp;&nbsp;&nbsp;&nbsp;return b;<br>}',
              correctAnswer: ['if', 'a', 'else'],
          },
          {
              questionText: `What is the correct syntax for referring to an external script called "script.js"?`,
              answerOptions: ['<script name="script.js">', '<script href="script.js">', '<script src="script.js">'],
              correctAnswer: '<script src="script.js">',
          },
          {
              questionText: `What alert will display on the screen? <br>function test(a, b) {<br>&nbsp;&nbsp;if (a &gt; b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return a*b;<br>} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return b / a;<br>&nbsp;&nbsp;} <br>} <br>alert(test(5, 15));`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '3',
          }
      ]
  ],
  [
      [
          {
              theoryHeading: 'JavaScript Objects',
              theoryText: `<p>JavaScript variables are containers for data values. <b>Objects</b> are variables too, but they can contain many values.</p> <p>Think of an object as a list of values that are written as <b>name:value</b> pairs, with the names and the values separated by colons.</p><p><b>Example:</b></p><div class="code-example">var person = {<br>&nbsp;&nbsp;&nbsp;name: "John",<br>&nbsp;&nbsp;&nbsp;age: 31,<br>&nbsp;&nbsp;&nbsp;favColor: "green",<br>&nbsp;&nbsp;&nbsp;height: 183<br>};</div><p>These values are called <b>properties</b>.</p><img src="./assets/img/properties.png" alt="properties list">`,
              specialTheoryText: `JavaScript objects are containers for named values.`,
              questionText: `In reference to an object, color, height, weight and name are all examples of:`,
              answerOptions: ['properties', 'nouns', 'methods', 'variables'],
              correctAnswer: 'properties',
          },
          {
              theoryHeading: 'Object Properties',
              theoryText: `<p>You can access object properties in two ways:</p> <div class="code-example">objectName.propertyName <br>// or <br>objectName['propertyName']</div><p>This example demonstrates how to access the age of our person object.</p><div class="code-example">var person = {<br>&nbsp;&nbsp;&nbsp;name: "John",<br>&nbsp;&nbsp;&nbsp;age: 31,<br>&nbsp;&nbsp;&nbsp;favColor: "green",<br>&nbsp;&nbsp;&nbsp;height: 183 <br>};<br>var x = person.age;<br>var y = person["age"]; </div><p>JavaScript's built-in length property is used to count the number of characters in a property or string.</p><div class="code-example">var course = {name: "JS", lessons: 41};<br>document.write(course.name.length);</div>`,
              specialTheoryText: `Objects are one of the core concepts in JavaScript.`,
              questionText: `What built-in property is used to count the number of characters in an object's property?`,
              answerOptions: ['width', 'write', 'length', 'size'],
              correctAnswer: 'length',
          },
          {
              theoryHeading: 'Object Methods',
              theoryText: `<p>An object <b>method</b> is a property that contains a <b>function definition</b>.</p> <p>Use the following syntax to access an object method:</p><div class="code-example">objectName.methodName()</div><p>As you already know, <b>document.write()</b> outputs data. The <b>write()</b> function is actually a method of the <b>document</b> object.<div class="code-example">document.write("This is some text")</div>`,
              specialTheoryText: `Methods are functions that are stored as object properties.`,
              questionText: `Access the "color" property of the "hair" object using dot syntax.`,
              codeFragment: '<input type="text" required>',
              correctAnswer: 'hair.color',
          }
      ],
      [
          {
              theoryHeading: 'The Object Constructor',
              theoryText: `<p>In the previous lesson, we created an object using the <b>object literal</b> (or initializer) syntax.</p><div class="code-example">var person = { <br>&nbsp;&nbsp;&nbsp;name: "John", age: 42, favColor: "green"<br>};</div> <p>This allows you to create only a single object.</p><p>Sometimes, we need to set an "<b>object type</b>" that can be used to create a number of objects of a single type.</p><p>The standard way to create an "object type" is to use an object <b>constructor function</b>.</p><div class="code-example">function person(name, age, color) {<br>&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;this.age = age;<br>&nbsp;&nbsp;&nbsp;this.favColor = color;<br>}</div><p>The above function (person) is an object constructor, which takes parameters and assigns them to the object properties.</p> `,
              specialTheoryText: `Objects are one of the core concepts in JavaScript.`,
              questionText: `The <b>this</b> keyword refers to the <b>current object</b>. Note that <b>this</b> is not a variable. It is a keyword, and its value cannot be changed.`,
              codeFragment: 'function movie(title, director) {<br>  this.title = <input type="text" required>;<br>  this.director = <input type="text" required>;<br>}',
              correctAnswer: ['title', 'director'],
          },
          {
              theoryHeading: 'Creating Objects',
              theoryText: `<p>Once you have an object constructor, you can use the <b>new</b> keyword to create new objects of the same type.</p><div class="code-example">var p1 = new person("John", 42, "green");<br>var p2 = new person("Amy", 21, "red");<br><br>document.write(p1.age); <br>document.write(p2.name);</div>`,
              specialTheoryText: `p1 and p2 are now objects of the <b>person</b> type. Their properties are assigned to the corresponding values.`,
              questionText: `What keyword is used for creating an instance of an object?`,
              answerOptions: ['make', 'var', 'new', 'inst'],
              correctAnswer: 'new',
          },
          {
              theoryHeading: 'Creating Objects',
              theoryText: `<p>Consider the following example.</p><div class="code-example">function person (name, age) {<br>&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;this.age = age;<br>} <br><br>var John = new person("John", 25);<br>var James = new person("James", 21); </div> <p>Access the object's properties by using the <b>dot syntax</b>, as you did before.</p><img src="./assets/img/dotsyntax.png" alt="dotsyntax example">`,
              specialTheoryText: `Understanding the creation of objects is essential.`,
              questionText: `Which two components are necessary in order to use information contained within an object?`,
              answerOptions: ['constructor function\'s name', 'object\'s name', 'keyword "this"', 'property\'s name'],
              correctAnswer: ['object\'s name', 'property\'s name'],
          }
      ],
      [
          {
              theoryHeading: 'Object Initialization',
              theoryText: `<p>Use the <b>object literal</b> or <b>initializer</b> syntax to create single objects.<div class="code-example">var John = {name: "John", age: 25};<br>var James = {name: "James", age: 21};</div>`,
              specialTheoryText: `Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.`,
              questionText: `Fill in the blanks:`,
              codeFragment: 'simba = <input type="text" required><br>  category: "Lion",<br>  gender: "Male"<br><input type="text" required>',
              correctAnswer: ['{', '}'],
          },
          {
              theoryHeading: 'Using Object Initializers',
              theoryText: `<p>Spaces and line breaks are not important. An object definition can span multiple lines.</p><div class="code-example">var John = {<br>&nbsp;&nbsp;&nbsp;name: "John",<br>&nbsp;&nbsp;&nbsp;age: 25 <br>};<br>var James = {<br>&nbsp;&nbsp;&nbsp;name: "James",<br>&nbsp;&nbsp;&nbsp;age: 21 <br>};</div><p>No matter how the object is created, the syntax for accessing the properties and methods does not change.</p><div class="code-example">document.write(John.age);</div>`,
              specialTheoryText: `Don't forget about the second accessing syntax: John['age'].`,
              questionText: `Complete the following expression to display the "simba" object's "category" property on the screen:`,
              codeFragment: 'document.write(simba.<input type="text" required>);',
              correctAnswer: 'category',
          }
      ],
      [
          {
              theoryHeading: 'Methods',
              theoryText: `<p><b>Methods</b> are functions that are stored as object properties.</p> <p>Use the following syntax to create an object method:</p><div class="code-example">methodName = function() { code lines }</div><p>Access an object method using the following syntax:</p><div class="code-example">objectName.methodName()</div><p>A method is a function, belonging to an object. It can be referenced using the <b>this</b> keyword.</p><p>The <b>this</b> keyword is used as a reference to the current object, meaning that you can access the objects properties and methods using it.</p><p>Defining methods is done inside the constructor function.</p><p>For Example:</p><div class="code-example">function person(name, age) {<br>&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;this.age = age;<br>&nbsp;&nbsp;&nbsp;this.changeName = function (name) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;} <br>} <br><br>var p = new person("David", 21);<br>p.changeName("John");<br><br>document.write(p.name);</div><p>In the example above, we have defined a method named <b>changeName</b> for our person, which is a function, that takes a parameter <b>name</b> and assigns it to the <b>name</b> property of the object.</p><p><b>this.name</b> refers to the name property of the object.</p>`,
              specialTheoryText: `The <b>changeName</b> method changes the object's <b>name</b> property to its argument.`,
              questionText: `The "this" keyword in the method means:`,
              answerOptions: ['The name of the web page', 'The current object', 'The name of the given method'],
              correctAnswer: ['The current object'],
          },
          {
              theoryHeading: 'Methods',
              theoryText: `<p>You can also define the function outside of the constructor function and associate it with the object.</p><div class="code-example">function person(name, age) {<br>&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;this.age = age;<br>&nbsp;&nbsp;&nbsp;this.yearOfBirth = bornYear;<br>} <br>function bornYear() {<br>return 2016 - this.age;<br>}</div><p>As you can see, we have assigned the object's <b>yearOfBirth</b> property to the <b>bornYear</b> function.</p><p>The <b>this</b> keyword is used to access the age property of the object, which is going to call the method.</p>`,
              specialTheoryText: `Note that it's not necessary to write the function's parentheses when assigning it to an object.`,
              questionText: `Please associate the "testData" constructor function below with a method called "mymethod":`,
              codeFragment: 'function testData (first, second) {<br>  this.first = first;<br>  this.second = second;<br> this.checkData = <input type="text" required>;<br>}',
              correctAnswer: 'mymethod',
          },
          {
              theoryHeading: 'Methods',
              theoryText: `<p>Call the method as usual.</p><div class="code-example">function person(name, age) {<br>&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;&nbsp;this.age = age;<br>&nbsp;&nbsp;&nbsp;this.yearOfBirth = bornYear;<br>} <br>function bornYear() {<br>return 2016 - this.age;<br>} <br><br>var p = new person("A", 22); <br>document.write(p.yearOfBirth());</div>`,
              specialTheoryText: `Call the method by the <b>property name</b> you specified in the constructor function, rather than the function name.`,
              questionText: `In order to use the object's properties within a function, use:`,
              answerOptions: ['Just the name of the property', 'The function\'s name', 'The "var" keyword', 'The "this" keyword'],
              correctAnswer: 'The "this" keyword',
          }
      ],
      [
          {
              questionText: `An object's properties are similar to variables; methods are similar to:`,
              answerOptions: ['properties', 'functions', 'operators', 'conditionals'],
              correctAnswer: 'function',
          },
          {
              questionText: `What is the result of the following expression?<br>var myString = "abcdef";<br>document.write(myString.length);`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '6',
          },
          {
              questionText: `Complete the expression to create an object constructor, taking into account that "height" and "weight" are properties and "calculate" is a method for the given object:`,
              codeFragment: 'function mathCalc (height, weight) {<br>&nbsp;&nbsp;this.height = <input type="text">;<br>&nbsp;&nbsp;this.weight = <input type="text">;<br>&nbsp;&nbsp;this.sampleCalc = <input type="text">;<br>}',
              correctAnswer: ['height', 'weight', 'calculate'],
          }
      ]
  ],
  [
      [
          {
              theoryHeading: 'JavaScript Arrays',
              theoryText: `<p>Arrays store multiple values in a single variable.</p> <p>To store three course names, you need three variables.</p><div class="code-example">var course1 ="HTML";<br>var course2 ="CSS";<br>var course3 ="JS"; </div> <p>But what if you had 500 courses? The solution is an <b>array</b>.</p><div class="code-example">var courses = new Array("HTML", "CSS", "JS"); </div>`,
              specialTheoryText: `This syntax declares an array named courses, which stores three values, or elements.`,
              questionText: `What two keywords do we need to create an array?`,
              answerOptions: ['object', 'new', 'function', 'Array'],
              correctAnswer: ['new', 'Array'],
          },
          {
              theoryHeading: 'Accessing an Array',
              theoryText: `<p>You refer to an array element by referring to the <b>index number</b> written in <b>square brackets</b>.<p>This statement accesses the value of the first element in courses and changes the value of the second element.</p><div class="code-example">var courses = new Array("HTML", "CSS", "JS"); <br>var course = courses[0]; // HTML <br>courses[1] = "C++"; //Changes the second element</div>`,
              specialTheoryText: `[0] is the first element in an array. [1] is the second. Array indexes start with 0.`,
              questionText: `What is the output of this code?
              var arr = new Array(3, 6, 8);
              document.write(arr[1]);`,
              answerOptions: ['3', '6', '1'],
              correctAnswer: '6',
          },
          {
              theoryHeading: 'JavaScript Arrays',
              theoryText: `<p>Attempting to access an index outside of the array, returns the value undefined.</p><div class="code-example">var courses = new Array("HTML", "CSS", "JS"); <br>document.write(courses[10]);</div>`,
              specialTheoryText: `Our courses array has just 3 elements, so the 10th index, which is the 11th element, does not exist (is undefined).`,
              questionText: `What is the result of trying to reference an array member which does not exist?`,
              answerOptions: ['null', '0', 'undefined', 'false'],
              correctAnswer: 'undefined',
          }
      ],
      [
          {
              theoryHeading: 'Creating Arrays',
              theoryText: `<p>You can also declare an array, tell it the number of elements it will store, and add the elements later.</p><div class="code-example">var courses = new Array(3);<br>courses[0] = "HTML";<br>courses[1] = "CSS";<br>courses[2] = "JS";</div>`,
              specialTheoryText: `An array is a special type of <b>object</b>. An array uses numbers to access its elements, and an object uses names to access its members.`,
              questionText: `Please insert the missing characters to output the third member of the array:`,
              codeFragment: 'document.write(example<input type="text" required>);',
              correctAnswer: '[2]',
          },
          {
              theoryHeading: 'Creating Arrays',
              theoryText: `<p>JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. You can then add the elements dynamically.</p><div class="code-example">var courses = new Array();<br>courses[0] = "HTML";<br>courses[1] = "CSS";<br>courses[2] = "JS";<br>courses[3] = "C++"</div> <p>For greater simplicity, readability, and execution speed, you can also declare arrays using the <b>array literal</b> syntax.<p><div class="code-example">var courses = ["HTML", "CSS", "JS"];</div>`,
              specialTheoryText: `You can access and modify the elements of the array using the index number, as you did before.The <b>array literal</b> syntax is the recommended way to declare arrays.`,
              questionText: `By entering var example = new Array(); we create an empty array which can be filled...`,
              answerOptions: ['just after it', 'anytime later', 'nevermore'],
              correctAnswer: 'anytime later',
          },
      ],
      [
          {
              theoryHeading: 'The length Property',
              theoryText: `<p>JavaScript arrays have useful <b>built-in</b> properties and methods.</p> <p>An array's <b>length</b> property returns the number of it's elements.</p><div class="code-example">var courses = ["HTML", "CSS", "JS"];<br>document.write(courses.length)</div>`,
              specialTheoryText: `The length property is always one more than the highest array index. If the array is empty, the length property returns 0.`,
              questionText: `Array has the "length" property, because it is:`,
              answerOptions: ['a variable', 'a function', 'an object'],
              correctAnswer: 'an object',
          },
          {
              theoryHeading: 'Combining Arrays',
              theoryText: `<p>JavaScript's <b>concat()</b> method allows you to join arrays and create an entirely new array.</p><p><b>Example:</b></p><div class="code-example">var c1 = ["HTML", "CSS"];<br>var c2 = ["JS", "C++"];<br>var courses = c1.concat(c2);</div><p>The courses array that results contains 4 elements (HTML, CSS, JS, C++).</p>`,
              specialTheoryText: `The <b>concat</b> operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.`,
              questionText: `The "concat" method takes two arrays and:`,
              answerOptions: ['outputs them to the screen', 'combines them in one new array', 'compares their members'],
              correctAnswer: 'combines them in one new array',
          }
      ],
      [
          {
              theoryHeading: 'Associative Arrays',
              theoryText: `<p>While many programming languages support arrays with named indexes (text instead of numbers), called <b>associative arrays</b> JavaScript <b>does not</b>.</p> <p>However, you still can use the named array syntax, which will produce an object.</p><p><b>For example:</b></p><div class="code-example">var person = []; //empty array <br>person["name"] = "John";<br>person["age"] = 46;<br>document.write(person["age"]);</div><p>Now, person is treated as an object, instead of being an array. The named indexes "name" and "age" become properties of the person object.</p>`,
              specialTheoryText: `As the person array is treated as an object, the standard array methods and properties will produce incorrect results. For example, <b>person.length</b> will return 0.`,
              questionText: `In associative arrays, index numbers are replaced with:`,
              answerOptions: ['functions', 'strings', 'constants', 'variable names'],
              correctAnswer: 'strings',
          },
          {
              theoryHeading: 'Associative Arrays',
              theoryText: `<p>Remember that JavaScript does not support arrays with named indexes.</p> <p>In JavaScript, arrays always use numbered indexes. It is better to use an <b>object</b> when you want the index to be a <b>string<b> (text).</p> <p>Use an <p>array</p> when you want the index to be a <b>number<b>.</p>`,
              specialTheoryText: `If you use a named index, JavaScript will redefine the array to a standard object.`,
              questionText: `In order to use associative arrays, the "associated" name is put in:`,
              answerOptions: ['brackets [ ]', 'strings', 'parentheses ( )', 'curly braces { }'],
              correctAnswer: 'brackets [ ]',
          },
      ],
      [
          {
              theoryHeading: 'The Math Object',
              theoryText: `<p>The Math object allows you to perform mathematical tasks, and includes several properties.</p><img src="./assets/img/mathFunctions.png" alt="math functions example"><p><b>For example</b></p><div class="code-example">document.write(Math.PI)</div>`,
              specialTheoryText: `Math has no constructor. There's no need to create a Math object first.`,
              questionText: `In the Math Object, which of the following constants does NOT exist?`,
              answerOptions: ['Math.PI', 'Math.ABC', 'Math.E'],
              correctAnswer: 'Math.ABC',
          },
          {
              theoryHeading: 'Math Object Methods',
              theoryText: `<p>The Math object contains a number of methods that are used for calculations:</p><img src="./assets/img/mathMethods.png" alt="math methods in JS">`,
              specialTheoryText: `To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. Then multiply the number by 10, and then take Math.ceil() from it: Math.ceil(Math.random() * 10).`,
              questionText: `In the Math Object, which of the following methods is used to calculate the square root?`,
              answerOptions: ['sqrt', 'root', 'ceil', 'round'],
              correctAnswer: 'sqrt',
          },
      ],
      [
          {
              theoryHeading: 'setInterval',
              theoryText: `<p>The <b>setInterval()</b> method calls a function or evaluates an expression at specified intervals (in milliseconds).</p> <p>It will continue calling the function until <b>clearInterval()</b> is called or the window is closed.</p><p><b>For example</b></p><div class="code-example">function myAlert() {<br>&nbsp;&nbsp;&nbsp;alert("Hi");<br>} <br>setInterval(myAlert, 3000);</div><p>This will call the myAlert function every 3 seconds (1000 ms = 1 second).</p>`,
              specialTheoryText: `Write the name of the function without parentheses when passing it into the setInterval method.`,
              questionText: `Fill in the blanks to call the function "calc()" every 2 seconds`,
              codeFragment: 'setInterval(<input type="text" required>, <input type="text" required>);',
              correctAnswer: ['calc', '2000'],
          },
          {
              theoryHeading: 'The Date Object',
              theoryText: `<p>The <b>Date</b> object enables us to work with dates.</p> <p>A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.</p><p>Using <b>new Date()</b>, create a new date object with the current date and time</p><div class="code-example">var d = new Date();<br>//d stores the current date and time</div><p>The other ways to initialize dates allow for the creation of new date objects from the specified date and time</p><div class="code-example">new Date(milliseconds) <br>new Date(dateString) <br>new Date(year, month, day, hours, minutes, seconds, milliseconds)</div>`,
              specialTheoryText: `JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.`,
              questionText: `What information results from creating a Date Object?`,
              answerOptions: ['The current date and time', 'The date when the web page was hosted', 'An empty string'],
              correctAnswer: 'The current date and time',
          },
          {
              theoryHeading: 'Date Methods',
              theoryText: `<p>When a Date object is created, a number of <b>methods</b> make it possible to perform operations on it.</p><img src="./assets/img/dateMethods.png" alt="date methods in JS"><p><b>For example</b></p><div class="code-example">var d = new Date(); <br>var hours = d.getHours();<br><br>document.write(hours);</div>`,
              specialTheoryText: `The innerHTML property sets or returns the HTML content of an element. In our case, we are changing the HTML content of our document's body. This overwrites the content every second, instead of printing it repeatedly to the screen.`,
              questionText: `Fill in the blanks to initialize a date object representing the current date and time:`,
              codeFragment: '<input type="text" required> date = <input type="text" required> Date();',
              correctAnswer: ['var', 'new'],
          }
      ],
      [
        {
            questionText: `Given the array below, please complete the expression to be alerted with "apple".`,
            codeFragment: 'var fruits = new Array("pear", "orange",<br>"apple", "grapefruit");<br>alert(fruits<input type="text">);',
            correctAnswer: '[2]',
        },
        {
            questionText: `What is the result of the following expression?<br>alert(Math.sqrt(36));`,
            answerOptions: ['12', '0', '6', '36'],
            correctAnswer: '6',
        },
        {
            questionText: `Please fill in the blanks to output the current minutes:`,
            codeFragment: 'var date = new Date();<br>alert(<input type="text">.<input type="text">Minutes());',
            correctAnswer: ['date', 'get'],
        },
        {
            questionText: `What is the output of this code?<br>var arr = new Array("a", "b", "c");<br>alert(arr[1]);`,
            codeFragment: '<input type="text" required>',
            correctAnswer: 'b',
        },
        {
            questionText: `Drag and drop from the options below to get alerted with the value of the PI constant.`,
            codeFragment: '<input type="text" required>(<input type="text" required>.<input type="text" required>);',
            correctAnswer: ['alert', 'Math', 'PI'],
        }
    ]
  ],
  [
      [
          {
              theoryHeading: 'The DOM',
              theoryText: `<p>When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.</p> <p>To accomplish that, the browser builds the <b>Document Object Model</b> of that page, which is an object oriented model of its logical structure.</p> <p>The DOM of an HTML document can be represented as a nested set of boxes:</p><img src="./assets/img/DOM_Scheme.png" alt="DOM Scheme">`,
              specialTheoryText: `JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.`,
              questionText: `What is DOM?`,
              answerOptions: ['Definitive Object Model', 'Document Object Model', 'Document Orientation Model'],
              correctAnswer: 'Document Object Model',
          },
          {
              theoryHeading: 'DOM Tree',
              theoryText: `<p>The DOM represents a document as a tree structure.</p> <p>HTML elements become interrelated <b>nodes</b> in the tree.</p> <p>All those nodes in the tree have some kind of relations among each other. Nodes can have <b>child</b> nodes. Nodes on the same tree level are called <b>siblings</b>.</p><p>For example, consider the following structure:</p><img src="./assets/img/DOM_Tree.png" alt="DOM Tree"><p>For the example above:<br><html> has two children (<head>, <body>);<br><head> has one child (<title>) and one parent (<html>);<br><title> has one parent (<head>) and no children;<br><body> has two children (<h1> and <a>) and one parent (<html>);`,
              specialTheoryText: `It is important to understand the relationships between elements in an HTML document in order to be able to manipulate them with JavaScript.`,
              questionText: `In the following HTML, which element is the parent of h1? <body><p><h1>Hi</h1></p></body>`,
              answerOptions: ['p', 'html', 'body'],
              correctAnswer: 'p',
          },
          {
              theoryHeading: 'The document Object',
              theoryText: `<p>There is a predefined <b>document</b> object in JavaScript, which can be used to access all elements on the DOM.</p> <p>In other words, the <b>document</b> object is the owner (or <b>root</b>) of all objects in your webpage.</p> <p>So, if you want to access objects in an HTML page, you always start with accessing the document object.</p><p><b>For example</b></p><div class="code-example">document.body.innerHTML = "Some text";</div><p>As <b>body</b> is an element of the DOM, we can access it using the <b>document</b> object and change the content of the <b>innerHTML</b> property.</p>`,
              specialTheoryText: `The <b>innerHTML</b> property can be used on almost all HTML elements to change its content.`,
              questionText: `In the following HTML, which element is the parent of h1? <body><p><h1>Hi</h1></p></body>`,
              answerOptions: ['The document object is the root of the DOM', 'innerHTML is a property', 'body is the root of the DOM', 'innerHTML is a method'],
              correctAnswer: ['The document object is the root of the DOM', 'innerHTML is a property'],
          }
      ],
      [
          {
              theoryHeading: 'Selecting Elements',
              theoryText: `<p>All HTML elements are <b>objects</b>. And as we know every object has <b>properties</b> and <b>methods</b>.</p> <p>The <b>document</b> object has methods that allow you to select the desired HTML element.</p> <p>These three methods are the most commonly used for selecting HTML elements:</p><div class="code-example">//finds element by id <br>document.getElementById(id) <br><br>//finds elements by class name <br>document.getElementsByClassName(name) <br><br>//finds elements by tag name <br>document.getElementsByTagName(name)</div><p>In the example below, the <b>getElementById</b> method is used to select the element with <b>id="demo"</b> and change its content:</p><div class="code-example">var elem = document.getElementById("demo"); <br>elem.innerHTML = "Hello World!";</div>`,
              specialTheoryText: `The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.`,
              questionText: `Fill in the blanks to select the element with id="text" and change its content to "Hi".`,
              codeFragment: '<input type="text" required> ob = document.getElementById("<input type="text" required>");<br><input type="text" required>.innerHTML = "Hi";',
              correctAnswer: ['var', 'text', 'ob'],
          },
          {
              theoryHeading: 'Working with DOM',
              theoryText: `<p>The <b>getElementsByClassName()</b> method returns a collection of all elements in the document with the specified class name.</p><p>For example, if our HTML page contained three elements with class="demo", the following code would return all those elements as an array:</p><div class="code-example">var arr =  document.getElementsByClassName("demo");<br>//accessing the second element <br>arr[1].innerHTML = "Hi";</div><p>Similarly, the <b>getElementsByTagName</p> method returns all of the elements of the specified tag name as an array.</p><p>The following example gets all paragraph elements of the page and changes their content:</p><div class="code-example">&lt;p&gt;hi&lt;/p&gt;<br>&lt;p&gt;hello&lt;/p&gt;<br>&lt;p&gt;hi&lt;/p&gt;<br>&lt;script&gt;<br>var arr = document.getElementsByTagName("p");<br>for (var x = 0; x &lt; arr.length; x++) {<br>&nbsp;&nbsp;&nbsp;arr[x].innerHTML = "Hi there";<br>} <br>&lt;/script&gt;</div><p>The script will result in the following HTML:</p><div class="code-example">&lt;p&gt;Hi there&lt;/p&gt;<br>&lt;p&gt;Hi there&lt;/p&gt;<br>&lt;p&gt;Hi there&lt;/p&gt;</div>`,
              specialTheoryText: `We used the length property of the array to loop through all the selected elements in the above example.`,
              questionText: `Fill in the blanks to select all div elements and alert the content of the third div.`,
              codeFragment: '<div class="code-fragment">var arr = document.getElementsByTagName("<input type="text">");<br>alert(arr[<input type="text">].innerHTML);',
              correctAnswer: ['div', '2'],
          },
          {
              theoryHeading: 'Working with DOM',
              theoryText: `<p>Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:<br>element.childNodes returns an array of an element's child nodes.<br>element.firstChild returns the first child node of an element.<br>element.lastChild returns the last child node of an element.
              <br>element.hasChildNodes returns true if an element has any child nodes, otherwise false.<br>element.nextSibling returns the next node at the same tree level.<br>element.previousSibling returns the previous node at the same tree level.<br>element.parentNode returns the parent node of an element.</p><div class="code-example">&lt;html&gt;<br>&nbsp;&nbsp;&lt;body&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id ="demo"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;some text&lt;/p&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;some other text&lt;/p&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;var a = document.getElementById("demo");<br>&nbsp;&nbsp;&nbsp;&nbsp;var arr = a.childNodes;<br>&nbsp;&nbsp;&nbsp;&nbsp;for (var x = 0; x &lt; arr.length; x++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[x].innerHTML = "new text"<br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/script&gt;<br>&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</div>`,
              specialTheoryText: `The code above changes the text of both paragraphs to "new text".`,
              questionText: `Can a node in the DOM have multiple parent nodes?`,
              answerOptions: ['No', 'Yes'],
              correctAnswer: 'No',
          },
      ],
      [
          {
              theoryHeading: 'Changing Attributes',
              theoryText: `<p>Once you have selected the element(s) you want to work with, you can change their attributes.</p> <p>As we have seen in the previous lessons, we can change the text content of an element using the <b>innerHTML</b> property.</p> <p>Similarly, we can change the attributes of elements.For example, we can change the <b>src</b> attribute of an image:</p><div class="code-example">&lt;img id="myimg" src="orange.png" alt="" /&gt;<br>&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;var el = document.getElementById("myimg");<br>&nbsp;&nbsp;&nbsp;el.src = "apple.png";<br>&lt;/script&gt;</div>`,
              specialTheoryText: `Practically all attributes of an element can be changed using JavaScript.`,
              questionText: `Fill in the blanks to select all images of the page and change their src attribute.`,
              codeFragment: 'var arr = document.getElementsByTagName("<input type="text" required>");<br>for (var x = 0; x &lt; arr.<input type="text" required>; x++) {<br>  arr[x].<input type="text" required> = "demo.jpg";<br>}',
              correctAnswer: ['img', 'length', 'src'],
          },
          {
              theoryHeading: 'Changing Style',
              theoryText: `<p>The style of HTML elements can also be changed using JavaScript.</p> <p>All style attributes can be accessed using the <b>style</b> object of the element.<b>For example</b></p><div class="code-example">&lt;div id="demo" style="width: 200px"&gt;some text&lt;/div&gt;<br>&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;var x = document.getElementById("demo");<br>&nbsp;&nbsp;&nbsp;x.style.color = "6600FF";<br>&nbsp;&nbsp;&nbsp;x.style.color = "100px"<br>&lt;script&gt;</div><p>The code above changes the text color and width of the div element.</p>`,
              specialTheoryText: `All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter. For example: the background-color property should be referred to as backgroundColor.`,
              questionText: `Fill in the blanks to change the background color of all span elements of the page.`,
              codeFragment: 'var s = document.getElementsByTagName("<input type="text" required>"); <br><input type="text" required>(var x = 0; x &lt; s.length; x++) {<br>  s[<input type="text" required>].style.backgroundColor = "#33EA73"; <br>}',
              correctAnswer: ['span', 'for', 'x'],
          }
      ],
      [
          {
              theoryHeading: 'Creating Elements',
              theoryText: `<p>Use the following methods to create new nodes: <br>relement.<b>cloneNode</b>() clones an element and returns the resulting node; <br>document.<b>createElement</b>(element) creates a new element node; <br>document.<b>createTextNode</b>(text) creates a new text node.</p><p><b>For example</b></p><div class="code-example">var node = document.createTextNode("Some new text");</div> <p>This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods: <br>element.<b>appendChild</b>(newNode) adds a new child node to an element as the last child node. <br>element.<b>insertBefore</b>(node1, node2) inserts node1 as a child before node2.</p><p><b>Example:</b></p><div class="code-example">&lt;div id="demo"&gt;some content&lt;/div&gt;<br><br>&lt;script&gt;<br>&nbsp;&nbsp;// creating a new paragraph <br>&nbsp;&nbsp;var p = document.createElement("p");<br>&nbsp;&nbsp;var node = document.createTextNode("Some new text");<br>&nbsp;&nbsp;// adding the text to the paragraph<br>&nbsp;&nbsp;p.appendChild(mode);<br><br>&nbsp;&nbsp; var div = document.getElementById("demo");<br>&nbsp;&nbsp;// adding the paragraph to the div <br>&nbsp;&nbsp;div.appendChild(p);<br>&lt;/script&gt; </div>`,
              specialTheoryText: `This creates a new paragraph and adds it to the existing div element on the page.`,
              questionText: `Drag and drop from the options below to add a new <li> element to the unordered list with id="list".`,
              codeFragment: 'var el = document.<input type="text" required>("li"); <br>var txt = document.createTextNode("B"); <br>el.appendChild(txt); <br>var ul = document.<input type="text">("list"); <br>ul.<input type="text">(el);',
              correctAnswer: ['createElement', 'getElementById', 'appendChild'],
          },
          {
              theoryHeading: 'Removing Elements',
              theoryText: `<p>To remove an HTML element, you must select the parent of the element and use the <b>removeChild</b>(node) method.</p><p><b>For example</b></p><div class="code-example">&lt;div id="demo"&gt;<br>&nbsp;&nbsp;&lt;p id="p1"&gt;This is a paragraph.&lt;/p&gt;<br>&nbsp;&nbsp;&lt;p id="p2"&gt;This is another paragraph.&lt;/p&gt;<br>&lt;/div&gt;<br><br>&lt;script&gt;<br>&nbsp;&nbsp;var parent = document.getElementById("demo");<br>&nbsp;&nbsp;car child = document.getElementById("p1");<br>&nbsp;&nbsp;parent.removeChild(child);<br>&lt;/script&gt;</div><p>This removes the paragraph with id="p1" from the page.</p>`,
              specialTheoryText: `An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:<br>var child = document.getElementById("p1"); <br>child.parentNode.removeChild(child);`,
              questionText: `Fill the blanks to add a new <li> element to the unordered list with id="list".`,
              codeFragment: 'var par = document.getElementById("par"); <br>var node = document.getElementById("node"); <br><input type="text" required>.<input type="text" required>(<input type="text" required>);',
              correctAnswer: ['par', 'removeChild', 'node'],
          },
          {
              theoryHeading: 'Removing Elements',
              theoryText: `<p>To replace an HTML element, the element.<b>replaceChild</b>(newNode, oldNode) method is used.</p><p><b>For example</b></p><div class="code-example">&lt;div id="demo"&gt;<br>&nbsp;&nbsp;&lt;p id="p1"&gt;This is a paragraph.&lt;/p&gt;<br>&nbsp;&nbsp;&lt;p id="p2"&gt;This is another paragraph.&lt;/p&gt;<br>&lt;/div&gt;<br><br>&lt;script&gt;<br>&nbsp;&nbsp;var p = document.createElement("p");<br>&nbsp;&nbsp;var node = document.createTextNode("This is new");<br>&nbsp;&nbsp;p.appendChild(node);<br>&nbsp;&nbsp;var parent = document.getElementById("demo");<br>&nbsp;&nbsp;var child = document.getElementById("p1");<br>&nbsp;&nbsp;parent.replaceChild(p, child);<br>&lt;/script&gt;<br>&lt;/script&gt;</div>`,
              specialTheoryText: `The code above creates a new paragraph element that replaces the existing p1 paragraph.`,
              questionText: `Which method is used to replace nodes?`,
              answerOptions: ['replaceNodes', 'replaceChild', 'replace', 'replaceElements'],
              correctAnswer: 'replaceChild',
          }
      ],
      [
          {
              theoryHeading: 'Animations',
              theoryText: `<p>Now that we know how to select and change DOM elements, we can create a simple animation.</p><p>Let's create a simple HTML page with a box element that will be animated using JS.</p>div class="code-example">&lt;style&gt;<br>#container {<br>&nbsp;&nbsp;width: 200px;<br>&nbsp;&nbsp;heigth: 200px;<br>&nbsp;&nbsp;background: green;<br>&nbsp;&nbsp;position: relative;<br>} <br>#box {<br>&nbsp;&nbsp;width: 50px;<br>&nbsp;&nbsp;height: 50px;<br>&nbsp;&nbsp;background: red;<br>&nbsp;&nbsp;position: absolute;<br>} <br>&lt;/style&gt;<br>&lt;div id="container"&gt;<br>&nbsp;&nbsp;&lt;div id="box"&gt;&lt;/div&gt;<br>&lt;/div&gt;</div> <p>Our <b>box</b> element is inside a <b>container</b> element. Note the position attribute used for the elements: the container is <b>relative</b> and the box is <b>absolute</b>. This will allow us to create the animation relative to the container.</p><p>We will be animating the red box to make it move to the right side of the container.</p>`,
              specialTheoryText: `You need to be familiar with CSS to better understand the code provided.`,
              questionText: `To create an animation relative to a container, the position attribute for the container should be set to:`,
              answerOptions: ['relative', 'box', 'absolute'],
              correctAnswer: 'relative',
          },
          {
              theoryHeading: 'Animations',
              theoryText: `<p>To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the <b>setInterval</b>() method, which allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).</p><p><b>For example:</b></p><div class="code-example">var t = setInterval(move, 500); </div><p>This code creates a timer that calls a <b>move</b>() function every 500 milliseconds. Now we need to define the <b>move</b>() function, that changes the position of the box.</p><div class="code-example">// starting position <br>var pos = 0; <br>//our box element <br>var box = document.getElementById("box"); <br><br>function move() {<br>&nbsp;&nbsp;&nbsp;pos += 1;<br>&nbsp;&nbsp;&nbsp;box.style.left = pos+"px"; //px = pixels <br>} </div>`,
              specialTheoryText: `The <b>move</b>() function increments the <b>left</b> property of the box element by one each time it is called.`,
              questionText: `What is the interval for this timer? var t = setInterval(func, 10000);`,
              answerOptions: ['10 seconds', '1 second', '100 seconds'],
              correctAnswer: '10 seconds',
          },
          {
              theoryHeading: 'Animations',
              theoryText: `<p>The following code defines a timer that calls the move() function every 10 milliseconds</p><div class="code-example">var t = setInterval(move, 10);</div><p>However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the container, we add a simple check to the move() function and use the <b>clearInterval</b>() method to stop the timer</p><div class="code-example">function move() {<br>&nbsp;&nbsp;&nbsp;if(pos >= 150) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clearInterval(t);<br>&nbsp;&nbsp;&nbsp;} else<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pos += 1;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box.style.left = pos+"px";<br>&nbsp;&nbsp;&nbsp;} <br>}</div><p>When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container width of 200 and a box width of 50.</p><p><b>The final code:</b></p><div class="code-example">var pos = 0;<br>var box = document.getElementById('box');<br>var t = setInterval(move, 10);<br><br>function move() {<br>&nbsp;&nbsp;&nbsp;if(pos >= 150) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clearInterval(t);<br>&nbsp;&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pos += 1;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box.style.left = pos + "px";<br>&nbsp;&nbsp;&nbsp;} <br>}</div>`,
              specialTheoryText: `The move() function increments the left property of the box element by one each time it is called.`,
              questionText: `Which function is used to stop a setInterval timer?`,
              answerOptions: ['clearInterval', 'stopInterval', 'clearTimer', 'stopTimer'],
              correctAnswer: 'clearInterval',
          }
      ],
      [
          {
              theoryHeading: 'Events',
              theoryText: `<p>You can write JavaScript code that executes when an <b>event</b> occurs, such as when a user clicks an HTML element, moves the mouse, or submits a form. When an event occurs on a target element, a <b>handler</b> function is executed. Common HTML events include:</p><img src="./assets/img/eventsExamples.png" alt="events examples">`,
              specialTheoryText: `Corresponding events can be added to HTML elements as attributes. For example: <p <b>onclick="someFunc()</b>">some text</p>`,
              questionText: `The type of function that executes when an event occurs is called:`,
              answerOptions: ['event handler', 'event function', 'event name', 'event description'],
              correctAnswer: 'event handler',
          },
          {
              theoryHeading: 'Handling Events',
              theoryText: `<p>Let's display an alert popup when the user clicks a specified button:</p><div class="code-example">&lt;button onclick="show()"&gt;Click Me&lt;/button&gt;<br>&lt;script&gt;<br>function show() {<br>&nbsp;&nbsp;&nbsp;alert("Hi there");<br>} <br>&lt;/script&gt;</div><p>Event handlers can be assigned to elements.<b>For example:</b></p><div class="code-example">var x = document.getElementById("demo");<br>x.onclick = function () {<br>&nbsp;&nbsp;&nbsp;document.body.innerHTML = Date();<br>}</div>`,
              specialTheoryText: `Corresponding events can be added to HTML elements as attributes. For example: <p <b>onclick="someFunc()</b>">some text</p>`,
              questionText: `Fill in the blanks to call func() when the button is clicked.`,
              answerOptions: '<div class="code-fragment">&lt;button <input type="text"> = "<input type="text">()"&gt;Click here&lt;/button&gt;</div>',
              correctAnswer: ['onclick', 'func'],
          },
          {
              theoryHeading: 'Events',
              theoryText: `<p>The <b>onload</b> and <b>onunload</b> events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded.</p><div class="code-example">&lt;body onload="doSomething()"&gt;</div> <p>Similarly, the <b>window.onload</b> event can be used to run code after the whole page is loaded. <div class="code-example">window.onload ​= function() {<br>&nbsp;&nbsp;&nbsp;//some code <br>}</div><p>The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.</p>`,
              specialTheoryText: `It’s important to understand events, because they are an essential part of dynamic web pages.`,
              questionText: `The type of function that executes when an event occurs is called:`,
              codeFragment: 'var body = document.getElementByTagName("body"); <br>body.<input type="text" required> = <input type="text" required>;',
              correctAnswer: ['onload', 'clear()'],
          },
          {
              theoryHeading: 'Event Listeners',
              theoryText: `<p>The <b>addEventListener</b>() method attaches an event handler to an element without overwriting existing event handlers. You can add <i>many</i> event handlers to one element.</p> <p>You can also add many event handlers of the same type to one element, i.e., two "click" events.</p><div class="code-example">element.addEventListener(event, function, useCapture);</div><p> The first parameter is the event's <b>type</b> (like "click" or "mousedown"). The second parameter is the <b>function</b> we want to call when the event occurs. The third parameter is a Boolean value specifying whether to use event <b>bubbling</b> or event <b>capturing</b></p><p><b>Example:</b></p><div class="code-example">element.addEventListener("click", myFunction);<br>element.addEventListener("mouseover", myFunction);<br><br>function myFunction() {<br>&nbsp;&nbsp;&nbsp;alert("Hello World!");<br>}</div>. This parameter is optional, and will be described in the next lesson. Note that you don't use the "on" prefix for this event; use "click" instead of "onclick".`,
              specialTheoryText: `Corresponding events can be added to HTML elements as attributes. For example: <p onclick="someFunc()">some text</p>`,
              questionText: `Can multiple event handlers be added to a single element?`,
              answerOptions: ['No', 'Yes'],
              correctAnswer: 'Yes',
          }
      ],
      [
          {
              theoryHeading: 'Event Propagation',
              theoryText: `<p>There are two ways of event propagation in the HTML DOM: <b>bubbling</b> and <b>capturing</b>.</p> <p>Event propagation allows for the definition of the element order when an event occurs. If you have a &lt;p&gt; element inside a &lt;div&gt; element, and the user clicks on the &lt;p&gt; element, which element's "click" event should be handled first?</p> <p>In <b>bubbling</b>, the innermost element's event is handled first and then the outer element's event is handled. The &lt;p&gt; element's click event is handled first, followed by the &lt;div&gt; element's click event.</p> <p>In <b>capturing</b>, the outermost element's event is handled first and then the inner. The &lt;div&gt; element's click event is handled first, followed by the &lt;p&gt; element's click event.</p>`,
              specialTheoryText: `Capturing goes <b>down</b> the DOM. Bubbling goes <b>up</b> the DOM.`,
              questionText: `A paragraph is inside a div element. You want the paragraph’s click event to be handled first. You should use:`,
              answerOptions: ['Handling', 'Capturing', 'Bubbling'],
              correctAnswer: 'Bubbling',
          },
          {
              theoryHeading: 'Capturing vs. Bubbling',
              theoryText: `<p>The <b>addEventListener</b>() method allows you to specify the propagation type with the "<b>useCapture</b>" parameter. div class="code-example">addEventListener(event, function, useCapture)</div> <p>The default value is <b>false</b>, which means the bubbling propagation is used; when the value is set to <b>true</b>, the event uses the capturing propagation.</p><div class="code-example">// Capturing propagation <br>elem1.addEventListener("click", myFunction, true); <br><br>// Bubbling propagation <br>elem2.addEventListener("click", myFunction, false);</div>`,
              specialTheoryText: `This is particularly useful when you have the same event handled for multiple elements in the DOM hierarchy.`,
              questionText: `Fill the blanks to handle the click event and use capturing propagation.`,
              codeFragment: 'x.addEventListener("<input type="text">", func,<br><input type="text" required>);',
              correctAnswer: ['click', 'true'],
          }
      ],
      [
          {
              theoryHeading: 'Form Validation',
              theoryText: `<p>HTML5 adds some attributes that allow form validation. For example, the <b>required</b> attribute can be added to an input field to make it mandatory to fill in.</p> <p>More complex form validation can be done using JavaScript. The form element has an <b>onsubmit</b> event that can be handled to perform validation.</p><p>For example, let's create a form with two inputs and one button. The text in both fields should be the same and not blank to pass the validation.</p><img src="./assets/img/code1.png" alt="form vadilation code"><p>Now we need to define the <b>validate</b>() function:</p><img src="./assets/img/code2.png" alt="form vadilation code">`,
              specialTheoryText: `The form will not get submitted if its onsubmit event returns false.`,
              questionText: `The form will submit to its action if onsubmit returns:`,
              answerOptions: ['false', 'true'],
              correctAnswer: 'true',
          }
      ],
      [
          {
              questionText: `Fill in the blanks to change the content of all paragraph tags of the page to "SoloLearn".`,
              codeFragment: 'var arr = <input type="text">.getElementsByTagName("<input type="text">");<br>for(var x=0; x &lt; arr.length; x++) {<br>&nbsp;&nbsp;arr[<input type="text">].innerHTML = "SoloLearn";<br>}',
              correctAnswer: ['document', 'p', 'x'],
          },
          {
              questionText: `What is the output of this code?<br>&lt;div id="test"&gt;<br>&lt;p&gt;some text&lt;/p&gt;<br>&lt;/div&gt;<br>&lt;script&gt;<br>var el=document.getElementById("test");<br>alert(el.hasChildNodes());<br>&lt;/script&gt;`,
              answerOptions: ['undefined', 'false', 'true'],
              correctAnswer: 'true',
          },
      ]
  ],
  [
      [
          {
              theoryHeading: 'ECMAScript 6',
              theoryText: `<p><b>ECMAScript</b> (ES) is a scripting language specification created to standardize JavaScript.</p><p>The Sixth Edition, initially known as <b>ECMAScript 6</b> (ES6) and later renamed to <b>ECMAScript 2015</b>, adds significant new syntax for writing complex applications, including classes and modules, iterators and for/of loops, generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies.</p><p>In other words, ES6 is a superset of JavaScript (ES5). The reason that ES6 became so popular is that it introduced new conventions and OOP concepts such as classes.</p>`,
              specialTheoryText: `In this module, we cover the most important additions to ES6.So, let's jump right in!`,
              questionText: `JavaScript and ES6 are different technologies for different purposes.`,
              answerOptions: ['False', 'True'],
              correctAnswer: 'False',
          },
      ],
      [
          {
              theoryHeading: 'var & let',
              theoryText: `<p>In ES6 we have three ways of declaring variables:</p><div class="code-example">var ​a = 10;<br>const ​b = 'hello';<br>let c = true;</div><p>The type of declaration used depends on the necessary scope. Scope is the fundamental concept in all programming languages that defines the visibility of a variable.</p><p>Unlike the <b>var</b> keyword, which defines a variable globally, or locally to an entire function regardless of block scope, <b>let</b> allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.</p><p><b>For example:</b></p><div class="code-example">if (true) {<br>&nbsp;&nbsp;&nbsp;let name = "Jack";<br>} <br>alert(name); // generates an error</div><p>In this case, the <b>name</b> variable is accessible only in the scope of the <b>if</b> statement because it was declared as <b>let</b>.</p>`,
              specialTheoryText: `let is not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context.`,
              questionText: `What is the output of this code?
              function letItBe() {
                let v = 2;
                if (true) {
                  let v = 4;
                  console.log(v);
                }
                console.log(v);
              }
              letItBe();`,
              answerOptions: ['4 2', '2 2', '4 4', '2 4'],
              correctAnswer: '4 2',
          },
          {
              theoryHeading: 'const',
              theoryText: `<p><b>const</b> variables have the same scope as variables declared using <b>let</b>. The difference is that const variables are <b>immutable</b> - they are not allowed to be reassigned.</p><p>For example, the following generates an exception:</p><div class="code-example">const a = "Hello";<br>a = "Bye";</div>`,
              specialTheoryText: `const is not subject to Variable Hoisting too, which means that const declarations do not move to the top of the current execution context.Also note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.`,
              questionText: `Fill in the blanks to make a constant named total and the variable i that is only accessible inside the loop.`,
              codeFragment: '<div class="code-fragment"><input type="text"> total = 100; <br>let sum = 0;<br>for(<input type="text">i = 0; i &lt; total; i++) {<br>&nbsp;&nbsp;&nbsp;sum += i;<br>}</div>',
              correctAnswer: ['const', 'let'],
          },
          {
              theoryHeading: 'Template Literals in ES6',
              theoryText: '<p><b>Template literals</b> are a way to output variables in the string. Prior to ES6 we had to break the string, for example:</p><div class="code-example">let name = "David";<br>let msg = "Welcome " + name + "!"<br>console.log(msg);</div><p>ES6 introduces a new way of outputting variable values in strings. The same code above can be rewritten as:</p>div class="code-example">let name = "David";<br>let msg = `Welcome ${name}!`<br>console.log(msg);</div><p>Notice, that template literals are enclosed by the <b>backtick</b> (` `) character instead of double or single quotes.</p><p>The <b>${expression}</b> is a placeholder, and can include any expression, which will get evaluated and inserted into the template literal.</p><p><b>For example:</b></p><div class="code-example">let a = 8;<br>let b = 34;<br>let msg = `The sum is ${a + b}`;<br>console.log(msg);</div>',
              specialTheoryText: `To escape a backtick in a template literal, put a backslash \ before the backtick.`,
              questionText: `Fill in the blanks to output "We are learning ES6!".`,
              codeFragment: '<div class="code-fragment">let n = 6;<br>let s = "ES";<br>let msg = `We are learning <input type="text">{s + n}!`;<br>console.log(<input type="text">)</div>',
              correctAnswer: ['$', 'msg'],
          }
      ],
      [
          {
              theoryHeading: 'Loops in ECMAScript 6',
              theoryText: '<p>In JavaScript we commonly use the <b>for</b> loop to iterate over values in a list:</p><div class="code-example">let arr = [1, 2, 3];<br>for (let k = 0; k &lt; arr.length; k++) {<br>&nbsp;&nbsp;&nbsp;console.log(arr[k]);<br>}</div><p>The <b>for...in</b> loop is intended for iterating over the enumerable keys of an object.</p><p><b>For example:</b></p><div class="code-example">let obj = {a: 1, b: 2, c: 3};<br>for (let key in obj){<br>&nbsp;&nbsp;&nbsp;console.log(key);<br>}</div><p>ES6 introduces the new <b>for...of</b> loop, which creates a loop iterating over iterable objects.</p><p><b>For example:</b></p><div class="code-example">let list = ["x", "y", "z"];<br>for (let val of list) {<br>&nbsp;&nbsp;&nbsp;console.log(val);<br>}</div>',
              specialTheoryText: `The for...of loop also works on the newly introduced collections (Map, Set, WeakMap, and WeakSet). We will learn about them in the upcoming lessons.Note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.`,
              questionText: `Fill in the blanks to iterate through all the characters using the for...of loop.`,
              codeFragment: '<div class="code-fragment"><input type="text"> (let ch <input type="text"> "SoloLearn") {<br>&nbsp;&nbsp;&nbsp;console.log(ch);<br>} </div>',
              correctAnswer: ['for', 'of'],
          },
          {
              theoryHeading: 'Functions in ECMAScript 6',
              theoryText: '<p>Prior to ES6, a JavaScript function was defined like this:</p><div class="code-example">function add(x, y) {<br>&nbsp;&nbsp;&nbsp;var sum = x + y;<br>&nbsp;&nbsp;&nbsp;console.log(sum);<br>}</div><p>ES6 introduces a new syntax for writing functions. The same function from above can be written as:</p><div class="code-example">const add = (x ,y) => { <br>&nbsp;&nbsp;&nbsp;let sum = x + y;<br>&nbsp;&nbsp;&nbsp;console.log(sum);<br>}</div><p>This new syntax is quite handy when you just need a simple function with one argument. You can skip typing <b>function</b> and <b>return</b>, as well as some parentheses and braces. <b>For example:</b></p><div class="code-example">const greet = x => "Welcome " + x;</div><p>If there are no parameters, an empty pair of parentheses should be used, as in:</p><div class="code-example">const x = () => alert("Hi");</div>',
              specialTheoryText: `The code is shorter and looks pretty nice, doesn't it? :)`,
              questionText: `Fill in the blanks to declare an arrow function that takes an array and prints the odd elements.`,
              codeFragment: '<div class="code-fragment">const printOdds = (arr) <input type="text"> {<br>&nbsp;&nbsp;<input type="text">.forEach(<input type="text"> => {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (el % 2 != 0) console.log(el);<br>&nbsp;&nbsp;});<br>} </div>',
              correctAnswer: ['=>', 'arr', 'el'],
          },
          {
              theoryHeading: 'Default Parameters in ES6',
              theoryText: '<p>In ES6, we can put the default values right in the signature of the functions.</p><p><b>For example:</b></p><div class="code-fragment">const test = (a, b = 3, c = 42) => a + b + c;<br>console.log(test(5));</div>',
              specialTheoryText: `Default value expressions are evaluated at function call time from left to right. This also means that default expressions can use the values of previously-filled parameters.`,
              questionText: `What is the output of this code? <br>function magic(a, b = 40) {<br>&nbsp;&nbsp;return a + b;<br>} <br>console.log(magic(2));`,
              codeFragment: '<div class="code-fragment"><input type="text"></div>',
              correctAnswer: '42',
          },
      ],
      [
          {
              theoryHeading: 'ES6 Objects',
              theoryText: '<p>JavaScript variables can be <b>Object</b> data types that contain many values called <b>properties</b>.</p><p>An object can also have properties that are function definitions called <b>methods</b> for performing actions on the object.</p><p>ES6 introduces <b>shorthand</b> notations and <b>computed</b> property names that make declaring and using objects easier to understand.</p><p>The new method definition shorthand does not require the colon (:) or <b>function</b> keyword, as in the <b>grow</b> function of the <b>tree</b> object declaration:</p><div class="code-example">let tree = {<br>&nbsp;&nbsp;&nbsp;height: 10, <br>&nbsp;&nbsp;&nbsp;color: "green",<br>&nbsp;&nbsp;&nbsp;grow() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.height += 2;<br>&nbsp;&nbsp;&nbsp;} <br>;<br>tree.grow();<br>console.log(tree.height); // 12</div><p>You can also use a property value shorthand when initializing properties with a variable by the same name.</p><p>For example, properties <b>height</b> and <b>health</b> are being initialized with variables named <b>height</b> and <b>health</b></p><div class="code-example">let height = 5;<br>let health = 100;<br><br>let athlete = {<br>&nbsp;&nbsp;&nbsp;height,<br>&nbsp;&nbsp;&nbsp;health <br>};</div><p>When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name.</p><p>For example:<b></b><div class="code-example">var a = {x: 1, x: 2, x: 3}</div>',
              specialTheoryText: `Duplicate property names generated a SyntaxError in ES5 when using strict mode. However, ES6 removed this limitation.`,
              questionText: `Fill in the blanks to make this code run and print 60.`,
              codeFragment: '<div class="code-example">let car = {<br>&nbsp;&nbsp;speed: 40,<br>&nbsp;&nbsp;accelerate() {<br>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text">.speed += 10;<br>&nbsp;&nbsp;} <br>};<br><input type="text">.accelerate();<br>car.accelerate();<br>console.log(car.<input type="text">);</div>',
              correctAnswer: ['this', 'car', 'speed'],
          },
          {
              theoryHeading: 'Computed Property Names',
              theoryText: "<p>With ES6, you can now use <b>computed property</b> names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).</p><p>Here are three examples:</p><p><b>Example 1:</b></p><div class='code-example'>let prop = 'name';<br>let id = '1234';<br>let mobile = '08923';<br><br>let user = { <br>&nbsp;&nbsp;&nbsp;[prop]: 'Jack',<br>&nbsp;&nbsp;&nbsp;[`user_${id}`]: `${mobile}`<br>};</div><p><b>Example 2:</b></p><div class='code-example'>var i = 0;<br>var a = { <br>&nbsp;&nbsp;&nbsp;  ['foo' + ++i]: i,<br>&nbsp;&nbsp;&nbsp;['foo' + ++i]: i,<br>&nbsp;&nbsp;&nbsp;['foo' + ++i]: i <br>};</div><p><b>Example 3:</b></p><div class='code-example'>var param = 'size';<br>var config = {<br>&nbsp;&nbsp;&nbsp;[param]: 12,<br>&nbsp;&nbsp;&nbsp;['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4 <br>};<br><br>console.log(config.mobileSize); // 4</div>",
              specialTheoryText: `It is very useful when you need to create custom objects based on some variables.`,
              questionText: `Fill in the blanks to create an object with its properties.`,
              codeFragment: '<div class="code-fragment">let prop = "foo";<br>let o = {<br>&nbsp;&nbsp;&nbsp;<input type="text">prop]: "lol"<input type="text"><br>&nbsp;&nbsp;&nbsp;["b" + "ar"]<input type="text"> "123"<br>};</div>',
              correctAnswer: ['[', ',', ':'],
          }
      ],
      [
          {
              theoryHeading: 'Array Destructuring in ES6',
              theoryText: "<p>The <b>destructuring</b> assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.</p><p>ES6 has added a shorthand syntax for destructuring an array.The following example demonstrates how to unpack the elements of an array into distinct variables:</p><div class='code-example'>let arr = ['1', '2', '3'];<br>let [one, two, three] = arr;<br><br>console.log(one); // 1<br>console.log(two); // 2 <br>console.log(three); // 3</div><p>We can use also destructure an array returned by a function.<b>For example:</b></p><div class='code-example'>let a = () => {<br>&nbsp;&nbsp;&nbsp;return [1, 3, 2];<br>};<br><br>let [one, , two] = a();</div><p>Notice that we left the second argument's place empty.</p><p>The destructuring syntax also simplifies assignment and swapping values:</p><div class='code-example'>let a, b, c = 4, d = 8;<br>[a, b = 6] = [2]; // a = 2, b = 6 <br><br>[c, d] = [d, c]; // c = 8, d = 4</div>",
              specialTheoryText: `Try it Yourself to play around with the code.`,
              questionText: `What is the output of the following code?<br>let names = ['John', 'Fred', 'Ann'];<br>let [Ann, Fred, John] = names;<br>console.log(John);`,
              answerOptions: ['John', 'Ann', 'Error', 'Fred'],
              correctAnswer: 'Ann',
          },
          {
              theoryHeading: 'Object Destructuring in ES6',
              theoryText: '<p>Similar to Array destructuring, <b>Object destructuring</b> unpacks properties into distinct variables.</b></p><p><b>For example:</b></p><div class="code-example">let obj = {h:100, s: true};<br>let {h, s} = obj; <br><br>console.log(h); // 100 <br>console.log(s); // true</div><p>We can assign without declaration, but there are some syntax requirements for that:</p><div class="code-example">let a, b;<br>({a, b} = {a: "Hello ", b: "Jack"});<br><br>console.log(a + b); // Hello Jack</div><p>The <b>()</b> with a semicolon <b>(;)</b> at the end are <b>mandatory</b> when destructuring without a declaration. However, you can also do it as follows where the <b>()</b> are not required:</p><div class="code-example">let {a, b} = {a: "Hello ", b: "Jack"};<br>console.log(a + b);</div><p>You can also assign the object to new variable names.</p><p><b>For example:</b></p><div class="code-example">let o = {h: 42, s: true};<br>let {h: foo, s: bar} = o;<br><br>console.log(h); // Error <br>console.log(foo); // 42</div><p>Finally you can assign <b>default values</b> to variables, in case the value unpacked from the object is undefined.</p><p><b>For example</b></p><div class="code-example">let obj = {id: 42, name: "Jack"};<br>let {id = 10, age = 20} = obj;<br><br>console.log(id); // 42 <br>console.log(age); // 20</div>',
              specialTheoryText: `Try it Yourself to play around with the code.`,
              questionText: `What is the output of the following code?<br>const obj = {one: 1, two: 2};<br>let {one:first, two:second} = obj;<br>console.log(one);`,
              answerOptions: ['the full object (obj)', 'Error', '2', '1'],
              correctAnswer: 'Error',
          },
      ]
  ]
];
