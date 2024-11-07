import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaiterChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      toast.error("Mật khẩu mới và mật khẩu xác nhận không khớp");
      return;
    }
    const token = localStorage.getItem("SEPtoken");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/User/change-password",
        {
          currentPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            "Content-Type": "application/json-patch+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Đổi mật khẩu thành công");
        // Clear the form
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      }
    } catch (error) {
      toast.error("Đổi mật khẩu thất bại. Vui lòng kiểm tra lại.");
      console.error("Error changing password:", error);
    }
  };

  return (
    <Container fluid>
      <ToastContainer
        style={{
          top: "80px",
          right: "20px",
        }}
        position="top-right"
        autoClose={1500}
      />
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <Card style={{ backgroundColor: "#e9ecef" }}>
            <Card.Body>
              <h3>Đổi mật khẩu</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="currentPassword">
                  <Form.Label className="text-dark">Mật khẩu cũ</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    style={{ borderRadius: "10px" }}
                    maxLength={20}
                  />
                </Form.Group>

                <Form.Group controlId="newPassword">
                  <Form.Label className="text-dark">Mật khẩu mới</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ borderRadius: "10px" }}
                    maxLength={20}
                  />
                </Form.Group>

                <Form.Group controlId="confirmNewPassword">
                  <Form.Label className="text-dark">
                    Nhập lại mật khẩu mới
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    style={{ borderRadius: "10px" }}
                    maxLength={20}
                  />
                </Form.Group>

                <Button type="submit" variant="outline-dark" className="mt-3">
                  Đổi mật khẩu
                </Button>
              </Form>

              {message && <p className="mt-3">{message}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WaiterChangePassword;
