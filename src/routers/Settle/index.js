/**
 * Created by Administrator on 2017/6/14.
 */
import React,{Component} from "react";
import { List } from 'antd-mobile';
import {Link} from "react-router";
import style from "./index.css"
const Item = List.Item;
const Brief = Item.Brief;
class Settle extends Component{
    constructor(props) {

        super(props);
        this.state = {
            value: 0
        }
        this.onChange=this.onChange.bind(this);

    }
    onChange(index) {

        this.setState({
            value:index
        });
    }
    render(){
        const { value } = this.state;
        const data = [
            { value: 0, label: '微信支付',img:"http://img01.bqstatic.com//upload/icon/iconwx.png" },
            { value: 1, label: '支付宝支付',img:"http://img01.bqstatic.com//upload/icon/iconzfb.png"},
            { value: 2, label: '货到付款',img:"http://img01.bqstatic.com//upload/icon/icondao.png" },
        ];
        return <div className={style.settle}>
            <div className={style.settleHeader}>
               <ul className={style.header}>
                   <Link to={"/cart"}>
                    <li className={style.headerBtn}>{"<"}</li>
                   </Link>
                   <li className={style.headerTit}>结算付款</li>
                   <li className={style.headerBbtn}></li>
               </ul>
            </div>
            <div className={style.settleContent}>
                {/*支付方式*/}
                <ul className={style.payway}>
                    <li className={style.payTit}>选择支付方式</li>
                    {
                        data.map((ele, index)=>{


                           var str = style.checked+" "+(this.state.value==index?style.active:"");
                            return <li className={style.payItem}  key={index} onClick={()=>this.onChange(index)}>
                                <img src={ele.img} />
                                <span className={style.payTxt}>{ele.label}</span>
                                <p className={str} >√</p>
                            </li>
                        })
                    }
                </ul>
                {/*优惠*/}
                <div className={style.ticket}>
                    <List className={style.myList}>
                        <Item extra="暂无可用优惠券" arrow="horizontal" onClick={() => {}}>优惠券</Item>
                        <Item extra="暂无可用优惠券" arrow="horizontal" onClick={() => {}}>积分券</Item>
                    </List>
                </div>
                {/*商品列表*/}
                <ul className={style.goodsList}>
                    <li className={style.goodsTit}>商品明细</li>
                    <li className={style.goodsItem}>
                        <span className={style.gname}>骑士</span>
                        <span className={style.num}>x<span className={style.numTxt}>3</span></span>
                        <span className={style.price}>￥<span className={style.priceTxt}>4</span></span>
                    </li>
                </ul>
                {/*总计*/}
                <ul className={style.total}>
                    <li className={style.totalTit}>费用明细</li>
                    <li className={style.totalItem+" "+style.totalMoney}>商品总额<span className={style.money}>￥0</span></li>
                    <li className={style.totalItem}>配送费<span>￥5</span></li>
                    <li className={style.totalItem}>服务费<span>￥0</span></li>
                    <li className={style.totalItem}>优惠卷<span>￥0</span></li>
                </ul>
            </div>
            <div className={style.settleFooter}>
                <div className={style.settleInfo}>
                    应付金额:
                </div>
                <div className={style.sure}>确定下单</div>
            </div>


        </div>
    }


}

export default Settle