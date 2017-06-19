import React,{Component} from  "react"
import Header from "../../components/public/public-activity";
import style from "./index.css";

class AboutUsPage extends Component{
    render(){
        return <div>
                <Header title="关于我们"/>
                <div className={style.maintop}>
                    <div className={style.aboutlogo}>
                        <h1>爱鲜蜂</h1>
                        <p>微信:beequick24</p>
                    </div>
                </div>
                <div className={style.aboutfooter}>
                    <p className={style.p1}>北京众成汇通信息技术有限公司</p>
                    <p className={style.p2}>Copyright ( c ) 2014-2015 beequick
                        <br/>all rights reserved
                    </p>
                    <p className={style.p3}>京ICP证150771号<br/>
                        食品流通许可证编号：SP1101051510350669(1-1)
                    </p>
                </div>
            </div>

    }
}
export default AboutUsPage;