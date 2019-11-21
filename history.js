import React from 'react';

function History() {
    return(
        <>
            <div className={'historyBoard borderRadius10px'}>
                <div className={'historyBoardContent'}>
                    <div className={'lineHeight18px float'}>
                        <h3 className={'fontSize12px'}>部门拆分</h3>
                        <ul className={'fontSize15px'}>
                            <li>UI设计</li>
                            <li>前端开发</li>
                        </ul>
                    </div>
                    <div className={'lineHeight18px float'}>
                        <h3 className={'fontSize12px'}>新增成员</h3>
                        <ul className={'fontSize15px'}>
                            <li>6人</li>
                        </ul>
                    </div>
                    <div className={'lineHeight18px float'}>
                        <h3 className={'fontSize12px'}>项目上线</h3>
                        <ul className={'fontSize15px'}>
                            <li>中国海洋大学iGEM比赛团队展示页面</li>
                        </ul>
                    </div>
                    <div className={'lineHeight18px float'}>
                        <h3 className={'fontSize12px'}>项目上线</h3>
                        <ul className={'fontSize15px'}>
                            <li>海洋技术系网站上线运营</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'yearBoard'}>
                <ul className={'fontSize15px float'}>
                    <li className={'borderRadius10px'}>2014</li>
                    <li className={'borderRadius10px'}>2015</li>
                    <li className={'borderRadius10px'}>2016</li>
                    <li className={'borderRadius10px'}>2017</li>
                    <li className={'borderRadius10px'}>2018</li>
                </ul>
            </div>
        </>
    );
}
export default History