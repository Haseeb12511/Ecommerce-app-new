const isAuth = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return user ? true : false;
};

export default isAuth;
