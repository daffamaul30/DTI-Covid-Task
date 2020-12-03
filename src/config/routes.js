import {
  Home,
  Login,
  DetailDate,
  InfoCorona,
  Product
} from '../pages';

const routes = [
  // {
  //   path: '/profile/:profileId',
  //   component: ProfileId,
  //   isPublic: false,
  // },
  // {
  //   path: '/profile',
  //   component: Profile,
  //   isPublic: false,
  // },
  {
    path: '/product',
    component: Product,
    isPublic: false,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/info Covid-19/:dateId',
    component: DetailDate,
    isPublic: true,
  },
  {
    path: '/info Covid-19',
    component: InfoCorona,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
