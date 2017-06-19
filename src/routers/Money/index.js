
import React,{Component} from "react";
import {connect} from "react-redux";
import style from "./index.css";
import { Icon,Toast} from 'antd-mobile';
import Header from "../../components/public/public-activity"
var proData=require("../../components/public/activity.json");
/*const Header=()=>{
    return <div className={style.header}>
        <div className={style.headerBtn}>{"<"}</div>
        <div className={style.headerTit}>30分钟冰风暴</div>
        <div className={style.headerBtn}>
            <Icon type={require("../../svg/share/refresh.svg")}/>
        </div>
    </div>
}*/
class Content extends Component{
    render(){
        return <div className={style.content}>
            {this.props.children}
        </div>
    }
}
const Nav=()=>{
    return <div className={style.nav}>
        <ul>
            <li><img src="http://img01.bqstatic.com/upload/activity/theme_header_1496983960_21982_0.jpg@90Q" /></li>
            <li><img src="http://img01.bqstatic.com/upload/activity/theme_header_1496983960_21982_1.jpg@90Q" /></li>
        </ul>
        <dl>
            <dt><img src="http://img01.bqstatic.com/upload/goods/201/706/0819/20170608190335_272421.jpg@355w_355h_90Q" /> </dt>
            <dd>
                <p>可爱多冰淇淋口味随机（秒杀）</p>
                <p>1支</p>
                <p><span className={style.nprice}>￥1</span><i>/原价:￥5</i></p>
                <span className={style.buy}>立即购买</span>
            </dd>
        </dl>
        <div className={style.img2}>
            <img src="http://img01.bqstatic.com/upload/activity/theme_header_1496984321_21982_2.jpg@90Q"/>
        </div>
    </div>
}
const  Product=(props)=>{
    console.log(props.ProductData);
    return <div className={style.productList}>
        {
            props.ProductData.map((elem,index)=>{
                return <dl key={index}>
                    <dt><img src={elem.imgurl}/></dt>
                    <dd>
                        <p className={style.goodsname}>{elem.goodsname}</p>
                        <p>{elem.goodsWeight}</p>
                        <p className={style.goodsprice}>{elem["product-price"]}</p>
                        <p className={style.btn} onClick={()=>props.changeCart(elem.goodsID,elem)}>{elem['product-btn']}</p>
                    </dd>
                </dl>
            })
        }

    </div>
}
const Footer=(props)=>{
    console.log(props.MoneyCartData)
    return <div className={style.footer}>
        <div className={style.imging}>
            <img src="http://img01.bqstatic.com/upload/activity/theme_header_1496984321_21982_3.jpg@90Q"/>
        </div>
        <div className={style.rules}>
            <p>1.秒杀商品每个用户限购1份，口味随机数量有限抢完即止</p>
            <p>2.同一设备同一用户每天仅有1次抢购机会，不及时支付订单导致订单取消等于放弃抢购</p>
            <p>3.收到冰淇淋请您当场确认冰淇淋是否化了，如出现冰淇淋化了的情况请告知配送员，配送员会帮您申请补偿优惠劵，如1小时内未收到补偿劵请您主动联系我们的客服，客服会根据情况补给您相应的优惠劵</p>
            <p>4.补偿的优惠劵仅限购买冰激淋使用</p>
            <p>5.本次活动仅限北京用户参加</p>
        </div>
        <div className={style.globalImg}>
            <img src="http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png"/>
            <span className={style.le}>{props.MoneyCartData}</span>
        </div>
    </div>
}
class Money extends Component{
    render(){
        return <div className={style.money}>
            <Header title="30分钟冰风暴"/>
            <Content>
                <Nav />
                <Product ProductData={this.props.productData} changeCart={this.props.changeCart}/>
            </Content>
            <Footer MoneyCartData={this.props.MoneyCartData}/>
        </div>
    }
    componentDidMount(){
        this.props.getInitData()
    }
}
function mapStateToProps(state){
    return {
        productData:state.MoneyReducer.productData,
        MoneyCartData:state.MoneyReducer.MoneyCartData
    }
}
function mapDispatchToProps(dispatch) {
    var arr=[];
    return {
        getInitData(){
            dispatch({type:"PRODUCT_getProductInitData",productData:proData.data});
        },
        changeCart(id,elem){

            var prohistoy=JSON.parse(window.localStorage.getItem("goods_intro"))||[];
            console.log(prohistoy)
            for(var i=0;i<prohistoy.length;i++){
                if(prohistoy[i]==elem){
                    prohistoy.splice(i,1);
                    return;
                }
            }

            prohistoy.unshift(elem);
            dispatch({type:"PRODUCT_CartData",MoneyCartData:prohistoy.length})

            window.localStorage.setItem("goods_intro",JSON.stringify(prohistoy));
            Toast.success('添加成功!!!', 1);
        }
    }
}




export default  connect(mapStateToProps,mapDispatchToProps)(Money)
