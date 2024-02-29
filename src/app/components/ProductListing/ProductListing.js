import React from "react";
import get from "lodash/get";
import { stripIgnoredCharacters } from "graphql";
import Link from "next/link";
import Image from "next/image";
import classes from "./productListing.module.css";

async function getCategoryData(category_id) {
  const headers = {
    "content-type": "application/json",
    store: "default",
  };
  const queryParam = `query getCategoryData($category_id: String!){
    products(filter:{
      category_uid: {
        eq: $category_id
      }
    }){
      items {
        image {
          url
        }
        name
        sku
        url_key
        price_range {
          maximum_price {
            final_price{
              currency
              value
            }
          }
        }
      }
    }
  }`;
  const variablesParams = { category_id };
  const query = new URLSearchParams({
    query: stripIgnoredCharacters(queryParam),
  }).toString();
  const variables = new URLSearchParams({
    variables: JSON.stringify(variablesParams),
  }).toString();
  const options = {
    method: "GET",
    headers,
  };
  const res = await fetch(
    `https://mcprod.hnak.com/graphql?${query}&${variables}`,
    options
  );
  return res.json();
}

const ProductListing = async ({ routeInfo }) => {
  const { uid } = routeInfo || {};
  const data = await getCategoryData(uid);
  const products = get(data, "data.products.items") || [];
  console.log("ProductListing--->", products);
  return (
    <div className={classes.root}>
      <div className={classes.productContiner}>
        {products.map((item) => (
          <div key={item.uid} className={classes.item}>
            <div>
              <Link href={`/${item.url_key}`}>
                <Image
                  src={`${get(item, "image.url", "")}&height=300&width=200`}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <div>
              <Link href={`/${item.url_key}`}>
                <h5>{item.name}</h5>
              </Link>
            </div>
            <div>
              {item.price_range.maximum_price.final_price.currency}{" "}
              {item.price_range.maximum_price.final_price.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
