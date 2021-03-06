import Home from '@pages/Home';
import Registration from '@pages/Registration';
import NotFound from '@pages/NotFound';
import App from '@/App';

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      },
      {
        component: Registration,
        path: '/registration',
        exact: true
      },
      {
        component: NotFound
      },
    ]
  }
]