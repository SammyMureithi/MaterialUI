import {Button} from '@mui/material'
function MuiButton() {
  return (
      <div>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </div>
  )
}

export default MuiButton