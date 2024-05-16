import React from "react";
import get from "lodash/get";
import { getLocale } from "next-intl/server";
import { stripIgnoredCharacters } from "graphql";
import ProductDetail from "../components/ProductDetail";
import ProductListing from "../components/ProductListing";

async function getUrlResolverData(url, locale) {
  const headers = {
    "content-type": "application/json",
    store: locale === "en" ? "default" : "ar_SA",
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
  const locale = await getLocale();
  const { slug = [] } = params || {};
  const url = slug.join("/");
  const data = await getUrlResolverData(url, locale);
  const routeInfo = get(data, "data.route") || {};
  const { type } = routeInfo;

  if (type === "PRODUCT") {
    return <ProductDetail routeInfo={routeInfo} />;
  }
  if (type === "CATEGORY") {
    return <ProductListing routeInfo={routeInfo} />;
  }

  return <div>Page Not Found</div>;
}
