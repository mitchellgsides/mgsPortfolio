import React from 'react'
import PropTypes from 'prop-types'
import prism from '../../assets/icon-images/prism.png'
import {
  NavBarContainer,
  NavLinkItem,
  ParentNav,
  NavChildren,
  ChildNavTitle,
  ParentNavTitle,
  NavIcon
} from './Styles'

import { Icon } from '../Icon'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

export default function NavBar (props) {
  const { routes } = props
  return (
    <NavBarContainer>
      <NavIcon>
        <Icon icon={faMountain} />
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
  )
}

NavBar.propTypes = {
  routes: PropTypes.array.isRequired
}
