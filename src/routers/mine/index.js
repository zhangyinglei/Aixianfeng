import React,{Component} from  "react"
import { List , Grid  } from 'antd-mobile';
import {Link} from "react-router";
import {Footer} from "../../components/public/public";
import style from "./index.css";

const data = ["待付款","待收货","待评价","退款/售后"].map((_val) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `${_val}`,
}));
const GridExample = () => (
    <div>
        <Grid data={data} columnNum={4} hasLine={false} />
    </div>
);
const Item = List.Item;
class MinePage extends Component{
    state = {
        arr:["/integral/","/aboutUs/","/site/","/service/","/aboutUs/"],
        arr1:["积分商城","优惠券","收货地址","客服反馈","关于我们"]
    }
    render(){
        return <div>
           <div className={style.mineTop}>
               <div className={style.user}>
                   <Item
                       thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                       arrow="horizontal"
                       className={style.my}
                       onClick={() => {}}
                   >17600585700</Item>
               </div>
               <div className={style.shoucang}>
                   <Link to="/collect/">
                       <p>商品收藏</p>
                   </Link>
                   <p>店铺收藏</p>
               </div>
           </div>
            <List className={style.mylist}>
                <Item
                    extra="查看全部订单"
                    arrow="horizontal"
                    className={style.dingdan}
                    onClick={() => {}}
                >我的订单</Item>
                <GridExample/>
            </List>
            <ul className={style.caidan}>
                {
                    this.state.arr.map((ele,index)=>{
                        return <Link to={ele} key={index}>
                                    <li>
                                        <div>
                                            <img src="https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png"/>
                                            <p>{this.state.arr1[index]}</p>
                                        </div>
                                    </li>
                            </Link>
                    })
                }


            </ul>
            <div className={style.tuichu}>退出当前账号</div>
            <Footer active="3" HomeCartData={JSON.parse(window.localStorage.getItem("goods_intro")||'[]').length||0}/>
        </div>

    }
}
export default MinePage;