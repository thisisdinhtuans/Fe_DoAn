import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import "animate.css/animate.min.css";
import WOW from "wow.js";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Pagination } from "antd";

const Home = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/Blogs"
      );
      if (response.data.isSuccessed) {
        const blogs = response.data.resultObj;
        if (Array.isArray(blogs)) {
          setBlogs(blogs);
        } else {
          console.error("Unexpected response data format:", blogs);
        }
      } else {
        console.error("API call unsuccessful:", response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the blogs:", error);
      setLoading(false);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  useEffect(() => {
    new WOW().init();
    fetchBlogs();
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handleReservationClick = () => {
    navigate("/reservation");
  };

  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div>
      <section className="hero-wrap">
        <Carousel>
          <Carousel.Item>
            <div
              className="slider-item js-fullheight"
              style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            >
              <div className="overlay" />
              <Carousel.Caption>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-12 ">
                      <div className="text w-100 mt-5 text-center">
                        <span className="subheading d-block">Nhà Hàng</span>
                        <h1 className="d-block">Ra đời từ</h1>
                        <span className="subheading-2 d-block">2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="slider-item js-fullheight"
              style={{ backgroundImage: "url(images/bg_2.jpg)" }}
            >
              <div className="overlay" />
              <Carousel.Caption>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-12 ">
                      <div className="text w-100 mt-5 text-center">
                        <span className="subheading d-block">ORT Nhà Hàng</span>
                        <h1 className=" d-block">Chất lượng hàng đầu</h1>
                        <span className="subheading-2 sub d-block">Món ăn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-intro bg-primary">
        <div className="container py-5">
          <div className="row py-2">
            <div className="col-md-12 text-center">
              <h2>Những món ăn Ngon &amp; Bổ dưỡng</h2>
              <div
                className="btn btn-white btn-outline-white"
                onClick={handleReservationClick}
              >
                Đặt bàn ngay
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-intro"
        style={{ backgroundImage: "url(images/bg_3.jpg)" }}
      >
        <div className="overlay" />
        <div className="row justify-content-center mb-3 pb-2">
          <div className="col-md-7 text-center heading-section heading-section-white ">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">CHÀO MỪNG QUÝ KHÁCH</h2>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 text-center heading-section ">
              <span className="subheading">Chef</span>
              <h2 className="mb-4">Đầu bếp của chúng tôi</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/chef-4.jpg)" }}
                />
                <div className="text px-4 pt-2">
                  <h3>John Gustavo</h3>
                  <span className="position mb-2 text-dark">CEO, Co Founder</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social d-flex">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/chef-2.jpg)" }}
                />
                <div className="text px-4 pt-2">
                  <h3>Michelle Fraulen</h3>
                  <span className="position mb-2 text-dark">Đầu bếp trưởng</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social d-flex">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/chef-3.jpg)" }}
                />
                <div className="text px-4 pt-2">
                  <h3>Alfred Smith</h3>
                  <span className="position mb-2 text-dark">Đầu bếp</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social d-flex">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/chef-1.jpg)" }}
                />
                <div className="text px-4 pt-2">
                  <h3>Antonio Santibanez</h3>
                  <span className="position mb-2 text-dark">Đầu bếp</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social d-flex">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section testimony-section"
        style={{ backgroundImage: "url(images/bg_5.jpg)" }}
      >
        <div className="overlay" />
        <div className="container wow animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-12 text-center heading-section heading-section-white">
              <h2>Trải Nghiệm Ẩm Thực Tinh Tế, Đậm Đà Hương Vị</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-7">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                      </div>
                      <p className="name">John Gustavo</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                      </div>
                      <p className="name">John Gustavo</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                      </div>
                      <p className="name">John Gustavo</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                      </div>
                      <p className="name">John Gustavo</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                      </div>
                      <p className="name">John Gustavo</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div
                className="img img-2 w-100 mr-md-2"
                style={{ backgroundImage: "url(images/bg_6.jpg)" }}
              />
              <div
                className="img img-2 w-100 ml-md-2"
                style={{ backgroundImage: "url(images/bg_4.jpg)" }}
              />
            </div>
            <div className="col-md-6  makereservation p-4 p-md-5">
              <div className="heading-section  mb-5">
                <span className="subheading">Đây là bí mật của chúng tôi</span>
                <h2 className="mb-4">Thành phần hoàn hảo</h2>
                <p>
                  Nhà hàng của chúng tôi tự hào với thực đơn đa dạng, kết hợp
                  tinh hoa ẩm thực truyền thống và hiện đại. Từ hải sản tươi
                  ngon, thịt nướng thơm lừng đến các món thanh đạm, tất cả đều
                  được chế biến từ nguyên liệu tươi sạch và gia vị đặc biệt.
                </p>
                <p>
                  <div className="btn btn-primary" onClick={handleMenuClick}>
                    Khám phá ngay
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 text-center heading-section ">
              <span className="subheading">Blog</span>
              <h2 className="mb-4">Blog gần đây</h2>
            </div>
          </div>
          <div className="row">
            {currentBlogs.map((blog) => (
              <div
                key={blog.idBlog}
                className="col-md-4 wow animate__animated animate__fadeUp"
              >
                <Link to={`/blogDetails/${blog.blogID}`}>
                  <div className="blog-entry">
                    <a
                      href="#"
                      className="block-20"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    ></a>
                    <div className="text px-4 pt-3 pb-4">
                      <div className="meta">
                        <div>
                          <a href="#">
                            {/* console.log(blog.createdDate); */}
                            {new Date(blog.createdDate).toLocaleDateString()}
                          </a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">{truncateText(blog.title, 40)}</a>
                      </h3>
                      <p className="clearfix">
                        <a href="#" className="float-left read btn btn-primary">
                          Đọc thêm
                        </a>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div
            className="pagination-container"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={blogs.length}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
