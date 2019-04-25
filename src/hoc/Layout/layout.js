import React, {Component} from 'react';
import './layout.module.css'


import Header from '../../components/header/header';


class Layout extends Component{
    state = {

    }

    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
                Footer
            </div>
        )
    }
}

export default Layout;



