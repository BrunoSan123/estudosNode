import React from 'react';
import {Header,HeaderName,HeaderGlobalAction,HeaderGlobalBar} from 'carbon-components-react'

const HeaderBlog = props =>{
    return(
         <div className="header-blog">
        <Header aria-label="IBM Platform Name">
        <HeaderName
          href="#"
          prefix="IBM"
        >
          
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={function noRefCheck(){}}
          >
            
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={function noRefCheck(){}}
          >
            
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={function noRefCheck(){}}
          >
            
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      </div>



    )
}

export default HeaderBlog