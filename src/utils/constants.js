import React from 'react'
import { GiBallHeart, GiFlatbedCovered, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'Главная',
    url: '/',
  },
  {
    id: 2,
    text: 'О нас',
    url: '/about',
  },
  {
    id: 3,
    text: 'Товары',
    url: '/products',
  },
  {
    id: 4,
    text: 'Контакты',
    url: '/contact',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiBallHeart />,
    title: 'Стиль и комфорт для ваших детей!',
  },
  {
    id: 2,
    icon: <GiFlatbedCovered />,
    title: 'Доставка по всему Кыргызстану',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Все необходимые товары для ваших детей',
  },
]

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = 'http://localhost:4002/goods'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const single_product_url = `http://localhost:4002/single/`