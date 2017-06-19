/**
 * Created by Administrator on 2017/6/13.
 */
import React,{Component} from "react";
import style from "./index.css";
import {connect} from "react-redux";
import {Header,Content,Footer} from "../../components/public/public";
import {Link}  from "react-router"
const mydata=require("../1.json");
console.log(mydata);
class LeftNav extends Component{
    render(){
        return <div className={style.leftnav}>
            <ul className={style.navlist}>
                {
                    this.props.leftNavList.map((ele,index)=>{
                        var str2=style.active+" "+(this.props.value==index?style.noactive:"")
                        console.log(str2)
                        return <li onClick={()=>this.props.changeListData(ele.id,index)} className={style.navItem} key={index} style={ele.flag==""?{}:{background:"url("+ele.flag+") no-repeat right top " }}><span className={str2}></span>{ele.name}</li>
                    })
                }
            </ul>
        </div>
    }
}
class ListMain extends Component{
    render(){
        return <div className={style.listmain}>
            <ul className={style.listtit}>
                <li className={style.listtxt}>
                    <span className={style.tittxt}>全部分类</span>
                    <span className={style.shang}>&nbsp;</span>
                    <div className={style.classtxt}>
                        {
                            this.props.classData.map((ele,index)=>{
                                return <div className={style.classitem} key={index}>{ele.name}</div>
                            })
                        }
                    </div>
                 </li>
                <li className={style.listtxt}>
                    <span className={style.tittxt}>综合排序</span>
                    <span className={style.shang}>&nbsp;</span>
                    <div className={style.classtxt}>
                        <div className={style.classitem}>综合排序</div>
                        <div className={style.classitem}>销量最高</div>
                        <div className={style.classitem}>价格最低</div>
                        <div className={style.classitem}>价格最高</div>
                    </div>
                </li>

            </ul>
            <div className={style.list}>
                <ul className={style.listcontent}>
                    {
                        this.props.listData.map((ele,index)=>{
                            var str = style.oldprice+" "+(ele.d_price==Number(ele.price)?style.no:"");
                            var str1 =style.noall+" "+(ele.pm_desc==""?style.non:"");
                            return  <Link to={`/detail/${ele.id}`} key={index}>
                            <li className={style.contentlist}  onClick={()=>this.props.getDetailData(ele)}>
                                <img src={ele.img} />
                                <div className={style.goods}>
                                    <p className={style.gname}>{ele.long_name}</p>
                                    <p className={style.notice}>
                                        <span className={style.all}>精选</span>
                                        <span className={str1}>{ele.pm_desc}</span>
                                    </p>
                                    <p className={style.size}>{ele.specifics}</p>
                                    <p className={style.price}>
                                        <span className={style.nowprice}>￥<span className={style.nprice}>{ele.price}</span></span>
                                        <span className={str}>￥<span className={style.oprice}>{ele.d_price}</span></span>
                                    </p>
                                </div>
                                <p className={style.cart}>+</p>
                            </li>
                                </Link>
                        })
                    }
                </ul>
            </div>

        </div>
    }
}
class List extends  Component{
            render(){
                return <div className={style.listpage}>
                    <Header  title="云南"/>
                    <Content>
                        <div className={style.listlist}></div>
                        <LeftNav leftNavList={this.props.leftNavList}value={this.props.value} changeListData={this.props.changeListData}/>
                        <ListMain getDetailData={this.props.getDetailData} classData={this.props.classData} listData={this.props.listData} />
                    </Content>
                    <Footer active="1"  HomeCartData={JSON.parse(window.localStorage.getItem("goods_intro")||'[]').length||0}/>

                </div>
            }
            componentDidMount(){
              this.props.getInitialData()
            }
}
function mapStateToProps(state){
    console.log(state);
    return{
        leftNavList:state.listReducer.leftNavList,
        classData:state.listReducer.classData,
        listData:state.listReducer.listData,
        value:state.listReducer.value
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getInitialData(){
            console.log(mydata.data.categories);
           dispatch({type:"getNavData",leftNavList:mydata.data.categories});
            dispatch({type:"getClassData",classData:mydata.data.categories["0"].cids})
            dispatch({type: "getListData", listData: mydata.data.products["104747"]})
            console.log(mydata.data.categories[0].cids);
            console.log(mydata.data.products["104747"]);
        },
        changeListData(id,index){
            dispatch({type: "changeClassData", classData: mydata.data.categories[index].cids});
            console.log(mydata.data.categories[index].cids);
            dispatch({type: "changeListData", listData: mydata.data.products[id]});
            console.log(mydata.data.products[id]);
            dispatch({type: "changeValue", value:index})
        },
        getDetailData(data){
            console.log(data);
            localStorage.setItem("detail",JSON.stringify(data));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)


