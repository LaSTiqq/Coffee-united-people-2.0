const protectedPages = (req, res) => {
  res.status(200).send("Token verified");
};

export default protectedPages;
