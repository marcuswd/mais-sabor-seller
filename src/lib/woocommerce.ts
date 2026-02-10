import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL || "",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY || "",
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET || "",
  version: "wc/v3"
});

export default api;

// Types for WooCommerce data
export interface Product {
  id: number;
  name: string;
  price: string;
  regular_price: string;
  sale_price: string;
  stock_quantity: number;
  stock_status: string;
  categories: { id: number; name: string }[];
  images: { src: string; alt: string }[];
}

export interface Customer {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
}

export interface Order {
  id: number;
  status: string;
  currency: string;
  total: string;
  date_created: string;
  customer_id: number;
  billing: Customer["billing"];
  shipping: Customer["shipping"];
  line_items: {
    id: number;
    name: string;
    product_id: number;
    quantity: number;
    price: string;
    total: string;
  }[];
}

export interface OrderStats {
  total_sales: string;
  total_orders: number;
  total_items: number;
  total_tax: string;
  total_shipping: string;
  total_refunds: string;
  total_discount: string;
  totals_grouped_by: string;
  totals: {
    [key: string]: number;
  };
}
