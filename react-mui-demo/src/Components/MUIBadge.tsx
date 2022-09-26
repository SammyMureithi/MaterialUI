import { Badge, Button, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

function MUIBadge() {
  return (
      <div>
          <Badge badgeContent={4} color="primary">
              <Button variant='outlined'> Badge Count</Button>
          </Badge>
          <IconButton aria-label="cart">
              <Badge badgeContent={16} color="secondary" max={9}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}>
    <IconButton>Hello</IconButton>
  </Badge>
          </IconButton>
          <IconButton>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>
    </div>
  )
}

export default MUIBadge