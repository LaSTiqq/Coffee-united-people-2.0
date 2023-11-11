const protectedPages = (req, res) => {
  try {
    if (!req.user) {
      res.status(401).send("Unauthorized");
    }
    res.status(200).send("Token verified");
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};

export default protectedPages;
