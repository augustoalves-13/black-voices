'use client'

import { Card, Typography } from "@mui/material"
import { UserTypes } from "../types/userTypes"
import { createColumnHelper } from "@tanstack/react-table"
import { useMemo } from "react"
import TableUI from "@/views/components/TableUI"

type UserTypesWithAction = UserTypes & {
   action?: string
}

const columnHelper = createColumnHelper<UserTypesWithAction>()

const List = () => {

   const columns = useMemo(
      () => [
         columnHelper.accessor('name', {
            header: 'Nome',
            cell: ({row}) => <Typography>{row.original.name}</Typography>
         })
      ],
      []
   )

   return (
      <Card>
         <TableUI
            data={[{id: '1', name: "Augusto"}]}
            columns={columns}
         />
      </Card>
   )
}

export default List