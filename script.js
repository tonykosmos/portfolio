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
              theoryText: `The name might be a bit of a giveaway but, Arithmetic operators pretty perform arithmetic functions on numbers (both literals and variables). The addition operator (+) in action determining the sum of two numbers. You can add as many numbers or variables together as you want or need to.`,
              specialTheoryText: 'Heads up! You can get the result of a string expression using the eval() function, which takes a string expression argument like eval("10 * 20 + 8") and returns the result. If the argument is empty, it returns undefined.',
              questionText: `What will the following statements display? <br />var test=5+7 <br/>document.write(test);`,
              answerOptions: ['Test', '12', '5+7'],
              correctAnswer: '12',
          },
          {
              theoryHeading: 'Multiplication',
              theoryText: `Want to hear a joke? What tool is best suited for math?...Multi-pliers! JavaScript is pretty good at math too though! We use the * operator to multiply one number by the other.`,
              specialTheoryText: 'Heads up! 10 * "5" or "10" * "5" will give the same result. But trying to multiply a number with string values that aren’t numbers, like "sololearn" * 5 will return NaN (Not a Number).',
              questionText: `What character do we use for multiplication?`,
              answerOptions: ['&', '*', 'x'],
              correctAnswer: '*',
          },
          {
              theoryHeading: 'Division',
              theoryText: `What’s a swimmer's favorite kind of math?... Dive-ision! Sorry! Back to business! We use the / operator to perform division operations.`,
              specialTheoryText: 'Heads up! 10 * "5" or "10" * "5" will give the same result. But trying to multiply a number with string values that aren’t numbers, like "sololearn" * 5 will return NaN (Not a Number).',
              questionText: `Beware of situations where there could be a division by 0, things get messed up when we do impossible math!`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '/',
          },
          {
              theoryHeading: 'The Modulus',
              theoryText: `Time to talk remainders. You hated them in school, but they’re pretty easy here, promise. The Modulus (%) operator returns the division remainder (what’s left over).`,
              specialTheoryText: 'Heads up! In JavaScript, we can use the modulus operator on integers AND on floating point numbers.',
              questionText: `What’s the result of using a modulus operator for 38%5?`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '3',
          },
          {
              theoryHeading: 'Increment & Decrement',
              theoryText: `Increment ++ The increment operator increases the numeric value of its operand by 1. When placed before the operand, it’ll return the incremented value. When placed after it, it’ll return the original value and then increments the operand. Decrement -- The decrement operator decreases the numeric value of its operand by 1. When placed before the operand, it’ll return the decremented value. When placed after the operand, it’ll return the original value and then decrements the operand.`,
              specialTheoryText: 'Heads up! Just like the math you learned in school, you can change the order of the arithmetic operations by using parentheses. Like this: var x = (100 + 50) * 3;',
              questionText: `What are increment and decrement are used for?`,
              answerOptions: ['To get the remainder of the division of two numbers', 'Adding or subtracting 1 from a number', 'To change the sign of the number to "+" or "-"'],
              correctAnswer: 'Adding or subtracting 1 from a number',
          }
      ],
      [
          {
              theoryHeading: 'Assignment Operators',
              theoryText: `Next in a series very logically named operators is... Assignment operators! And you guessed it, we use these guys to assign values to JavaScript variables.`,
              specialTheoryText: 'Heads up! You can use multiple assignment operators in one line, such as x -= y += 9.',
              questionText: `Calculate and enter the resulting value of this expression: <br />var result = 20; <br />result *= 5;`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '100',
          },

      ],
      [
          {
              theoryHeading: 'Comparison Operators',
              theoryText: `We can use comparison operators in logical statements to find out if variables or values are different. You get either true or false. For example, the equal to (==) operator checks whether the operands' values are equal.`,
              specialTheoryText: 'Heads up! You can compare all types of data with comparison operators, they’ll always return true or false.',
              questionText: `What do comparison operators return?`,
              answerOptions: ['true', 'wrong', 'false', 'right'],
              correctAnswer: ['true', 'false'],
          },
          {
              theoryHeading: 'Comparison Operators',
              theoryText: `Check out this table to see a breakdown of comparison operators. <br /> <img src="./assets/images/operationsTable.png" alt="operations-table">`,
              specialTheoryText: 'Heads up! One important thing to remember when we use operators, is that they only work when they’re comparing the same data type; numbers with numbers, strings with strings, you get the idea.',
              questionText: `What are increment and decrement are used for?`,
              codeFragment: 'val1 <input type="text" required> val2 // are equal <br> val1 <input type="text" required> val2 // not equal <br> val1 <input type="text" required> val2 // less than <br> val1 <input type="text" required> val2 // are strict equal (identical)',
              correctAnswer: ['==', '!=', '<', '==='],
          }
      ],
      [
          {
              theoryHeading: 'Logical Operators',
              theoryText: `Logical Operators, also known as Boolean Operators, (or the Vulcan Operators….ok, that one isn't true) evaluate an expression and return true or false. Check out the table below to see more details on the logical operators (AND, OR, NOT). <br /><img src="./assets/images/logicalOperators.png" alt="logical operators table">`,
              specialTheoryText: 'Heads up! You can check all types of data; comparison operators always return true or false.',
              questionText: `Logical AND (&&) returns true if:`,
              answerOptions: ['If one of the operands is true, but not both', 'If both operands are true', 'If only one of the operands is true'],
              correctAnswer: 'If both operands are true',
          },
          {
              theoryHeading: 'Conditional (Ternary) Operator',
              theoryText: `Conditional, or Ternary, operators assign a value to a variable, based on some condition. here’s an example: <br />var isAdult = (age < 18) ? "Too young": "Old enough"; <br />If the variable age is a value below 18, the value of the variable isAdult will be "Too young". Otherwise the value of isAdult will be "Old enough".`,
              specialTheoryText: 'Heads up! With logical operators you can connect as many expressions as you want or need to.',
              questionText: `Logical NOT returns true, if: `,
              answerOptions: ['The operand is true', 'The operand is false'],
              correctAnswer: 'The operand is false',
          }
      ],
      [
          {
              theoryHeading: 'String Operators',
              theoryText: `Time to introduce the most useful operator for strings - concatenation. We can use concatenation (represented by the + sign) to build strings made up of multiple smaller strings, or by joining strings with other types`,
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
              theoryText: `Often when we write code, we want to perform different actions based on different conditions. And this is where conditional statements come in. There are a bunch of different conditionals, to cover, but we’re starting with one of the most useful: "if". We use if to specify a block of code that we want to be executed if a specified condition is true. `,
              specialTheoryText: 'Heads up! You can see from the example above, we’ve used the JavaScript alert() to generate a popup alert box that contains the information inside the parentheses.',
              questionText: `Add the characters that complete the statement:`,
              codeFragment: 'if <input type="text" required> var1 > var2 <input type="text" required><br><input type="text" required><br>document.write("OK");<br><input type="text" required>',
              correctAnswer: ['(', ')', '}', '}'],
          },
      ],
      [
          {
              theoryHeading: 'The else Statement',
              theoryText: `Right, so we’ve seen that the action gets skipped when a code block using the if statement evaluates to false, but what if we want something else to happen. Well, we use the "else" statement, of course! We can use the else statement to specify a block of code that will execute if the condition is false.`,
              specialTheoryText: 'Heads up! You can skip the curly braces if the code under the condition contains only one command.',
              questionText: `The "else" statement is created to do what?`,
              answerOptions: ['Ignore the condition testing', 'Tell JavaScript to execute something if the condition is false', 'Test a new condition for true or false'],
              correctAnswer: 'Tell JavaScript to execute something if the condition is false',
          }
      ],
      [],
      [
          {
              theoryHeading: 'Switch',
              theoryText: `What if you need to test for multiple conditions? In those cases, writing if else statements for each condition might not be the best solution. Instead, we can use the switch statement to perform different actions based on different conditions. The switch expression is evaluated once. The value of the expression is compared with the values of each case, and if there’s a match, that block of code is executed. `,
              specialTheoryText: 'Heads up! You can achieve the same result with multiple if...else statements, but the switch statement is more effective in such situations.',
              questionText: `The switch statement can be used to replace…`,
              answerOptions: ['multiple if else statements', 'comments', 'variable declarations'],
              correctAnswer: 'multiple if else statements',
          },
          {
              theoryHeading: 'The break Keyword',
              theoryText: `So we have learned that the switch statement tests a code block, but we won't always want it to test the whole block. The break keyword essentially switches the switch statement off. Breaking out of the switch block stops the execution of more code and case testing inside the block.`,
              specialTheoryText: 'Heads up! Usually, a break should be put in each case statement.',
              questionText: `What’s the output of this code?<br />var x = 3;<br />switch (x) {<br />case 1:<br />document.write(x);<br />break;<br />case 2:<br />document.write(x+2);<br />break;<br />default:<br />document.write(x+5);<br />}`,
              codeFragment: '<input type="text" required>',
              correctAnswer: '8',
          },
          {
              theoryHeading: 'The default Keyword',
              theoryText: `Often there will be no match, but we still need the program to output something...for this we use the default keyword, which specifies the code to run if there’s no case match.`,
              specialTheoryText: 'Heads up! The default block can be omitted, if there is no need to handle the case when no match is found.',
              questionText: `The "default" statement is used …`,
              answerOptions: ['To finish the "case" statement', 'When no match is found', 'Because it is obligatory'],
              correctAnswer: 'When no match is found',
          },
      ],
      [
          {
              theoryHeading: 'Loops',
              theoryText: `Loops can execute a block of code a number of times. They’re handy when you want to run the same code repeatedly, adding a different value each time. JavaScript has three types of loops: for, while, and do while.`,
              specialTheoryText: 'Heads up! As you can see, the classic for loop has three components, or statements.',
              questionText: `The classic "for" loop consists of how many components?`,
              answerOptions: ['1', '2', '3', '4'],
              correctAnswer: '3',
          },
          {
              theoryHeading: 'The For Loop',
              theoryText: `If statement 2 returns true, the loop will start over again, if it returns false, the loop will end. Statement 2 is also optional, but only if you put a break inside the loop. Otherwise, the loop will never end! Statement 3 is used to change the initial variable. It can do anything, including negative increment (i--), positive increment (i = i + 15). Statement 3 is also optional, but only if you increment your values inside the loop.`,
              specialTheoryText: 'Heads up! You can have multiple nested for loops.',
              questionText: `Fill in the blanks to print EVEN values from 0 to 20 using a for loop:`,
              codeFragment: 'var x = 0;<br>for(; x &lt; 20; x += 2) {<br>  document.write(x);<br>}',
              correctAnswer: ['20', '2'],
          }
      ],
      [
          {
              theoryHeading: 'The While Loop',
              theoryText: `Time to move on to the second of our three loop statements, while. The while loop repeats through a block of code, but only as long as a specified condition is true.`,
              specialTheoryText: 'Heads up! The condition can be any conditional statement that returns true or false.',
              questionText: `The result of the condition statement is always:`,
              answerOptions: ['A Boolean value (true or false)', 'A string value', 'A numeric value'],
              correctAnswer: 'A Boolean value (true or false)',
          },
          {
              theoryHeading: 'The While Loop',
              theoryText: `Endless loops are not good. And one way of this happening is if we forget to increase the variable used in the condition.`,
              specialTheoryText: 'Heads up! Make sure that the condition in a while loop eventually becomes false.',
              questionText: `How many times will the while loop run, if we remove the counting variable increment statement?`,
              answerOptions: ['1', '4', 'Infinite'],
              correctAnswer: 'Infinite',
          }
      ],
      [
          {
              theoryHeading: 'The Do...While Loop',
              theoryText: `Almost done with loops! You're doing great! The last loop we’re looking at in this module is the do...while loop, it's a variant of the while loop but with one important difference. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.`,
              specialTheoryText: 'Heads up! Note the semicolon used at the end of the do...while loop. This is important.',
              questionText: `Apply the "do" and "while" keywords in their corresponding positions.`,
              codeFragment: 'var count = 1;<br><input type="text" required> { <br>  document.write("hello!");<br>  count++;<br>}<br><input type="text" required> (count &lt; 10);',
              correctAnswer: ['do', 'while'],
          }
      ],
      [
          {
              theoryHeading: 'Break',
              theoryText: `We've met the break statement earlier in this module, we use it to "jump out" of a loop and continue executing the code after the loop.`,
              specialTheoryText: 'Heads up! You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.',
              questionText: `The "break" statement:`,
              answerOptions: ['Ends the execution of the loop', 'Stops the whole script', 'Ignores the current iteration and passes to the next'],
              correctAnswer: 'Ends the execution of the loop',
          },
          {
              theoryHeading: 'Continue',
              theoryText: `We're nearly done with module 3! One last thing to cover. Unlike the break statement, the continue statement breaks only one iteration in the loop, and continues with the next iteration.`,
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
              theoryText: `A JavaScript function is a block of code designed to perform a particular task. The main advantages of using functions: Code reuse: Define the code once, and use it many times. Use the same code many times with different arguments, to produce different results.`,
              specialTheoryText: 'Heads up! A JavaScript function is executed when "something" invokes, or calls, it.',
              questionText: `What is a function?`,
              answerOptions: ['Arithmetical term', 'Profession', 'A certain block of code that can be reused over and over again'],
              correctAnswer: 'A certain block of code that can be reused over and over again',
          },
          {
              theoryHeading: 'Defining a Function',
              theoryText: `To define a JavaScript function, use the function keyword, followed by a name, followed by a set of parentheses (). The code to be executed by the function is placed inside curly brackets {}.`,
              specialTheoryText: 'Heads up! Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).',
              questionText: `Add the corresponding keyword and symbols to create a function named "test".`,
              codeFragment: '<input type="text" required> test() <input type="text" required><br>/* some code /* <br><input type="text" required>',
              correctAnswer: ['function', '{', '}'],
          },
          {
              theoryHeading: 'Calling a Function',
              theoryText: `To execute the function, you need to call it. To call a function, start with the name of the function, then follow it with the arguments in parentheses.`,
              specialTheoryText: 'Heads up! Always remember to end the statement with a semicolon after calling the function.',
              questionText: `Fill in the blanks to define and call the "hello" function.`,
              codeFragment: '<input type="text" required>hello() { <br>  alert("Hi there");<br>}<br><input type="text" required>',
              correctAnswer: ['function', 'hello'],
          },
          {
              theoryHeading: 'Calling Functions',
              theoryText: `Once the function is defined, JavaScript allows you to call it as many times as you want to.`,
              specialTheoryText: `You can also call a function using this syntax: myFunction.call(). The difference is that when calling in this way, you're passing the 'this' keyword to a function. You'll learn about it later.`,
              questionText: `How many times can the function be executed inside a web page?`,
              answerOptions: ['1024', '2', 'As many as needed'],
              correctAnswer: 'As many as needed',
          },
      ],
      [
          {
              theoryHeading: 'Function Parameters',
              theoryText: `Functions can take parameters. Function parameters are the names listed in the function's definition.`,
              specialTheoryText: `As with variables, parameters should be given names, which are separated by commas within the parentheses.`,
              questionText: `What do you need to do to create a parameter?`,
              answerOptions: ['Use the "param" keyword', 'Write a variable name in the parentheses', 'Use the "var" keyword'],
              correctAnswer: 'Write a variable name in the parentheses',
          },
          {
              theoryHeading: 'Using Parameters',
              theoryText: `After defining the parameters, you can use them inside the function. This function takes in one parameter, which is called name. When calling the function, provide the parameter's value (argument) inside the parentheses.`,
              specialTheoryText: `Function arguments are the real values passed to (and received by) the function.`,
              questionText: `When and how is the parameter used?`,
              answerOptions: ['By calling the function and placing the value in the parentheses', 'By placing the value before the function call', 'By placing the value before the function name'],
              correctAnswer: 'By calling the function and placing the value in the parentheses',
          },
          {
              theoryHeading: 'Function Parameters',
              theoryText: `You can define a single function, and pass different parameter values (arguments) to it.`,
              specialTheoryText: `This will execute the function's code each time for the provided argument.`,
              questionText: `Fill the blanks to declare a function and call it, by passing "Test" as the argument:`,
              codeFragment: '<input type="text" required> myAlert(txt) {<br>  alert("Hello " + txt);<br>}<br><input type="text" required><input type="text" required>;',
              correctAnswer: ['function', 'myAlert', '("Test")'],
          }
      ],
      [
          {
              theoryHeading: 'Multiple Parameters',
              theoryText: `You can define multiple parameters for a function by comma-separating them.`,
              specialTheoryText: `The example above defines the function myFunc to take two parameters.`,
              questionText: `What character is used to separate parameters from each other?`,
              answerOptions: [':', '&', ';', ','],
              correctAnswer: ',',
          },
          {
              theoryHeading: 'Multiple Parameters',
              theoryText: `When calling the function, provide the arguments in the same order in which you defined them.`,
              specialTheoryText: `If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.`,
              questionText: `Fill in the blanks to create a function alerting the sum of the two parameters.`,
              codeFragment: '<input type="text" required> myFunction(x, y) {<br>  alert(x <input type="text" required> <input type="text" required>);<br>}',
              correctAnswer: ['function', '+', 'y',]
          },
          {
              theoryHeading: 'Multiple Parameters',
              theoryText: `After defining the function, you can call it as many times as needed. JavaScript functions do not check the number of arguments received.`,
              specialTheoryText: `If a function is called with missing arguments (fewer than declared), the missing values are set to undefined, which indicates that a variable has not been assigned a value.`,
              questionText: `How many times can the declared function be used?`,
              answerOptions: ['Any', 'Maximum ten', 'Only once'],
              correctAnswer: 'Any',
          }
      ],
      [
          {
              theoryHeading: 'Function Return',
              theoryText: `A function can have an optional return statement. It is used to return a value from the function. This statement is useful when making calculations that require a result.`,
              specialTheoryText: `When JavaScript reaches a return statement, the function stops executing.`,
              questionText: `When is the "return" statement most frequently needed?`,
              answerOptions: ['When you need to make a calculation and receive the result', 'When you need to input data', 'When you need to add a pop-up window to the screen'],
              correctAnswer: 'When you need to make a calculation and receive the result',
          },
          {
              theoryHeading: 'Function Return',
              theoryText: `Use the return statement to return a value.`,
              specialTheoryText: `If you do not return anything from a function, it will return undefined.`,
              questionText: `Where is the "return" statement placed?`,
              answerOptions: ['At the end of the function description', 'Outside the curly braces', 'At the beginning of the function description'],
              correctAnswer: 'At the end of the function description',
          }
      ],
      [
          {
              theoryHeading: 'The Alert Box',
              theoryText: `JavaScript offers three types of popup boxes, the Alert, Prompt, and Confirm boxes. An alert box is used when you want to ensure that information gets through to the user. When an alert box pops up, the user must click OK to proceed. The alert function takes a single parameter, which is the text displayed in the popup box.`,
              specialTheoryText: `Be careful when using alert boxes, as the user can continue using the page only after clicking OK.`,
              questionText: `How many parameters can be accepted by the "alert" function?`,
              answerOptions: ['3', '1', '2'],
              correctAnswer: '1',
          },
          {
              theoryHeading: 'Prompt Box',
              theoryText: `A prompt box is often used to have the user input a value before entering a page. When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value. If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null. The prompt() method takes two parameters. <br />- The first is the label, which you want to display in the text box. <br />`,
              specialTheoryText: `When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. Do not overuse this method, because it prevents the user from accessing other parts of the page until the box is closed.`,
              questionText: `How many parameters can be accepted by the "alert" function?`,
              codeFragment: 'var name = <input type="text" required>("Enter your name:"); <br>alert(<input type="text" required>);',
              correctAnswer: ['prompt', 'name'],
          },
          {
              theoryHeading: 'Confirm Box',
              theoryText: `A confirm box is often used to have the user verify or accept something. When a confirm box pops up, the user must click either OK or Cancel to proceed. If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false. Do not overuse this method, because it also prevents the user from accessing other parts of the page until the box is closed.`,
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
              theoryText: `JavaScript variables are containers for data values. Objects are variables too, but they can contain many values. Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons. These values are called properties.`,
              specialTheoryText: `JavaScript objects are containers for named values.`,
              questionText: `In reference to an object, color, height, weight and name are all examples of:`,
              answerOptions: ['properties', 'nouns', 'methods', 'variables'],
              correctAnswer: 'properties',
          },
          {
              theoryHeading: 'Object Properties',
              theoryText: `You can access object properties in two ways: objectName.propertyName or objectName['propertyName']. JavaScript's built-in length property is used to count the number of characters in a property or string.`,
              specialTheoryText: `Objects are one of the core concepts in JavaScript.`,
              questionText: `What built-in property is used to count the number of characters in an object's property?`,
              answerOptions: ['width', 'write', 'length', 'size'],
              correctAnswer: 'length',
          },
          {
              theoryHeading: 'Object Methods',
              theoryText: `An object method is a property that contains a function definition. Use the following syntax to access an object method: objectName.methodName(). As you already know, document.write() outputs data. The write() function is actually a method of the document object.`,
              specialTheoryText: `Methods are functions that are stored as object properties.`,
              questionText: `Access the "color" property of the "hair" object using dot syntax.`,
              codeFragment: '<input type="text" required>',
              correctAnswer: 'hair.color',
          }
      ],
      [
          {
              theoryHeading: 'The Object Constructor',
              theoryText: `In the previous lesson, we created an object using the object literal (or initializer) syntax. This allows you to create only a single object. Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type. The standard way to create an "object type" is to use an object constructor function. `,
              specialTheoryText: `Objects are one of the core concepts in JavaScript.`,
              questionText: `The this keyword refers to the current object. Note that this is not a variable. It is a keyword, and its value cannot be changed.`,
              codeFragment: 'function movie(title, director) {<br>  this.title = <input type="text" required>;<br>  this.director = <input type="text" required>;<br>}',
              correctAnswer: ['title', 'director'],
          },
          {
              theoryHeading: 'Creating Objects',
              theoryText: `Once you have an object constructor, you can use the new keyword to create new objects of the same type.`,
              specialTheoryText: `p1 and p2 are now objects of the person type. Their properties are assigned to the corresponding values.`,
              questionText: `What keyword is used for creating an instance of an object?`,
              answerOptions: ['make', 'var', 'new', 'inst'],
              correctAnswer: 'new',
          },
          {
              theoryHeading: 'Creating Objects',
              theoryText: `Consider the following example. Access the object's properties by using the dot syntax, as you did before.`,
              specialTheoryText: `Understanding the creation of objects is essential.`,
              questionText: `Which two components are necessary in order to use information contained within an object?`,
              answerOptions: ['constructor function\'s name', 'object\'s name', 'keyword "this"', 'property\'s name'],
              correctAnswer: ['object\'s name', 'property\'s name'],
          }
      ],
      [
          {
              theoryHeading: 'Object Initialization',
              theoryText: `Use the object literal or initializer syntax to create single objects.`,
              specialTheoryText: `Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.`,
              questionText: `Fill in the blanks:`,
              codeFragment: 'simba = <input type="text" required><br>  category: "Lion",<br>  gender: "Male"<br><input type="text" required>',
              correctAnswer: ['{', '}'],
          },
          {
              theoryHeading: 'Using Object Initializers',
              theoryText: `Spaces and line breaks are not important. An object definition can span multiple lines. No matter how the object is created, the syntax for accessing the properties and methods does not change.`,
              specialTheoryText: `Understanding the creation of objects is essential.`,
              questionText: `Complete the following expression to display the "simba" object's "category" property on the screen:`,
              codeFragment: 'document.write(simba.<input type="text" required>);',
              correctAnswer: 'category',
          }
      ],
      [
          {
              theoryHeading: 'Methods',
              theoryText: `Methods are functions that are stored as object properties. A method is a function, belonging to an object. It can be referenced using the this keyword. The this keyword is used as a reference to the current object, meaning that you can access the objects properties and methods using it. Defining methods is done inside the constructor function.`,
              specialTheoryText: `The changeName method changes the object's name property to its argument.`,
              questionText: `The "this" keyword in the method means:`,
              answerOptions: ['The name of the web page', 'The current object', 'The name of the given method'],
              correctAnswer: ['The current object'],
          },
          {
              theoryHeading: 'Methods',
              theoryText: `Please associate the "testData" constructor function below with a method called "mymethod":`,
              specialTheoryText: `Note that it's not necessary to write the function's parentheses when assigning it to an object.`,
              questionText: `Please associate the "testData" constructor function below with a method called "mymethod":`,
              codeFragment: 'function testData (first, second) {<br>  this.first = first;<br>  this.second = second;<br> this.checkData = <input type="text" required>;<br>}',
              correctAnswer: 'mymethod',
          },
          {
              theoryHeading: 'Methods',
              theoryText: `Call the method as usual.`,
              specialTheoryText: `Call the method by the property name you specified in the constructor function, rather than the function name.`,
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
              theoryText: `Arrays store multiple values in a single variable. To store three course names, you need three variables. To store three course names, you need three variables.`,
              specialTheoryText: `This syntax declares an array named courses, which stores three values, or elements.`,
              questionText: `What two keywords do we need to create an array?`,
              answerOptions: ['object', 'new', 'function', 'Array'],
              correctAnswer: ['new', 'Array'],
          },
          {
              theoryHeading: 'Accessing an Array',
              theoryText: `You refer to an array element by referring to the index number written in square brackets.`,
              specialTheoryText: `[0] is the first element in an array. [1] is the second. Array indexes start with 0.`,
              questionText: `What is the output of this code?
              var arr = new Array(3, 6, 8);
              document.write(arr[1]);`,
              answerOptions: ['3', '6', '1'],
              correctAnswer: '6',
          },
          {
              theoryHeading: 'JavaScript Arrays',
              theoryText: `Attempting to access an index outside of the array, returns the value undefined`,
              specialTheoryText: `Our courses array has just 3 elements, so the 10th index, which is the 11th element, does not exist (is undefined).`,
              questionText: `What is the result of trying to reference an array member which does not exist?`,
              answerOptions: ['null', '0', 'undefined', 'false'],
              correctAnswer: 'undefined',
          }
      ],
      [
          {
              theoryHeading: 'Creating Arrays',
              theoryText: `You can also declare an array, tell it the number of elements it will store, and add the elements later.`,
              specialTheoryText: `An array is a special type of object. An array uses numbers to access its elements, and an object uses names to access its members.`,
              questionText: `Please insert the missing characters to output the third member of the array:`,
              codeFragment: 'document.write(example<input type="text" required>);',
              correctAnswer: '[2]',
          },
          {
              theoryHeading: 'Creating Arrays',
              theoryText: `JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. You can then add the elements dynamically. For greater simplicity, readability, and execution speed, you can also declare arrays using the array literal syntax.`,
              specialTheoryText: `You can access and modify the elements of the array using the index number, as you did before. The array literal syntax is the recommended way to declare arrays.`,
              questionText: `By entering var example = new Array(); we create an empty array which can be filled...`,
              answerOptions: ['just after it', 'anytime later', 'nevermore'],
              correctAnswer: 'anytime later',
          },
      ],
      [
          {
              theoryHeading: 'The length Property',
              theoryText: `JavaScript arrays have useful built-in properties and methods. An array's length property returns the number of it's elements.`,
              specialTheoryText: `The length property is always one more than the highest array index. If the array is empty, the length property returns 0.`,
              questionText: `Array has the "length" property, because it is:`,
              answerOptions: ['a variable', 'a function', 'an object'],
              correctAnswer: 'an object',
          },
          {
              theoryHeading: 'Combining Arrays',
              theoryText: `JavaScript's concat() method allows you to join arrays and create an entirely new array.`,
              specialTheoryText: `The concat operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.`,
              questionText: `The "concat" method takes two arrays and:`,
              answerOptions: ['outputs them to the screen', 'combines them in one new array', 'compares their members'],
              correctAnswer: 'combines them in one new array',
          }
      ],
      [
          {
              theoryHeading: 'Associative Arrays',
              theoryText: `While many programming languages support arrays with named indexes (text instead of numbers), called associative arrays JavaScript does not. However, you still can use the named array syntax, which will produce an object. Now, person is treated as an object, instead of being an array. The named indexes "name" and "age" become properties of the person object.`,
              specialTheoryText: `As the person array is treated as an object, the standard array methods and properties will produce incorrect results. For example, person.length will return 0.`,
              questionText: `In associative arrays, index numbers are replaced with:`,
              answerOptions: ['functions', 'strings', 'constants', 'variable names'],
              correctAnswer: 'strings',
          },
          {
              theoryHeading: 'Associative Arrays',
              theoryText: `Remember that JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes. It is better to use an object when you want the index to be a string (text). Use an array when you want the index to be a number.`,
              specialTheoryText: `If you use a named index, JavaScript will redefine the array to a standard object.`,
              questionText: `In order to use associative arrays, the "associated" name is put in:`,
              answerOptions: ['brackets [ ]', 'strings', 'parentheses ( )', 'curly braces { }'],
              correctAnswer: 'brackets [ ]',
          },
      ],
      [
          {
              theoryHeading: 'The Math Object',
              theoryText: `The Math object allows you to perform mathematical tasks, and includes several properties. <br /> <img src="./assets/images/math.png alt="math-functions-image">`,
              specialTheoryText: `Math has no constructor. There's no need to create a Math object first.`,
              questionText: `In the Math Object, which of the following constants does NOT exist?`,
              answerOptions: ['Math.PI', 'Math.ABC', 'Math.E'],
              correctAnswer: 'Math.ABC',
          },
          {
              theoryHeading: 'Math Object Methods',
              theoryText: `The Math object contains a number of methods that are used for calculations: <br /> <img src="./assets/images/mathmethods.png alt="math-methods-image">`,
              specialTheoryText: `To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. Then multiply the number by 10, and then take Math.ceil() from it: Math.ceil(Math.random() * 10).`,
              questionText: `In the Math Object, which of the following methods is used to calculate the square root?`,
              answerOptions: ['sqrt', 'root', 'ceil', 'round'],
              correctAnswer: 'sqrt',
          },
      ],
      [
          {
              theoryHeading: 'setInterval',
              theoryText: `The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds). It will continue calling the function until clearInterval() is called or the window is closed. `,
              specialTheoryText: `Write the name of the function without parentheses when passing it into the setInterval method.`,
              questionText: `Fill in the blanks to call the function "calc()" every 2 seconds`,
              codeFragment: 'setInterval(<input type="text" required>, <input type="text" required>);',
              correctAnswer: ['calc', '2000'],
          },
          {
              theoryHeading: 'The Date Object',
              theoryText: `The Date object enables us to work with dates. A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.`,
              specialTheoryText: `JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.`,
              questionText: `What information results from creating a Date Object?`,
              answerOptions: ['The current date and time', 'The date when the web page was hosted', 'An empty string'],
              correctAnswer: 'The current date and time',
          },
          {
              theoryHeading: 'Date Methods',
              theoryText: `When a Date object is created, a number of methods make it possible to perform operations on it. <br /> <img src="./assets/images/dateMethods.png alt="date-methods-image">`,
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
              theoryHeading: 'The Date Object',
              theoryText: `When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen. To accomplish that, the browser builds the Document Object Model of that page, which is an object oriented model of its logical structure. The DOM of an HTML document can be represented as a nested set of boxes:`,
              specialTheoryText: `JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.`,
              questionText: `What is DOM?`,
              answerOptions: ['Definitive Object Model', 'Document Object Model', 'Document Orientation Model'],
              correctAnswer: 'Document Object Model',
          },
          {
              theoryHeading: 'DOM Tree',
              theoryText: `The DOM represents a document as a tree structure. HTML elements become interrelated nodes in the tree. All those nodes in the tree have some kind of relations among each other. Nodes can have child nodes. Nodes on the same tree level are called siblings.`,
              specialTheoryText: `It is important to understand the relationships between elements in an HTML document in order to be able to manipulate them with JavaScript.`,
              questionText: `In the following HTML, which element is the parent of h1? <body><p><h1>Hi</h1></p></body>`,
              answerOptions: ['p', 'html', 'body'],
              correctAnswer: 'p',
          },
          {
              theoryHeading: 'The document Object',
              theoryText: `There is a predefined document object in JavaScript, which can be used to access all elements on the DOM. In other words, the document object is the owner (or root) of all objects in your webpage. So, if you want to access objects in an HTML page, you always start with accessing the document object.`,
              specialTheoryText: `The innerHTML property can be used on almost all HTML elements to change its content.`,
              questionText: `In the following HTML, which element is the parent of h1? <body><p><h1>Hi</h1></p></body>`,
              answerOptions: ['The document object is the root of the DOM', 'innerHTML is a property', 'body is the root of the DOM', 'innerHTML is a method'],
              correctAnswer: ['The document object is the root of the DOM', 'innerHTML is a property'],
          }
      ],
      [
          {
              theoryHeading: 'Selecting Elements',
              theoryText: `All HTML elements are objects. And as we know every object has properties and methods. The document object has methods that allow you to select the desired HTML element. These three methods are the most commonly used for selecting HTML elements: document.getElementById(id), document.getElementsByClassName(name), document.getElementsByTagName(name)`,
              specialTheoryText: `The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.`,
              questionText: `Fill in the blanks to select the element with id="text" and change its content to "Hi".`,
              codeFragment: '<input type="text" required> ob = document.getElementById("<input type="text" required>");<br><input type="text" required>.innerHTML = "Hi";',
              correctAnswer: ['var', 'text', 'ob'],
          },
          {
              theoryHeading: 'Working with DOM',
              theoryText: `Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM: element.childNodes returns an array of an element's child nodes. element.firstChild returns the first child node of an element. element.lastChild returns the last child node of an element.
              element.hasChildNodes returns true if an element has any child nodes, otherwise false.
              element.nextSibling returns the next node at the same tree level.
              element.previousSibling returns the previous node at the same tree level.
              element.parentNode returns the parent node of an element.`,
              specialTheoryText: `The code above changes the text of both paragraphs to "new text".`,
              questionText: `Can a node in the DOM have multiple parent nodes?`,
              answerOptions: ['No', 'Yes'],
              correctAnswer: 'No',
          }
      ],
      [
          {
              theoryHeading: 'Changing Attributes',
              theoryText: `Once you have selected the element(s) you want to work with, you can change their attributes. As we have seen in the previous lessons, we can change the text content of an element using the innerHTML property. Similarly, we can change the attributes of elements.`,
              specialTheoryText: `Practically all attributes of an element can be changed using JavaScript.`,
              questionText: `Fill in the blanks to select all images of the page and change their src attribute.`,
              codeFragment: 'var arr = document.getElementsByTagName("<input type="text" required>");<br>for (var x = 0; x &lt; arr.<input type="text" required>; x++) {<br>  arr[x].<input type="text" required> = "demo.jpg";<br>}',
              correctAnswer: ['img', 'length', 'src'],
          },
          {
              theoryHeading: 'Changing Style',
              theoryText: `The style of HTML elements can also be changed using JavaScript. All style attributes can be accessed using the style object of the element.`,
              specialTheoryText: `All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter. For example: the background-color property should be referred to as backgroundColor.`,
              questionText: `Fill in the blanks to change the background color of all span elements of the page.`,
              codeFragment: 'var s = document.getElementsByTagName("<input type="text" required>"); <br><input type="text" required>(var x = 0; x &lt; s.length; x++) {<br>  s[<input type="text" required>].style.backgroundColor = "#33EA73"; <br>}',
              correctAnswer: ['span', 'for', 'x'],
          }
      ],
      [
          {
              theoryHeading: 'Creating Elements',
              theoryText: `Use the following methods to create new nodes: element.cloneNode() clones an element and returns the resulting node. document.createElement(element) creates a new element node. document.createTextNode(text) creates a new text node. This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods: element.appendChild(newNode) adds a new child node to an element as the last child node. element.insertBefore(node1, node2) inserts node1 as a child before node2.`,
              specialTheoryText: `This creates a new paragraph and adds it to the existing div element on the page.`,
              questionText: `Drag and drop from the options below to add a new <li> element to the unordered list with id="list".`,
              codeFragment: 'var el = document.<input type="text" required>("li"); <br>var txt = document.createTextNode("B"); <br>el.appendChild(txt); <br>var ul = document.<input type="text">("list"); <br>ul.<input type="text">(el);',
              correctAnswer: ['createElement', 'getElementById', 'appendChild'],
          },
          {
              theoryHeading: 'Removing Elements',
              theoryText: `To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.`,
              specialTheoryText: `An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:var child = document.getElementById("p1"); child.parentNode.removeChild(child);`,
              questionText: `Fill the blanks to add a new <li> element to the unordered list with id="list".`,
              codeFragment: 'var par = document.getElementById("par"); <br>var node = document.getElementById("node"); <br><input type="text" required>.<input type="text" required>(<input type="text" required>);',
              correctAnswer: ['par', 'removeChild', 'node'],
          },
          {
              theoryHeading: 'Removing Elements',
              theoryText: `To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.`,
              specialTheoryText: `The code above creates a new paragraph element that replaces the existing p1 paragraph.`,
              questionText: `Which method is used to replace nodes?`,
              answerOptions: ['replaceNodes', 'replaceChild', 'replace', 'replaceElements'],
              correctAnswer: 'replaceChild',
          }
      ],
      [
          {
              theoryHeading: 'Animations',
              theoryText: `Now that we know how to select and change DOM elements, we can create a simple animation. Our box element is inside a container element. Note the position attribute used for the elements: the container is relative and the box is absolute. This will allow us to create the animation relative to the container.`,
              specialTheoryText: `You need to be familiar with CSS to better understand the code provided.`,
              questionText: `To create an animation relative to a container, the position attribute for the container should be set to:`,
              answerOptions: ['relative', 'box', 'absolute'],
              correctAnswer: 'relative',
          },
          {
              theoryHeading: 'Animations',
              theoryText: `To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the setInterval() method, which allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).`,
              specialTheoryText: `The move() function increments the left property of the box element by one each time it is called.`,
              questionText: `What is the interval for this timer? var t = setInterval(func, 10000);`,
              answerOptions: ['10 seconds', '1 second', '100 seconds'],
              correctAnswer: '10 seconds',
          },
          {
              theoryHeading: 'Animations',
              theoryText: `To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the setInterval() method, which allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).`,
              specialTheoryText: `The move() function increments the left property of the box element by one each time it is called.`,
              questionText: `What is the interval for this timer? var t = setInterval(func, 10000);`,
              answerOptions: ['10 seconds', '1 second', '100 seconds'],
              correctAnswer: '10 seconds',
          }
      ],
      [
          {
              theoryHeading: 'Events',
              theoryText: `You can write JavaScript code that executes when an event occurs, such as when a user clicks an HTML element, moves the mouse, or submits a form. When an event occurs on a target element, a handler function is executed. Common HTML events include:`,
              specialTheoryText: `Corresponding events can be added to HTML elements as attributes. For example: <p onclick="someFunc()">some text</p>`,
              questionText: `The type of function that executes when an event occurs is called:`,
              answerOptions: ['event handler', 'event function', 'event name', 'event description'],
              correctAnswer: 'event handler',
          },
          {
              theoryHeading: 'Events',
              theoryText: `The onload and onunload events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded. Similarly, the window.onload event can be used to run code after the whole page is loaded. The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.`,
              specialTheoryText: `It’s important to understand events, because they are an essential part of dynamic web pages.`,
              questionText: `The type of function that executes when an event occurs is called:`,
              codeFragment: 'var body = document.getElementByTagName("body"); <br>body.<input type="text" required> = <input type="text" required>;',
              correctAnswer: ['onload', 'clear()'],
          },
          {
              theoryHeading: 'Event Listeners',
              theoryText: `The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element. You can also add many event handlers of the same type to one element, i.e., two "click" events. element.addEventListener(event, function, useCapture); The first parameter is the event's type (like "click" or "mousedown"). The second parameter is the function we want to call when the event occurs. The third parameter is a Boolean value specifying whether to use event bubbling or event capturing. This parameter is optional, and will be described in the next lesson. Note that you don't use the "on" prefix for this event; use "click" instead of "onclick".`,
              specialTheoryText: `Corresponding events can be added to HTML elements as attributes. For example: <p onclick="someFunc()">some text</p>`,
              questionText: `Can multiple event handlers be added to a single element?`,
              answerOptions: ['No', 'Yes'],
              correctAnswer: 'Yes',
          }
      ],
      [
          {
              theoryHeading: 'Event Propagation',
              theoryText: `There are two ways of event propagation in the HTML DOM: bubbling and capturing. Event propagation allows for the definition of the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first? In bubbling, the innermost element's event is handled first and then the outer element's event is handled. The <p> element's click event is handled first, followed by the <div> element's click event. In capturing, the outermost element's event is handled first and then the inner. The <div> element's click event is handled first, followed by the <p> element's click event.`,
              specialTheoryText: `Capturing goes down the DOM. Bubbling goes up the DOM.`,
              questionText: `A paragraph is inside a div element. You want the paragraph’s click event to be handled first. You should use:`,
              answerOptions: ['Handling', 'Capturing', 'Bubbling'],
              correctAnswer: 'Bubbling',
          },
          {
              theoryHeading: 'Capturing vs. Bubbling',
              theoryText: `The addEventListener() method allows you to specify the propagation type with the "useCapture" parameter. The default value is false, which means the bubbling propagation is used; when the value is set to true, the event uses the capturing propagation.`,
              specialTheoryText: `This is particularly useful when you have the same event handled for multiple elements in the DOM hierarchy.`,
              questionText: `Fill the blanks to handle the click event and use capturing propagation.`,
              codeFragment: 'x.addEventListener("<input type="text">", func,<br><input type="text" required>);',
              correctAnswer: ['click', 'true'],
          }
      ],
      [
          {
              theoryHeading: 'Form Validation',
              theoryText: `HTML5 adds some attributes that allow form validation. For example, the required attribute can be added to an input field to make it mandatory to fill in. More complex form validation can be done using JavaScript. The form element has an onsubmit event that can be handled to perform validation. `,
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
  ]
];
