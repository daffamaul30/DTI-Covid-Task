import React, { useEffect, useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap';
import { productService } from '../../services';
import { Loading } from '../../components';
import './style.css';

const Product = () => {
  const [productDataLoading, setProductDataLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = 'DTI Task - Products';
    setProductDataLoading(true);
    productService
      .product()
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
    // console.log(data);
  }, []);

  const listProduct = data.map((product) => {
    const category = product.categories.join(',');
    return (
      <Col sm="6">
        <Card body>
          <CardSubtitle tag="h5" className="promo mb-2 text-muted">
            {product.display_promo_price_percentage}
          </CardSubtitle>
          <CardTitle tag="h5" className="text-uppercase">
            {product.brand.name}
          </CardTitle>
          <CardSubtitle tag="p" className="mb-2 text-muted">
            {`Category : ${category}`}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {product.description}
          </CardSubtitle>
          <CardText>{`${product.display_unit} - (${product.display_unit_price})`}</CardText>
          <CardSubtitle tag="h6" className="normal-price mb-2 text-muted">
            {product.display_normal_price}
          </CardSubtitle>
          <CardSubtitle tag="h5" className="price mb-2 text-muted">
            {product.display_price}
          </CardSubtitle>
        </Card>
      </Col>
    );
  });

  return (
    <div className="container">
      <h2 className="text-success mb-3 text-center">Product List</h2>
      {productDataLoading ? (
        <Loading />
      ) : (
        <Row>{listProduct}</Row>
      )}
    </div>
  );
};

export default Product;
