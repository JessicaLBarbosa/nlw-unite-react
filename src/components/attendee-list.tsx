import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeeList() {
  return (
  <div className='flex flex-col gap-4'>
    <div className="flex gap-3 items-center ">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="px-3 py-1.5 w-72 border border-whited/10  rounded-lg flex items-center gap-3" >
        <Search className='size-4 text-emerald-300'/>
        <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
      </div>
    </div>

    <Table>
      <thead>
        <tr className='border-b border-white/10'>
          <TableHeader style={{ width: 48 }}>
            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
          </TableHeader>
          <TableHeader>Código</TableHeader>
          <TableHeader>Participante</TableHeader>
          <TableHeader>Data de inscrição</TableHeader>
          <TableHeader>Data do check-in</TableHeader>
          <TableHeader style={{ width: 64 }}></TableHeader>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <TableRow key={i} className='border-b border-white/10 hover:bg-white/5'>
              <TableCell>
                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
              </TableCell>
              <TableCell>12345</TableCell>
              <TableCell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>Yago Heitor Diego Cavalcanti</span>
                  <span>yago.heitor.cavalcanti@grupoitamaraty.com.br</span>
                </div>
              </TableCell>
              <TableCell>7 days ago</TableCell>
              <TableCell>3 days ago</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className='size-4' />
                </IconButton>

              </TableCell>
            </TableRow>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <TableCell colSpan={3}>
            Showing 10 of 228 itens
          </TableCell>
          <TableCell colSpan={3} className="text-right">
            <div className='inline-flex items-center gap-8'>
              <span>Page 1 of 23</span>

              <div className='flex gap-1.5'>
                <IconButton>
                    <ChevronsLeft className='size-4' />
                </IconButton>
                <IconButton>
                    <ChevronLeft className='size-4' />
                </IconButton>
                <IconButton>
                    <ChevronRight className='size-4' />
                </IconButton>
                <IconButton>
                    <ChevronsRight className='size-4' />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tr>
      </tfoot>
    </Table>
  </div>
  )
}