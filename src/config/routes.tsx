import Pages from './../pages'
import BasicLayout from 'components/layout/basic'
import type { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Pages.Home />,
      },
      {
        path: '/about',
        element: <Pages.About />,
      },
      {
        path: '/users',
        element: <Pages.Users />,
      },
      {
        path: '/modals',
        element: <Pages.Modal />,
      },
    ],
  },
]

export default routes
