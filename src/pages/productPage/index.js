import React, { useEffect, useState } from 'react';
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
} from 'reactstrap';
import { DelayInput } from 'react-delay-input';
import ReactPaginate from 'react-paginate';
import { productService } from '../../services';
import { Loading } from '../../components';
import { Cart, NotFound } from '../../assets';
import './style.css';

const Product = () => {
  const [productDataLoading, setProductDataLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    document.title = 'DTI Task - Products';
  });

  useEffect(() => {
    setProductDataLoading(true);
    productService
      .product(9, searchKey.length > 0 ? 0 : offset, searchKey)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
  }, [offset, searchKey]);

  const handlePagination = (e) => {
    setOffset(9 * e.selected);
  };

  const onSearch = (e) => {
    setSearchKey(e);
  };

  const listProduct = data.map((product) => {
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
            <CardTitle tag="h5">{product.brand.name}</CardTitle>
            {/* <CardText>{product.variants[0].name}</CardText> */}
            <CardText>{product.display_unit}</CardText>
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
            <div className="text-center">
              <Button color="info" className="btn-tambah">
                <img alt="add to cart" src={Cart} />
                <p>Add to cart</p>
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <div className="container">
        <h2 className="text-success mb-3 text-center">PRODUCT LIST</h2>
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
        <div>
          {productDataLoading ? <Loading /> : <Row>{listProduct}</Row>}
          {searchKey.length > 0 ? (
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
      </div>
      <Button className="cart">
        <img alt="cart" src={Cart} />
      </Button>
    </div>
  );
};

export default Product;
