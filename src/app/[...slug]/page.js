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
  const queryParam = `query getRouteData($url: String!) {
    route(url: $url) {
      type
      __typename
      relative_url
      redirect_code
      ... on BrandDetailRoute {
        option_id
      }
      ... on CmsPage {
        identifier
        __typename
      }
      ... on CategoryInterface {
        id
        uid
        is_enabled
        is_landing_page
        is_enabled
        meta_title
        meta_description
        meta_keywords
        image
        url_path
        __typename
      }
      ... on ProductInterface {
        uid
        sku
        name
        rating_summary
        review_count
        meta_title
        meta_description
        meta_keyword
        url_key
        small_image {
          url
        }

        description {
          html
        }
        short_description {
          html
        }
        price_range {
          maximum_price {
            final_price {
              currency
              value
            }
            regular_price {
              currency
              value
            }
            discount {
              amount_off
              percent_off
            }
          }
          minimum_price {
            final_price {
              currency
              value
            }
            regular_price {
              currency
              value
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        media_gallery {
          url
          label
          position
          disabled
          ... on ProductVideo {
            video_content {
              media_type
              video_provider
              video_url
              video_title
              video_description
              video_metadata
            }
          }
        }
        ... on ConfigurableProduct {
          variants {
            product {
              sku
            }
          }
        }
        __typename
      }
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
