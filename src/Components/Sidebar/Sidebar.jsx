import React from 'react'
// Styled components
import { 
  CloseIcon,
  Icon,
  SideBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute
} from './SidebarElement'

function Sidebar({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>

      <SidebarMenu>
        <SidebarLink href='#pizzas' onClick={toggle}>Pizzas</SidebarLink>
        <SidebarLink href='#desserts' onClick={toggle}>Desserts</SidebarLink>
        <SidebarLink href='#oftheday' onClick={toggle}>Pizza of the Day</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
