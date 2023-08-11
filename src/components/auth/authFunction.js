export const isAuthenticated = () => {
  if (localStorage.getItem("loginToken") === "True") {
    return true;
  } else {
    return false;
  }
};
