import React from 'react'
import {
  ColumnOrderState,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { GoSettings } from 'react-icons/go'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiRefresh,
} from 'react-icons/hi'
import useDatatableSkipper from 'hooks/useDatatableSkipper'
import './index.css'
import { useRangeItems } from './utils'

export type ColumnsType = ColumnDef<any>

export type Props = {
  columns: ColumnsType[]
  data?: any
  class?: string[]
}

export default function Datatable(props: any) {
  const [resetPageIndex, skipResetPageIndex] = useDatatableSkipper()
  const defaultClass: Array<string> = ['datatable', 'container']
  const table: any = useReactTable({
    data: props.data,
    columns: props.columns,
    autoResetPageIndex: resetPageIndex,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })

  const [fromItems, toItems] = useRangeItems(table.getState().pagination)
  return (
    <div className={defaultClass.concat(props?.class || []).join(' ')}>
      <div className="flex items-center justify-between p-4">
        <div className="flex justify-start"></div>
        <div className="flex justify-end">
          {/*<button className="border border-gray-200 p-2 rounded-md hover:bg-gray-200 hover:text-white button">*/}
          {/*<GoSettings className="text-gray-700 hover:text-white icons" />*/}
          {/*</button>*/}
          <div className="inline-block">
            <ul>
              <li className="px-1">
                <input
                  {...{
                    type: 'checkbox',
                    checked: table.getIsAllColumnsVisible(),
                    onChange: table.getToggleAllColumnsVisibilityHandler(),
                  }}
                />{' '}
                Show All
              </li>
              {table.getAllLeafColumns().map((column: any) => (
                <li key={column.id} className="px-1">
                  <input
                    {...{
                      type: 'checkbox',
                      checked: column.getIsVisible(),
                      onChange: column.getToggleVisibilityHandler(),
                    }}
                  />{' '}
                  {column.columnDef.header}
                </li>
              ))}
            </ul>
          </div>
          <div className="inline-block">
            <button className="button ">
              <HiRefresh className="icons" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-slate-50 rounded-xl overflow-hidden">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="table-auto border-collapse border-slate-400 w-full text-sm">
              <thead>
                <tr>
                  {table.getHeaderGroups()?.map(({ headers = [] }: any) =>
                    headers.map((column: any) => (
                      <th
                        key={column.id}
                        colSpan={column.colSpan}
                        className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left"
                      >
                        <div className="whitespace-nowrap">
                          {!column.isPlaceholder &&
                            flexRender(
                              column.column.columnDef.header,
                              column.getContext()
                            )}
                        </div>
                      </th>
                    ))
                  )}
                </tr>
              </thead>
              <tbody className="bg-white">
                {table.getRowModel().rows.map((row: any, key: number) => (
                  <tr
                    key={row.id}
                    className={`${
                      key % 2 === 1
                        ? 'bg-slate-50 hover:bg-white'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    {row.getVisibleCells().map((cell: any) => (
                      <td
                        key={cell.id}
                        className={`border-b border-slate-100 p-4 pl-8 text-slate-500`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="datatable-footer flex items-center justify-between p-4 pt-0 text-sm">
            <div className="flex justify-start text-gray-500">
              <div className="items-per-page flex items-center gap-1">
                <span className="leading-none">Items per page:</span>
                <select
                  className="border rounded-md py-1 px-2 mx-2"
                  value={table.getState().pagination.pageSize}
                  onChange={e => table.setPageSize(Number(e.target.value))}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-1">
                <span>{fromItems}</span> - <span>{toItems}</span> of{' '}
                <span>{table.options.data.length}</span>
              </div>
            </div>
            <div className="flex justify-end text-gray-500">
              <div className="actions flex items-center gap-1">
                <button
                  className="border rounded p-2 button"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <HiOutlineChevronDoubleLeft className="icons" color="black" />
                </button>
                <button
                  className="border rounded p-2 button"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <GrFormPrevious className="icons" color="black" />
                </button>
                <button
                  className="border rounded p-2 button"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <GrFormNext className="icons" color="black" />
                </button>
                <button
                  className="border rounded p-2 button"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <HiOutlineChevronDoubleRight
                    className="icons"
                    color="black"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
