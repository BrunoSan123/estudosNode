import React from 'react'
import {SideNav,SideNavItems,SideNavMenuItem,SideNavMenu,SideNavLink,StoryContent} from 'carbon-components-react'

const SideBarBlog = props=>{
    return(
        <div className="sidebar-blog">
        <>
        <SideNav
          addFocusListeners
          addMouseListeners
          aria-label="Side navigation"
          defaultExpanded={false}
          expanded
          isChildOfHeader={false}
          isFixedNav
          isPersistent
          translateById={function noRefCheck(){}}
        >
          <SideNavItems>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu
              isActive
              title="L0 menu"
            >
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem
                aria-current="page"
                href="javascript:void(0)"
              >
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink
              element="a"
              href="javascript:void(0)"
              large={false}
            >
              L0 link
            </SideNavLink>
            <SideNavLink
              element="a"
              href="javascript:void(0)"
              large={false}
            >
              L0 link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
        
      </>
      </div>


    )
}
export default SideBarBlog