import { Checkbox, FormGroup } from '@mui/material'
import React from 'react'

function MUiCheckBox() {
  return (
      <div>
          <Checkbox  defaultChecked />
          <Checkbox defaultChecked color="success" />
          <Checkbox  defaultChecked color="secondary" />
          <Checkbox defaultChecked color="error" />
          <Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
    </div>
  )
}

export default MUiCheckBox