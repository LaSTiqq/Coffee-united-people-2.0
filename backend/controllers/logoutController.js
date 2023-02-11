const logoutController = (req, res) => {
  res.clearCookie("token");
  return res.status(200).send("Logout succeed");
};

export default logoutController;
