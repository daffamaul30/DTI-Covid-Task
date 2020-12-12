import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';
import { Loading } from '../../components';
import { productIdService } from '../../services';

import './style.css';

const ProductId = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [productDataLoading, setProductDataLoading] = useState(false);
  const { productId } = params;

  useEffect(() => {
    setProductDataLoading(true);
    document.title = 'DTI Task - Detail Produk';
    productIdService
      .productById(productId)
      .then((res) => {
        setData(res.data);
        setCategory(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
  }, [productId]);

  return (
    <div className="container detail-product">
      {productDataLoading ? (
        <Loading />
      ) : (
        <Table
          borderless
          className="table-detail-product justify-content-center"
        >
          <tbody>
            <tr>
              <td>Name</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{category.join(', ')}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.display_unit}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.description}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.display_promo_price_percentage}</td>
            </tr>
            <tr>
              <td>Normal Price</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.display_normal_price}</td>
            </tr>
            <tr>
              <td>Display Price</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.display_price}</td>
            </tr>
            <tr>
              <td>Display Unit Price</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{data.display_unit_price}</td>
            </tr>
            <tr>
              <td>In Stock</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{String(data.in_stock)}</td>
            </tr>
            <tr>
              <td>Stock Prediction</td>
              <td />
              <td />
              <td />
              <td>:</td>
              <td>{String(data.stock_prediction)}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ProductId;
