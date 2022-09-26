import { Rating, Typography } from '@mui/material'
import React from 'react'

function MUIRating() {
    const [value, setValue] = React.useState<number | null>(2.5);

  return (
      <div>
<Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly  precision={0.5}/>
<Typography component="legend">Disabled</Typography>
<Rating name="disabled"  disabled />
<Typography component="legend">No rating given</Typography>
    </div>
  )
}

export default MUIRating