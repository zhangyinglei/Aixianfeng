import React,{Component} from  "react"
import { List} from 'antd-mobile';
import Header from "../../components/public/public-activity";
import style from "./index.css";
const Item = List.Item;
const Brief = Item.Brief;
class ServicePage extends Component{
    render(){
        return <div>
            <Header title="帮助中心"/>
            <List renderHeader={() => '客服列表'} className={style['my-list']}>
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => {}}
                >
                    意见反馈 <Brief>1-2个工作日内反馈</Brief>
                </Item>
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => {}}
                >
                    常见问题
                    <Brief>配送时间、优惠券和退款流程等</Brief>
                </Item>
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => {}}
                >
                    客服电话 <Brief>tel:4008484842</Brief>
                </Item>
            </List>
        </div>

    }
}
export default ServicePage;
