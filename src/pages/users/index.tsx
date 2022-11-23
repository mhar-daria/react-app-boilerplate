import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'modules/hooks'
import { userSelector } from 'selectors'
import { fetchUser, fetchUserWithError } from 'actions'
import { User } from 'models/user'
import Datatable from 'components/datatable'
import type { ColumnsType } from 'components/datatable'
import { ColumnDef } from '@tanstack/react-table'

export default function UsersComponent(props: any) {
  const dispatch = useDispatch()
  // const { data = [], status = 'idle' } = useAppSelector(userSelector)
  const { data = [], status = 'idle' } = useAppSelector(userSelector)
  // const { data = [], status = 'idle' } = useMemo(() => users, [users])
  // const handleClick = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     dispatch(fetchUser())
  //   },
  //   [dispatch]
  // )

  // const handleClickError = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     dispatch(fetchUserWithError())
  //   },
  //   [dispatch]
  // )

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const columns: ColumnDef<any>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
      cell: (row: any) => row.getValue(),
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
      cell: (row: any) => row.getValue(),
    },
  ]
  console.log('index.data', data)
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Users</h1>
      <Datatable data={data} columns={columns} />
    </div>
  )
}
