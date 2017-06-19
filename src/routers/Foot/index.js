import React,{Component} from "react";
import {connect} from "react-redux";
import style from "./index.css";
import Header from "../../components/public/public-activity";


const Content=()=>{
    return <div className={style.content}>
            <div className={style.nav}>
                <img src="http://img01.bqstatic.com/upload/activity/theme_header_1497256575_21961_0.jpg@90Q"/>
            </div>
            <div className={style.nav1}>
                <img src="http://img01.bqstatic.com/upload/activity/theme_header_1496227828_21961_1.jpg@90Q"/>
            </div>
            <div className={style.productlsit}>
                <dl>
                    <dt>
                        <img src="http://img01.bqstatic.com/upload/goods/201/706/0514/20170605145750_872281.jpg@355w_355h_90Q"/>
                        <p className={style.discount}>30减5</p>
                    </dt>
                    <dd>
                        <p>麻辣吃货鸭脖+腐竹组合</p>
                        <p>90+60g</p>
                        <p className={style.price}>￥14</p>
                        <p className={style.inner}>立即购买</p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://img01.bqstatic.com/upload/goods/201/706/0514/20170605145727_232598.jpg@355w_355h_90Q"/>
                        <p className={style.discount}>30减5</p>
                    </dt>
                    <dd>
                        <p>麻辣吃货花生+毛豆组合</p>
                        <p>70+70g</p>
                        <p className={style.price}>￥12</p>
                        <p className={style.inner}>立即购买</p>
                    </dd>
                </dl>
            </div>
    </div>
}
const Footer=()=>{
    return <div className={style.footer}>
        <div className={style.imging}>
            <img src="http://img01.bqstatic.com/upload/activity/theme_header_1494491597_21961_0.jpg@90Q"/>
        </div>
        <div className={style.rules}>
            <p>1.活动时间：6月12日—6月18日</p>
            <p>2.凡购买麻辣吃货任一产品即可参与随机送电影票活动；系统后台每天抽取10位小伙伴获得《异形·契约》电影票各2张</p>
            <p>3.爱鲜蜂客服会在1-3天内与获奖用户联系，确认兑奖事宜。如一周内无法联系用户，则视为自动放弃。同时每日中奖结果，会在爱鲜蜂官方微博展示</p>
            <p>4.《异形·契约》电影票为电子兑换码，支持全国在线选座</p>
            <p>5.麻辣吃货满30元立减5元，多买多减</p>
            <p>6.本次活动仅限北京用户参加</p>
        </div>
        <div className={style.globalImg}>
            <img src="http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png"/>
        </div>
    </div>
}
class Foot extends Component{
    render(){
        return (
            <div className={style.foot}>
                <Header title="麻辣吃货"/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default  Foot