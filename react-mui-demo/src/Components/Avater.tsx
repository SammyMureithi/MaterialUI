import { Avatar, AvatarGroup, Badge, IconButton } from '@mui/material'
import React from 'react'

function Avater() {
  return (
      <div>
          <img src={`../public/logo512.png`}/>
          <h1>Avater</h1>
          <Avatar>H</Avatar>
          <Avatar >N</Avatar>
          <Avatar>OP</Avatar>
          <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="../public/Images/bg1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  }
>
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
</Badge>
    </div>
  )
}

export default Avater