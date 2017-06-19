import React,{Component} from  "react"
import { List , Grid ,Toast } from 'antd-mobile';
import {connect} from 'react-redux';
import Header from "../../components/public/public-activity";
import style from "./index.css";

class SitePage extends Component{
    render(){
        console.log(this.props)
        return <div>
            <Header title="收货地址"/>
            <ul className={style.dizhi}>
                {
                    this.props.siteData.map((ele,index)=>{
                        return <li key={index}>
                            <p className={style.p1}>
                                <span>{ele.name}</span>
                                <span>{ele.phone}</span>
                            </p>
                            <p className={style.p2}>
                                {ele.dizhi}
                            </p>
                        </li>
                    })
                }

            </ul>
            <div className={style.footer}>
                <a onClick={this.props.addData}>+新增地址</a>
            </div>
        </div>
    }
    componentDidMount(){
        this.props.getInitData()
    }
}
const mapStateToProps = (state)=>{
    return {
        siteData:state.SiteReducer.siteData
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getInitData:()=>{
            var data =[{
                name:"小黑",
                phone:17655201235,
                dizhi:"北京昌平区"
            },
            {
                name:"小白",
                phone:13577883388,
                dizhi:"上海"
            },
            ]
            dispatch({type:"SITE_INIT_DATA",siteData:data})
        },
        addData:()=>{
            Toast.info('添加失败');
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SitePage)