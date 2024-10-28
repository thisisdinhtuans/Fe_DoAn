const Footer = () => {
  return (
    <>
      <footer className="ftco-footer ftco-no-pb ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-4 d-flex flex-column align-items-between">
              <div className="ftco-footer-widget mb-4 text-between">
                <h2 className="ftco-heading-2">Taste.it</h2>
                <ul className="ftco-footer-social list-unstyled mt-3 d-flex justify-content-center">
                  <li className="mr-3">
                    <a href="#">
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="#">
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="#">
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Giờ mở cửa</h2>
                <ul className="list-unstyled open-hours justify-content-center">
                  <li className="d-flex ">
                    <span>Thứ Hai</span>
                    <span>9:00 - 19:00</span>
                  </li>
                  <li className="d-flex ">
                    <span>Thứ Ba</span>
                    <span>9:00 - 19:00</span>
                  </li>
                  <li className="d-flex ">
                    <span>Thứ Tư</span>
                    <span>9:00 - 19:00</span>
                  </li>
                  <li className="d-flex ">
                    <span>Thứ Năm</span>
                    <span>9:00 - 19:00</span>
                  </li>
                  <li className="d-flex ">
                    <span>Thứ Sáu</span>
                    <span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex ">
                    <span>Thứ Bảy</span>
                    <span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex ">
                    <span>Chủ Nhật</span>
                    <span>9:00 - 21:00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Hình Ảnh</h2>
                <div className="thumb d-sm-flex">
                  <a
                    href="#"
                    className="thumb-menu img"
                    style={{ backgroundImage: "url(images/insta-1.jpg)" }}
                  ></a>
                  <a
                    href="#"
                    className="thumb-menu img"
                    style={{ backgroundImage: "url(images/insta-2.jpg)" }}
                  ></a>
                  <a
                    href="#"
                    className="thumb-menu img"
                    style={{ backgroundImage: "url(images/insta-3.jpg)" }}
                  ></a>
                </div>
                <div className="thumb d-flex">
                  <a
                    href="#"
                    className="thumb-menu img"
                    style={{ backgroundImage: "url(images/insta-4.jpg)" }}
                  ></a>
                  <a
                    href="#"
                    className="thumb-menu img"
                    style={{ backgroundImage: "url(images/insta-5.jpg)" }}
                  ></a>
                  <a
                    href="#"
                    className="thumb-menu img"
                    style={{ backgroundImage: "url(images/insta-6.jpg)" }}
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 bg-primary py-3">
          <div className="row no-gutters">
            <div className="col-md-12 text-center">
              <p className="mb-0">GocQue</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
