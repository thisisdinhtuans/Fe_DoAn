import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContext.js";
import { Modal, Button } from "antd";
import "./Layout.css";
import Cart from "../Cart/Cart.js";

const Header = () => {
  const { cart, getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();
  const navigate = useNavigate();

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    try {
      const userData = localStorage.getItem("SEPuser");
      const user = userData ? JSON.parse(userData) : null;
      console.log("Dữ liệu người dùng đã lấy:", user);
      if (user) {
        setUserName(user.userName);
      }
    } catch (error) {
      console.error("Error retrieving or parsing SEPuser from localStorage:", error);
    }
  }, []);
  
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("SEPuser"));
  //   if (user) {
  //     setUserName(user.userName);
  //   }
  // }, []);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleReservationWithCart = () => {
    closeCartModal();
    navigate("/reservation", { state: { cart, showCart: true } });
  };

  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md d-flex align-items-center">
              <p className="mb-0 phone">
                <span className="mailus">Điện thoại:</span>{" "}
                <a href="#">039 797 0202</a> or{" "}
                <span className="mailus">Email:</span>{" "}
                <a href="#">sep490_g64@gmail.com</a>
              </p>
            </div>
            <div className="col-12 col-md d-flex justify-content-md-end">
              <p className="mb-0">
                Thứ hai - Thứ năm / 9:00-19:00, Thứ sáu - Chủ nhật / 9:00-21:00
              </p>
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="images/blacklogo.png"
              alt="Logo"
              style={{
                height: "auto",
                width: "100px",
              }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Thực đơn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reservation" className="nav-link">
                  Đặt bàn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                {userName ? (
                  <Link to="/customer/profile" className="nav-link">
                    Xin chào, {userName}
                  </Link>
                ) : (
                  <Link to="/authentication" className="nav-link">
                    Đăng nhập
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link" onClick={openCartModal}>
                  <i className="fa-solid fa-cart-shopping fa-2x">
                    {totalItems > 0 && (
                      <span className="badge badge-danger">{totalItems}</span>
                    )}
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        title="GIỎ HÀNG"
        visible={isCartModalOpen}
        onCancel={closeCartModal}
        footer={[
          <Button
            key="reservation"
            type="primary"
            onClick={handleReservationWithCart}
          >
            Đặt bàn với thực đơn này
          </Button>,
        ]}
        width={700}
      >
        <Cart />
      </Modal>
    </>
  );
};

export default Header;