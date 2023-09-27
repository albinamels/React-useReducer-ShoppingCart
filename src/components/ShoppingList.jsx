import { useReducer, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import {
  Table,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const products = [
  { name: "laptop", price: 2000, id: 101 },
  { name: "phone", price: 1000, id: 102 },
  { name: "airpods", price: 200, id: 103 },
];

const cartReducer = (state, action) => {
  // console.log(state); // cart state  => { cartItems: [], total: 0 }
  // console.log(action); // onClick AddToCart => {type: 'add', payload: {…}}

  switch (action.type) {
    case "add":
      // return behaves like setState()
      return {
        ...state, // cart state => { cartItems: [], total: 0 }
        cartItems: [...state.cartItems, action.payload], // [ prev array, {product} ]
        total: state.total + action.payload.price, // prev total + product.price
      };
    case "remove":
      return {
        ...state,
        // create an array without this item, update state cartItems
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        total: state.total - action.payload.price, // subtract price from total
      };
    case "update":
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return state;
  }
};

export const ShoppingList = () => {
  // initial state of cart => { cartItems: [], total: 0 }
  const [cart, dispatch] = useReducer(cartReducer, { cartItems: [], total: 0 });
  const [quantity, setQuantity] = useState(1);

  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
  }

  return (
    <div className="wrapper">
      <div className="products-list">
        <h3>Products list</h3>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price $</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price.toFixed(2)}</td>
                  <td>
                    <UncontrolledDropdown size="sm">
                      <DropdownToggle caret color="secondary">
                        {quantity}
                      </DropdownToggle>
                      <DropdownMenu dark>
                        {numbers.map((number) => {
                          return (
                            <DropdownItem onClick={() => {}}>
                              {number}
                            </DropdownItem>
                          );
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      onClick={() =>
                        dispatch({
                          type: "add",
                          payload: { ...product, quantity: quantity },
                        })
                      }
                    >
                      <BsCartPlusFill />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div className="cart-items">
        {cart.total === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          <>
            <h3>Your cart</h3>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Price $</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* cart => { cartItems: [], total: 0 } */}
                {cart.cartItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.price.toFixed(2)}</td>
                      <td>
                        <UncontrolledDropdown size="sm">
                          <DropdownToggle caret color="secondary">
                            {quantity}
                          </DropdownToggle>
                          <DropdownMenu dark>
                            {numbers.map((number) => {
                              return (
                                <DropdownItem onClick={() => {}}>
                                  {number}
                                </DropdownItem>
                              );
                            })}
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      <td>
                        <Button size="sm">Buy</Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            dispatch({ type: "remove", payload: item })
                          }
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <h4>Your total: ${cart.total}</h4>
          </>
        )}
      </div>
    </div>
  );
};
