import React from 'react'

class Header extends React.Component{
    render() {
        return(
            <nav id={'nav'}>
                <img src={require('./static/logo_blue.png')} alt={'logo'}/>
                <ul>
                    <li><a href={'1'}>部门</a></li>
                    <li><a href={'2'}>成员</a></li>
                    <li><a href={'3'}>历史</a></li>
                    <li><a href={'4'}>作品</a></li>
                    <li><a href={'5'}>留言</a></li>
                    <li id={"join"}><a href={'6'}>加入</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header