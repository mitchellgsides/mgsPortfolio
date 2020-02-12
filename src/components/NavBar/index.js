import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  NavBarContainer,
  NavBarContainerMobile,
  NavLinkItem,
  ParentNav,
  NavChildren,
  ChildNavTitle,
  ParentNavTitle,
  NavIcon,
  NavIconMobile,
  NavLinkItemMobile
} from './Styles'

import { Icon } from '../Icon'
import { faBicycle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function NavBar (props) {
  const { routes } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
      <NavBarContainerMobile>
        <NavIconMobile onClick={() => setMobileOpen(!mobileOpen)}>
          Menu <Icon icon={faBicycle} />
          {mobileOpen ? <Icon icon={faChevronUp} /> : null}
        </NavIconMobile>
        {
          mobileOpen
            ? routes.map((route, index) => <NavLinkItemMobile to={route.path} key={`${route.title}-${index}`}>{route.title}</NavLinkItemMobile>)
            : null
        }
      </NavBarContainerMobile>
      <NavBarContainer>
        <NavIcon>
          Menu <Icon icon={faBicycle} />
        </NavIcon>
        {routes.map((route, index) => {
          return (route.children && route.children.length > 0
            ? (
              <ParentNav
                key={`${route.title}-${index}`}
              >
                <ParentNavTitle>
                  {route.title}
                </ParentNavTitle>
                <NavChildren>
                  {route.children.map((child, index) => (
                    <NavLinkItem to={child.path} key={`child-link-${child.title}-${index}`}>
                      <ChildNavTitle>
                        {child.title}
                      </ChildNavTitle>
                    </NavLinkItem>))}
                </NavChildren>
              </ParentNav>
            )
            : (
              <NavLinkItem
                key={`${route.title}-${index}`}
                to={route.path}
              >
                <ParentNavTitle>
                  {route.title}
                </ParentNavTitle>
              </NavLinkItem>
            )
          )
        }
        )}
      </NavBarContainer>
    </>
  )
}

NavBar.propTypes = {
  routes: PropTypes.array.isRequired
}
