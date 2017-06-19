import React,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router"
import style from "./index.css";
import {Icon,Flex,SwipeAction, Toast,List,Stepper,Checkbox,DatePicker } from "antd-mobile";
import {Content,Footer} from "../../components/public/public";
import "antd-mobile/lib/stepper/style/assets/plus.svg";
import "antd-mobile/lib/stepper/style/assets/minus.svg";
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';

const zhNow = moment().locale('zh-cn').utcOffset(8);
class Test extends React.Component {
    state = {
        date: zhNow,
        dpValue: null,
        visible: false,
    }
    onChange = (date) => {
        // console.log('onChange', date);
        this.setState({
            date,
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (<div>
            <List
                className="date-picker-list"
                style={{ backgroundColor: 'white' }}
            >
                <DatePicker className="forss"
                            mode="datetime"
                            onChange={this.onChange}
                            value={this.state.date}
                >
                    <List.Item arrow="horizontal">收货时间</List.Item>
                </DatePicker>
                <List.Item>收货备注<input className={style.txt} placeholder="请输入您的需求"/></List.Item>
            </List>
        </div>);
    }
}
const TestWrapper = createForm()(Test);
const Header=()=>{
    return <div className={style.header}>
            <div className={style.headerBtn}></div>
            <div className={style.headerTit}>购物车</div>
            <Link to={"/settle"}><div className={style.headerBtn}>结算</div></Link>
    </div>
}
const Nav=(props)=>{
    return <div className={style.nav}>
        <p>鲜锋侠需要您的精确坐标</p>
    </div>
}
const cartD=JSON.parse(window.localStorage.getItem("goods_intro")||'[]');
const CartList=(props)=>{
    return <div className={style.cartlist}>
        {
            props.cartData&&props.cartData.map((elem,index)=>{
                if(elem["goods-number"]){
                    return <dl key={index}>
                        <dt><img src={elem.imgurl}/> </dt>
                        <dd>
                            <p className={style.goodsname}>{elem.goodsname}</p>
                            <p className={style.partnerPrice}>{elem["product-price"]}</p>
                            <span  className={style.txt} onClick={()=>props.changeCart(-1,index,elem)}>-</span>
                            <input value={elem["goods-number"]} className={style.txta} />
                            <span  className={style.txt} onClick={()=>props.changeCart(1,index,elem)}>+</span>
                        </dd>
                        <span className={style.delete1} onClick={()=>props.changeCart(0,index,elem)}>删除</span>
                    </dl>
                }else{
                    return <dl key={index}>
                        <dt><img src={elem.img}/></dt>
                        <dd>
                            <p className={style.goodsname}>{elem.name}</p>
                            <p className={style.partnerPrice}>￥{elem["partner_price"]}</p>
                            <span  className={style.txt} onClick={()=>props.changeCart(-1,index,elem)}>-</span>
                            <input value={elem["number"]} className={style.txta}/>
                            <span  className={style.txt} onClick={()=>props.changeCart(1,index,elem)}>+</span>
                        </dd>
                        <span className={style.delete1} onClick={()=>props.changeCart(0,index,elem)}>删除</span>
                    </dl>
                }
            })
        }

    </div>
}
class Cart extends Component{
    render(){
        return <div className={style.cart}>
            <Header/>
            <Content>
                <Nav/>
                <TestWrapper/>
                <CartList cartData={this.props.cartData} changeCart={this.props.changeCart}/>
            </Content>
            <Footer active="2" HomeCartData={this.props.CartCartData}/>
        </div>
    }
    componentDidMount(){
        this.props.getInitData()
    }
}
function mapStateToProps(state){
    return {
        cartData:state.CartReducer.cartData,
        CartCartData:state.CartReducer.CartCartData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getInitData(){
            dispatch({type:"Cart_PRODUCT_getProductInitData",cartData:cartD});
        },
       changeCart(type,index,elem){
            dispatch({type:"Cart_PRODUCT_changeCartData",payload:{type,index,elem}});
           var prohistoy=JSON.parse(window.localStorage.getItem("goods_intro"))||[];
           if(type==1){

               dispatch({type:"Cart_PRODUCT_CartData",CartCartData:prohistoy.length});
           }else if(type==-1){
               dispatch({type:"Cart_PRODUCT_CartData",CartCartData:prohistoy.length});
           }else{
               prohistoy.splice(index,1);
               dispatch({type:"Cart_PRODUCT_CartData",CartCartData:prohistoy.length});
           }
            /*dispatch({type:"Cart_PRODUCT_CartData",MoneyCartData:prohistoy.length});*/
            window.localStorage.setItem("goods_intro",JSON.stringify(prohistoy));
        }
    }
}



export default  connect(mapStateToProps,mapDispatchToProps)(Cart);