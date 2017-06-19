import React,{Component} from  "react"
import { NavBar,Icon } from 'antd-mobile';
import style from "./index.css";

class IntegralPage extends Component{
    render(){
        return <div className={style.integralPage}>
                <NavBar mode="light"
                        className={style.title}
                >积分商城</NavBar>
                <div className={style.box}>
                    <div className={style.waiyuan}>
                        <div className={style.neiyuan}>
                            <p>可用积分</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <ul className={style.list}>
                    <li>
                        <Icon type={require("../../svg/share/refresh.svg")}/>
                        <a>积分明细</a>
                    </li>
                    <li>
                        <Icon type={require("../../svg/share/refresh.svg")}/>
                        <a>兑换记录</a>
                    </li>
                    <li>
                        <Icon type={require("../../svg/share/refresh.svg")}/>
                        <a>积分规则</a>
                    </li>
                </ul>
                <ul className={style.youhui}>
                    <li>
                        <div className={style.dw}>
                            <p>3元优惠券</p>
                            <p className="red">300积分</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.dw}>
                            <p>5元优惠券</p>
                            <p className="red">500积分</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.dw}>
                            <p>8元优惠券</p>
                            <p className="red">800积分</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.dw}>
                            <p>10元优惠券</p>
                            <p className="red">1000积分</p>
                        </div>
                    </li>
                </ul>
        </div>
    }
}
export default IntegralPage;