import React, { useEffect, useState } from "react";
import { ImEye } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const AdminPanel = () => {
  const [display, setDisplay] = useState("none");
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");
  console.log(orders);
  const getData = async () => {
    const res = await fetch(
      "https://yummi-restaurant-api.onrender.com/orders",
      {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      }
    );

    const data = await res.json();
    setOrders(data);
  };
  const showMessage = (msg) => {
    setMessage(msg);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="adminPanel">
      <div className="admin-conatiner">
        <h1 data-aos="fade-left" data-aos-duration="1000">
          Admin Panel
        </h1>
        <div className="adminNav" data-aos="fade-up" data-aos-duration="1000">
          <NavLink to={"/admin"}>Orders</NavLink>
          <NavLink to={"/add-products"}>Add Products</NavLink>
        </div>
        <table cellSpacing={0} data-aos="fade-right" data-aos-duration="1000">
          <thead>
            <tr>
              <th>Product</th>
              <th>Images</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub total</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, orderIndex) => {
              const { name, email, address, message, cartItems } = order.order;
              return cartItems.map((item, itemIndex) => (
                <tr key={`${orderIndex}-${itemIndex}`}>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image[0]} alt="product-img" />
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.quantity * item.price}</td>
                  <td>{name}</td>
                  <td className="texEmail">{email}</td>
                  <td>{address}</td>
                  <td>
                    <span
                      onClick={() => {
                        setDisplay("block");
                        showMessage(message);
                      }}
                    >
                      <ImEye />
                    </span>
                  </td>
                  <td>
                    <select name="status">
                      <option value="pending">Pending</option>
                      <option value="on_the_way">On The Way</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ));
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div className="order" style={{ display: display, minHeight: "400px" }}>
          <div className="or-x">
            <span onClick={() => setDisplay("none")}>
              <FaXmark className="x-mark2" />
            </span>
          </div>
          <div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
