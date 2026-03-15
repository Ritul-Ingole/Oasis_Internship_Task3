# Oasis_Internship_Task3

# 🌡️ Temperature Converter

An interactive temperature converter web app built with HTML, CSS, and JavaScript — developed as **Task 3** of the Oasis Infobyte Web Development Internship.

---

## 📸 Project Overview

This is a clean, functional **Temperature Converter** that allows users to instantly convert temperatures between **Celsius**, **Fahrenheit**, and **Kelvin** — including the bonus Kelvin conversion challenge. The conversion updates in real-time as the user types or changes units, with no page reload needed.

---

## ✨ Features

- 🔢 **Number input** with live real-time conversion on every keystroke
- 🔽 **Dropdown menus** to select both the input unit and output unit independently
- ♻️ **Bidirectional conversion** — convert from and to any of the three units freely
- 🧮 **Kelvin support** — bonus challenge completed!
- ✅ **Input validation** — defaults to `0` if input is not a valid number
- 📐 Clean card-based UI with subtle shadow and green-accented result display

---

## 🔁 Conversion Logic

All conversions route through **Celsius as the base unit**:

| From | To Celsius |
|---|---|
| Fahrenheit | `(°F - 32) × 5/9` |
| Kelvin | `K - 273.15` |

| From Celsius | To |
|---|---|
| Celsius → Fahrenheit | `(°C × 9/5) + 32` |
| Celsius → Kelvin | `°C + 273.15` |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure, form elements |
| CSS3 | Card layout, input styling, result display |
| JavaScript (Vanilla) | Conversion logic, DOM manipulation, event listeners |

---

## 📁 Project Structure

```
temperature-converter/
│
├── index.html       # App structure and UI elements
├── style.css        # Styling and layout
├── script.js        # Conversion logic and event handling
└── README.md        # Project documentation
```

---

## 🧠 Key Concepts Practiced

- DOM selection with `document.getElementById()`
- Event listeners — `input` and `change` events for real-time updates
- Functions with parameters and return values for reusable logic
- `parseFloat()` for numeric input parsing and `|| 0` fallback for validation
- `toFixed(2)` for clean decimal formatting in the output
- Separation of concerns — HTML for structure, CSS for style, JS for logic

---

## 🏁 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritul-Ingole/temperature-converter.git
   ```

2. **Navigate into the folder**
   ```bash
   cd temperature-converter
   ```

3. **Open in browser**
   ```bash
   open index.html
   ```

No dependencies, no build step — just open and use.

---

## 📌 Internship Context

This project was built as part of the **Oasis Infobyte Web Development Internship — Task 3**.

The task required building a temperature converter with:
- An input field with number validation
- Dropdown/radio selection for Celsius and Fahrenheit
- A convert trigger and result display area
- **Bonus**: Kelvin conversion support ✅

---

## 📬 Contact

**Ritul Ingole**
- 📧 ritulmi007@gmail.com
- 💻 [github.com/Ritul-Ingole](https://github.com/Ritul-Ingole)
- 💼 [linkedin.com/in/ritul-ingole-529a58298](https://linkedin.com/in/ritul-ingole-529a58298)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
