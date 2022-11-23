import type { RouteObject } from 'react-router-dom'
import { useRoutes as useRoutesComponent } from 'react-router-dom'

export default function useRoutes({ routes }: { routes: RouteObject[] }) {
  const element = useRoutesComponent(routes)

  return element
}
