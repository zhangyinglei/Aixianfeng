import React,{Component} from "react";
import {connect} from "react-redux";
import style from "./index.css";
import { Icon,Toast} from 'antd-mobile';
import Header from "../../components/public/public-activity"
var proData=require("../../components/public/cook.json");

class Content extends Component{
    render(){
        return <div className={style.content}>
            {this.props.children}
        </div>
    }
}
const Nav=(props)=>{
    return <div className={style.lider}>
                <div className={style.nav}>
                    <img src="http://img01.bqstatic.com/upload/activity/theme_header_1494086057_21959_0.jpg@90Q"/>
                </div>
                <div className={style.nav1}>
                    <img src="http://img01.bqstatic.com/upload/activity/theme_header_1494086127_21959_1.jpg@90Q"/>
                </div>
    </div>
}
const Product=(props)=>{
    console.log(props.cookData);
    return <div className={style.ProductList}>
        {
            props.cookData.data&&props.cookData.data.map((elem,index)=>{
                return <dl key={index}>
                    <dt><img src={elem.imgurl}/></dt>
                    <dd>
                        <p className={style.goodsname}>{elem.goodsname}</p>
                        <p className={style.goodsWeight}>{elem.goodsWeight}</p>
                        <p className={style.price}>{elem["product-price"]}</p>
                        <p className={style.btn} onClick={()=>props.changeCart(elem)}>{elem["product-btn"]}</p>
                    </dd>
                </dl>
            })
        }
    </div>
}
const Product1=(props)=>{
    console.log(props.cookData.goodsCook)
    return <div className={style.drink}>
                <div className={style.centerl}>
                    <img src="http://img01.bqstatic.com/upload/activity/theme_header_1494086185_21959_2.jpg@90Q"/>
                </div>
        {
            props.cookData.goodsCook&&props.cookData.goodsCook.map((elem,index)=>{
              return  <dl key={index}>
                    <dt><img src={elem.imgurl}/></dt>
                    <dd>
                        <p className={style.goodsname}>{elem.goodsname}</p>
                        <p className={style.goodsWeight}>{elem.goodsWeight}</p>
                        <p className={style.price}>{elem["product-price"]}</p>
                        <p className={style.btn} onClick={()=>props.changeCart(elem)}>{elem["product-btn"]}</p>
                    </dd>
                </dl>
            })
        }
    </div>

}
const Footer=(props)=>{
    console.log(props.CookCartData);
    return <div className={style.footer}>
        <div className={style.nav}>
            <img src="http://img01.bqstatic.com/upload/activity/theme_header_1494086254_21959_4.jpg@90"/>
        </div>
        <div className={style.globalImg}>
            <img src="http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png"/>
            <span className={style.le}>{props.CookCartData}</span>
        </div>
        <div className={style.rules}>
            <p>本活动仅限北京参与</p>
        </div>
    </div>
}
class Cook extends Component{
    render(){
        console.log(this.props.cookData)
        return <div className={style.cook}>
                    <Header title="冰爽一夏－冰镇饮料"/>
                    <Content>
                        <Nav/>
                        <Product cookData={this.props.cookData} changeCart={this.props.changeCart}/>
                        <Product1 cookData={this.props.cookData} changeCart={this.props.changeCart}/>
                    </Content>
                    <Footer CookCartData={this.props.CookCartData} />
        </div>
    }
    componentDidMount(){
        this.props.getInitData()
    }
}
function mapStateToProps(state){
    return {
        cookData:state.CookReducer.cookData,
        CookCartData:state.CookReducer.CookCartData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getInitData(){
            dispatch({type:"Cook_PRODUCT_getProductInitData",cookData:proData});
        },
        changeCart(elem){

            var prohistoy=JSON.parse(window.localStorage.getItem("goods_intro"))||[];
            console.log(prohistoy)
            for(var i=0;i<prohistoy.length;i++){
                if(prohistoy[i]==elem){
                    prohistoy.splice(i,1);
                    return;
                }
            }

            prohistoy.unshift(elem);
            dispatch({type:"Cook_PRODUCT_CartData",CookCartData:prohistoy.length})
            window.localStorage.setItem("goods_intro",JSON.stringify(prohistoy));
            Toast.success('添加成功!!!', 1);
        }
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Cook);