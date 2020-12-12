import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  CardImg,
  CardBody,
  Button,
  Input,
} from 'reactstrap';
import { DelayInput } from 'react-delay-input';
import ReactPaginate from 'react-paginate';
import { useAlert } from 'react-alert';
import { CartModal, Loading } from '../../components';
import { productService } from '../../services';
import { Cart, NotFound } from '../../assets';
import Func from '../../utils/baseFunction';
import './style.css';

const Product = () => {
  const alert = useAlert();
  const [productDataLoading, setProductDataLoading] = useState(false);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = 'DTI Task - Products';
    setProductDataLoading(true);
    productService
      .product(limit, searchKey.length > 0 ? 0 : offset, searchKey)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
  }, [limit, offset, searchKey]);

  const handlePagination = (e) => {
    setOffset(limit * e.selected);
  };

  const onSearch = (e) => {
    setSearchKey(e);
  };

  const addToCart = (id, name, size, price, count) => {
    if (id !== null && count > 0) {
      setCart([...cart, { id, name, size, price, count }]);
      alert.success('Successfully add item to cart');
    }
  };

  const listProduct = data.map((product) => {
    const listQuantity = Func.range(
      product.max_promo_quantity
        ? product.max_promo_quantity
        : product.max_order_quantity
    );
    let count;
    return (
      <Col sm="4" key={product.variant_id}>
        <Card>
          <div className="container-overlay">
            <CardImg
              top
              // width="50%"
              src={
                product.variants[0].images[0]
                  ? product.variants[0].images[0].original_url
                  : NotFound
              }
              alt="Card image cap"
            />
            <div className="overlay">
              <div className="text">
                <p>{product.description}</p>
                <u>
                  <p>{product.display_unit_price}</p>
                </u>
              </div>
            </div>
          </div>
          <CardBody>
            <CardSubtitle tag="h5" className="promo mb-2 text-muted">
              {product.display_promo_price_percentage}
            </CardSubtitle>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/product/${product.id}`}
            >
              <CardTitle className="brand-name" tag="h5">
                {product.brand.name}
              </CardTitle>
              {/* <CardText>{product.variants[0].name}</CardText> */}
              <CardText>{product.display_unit}</CardText>
            </Link>
            <CardSubtitle tag="h6" className="normal-price mb-2 text-muted">
              {product.display_normal_price}
            </CardSubtitle>
            <span>
              <CardSubtitle tag="h5" className="price mb-2 text-muted">
                {product.display_price}
              </CardSubtitle>
            </span>
            <CardText className="stock">
              {!product.variants[0].in_stock ? 'Out Of Stock' : 'In Stock'}
            </CardText>
            <div className="d-flex flex-row justify-content-center">
              <Button
                onClick={() => {
                  addToCart(
                    product.id,
                    product.brand.name,
                    product.display_unit,
                    product.price,
                    count
                  );
                }}
                color="info"
                className="btn-tambah"
              >
                <img alt="add to cart" src={Cart} />
                <p>Add to cart</p>
              </Button>
              <Input
                type="select"
                name="selectCount"
                id="selectCount"
                className="text-center"
                onChange={(e) => {
                  count = e.target.value;
                }}
              >
                {listQuantity.map((i) => {
                  return <option key={i}>{i}</option>;
                })}
              </Input>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <div className="container">
        <h2 className="mb-3 text-center">PRODUCT LIST</h2>
        <div className="text-right">
          <DelayInput
            id="input-search"
            type="search"
            placeholder="Looking for a product?"
            required
            delayTimeout={1000}
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          />
        </div>
        <div className="product-content">
          {productDataLoading ? <Loading /> : <Row>{listProduct}</Row>}
          { searchKey.length > 0 ? (
            <div />
          ) : (
            <ReactPaginate
              previousLabel="&laquo;"
              nextLabel="&raquo;"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={5}
              onPageChange={(e) => {
                handlePagination(e);
              }}
              containerClassName="pagination-product"
              activeClassName="active"
            />
          )}
        </div>
        <CartModal dataCart={cart} />
      </div>
    </div>
  );
};

export default Product;
