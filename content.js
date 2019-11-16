import React from 'react'
import {CardWithContent,Card} from "./card";
class Content1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            content:this.props.content,
            cardContent1:[
                '爱特一直以聚集和培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。',
                '用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。',
                '汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。'
            ],
            title1:['团队文化','优秀创意','乐在其中'],
            title2:['合作也是艺术','灵感建构未来','洞察技术玄机'],
            imgSrc:[<img className={'inlineBlock'} src={require('./static/icon_1.png')} alt={'1'} />,<img className={'inlineBlock'} src={require('./static/icon_2.png')} alt={'1'} />,<img className={'inlineBlock'} src={require('./static/icon_3.png')} alt={'1'} />],
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.state.content}</p>
                <CardWithContent imgSrc={this.state.imgSrc[0]} title1={this.state.title1[0]} title2={this.state.title2[0]} cardContent={this.state.cardContent1[0]}/>
                <CardWithContent imgSrc={this.state.imgSrc[1]} title1={this.state.title1[1]} title2={this.state.title2[1]} cardContent={this.state.cardContent1[1]}/>
                <CardWithContent imgSrc={this.state.imgSrc[2]} title1={this.state.title1[2]} title2={this.state.title2[2]} cardContent={this.state.cardContent1[2]}/>
            </div>
        );
    }
}
class Content2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            content:this.props.content,
            cardContent:this.props.cardContent,
            cardTitle:this.props.cardTitle,
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.state.content}</p>
                {/*{console.log(this.props.cardTitle)}*/}
                {/*<Card cardContent={this.props.cardContent} cardTitle={this.props.cardTitle}/>*/}
                {/*<Card cardContent={this.state.cardContent} cardTitle={this.props.cardTitle}/>*/}
                {/*<Card cardContent={this.state.cardContent} cardTitle={this.props.cardTitle}/>*/}
                {/*<Card cardContent={this.state.cardContent} cardTitle={this.state.cardTitle}/>*/}
                {/*<Card cardContent={this.state.cardContent} cardTitle={this.state.cardTitle}/>*/}
            </div>
        );
    }
}
class Content3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            content:this.props.content,
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.state.content}</p>
            </div>
        );
    }
}
class Content4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            content:this.props.content,
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.state.content}</p>
            </div>
        );
    }
}
export {Content1,Content2,Content3,Content4}