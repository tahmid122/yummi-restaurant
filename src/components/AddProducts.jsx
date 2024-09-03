import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";
import Loader from "./Loader";
const AddProducts = () => {
  const [changeImage, setChangeImage] = useState(null);
  const [indexText, setIndexText] = useState(null);
  const [inputes, setInputes] = useState({ name: "", price: "", image: "" });
  const [files, setFiles] = useState([]);
  const inputRef = useRef();
  const [previews, setPreviews] = useState([]);
  const [isTrue, setIsTrue] = useState(true);
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputes({ ...inputes, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Generate image previews
    const imagePreviews = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews(imagePreviews);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append product details to FormData
    formData.append("name", inputes.name);
    formData.append("price", inputes.price);

    // Append files to FormData
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setIsTrue(false);
      const res = await fetch("http://localhost:3000/product", {
        method: "POST",
        body: formData, // Send the formData directly
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error uploading product:", err);
    } finally {
      setIsTrue(true);
    }
    getData();
    window.location.reload();
  };
  const getData = async () => {
    const res = await fetch("http://localhost:3000/product", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    const data = await res.json();
    setProducts(data);
  };
  const handleClick = () => {
    inputRef.current.click();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="adminPanel">
      <Loader isLoadTrue={isTrue} />
      <div className="admin-conatiner">
        <h1 data-aos="fade-left" data-aos-duration="1000">
          Add Products
        </h1>
        <div className="adminNav" data-aos="fade-up" data-aos-duration="1000">
          <NavLink to={"/admin"}>Orders</NavLink>
          <NavLink to={"/add-products"}>Add Products</NavLink>
        </div>
        <div className="add-form" data-aos="zoom-in" data-aos-duration="1000">
          <div className="order " id="orderx">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              method="post"
            >
              <div className="st-p">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    onChange={handleInputChange}
                    name="name"
                  />
                  <input
                    type="number"
                    placeholder="Enter Product Price"
                    onChange={handleInputChange}
                    name="price"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    multiple
                    placeholder="Enter Product Images"
                    ref={inputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <span className="fileUpload" onClick={handleClick}>
                    <FaUpload className="fileUploadIcon" />
                  </span>
                </div>
                <div className="preview">
                  {previews.map((preview, index) => (
                    <img
                      key={index}
                      src={preview}
                      alt={`preview ${index}`}
                      style={{
                        width: "50%",
                        height: "200px",
                      }}
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="fl-center-btn"
                style={{
                  width: "100%",
                  fontSize: "16px",
                  marginTop: "20px",
                  border: "none",
                }}
              >
                Add The Product
              </button>
            </form>
          </div>
        </div>
        <div
          className="products-admin"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="shop-container">
            {products.map((product, index) => {
              const { name, price, images } = product;
              const image1 = images[0];
              const image2 = images[1];
              return (
                <div
                  className="shop-item"
                  key={index}
                  onMouseEnter={() => {
                    setChangeImage(true);
                    setIndexText(index);
                  }}
                  onMouseLeave={() => {
                    setChangeImage(false);
                    setIndexText(null);
                  }}
                >
                  <div className="si-image">
                    <img
                      src={indexText == index ? image2 : image1}
                      alt={changeImage ? image2 : image1}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                  <div className="si-desc">
                    <h3>{name}</h3>
                    <span>${price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
