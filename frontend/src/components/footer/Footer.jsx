import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <span className="footer-link mx-5">About</span>
            <span className="footer-link mx-5">Carriers</span>
            <span className="footer-link mx-5">FAQ</span>
            <span className="footer-link mx-5">Location</span>
            <span className="footer-link mx-5">Contacts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
