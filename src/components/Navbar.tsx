import React from "react";
interface Props {
  cartCount: number;
}
const Navbar = ({ cartCount }: Props) => {
  return <div>NavBar: {cartCount}</div>;
};

export default Navbar;
