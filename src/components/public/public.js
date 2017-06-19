import React,{Component} from "react";
import style from "./public.css";
import {Icon} from "antd-mobile";
class Header extends Component {
    render(){
        return <div className={style.header}>
            <div className={style.headerBtn}></div>
            <div className={style.headerTit}>{this.props.title}</div>
            <div className={style.headerBtn}>
                <dl>
                    <dt><Icon type="search" size="xm"/></dt>
                </dl>
            </div>
        </div>
    }

}

class Content extends Component{
    render(){
        return <div className={style.content}>
            {this.props.children}
        </div>
    }
}

class Footer extends  Component{
    static defaultProps= {
        footerData: [
            {title: "首页", path: "/",url:require("../../svg/icon-core/chats.svg")},
            {title: "列表", path: "/list",url:require("../../svg/title-bar/details.svg")},
            {title: "购物车", path: "/cart",url:require("../../svg/tab-bar/财富.svg")},
            {title: "我的", path: "/mine",url:require("../../svg/title-bar/details.svg")}
        ],
    }
    render(){
        return <div className={style.footer}>
             {

                 this.props.footerData.map((elem,index)=>{
                     return <dl key={index}>
                                 <a className={this.props.active==index?style.active:''}
                                    href={'#'+elem.path}>
                                     <dt><Icon type={elem.url}/></dt>
                                     <dd>{elem.title}</dd>
                                 </a>
                     </dl>

                })
            }
            <span className={style.cart}>{this.props.HomeCartData}</span>
        </div>
    }
}

export {Header,Content,Footer}