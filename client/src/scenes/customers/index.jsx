import React from 'react'
import { Box, useTheme} from '@mui/material'
import { useGetCustomersQuery } from 'state/api'
import Header from 'components/Header'
import { DataGrid } from '@mui/x-data-grid'

const Customers = () => {
    const theme = useTheme()
    const {data, isLoading} = useGetCustomersQuery();
    console.log("🚀 ~ file: index.jsx:10 ~ Customers ~ data", data)
  return (
    <div>Customers</div>
  )
}

export default Customers