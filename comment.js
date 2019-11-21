import React from 'react'
import code from './static/code.png';
function Comment() {
    return(
        <div>
            <div className={'commentList'}>
                <div className={'commentContent fontSize9px borderRadius10px fontColor555555'}><p>这是一条评论。</p><p className={'textAlignRight fontColor555555'}>2019-11-19 20:00</p></div>
                <div className={'commentContent fontSize9px borderRadius10px fontColor555555'}><p>这是一条评论。</p><p className={'textAlignRight fontColor555555'}>2019-11-19 20:00</p></div>
                <div className={'commentContent fontSize9px borderRadius10px fontColor555555'}><p>这是一条评论。</p><p className={'textAlignRight fontColor555555'}>2019-11-19 20:00</p></div>
            </div>
            <div className={'rollBar'}>
                <div className={'rollBlock'}/>
            </div>
            <div className={'commentInput borderRadius10px'}>
                <textarea className={'textarea fontSize8px borderRadius10px'} placeholder={'写点什么...'}/>
                <img className={'float left'} src={code} alt={'验证码'}/>
                <input className={'borderRadius10px fontSize8px float left'} placeholder={'请输入验证码'}/>
                <button className={'borderRadius10px fontSize8px float right'}>发送</button>
            </div>
        </div>
    );
}

export default Comment