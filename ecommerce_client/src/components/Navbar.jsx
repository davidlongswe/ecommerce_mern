import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
  ${mobile({ flex: 1 })}
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "15px", marginRight: "-5px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>SV</Language>
          <SearchContainer>
            <Input placeholder="Sök" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
            <Logo>ALICIAS ILLUSTRATIONER</Logo>
          </Link>
        </Center>
        <Right>
          {!user && (
            <Link
              to="/register"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <MenuItem>REGISTRERA DIG</MenuItem>
            </Link>
          )}

          {!user ? (
            <Link to="/">
              <MenuItem>LOGGA IN</MenuItem>{" "}
            </Link>
          ) : (
            <MenuItem style={{ cursor: "default" }}>INLOGGAD</MenuItem>
          )}
          <Link
            to="/cart"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
