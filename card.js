<<<<<<< HEAD
import React from 'react'

class CardWithContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:this.props.cardContent,
            title1:this.props.title1,
            title2:this.props.title2,
            imgSrc:this.props.imgSrc,
        }
    }
    render() {
        return(
            <div className={'cardWithContent'}>
                {this.state.imgSrc}
                <h3 className={'fontSize12px'}>
                    <span className={'fontColorBlue'}>{this.state.title1}</span>
                </h3>
                <h2 className={'fontSize18px fontColorOrange'}>{this.state.title2}</h2>
                <p className={'fontSize9px fontWeight400'}>{this.state.content}</p>
            </div>
        );
    }
}

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardContent:this.props.cardContent,
            title:this.props.cardTitle,
        }
    }
    render() {
        return(
          <div className={'card'}>
              <div className={'icon fontSize36px fontColorWhite'}>{this.state.cardContent}</div>
              <h3 className={'fontSize15px fontColorWhite'}>{this.state.title}</h3>
          </div>
        );
    }
}
=======
import React from 'react'

class CardWithContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:this.props.cardContent,
            title1:this.props.title1,
            title2:this.props.title2,
            imgSrc:this.props.imgSrc,
        }
    }
    render() {
        return(
            <div className={'cardWithContent'}>
                {this.state.imgSrc}
                <h3 className={'fontSize12px'}>
                    <span className={'fontColorBlue'}>{this.state.title1}</span>
                </h3>
                <h2 className={'fontSize18px fontColorOrange'}>{this.state.title2}</h2>
                <p className={'fontSize9px fontWeight400'}>{this.state.content}</p>
            </div>
        );
    }
}

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardContent:this.props.cardContent,
            title:this.props.cardTitle,
        }
    }
    render() {
        return(
          <div className={'card'}>
              <div className={'icon fontSize36px fontColorWhite'}>{this.props.cardContent}</div>
              <h3 className={'fontSize15px fontColorWhite'}>{this.props.title}</h3>
          </div>
        );
    }
}
>>>>>>> 更新
export {CardWithContent,Card}