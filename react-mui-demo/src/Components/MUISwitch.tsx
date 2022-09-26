import { Stack, Switch, Typography} from '@mui/material'
import React from 'react'

function MUISwitch() {
  return (
      <div>
          <Switch
              checked={true}
              inputProps={{ 'aria-label': 'controlled' }}
/>
    </div>
  )
}

export default MUISwitch