export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Update the paths to match your project
    ],
    theme: {
      extend: {
        scrollbar: {
        none: {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      },
      },
    },
    plugins: [],
  };
  