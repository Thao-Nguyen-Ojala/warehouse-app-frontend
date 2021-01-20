import { AppBar, Tabs, Tab } from '@material-ui/core';
import React from 'react';

function NavTabs({selectedTab, onChange, tabOptions}) {
  return (
    <>
      <AppBar position='static'>
        <Tabs variant="fullWidth" value={selectedTab} onChange={onChange}>
          {tabOptions.map((page, i) => {
            return <Tab key={i} label={page.name} />  
            })    
          }
        </Tabs>
      </AppBar>
    </>
  )
}

export default NavTabs
