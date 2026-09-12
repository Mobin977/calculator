# 🧮 Calculator

A clean, responsive, and interactive calculator built using **HTML5, CSS3, and JavaScript**.

This project was created as part of my **30 Projects in 30 Days Web Development Roadmap**, focusing on strengthening JavaScript fundamentals, DOM manipulation, event handling, and responsive UI development.

---

## 🚀 Live Demo

🔗 **Live Demo:**
[Calculator — Live Demo]https://mobin977.github.io/calculator/

---

## 📸 Screenshots

### Calculator — Desktop

![Calculator Desktop](./assets/calculator-desktop.png)

### Calculator — Mobile

![Calculator Mobile](./assets/calculator-mobile.png)

> Add the screenshots to the `assets` folder using the filenames above.

---

## ✨ Features

### Basic Calculations

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- `%` Percentage
- `.` Decimal numbers

### Calculator Controls

- **AC** — Clear the calculator
- **⌫** — Delete the last digit
- **=** — Calculate the result

### Additional Features

- ⌨️ Keyboard support
- 📱 Responsive design
- 🛡️ Divide-by-zero protection
- 🔢 Decimal number support
- ⚡ Instant calculation
- 🎨 Clean and modern interface
- 📐 Responsive CSS Grid layout

---

## 🛠️ Technologies Used

| Technology      | Purpose                           |
| --------------- | --------------------------------- |
| HTML5           | Application structure             |
| CSS3            | Styling and responsive design     |
| JavaScript      | Calculator logic and interactions |
| DOM API         | Dynamic UI updates                |
| CSS Grid        | Calculator button layout          |
| Keyboard Events | Keyboard calculator support       |

---

## 📂 Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── calculator-desktop.png
    └── calculator-mobile.png
```

---

## ⚙️ How It Works

The calculator maintains three main pieces of state:

```javascript
currentOperand;
previousOperand;
operation;
```

### Example

For:

```text
25 + 15
```

The calculator stores:

```text
previousOperand = 25
operation = +
currentOperand = 15
```

When the user presses `=`, JavaScript performs the selected operation and displays:

```text
40
```

---

## 🧮 Supported Operations

### Addition

```text
10 + 5 = 15
```

### Subtraction

```text
10 - 5 = 5
```

### Multiplication

```text
10 × 5 = 50
```

### Division

```text
10 ÷ 5 = 2
```

### Percentage

```text
50 % = 0.5
```

> The percentage button currently converts a number to its decimal percentage by dividing it by 100.

---

## ⌨️ Keyboard Support

The calculator supports keyboard input.

| Keyboard Key | Action         |
| ------------ | -------------- |
| `0-9`        | Enter numbers  |
| `+`          | Addition       |
| `-`          | Subtraction    |
| `*`          | Multiplication |
| `/`          | Division       |
| `.`          | Decimal        |
| `Enter`      | Calculate      |
| `=`          | Calculate      |
| `Backspace`  | Delete         |
| `Escape`     | Clear          |
| `%`          | Percentage     |

---

## 🛡️ Error Handling

The calculator prevents division by zero.

For example:

```text
10 ÷ 0
```

will display an error message instead of producing an invalid result.

---

## 📱 Responsive Design

The calculator is designed to work across different screen sizes.

### Desktop

- Centered calculator
- Large display
- Comfortable button spacing
- Modern card design

### Mobile

- Smaller calculator width
- Responsive buttons
- Smaller display typography
- Touch-friendly controls

---

## 🧠 JavaScript Concepts Practiced

This project helped strengthen several JavaScript concepts:

- Variables
- Functions
- Conditional statements
- `switch` statements
- Arrays and DOM collections
- Event listeners
- DOM manipulation
- Template literals
- `parseFloat()`
- String manipulation
- Keyboard events
- State management
- Error handling

---

## 🎯 Learning Objectives

The main goal of this project was to practice building an interactive application without using a framework.

By completing this project, I practiced:

- Connecting JavaScript with HTML
- Handling button events
- Managing application state
- Updating the DOM dynamically
- Building reusable functions
- Handling user input
- Creating responsive layouts
- Implementing keyboard controls
- Writing organized JavaScript

---

## 🔮 Future Improvements

Possible future improvements include:

- 🧮 Scientific calculator mode
- 📜 Calculation history
- 💾 Persistent calculation history
- 🌙 Dark/light theme
- 🧠 Memory functions
- `+/-` toggle button
- Advanced percentage calculations
- Improved accessibility
- Calculation history panel

---

## 🚀 Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Mobin977/calculator.git
```

### 2. Open the project

```bash
cd calculator
```

### 3. Run the application

Open:

```text
index.html
```

in your browser.

No backend, database, package installation, or build process is required.

---

## 🌐 Deployment

This project can be deployed using **GitHub Pages**.

### GitHub Pages Setup

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`

5. Click **Save**.
6. Wait for GitHub Pages to deploy the project.

---

## 📌 Project Status

**Status:** ✅ Completed

The calculator currently supports:

- Basic arithmetic
- Percentage
- Decimal input
- Clear
- Delete
- Keyboard controls
- Responsive design
- Divide-by-zero protection

---

## 👨‍💻 Author

### Shaik Mobin

Full Stack Developer | MCA Student

🔗 **GitHub:**
https://github.com/Mobin977

🔗 **LinkedIn:**
https://www.linkedin.com/in/mobin-shaik-65900541/

---

## 📚 Part of My 30-Project Roadmap

This calculator is **Project #3** in my **30 Projects in 30 Days Web Development Roadmap**.

### Beginner Projects

- ✅ Project 1 — Personal Portfolio
- ✅ Project 2 — To-Do App
- ✅ Project 3 — Calculator
- ⏳ Project 4 — Weather App
- ⏳ Project 5 — Quiz Application
- ⏳ Project 6 — Expense Tracker
- ⏳ Project 7 — Notes App
- ⏳ Project 8 — Movie Search App
- ⏳ Project 9 — Recipe Finder
- ⏳ Project 10 — GitHub Profile Finder

---

## ⭐ If You Like This Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is open source and available for educational and personal use.
