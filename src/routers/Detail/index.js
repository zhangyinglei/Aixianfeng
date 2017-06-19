import React,{Component} from "react";
import style from "./index.css";
import {connect} from "react-redux";
class Header extends Component{
    render(){
        return  <div className={style.detailHeader}>
            <ul className={style.header}>
                <li className={style.headerBtn}><a href="javascript:history.go(-1);">{"<"}</a></li>
                <li className={style.headerTit}>{this.props.goodsName}</li>
                <li className={style.headerBbtn}></li>
            </ul>
        </div>
    }

}
class Content extends Component {
    render() {
        return <div className={style.content}>{this.props.children}</div>

    }
}
var number;
class DetailTxt extends Component{
    render(){
        const {data}=this.props;
        var str = style.oldprice+" "+(data.d_price==Number(data.price)?style.no:"");
        return <div className={style.detailTxt}>
            <div className={style["detail-h"]}>
                <img src={data.img}/>
                <span className={style.gname}>{data.name}</span>
                <p className={style.price}>
                    <span className={style.nowprice}>￥<span className={style.nprice}>{data.price}</span></span>
                    <span className={str}>￥<span className={style.oprice}>{data.d_price}</span></span>
                </p>

            </div>
            <div className={style["detail-m"]}>
                <p className={style.tit}>
                    <span className={style.titL}></span><span className={style.dotL}>·</span>商品详情<span className={style.dotR}>·</span><span className={style.titR}></span>
                </p>
                <p className={style.brand}><span className={style.tag}>品<span className={style.kong}>中中</span>牌</span><span className={style.brandTxt}>{data.brand_name}</span></p>
                <p className={style.size}><span className={style.tag}>产品规格</span><span className={style.sizeTxt}>{data.specifics}</span></p>
            </div>
        </div>
    }
}
class Footer extends Component{
    render(){
        const {collectData,data,goodsID,userID,addCart,cartData}=this.props;
        console.log(collectData);

        return <div className={style.footer}>
                <span className={style.collect} onClick={()=>this.props.collect(collectData,userID,goodsID,data)} >收藏</span>
                添加商品：
                <span className={style.number}>

                     <span className={style.reduce}>-</span>
                    <span className={style.num}>{}</span>
                    <span className={style.add} onClick={()=>addCart(cartData,goodsID,data)}>+</span>

                </span>
                <div className={style.cart}>
                    <img src="./cart.png" />
                    <span className={style.cartNum}></span>
                </div>
        </div>
    }
}
class Detail extends Component{
    render(){
        var data=JSON.parse(localStorage.getItem("detail"))
        var  goodsID=this.props.params.id;
        localStorage.setItem("userID","12345");
        var userID=localStorage.getItem("userID");
        return <div className={style.detail}>
                <Header goodsName={data.name} />
                <Content>
                    <DetailTxt data={data}/>
                </Content>]
                <Footer addCart={this.props.addCart}collect={this.props.collect} userID={userID} data={data} goodsID={goodsID} collectData={this.props.collectData} cartData={this.props.cartData}/>
        </div>
    }

}
function mapStateToProps(state) {
    return{
        collectData:state.collectReducer.collectData,
        cartData:state.cartReducer.cartData

    }
}

function mapDispatchToProps(dispatch) {
    return{
        collect(collectData,userID,goodsID,data){
            console.log(collectData);
            if( collectData[0]){
                collectData= collectData.filter((ele,index)=>{
                    if(ele.userID==userID&&ele.goodsID==goodsID){

                    }else {
                        return ele
                    }
                })
            }
            var newCollectData={
                userID:userID,
                goodsID:goodsID,
                goodsInfor:data
            }
            collectData.unshift(newCollectData);
            dispatch({type:"DETAIL-COLLECT",collectData:collectData})
        },
        addCart(cartData,goodsID,goosInfor){
            if(cartData[0]){
                var newCartData1;
                for(let i=0,len=cartData.length;i<len;i++){
                    if(cartData[i].goodsID!==goodsID){
                         newCartData1={
                            goodsID:goodsID,
                            goodsInfor:goosInfor,
                            num:1
                        }

                        number=1;
                    }else{
                        var num=cartData[i].num;
                        num++;
                        cartData[i].num=num;
                        number=num;
                    }
                }
                cartData.unshift(newCartData1);
                dispatch({type:"DETAIL-ADD-CART",cartData:cartData});
            }else{
                number=1;
                var newCartData2={
                    goodsID:goodsID,
                    goodsInfor:goosInfor,
                    num:1
                }
                cartData.unshift(newCartData2);
                dispatch({type:"DETAIL-ADD-CART",cartData:cartData})
            }




        }

    }
}

 export default connect (mapStateToProps,mapDispatchToProps)(Detail)