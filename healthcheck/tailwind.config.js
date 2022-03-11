module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {},
    colors: {
      background: "var(--background)",
      text: "var(--text)",
      primary: "var(--primary)",
      "primary-contrast": "var(--primary-contrast)",
    },
  },
  plugins: [],
};
