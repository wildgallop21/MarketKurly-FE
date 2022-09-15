import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import React , {useState, useCallback}from "react";

import { getPosts, postItemThunk } from "../redux/modules/posts";
import { createUserThunk } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCartThunk } from "../redux/modules/carts";



const CartListProduct = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart_productId = useSelector((state) => state.carts.data) 
  console.log("state.carts조회",cart_productId)
  const post_product = useSelector((state) => state.posts.posts) 
  console.log("state.posts조회",post_product)
  useEffect(() => {
    dispatch(getCartThunk())

    // dispatch(getPost(id))
    // console.log(getPosts())
  }, [dispatch]);

  const filtered = post_product.filter( (el)=> el.id === Number(props.carts.product_Id) )
  console.log("props인자조회",props)
  console.log("filtered조회",filtered)


  console.log("장바구니 상품번호 조회",cart_productId[0].product_Id)

  return (
    <div>
      <Box>

            <FoodTitleBox>
              <FoodTitle>
                <FoodTitleIcon>아이콘</FoodTitleIcon>
                <FoodTitleText>냉장식품</FoodTitleText>
              </FoodTitle>
            </FoodTitleBox>
            <FoodContent>
              <DivSt>
                
              </DivSt>
              <Check>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" className="css-1wfsi82 e31wziv0"/>
            </Check>
            <FoodImage>
              {/* <img alt="test" src={filtered[0]?.itemIMG}
              styled={{width: "130px", height: "200px"}}>
              </img> */}
              
            </FoodImage>
            
            <FoodText>
            {/* {(cart_productId[0].product_Id)}
            {props?.carts?.id} */}
            {filtered[0]?.itemName}
             {/* [연세우유 x 마켓컬리] 전용목장우유 900mL */}
            </FoodText>
            <FoodButton>
              -
            </FoodButton>
            3
            <FoodButton>
              +
            </FoodButton>
            <FoodPrice>
              
              {filtered[0]?.itemPrice}
            </FoodPrice>
            <FoodButton>
              X
            </FoodButton>
            </FoodContent>
      </Box>
    </div>
  );
};

export default CartListProduct

const Box = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 80px;
`;
const DivSt = styled.div`

`;


const FoodTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const FoodTitleBox = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 60px;
  padding: 15px 5px 15px 0px;
  border-top: 1px solid rgb(51, 51, 51);
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* background-color: blue; */
`;

const FoodTitleIcon = styled.div``;
const FoodTitleText = styled.div``;

const FoodContent = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

`;

const Check = styled.div`
margin-right:12px; 
`;
const FoodImage = styled.div`
width:60px;
height:78px;
border: 1rem solid;;
border-color:black;
/* border-radius:1px; */


`;

const FoodText = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin: 0 10px 0 10px ;
  /* line-height: 26px; */
  /* vertical-align: middle; */
`;
const FoodButton = styled.button`
  width:28px;
  height:28px;
    background-color   : whitesmoke;
  border-color: lightgray;
  margin: 0 10px 0 10px ;
`;
const FoodPrice = styled.div`
  width:28px;
  height:28px;
    background-color   : whitesmoke;
  border-color: lightgray;
  margin: 0 10px 0 10px ;
`;


