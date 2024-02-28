import React from "react";
import get from "lodash/get";
import { stripIgnoredCharacters } from "graphql";
import ProductDetail from "../components/ProductDetail";
import ProductListing from "../components/ProductListing";

async function getUrlResolverData(url) {
  const headers = {
    "content-type": "application/json",
    store: "default",
  };
  const queryParam = `query getRouteData($url:String!){
    route(url:$url){
      redirect_code
      relative_url
      type
    }
  }`;
  const variablesParams = { url };
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

export default async function UrlResolver({ params }) {
  const { slug = [] } = params || {};
  const url = slug.join("/");
  const data = await getUrlResolverData(url);
  const { type } = get(data, "data.route") || {};

  if (type === "PRODUCT") {
    return <ProductDetail />;
  }
  if (type === "CATEGORY") {
    return <ProductListing />;
  }

  return <div>Page Not Found</div>;
}
