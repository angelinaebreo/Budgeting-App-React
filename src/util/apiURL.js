export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3003"
      : "https://budgeting-app-angelinaebreo.herokuapp.com";
  };

//   export const apiURL = () => {
//     return "https://budgeting-app-angelinaebreo.herokuapp.com";
//   };