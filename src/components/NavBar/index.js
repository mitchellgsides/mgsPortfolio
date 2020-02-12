import React from 'react'
import PropTypes from 'prop-types'
import {
  NavBarContainer,
  NavBarContainerMobile,
  NavLinkItem,
  ParentNav,
  NavChildren,
  ChildNavTitle,
  ParentNavTitle,
  NavIcon
} from './Styles'

import { Icon } from '../Icon'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

export default function NavBar (props) {
  const { routes } = props
  return (
    <>
      <NavBarContainerMobile>
      Mobile Nav Bar!
        {routes.map((route, index) => {
          return (route.children && route.children.length > 0
            ? (
              <div
                key={`${route.title}-${index}`}
              >
                <div>
                  {route.title}
                </div>
                <div>
                  {route.children.map((child, index) => (
                    <NavLinkItem to={child.path} key={`child-link-${child.title}-${index}`}>
                      <div>
                        {child.title}
                      </div>
                    </NavLinkItem>))}
                </div>
              </div>
            )
            : (
              <NavLinkItem
                key={`${route.title}-${index}`}
                to={route.path}
              >
                <div>
                  {route.title}
                </div>
              </NavLinkItem>
            )
          )
        }
        )}
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
