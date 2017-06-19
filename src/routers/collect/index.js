import React,{Component} from  "react"
import {connect} from 'react-redux';
import Header from "../../components/public/public-activity";
import style from "./index.css";

class CollectPage extends Component{
    render(){
        var data = JSON.parse(localStorage.getItem('detail'));
        console.log(data)
        return <div>
            <Header title="商品收藏"/>
            <div className={style.coll}>
                    <img src={data.img}/>
                    <div className={style.x}>
                        <p>{data.long_name}</p>
                        <p>{data.specifics}</p>
                        <p>价格：{data.market_price}</p>
                    </div>
            </div>
        </div>
    }
}


export default CollectPage
