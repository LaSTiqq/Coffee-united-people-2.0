const protectedPages = (req, res) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    res.status(200).send("Token verified");
  } catch (error) {
    res.status(401).send("Authentication failed");
  }
};

export default protectedPages;