import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'laptops',
    img: 'https://m.media-amazon.com/images/I/51FWf+esWHL._AC_SX679_.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'mobile-phones',
    img: 'https://d28wu8o6itv89t.cloudfront.net/images/Realmeipng-1588598003732.png',
  },
  {
    _id: uuid(),
    categoryName: 'earphones',
    img: 'https://static.toiimg.com/thumb/resizemode-4,msid-88473035,width-800,height-450,ver-75/88473035.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'tabs',
    img: 'https://img.us.news.samsung.com/us/wp-content/uploads/2021/08/03131111/Galaxy-Tab-S7_FE_MysticBlack_Front-1536x1024.jpg',
  },
];
