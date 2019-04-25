import React from 'react';
import Sidenav from 'react-simple-sidenav';

const SideNavigation = (props) => {
    return (
        <div>
            <Sidenav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'220px'

                }}
            >
                <div>Home</div>
                <div>News</div>
            </Sidenav>
        </div>
    )
}

export default SideNavigation