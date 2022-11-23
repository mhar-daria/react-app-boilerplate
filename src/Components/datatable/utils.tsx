import { useMemo } from 'react'
import type { Pagination } from 'types/datatable'

export function useRangeItems({ pageIndex = 0, pageSize = 10 }: Pagination) {
  const [start, end] = useMemo(() => {
    return [pageIndex * pageSize + 1, (pageIndex + 1) * pageSize]
  }, [pageIndex, pageSize])

  return [start, end]
}
