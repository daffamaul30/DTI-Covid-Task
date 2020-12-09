import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from 'reactstrap';
import { Cart } from '../../assets';
import Func from '../../utils/baseFunction';
import './style.css';

const CartModal = (props) => {
  const { className, dataCart } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    return setModal(!modal);
  };

  // const deleteItem = (id) => {
  //   const found = dataCart.find((item) => {
  //     return item.id === id;
  //   });
  //   dataCart.pop(found);
  // };

  const totalPrice = dataCart.reduce((addedValue, data) => {
    return addedValue + parseInt(data.price, 10) * data.count;
  }, 0);

  return (
    <div>
      <Button className="cart" onClick={toggle}>
        <div className="item-cart">{dataCart.length}</div>
        <img alt="cart" src={Cart} />
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader charCode="X" toggle={toggle}>
          Cart List
        </ModalHeader>
        <ModalBody>
          <Table>
            <tbody>
              {dataCart.length === 0 ? (
                <p className="text-center">Your cart is empty</p>
              ) : (
                dataCart.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {data.name}
                        <p>{`${data.size}`}</p>
                      </td>
                      <td />
                      <td />
                      <td>{Func.formatRupiah(data.price)}</td>
                      <td>{`x${data.count}`}</td>
                      {/* <td>
                        <Button
                          type="button"
                          color="danger"
                          onClick={() => {
                            deleteItem(data.id);
                          }}
                        >
                          Delete
                        </Button>
                      </td> */}
                    </tr>
                  );
                })
              )}
              <tr>
                <td>
                  <h4>Total</h4>
                </td>
                <td />
                <td />
                <td />
                <td>{Func.formatRupiah(String(totalPrice))}</td>
                <td />
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {dataCart.length === 0 ? (
            <div />
          ) : (
            <div>
              <Button
                className="btn-cancel-cart"
                type="button"
                color="danger"
                onClick={toggle}
              >
                Cancel
              </Button>
              <Button
                className="btn-checkout-cart"
                type="button"
                color="primary"
                onClick={() => {}}
              >
                Checkout
              </Button>
            </div>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CartModal;
