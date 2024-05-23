"use client";

import React, { useEffect, useState } from "react";
import { stripIgnoredCharacters } from "graphql";
import get from "lodash/get";

const StoreConfig = () => {
  const [storeConfig, setStoreConfigData] = useState(null);
  const fetchStoreConfigData = async () => {
    const headers = {
      "content-type": "application/json",
      store: "default",
    };
    const queryParam = `query getStoreConfigData {
            storeConfig {
                store_code
            }
          }`;
    const query = new URLSearchParams({
      query: stripIgnoredCharacters(queryParam),
    }).toString();

    const options = {
      method: "GET",
      headers,
    };
    const res = await fetch(
      `https://mcprod.hnak.com/graphql?${query}`,
      options
    );
    const data = await res.json();
    setStoreConfigData(get(data, "data.storeConfig"));
  };

  useEffect(() => {
    fetchStoreConfigData();
  }, []);

  return (
    <div>
      Store Code: <strong>{get(storeConfig, "store_code", "")}</strong>
    </div>
  );
};

export default StoreConfig;
