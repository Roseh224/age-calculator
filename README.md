# **Age Calculator React App**

---

## **Overview**
This is a **React-based application** built using the **Vite build process**, with styling implemented via **CSS**. All remaining functionality is written in **JavaScript**. The project was created in **November/December 2024** as a practice exercise to refine skills in React, focusing on concepts such as:
- User input and two-way binding
- States and sharing states
- Props and lifting values

---

## **How It Works**
The **Age Calculator** application allows users to calculate their age (or any date difference) in specific units of time.

### **Features**
1. **Input Fields**
   - **Day**, **Month**, and **Year** fields for date entry.
2. **Unit Selector**
   - A dropdown menu with options to calculate age in:
     - **Seconds**
     - **Hours**
     - **Days**
     - **Weeks**
     - **Months**
     - **Decades**
3. **Calculate Button**
   - Clicking the button displays the result in the selected unit of time.
4. **Results Section**
   - Displays the user's age and a **birthday cake image**.
   - The number of candles varies based on the magnitude of the user's age.
   - Invalid inputs show an **error message** instead of results.

### **Validations**
- Dates **must not** be in the future.
- Date components (**day**, **month**, **year**) must be valid:
  - No negative values.
  - **Month ≤ 12**.
  - **Day ≤ valid days of the month**.
- Inputs outside the allowed range trigger an **error message**.

---

## **Project Layout**
1. **Header Section**
   - Displays a **title** and brief instructions on how to use the app.
2. **Input Section**
   - Includes:
     - Text fields for **day**, **month**, and **year**.
     - A dropdown menu for selecting the **time unit**.
     - A button to calculate the age.
3. **Output Section**
   - Displays:
     - The calculated age in the selected unit.
     - A corresponding **birthday cake image**, with quanity of candles corresponding to age.
     - **Error messages** for invalid inputs.

---

## **Styling**
- **Simple, responsive styling** with **CSS**.
- Consistent appearance across most window sizes.
- Optimized for widths between **320px** and **600px**.

---

## **Getting Started**
### **Installation**
1. Clone the repository & install dependencies:
   `git clone https://github.com/Roseh224/age-calculator`
   
2. Install dependencies:
   `npm install`

3. Start the development server to run locally:
   `npm run dev`

4. Build for production
   `npm run build`

   ---

Feel free to explore the project, test different dates, and have fun seeing how "old" you are in seconds, hours, or even decades! 🎂
