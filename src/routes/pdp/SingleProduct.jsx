import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import useFetchData from "../../hooks/useFetchData";
import { Container, Button } from "../../utils/Container";
import MainProduct from "../../components/main_product/MainProduct";
import { v4 as uuidv4 } from "uuid";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./SingleProduct.scss";

const SingleProduct = ( ) => {
 
  const idPorduc = useParams(); 
   const [idProduct, setIdProduct] = useState(idPorduc.id);
  useEffect(() => {
    setIdProduct(window.location.href.slice(30));
  }, [window.location.href]);
  // console.log(idProduct);
  const [data, isLoding] = useFetchData(`/products/${idProduct}`);


  const dispatch = useDispatch();
  const addToWishlist = () => {
    dispatch({ product:data, type: "ADD_TO_WISHLIST" })
  }

  const removeFromWishlist = () => {
    dispatch({id: data.id, type: "REMOVE_FROM_WISHLIST"})
  }

  const dataInStore = useSelector(data => data);
// console.log(dataInStore);
  return (
    <main className="single__product">
      <Container>
        <Search />
        <div className="single__product__wrapper">
          <div className="d-flex">
            <h5>EXTRA $10 OFF 3+ ITEMS WITH CODE 10OFF2023TECH</h5>
            <p>See all eligible items and terms</p>
          </div>
          <div className="single__product__card d-flex">
            <div className="single__product__images__mini">
              {data.images?.length > 0 &&
                data?.images[0].startsWith("https://") ? (
                data.images.map((link) => (
                  <img
                    key={uuidv4()}
                    className="single__product__image__mini"
                    src={link}
                    alt="/"
                  />
                ))
              ) : (
                <img
                  className="single__product__image"
                  src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  alt=""
                />
              )}
            </div>
            <div className="single__product__img">
              <div className="single__product__item">
                {data.images?.length > 0 &&
                  data?.images[0].startsWith("https://") ? (
                  <img
                    className="single__product__image"
                    src={data.images[0]}
                    alt=""
                  />
                ) : (
                  <img
                    className="single__product__image"
                    src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                    alt=""
                  />
                )}
                <div className="single__product__info">
                  <h4>
                  {data.description}
                  </h4>
                  <div className="single__product__info__card">
                    <form>
                      <div className="form-group row">
                        <label
                          // for="staticEmail"
                          className="col-sm-2 col-form-label"
                        >
                         Condition:
                        </label>
                        <div className="col-sm-5">
                          <input type="text"  className="form-control-plaintext" id="staticEmail"   readOnly defaultValue="Open box" />
                        </div>
                      </div>
                       <div className="form-group row">
                        <label   className="col-sm-2 col-form-label">
                          Model:
                        </label>
                        <div className="col-sm-5">
                          <input
                            disabled
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder={data.title}
                          />
                        </div>
                      </div>
                      
                     
                      <div className="form-group row">
                        <label
                          // for="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Carrier:
                        </label>
                        <div className="col-sm-5">
                          <input
                            disabled

                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="64 GB"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          // for="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Storage Capacity:
                        </label>
                        <div className="col-sm-5">
                          <input
                          disabled
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Black"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          // htmlFor="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Color:
                        </label>
                        <div className="col-sm-5">
                          <input
                          disabled

                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Heavy Use"
                          />
                        </div>
                      </div> <div className="form-group row">
                        <label
                          // for="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Cosmetic:
                        </label>
                        <div className="col-sm-5">
                          <input
                          disabled

                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          // for="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Quantity:
                        </label>
                        <div className="col-sm-2 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword"
                            placeholder="1"
                          />
                        </div>
                      </div>
                      
                     {dataInStore.like.likedProducts.find(p => p.id === data.id) ? <Button  onClick={removeFromWishlist}
                      type="button"
                      title="Savatga qo'shildi"
                      icon={<FiShoppingCart />}
                    /> : <div className="main-button button__cart " onClick={addToWishlist}><FiShoppingCart    />Savatga qo'shish</div>}
                    </form>
                  </div>

                  {/* <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <strong>${data.price}</strong>
                  <Button type="button" title="Savatga qo'shish" icon={<FiShoppingCart/>}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainProduct />
      </Container>
    </main>
  );
};
export default SingleProduct;
