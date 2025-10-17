### Hexlet tests and linter status:
[![Actions Status](https://github.com/mammoth90/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mammoth90/frontend-project-44/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mammoth90_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mammoth90_frontend-project-44)

# Brain Games

**Description:**  
A set of mini-games to test your logic and math skills.  

Games included:  
- **Brain Even** — answer "yes" if the number is even, otherwise "no".  
- **Brain Calc** — calculate the result of an arithmetic expression.  
- **Brain GCD** — find the greatest common divisor of two numbers.  
- **Brain Progression** — find the missing number in a progression.  
- **Brain Prime** — answer "yes" if the number is prime, otherwise "no".  

All games run in the console and use a modular structure with dynamic imports.

---

## Installation

1. Clone the repository:

```bash
git clone <repository-URL>
cd project
```

2. Install dependencies:

```bash
make install
# or
npm ci
```

3. Running the Games

Use the Makefile for convenient execution:
```bash
make brain-games       # launch the main game menu
make brain-even        # launch “Brain Even”
make brain-calc        # launch “Brain Calc”
make brain-gcd         # launch “Brain GCD”
make brain-progression # launch “Brain Progression”
make brain-prime       # launch “Brain Prime”
```

Or directly with Node.js:
```bash
node bin/brain-even.js
```
4. Example gameplay in console:

```bash
$ node bin/brain-even.js
Answer "yes" if the number is even, otherwise answer "no".
Question: 12
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Alex!
```

[![asciicast](https://asciinema.org/a/fG1YRHlIZ2bTOhijNzavxqoJh.svg)](https://asciinema.org/a/fG1YRHlIZ2bTOhijNzavxqoJh)