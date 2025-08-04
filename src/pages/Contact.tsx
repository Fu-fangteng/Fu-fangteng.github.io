import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Information</h1>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Office address:</strong>
            <p>
              Hong Kong University of Science and Technology, No. 1 Du Xue Road,
              Dong Chong Town, Nansha District, Guangzhou City, Guangdong
              Province, China
            </p>
          </div>

          <div className="contact-item">
            <strong>Office email:</strong>
            <p>
              <a href="mailto:ffu000@connect.hkust-gz.edu.cn">
                ffu000@connect.hkust-gz.edu.cn
              </a>
            </p>
          </div>

          <div className="contact-item">
            <strong>China Tel:</strong>
            <p>+86 15820433559</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
