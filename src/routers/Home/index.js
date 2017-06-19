import React,{Component} from "react";
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
import { Carousel, WhiteSpace, WingBlank,Toast } from 'antd-mobile';
import {Header,Content,Footer} from "../../components/public/public";
import style from "./index.css";
import {Link} from "react-router";

var mydata=require("../../components/public/data.json");
class Lapp extends Component {
    state = {
        data: ['', '', ''],
        arr:["/foot/","/money/","/cook/","/foot/"],
        initialHeight: 200,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['2017061216384499.jpg@90Q', '2017060913102128.jpg@90Q',
                    'theme_header_1494086057_21959_0','2017061220004466.jpg@90Q']
            });
        }, 100);
    }
    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};

        return (

            <Carousel
                className={style.myCarousel}
                autoplay={true}
                infinite
                selectedIndex={1}
                swipeSpeed={35}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {this.state.data.map((ii,index) => (
                        <Link to={this.state.arr[index]} key={ii}>
                        <img
                            src={`http://img01.bqstatic.com//upload/activity/${ii || '2017060913102128.jpg@90Q'}.jpg`}
                            alt="icon"
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({
                                    initialHeight: null,
                                });
                            }}
                        />
                        </Link>

                ))}
            </Carousel>

        );
    }
}

const Navl=(props)=>{
   return <div className={style.nav1}>
        {
            props.listData.map((elem,index)=>{
                return <dl key={index}>
                    <dt><img src={elem.activity.img}/> </dt>
                    <dd>{elem.activity.name}</dd>
                </dl>
            })
        }
    </div>
}
const Nav2=(props)=>{
    return <div className={style.nav2}>
        {
            props.ProductData.slice(2).map((elem,index)=>{
                return <img src={elem.activity.img} key={index}/>
            })
        }
    </div>
}
const Nav3=(props)=>{
    console.log(props.barData);
    if(props.barData){
        console.log(props.barData[0].act_rows[0].chead_detail.img);
        return <div className={style.nav3}>
                <div className={style.top1}>
                    <img src={props.barData[0].act_rows[0].chead_detail.img}/>
                </div>
                <div className={style.center1}><ul>
                    {props.barData[1].act_rows.map((elem,index)=>{
                        return <li key={index}><img src={elem.cactivity_detail.img}/></li>
                    })}
                    </ul>
                </div>
            <div className={style.center2}><ul>
                {props.barData[2].act_rows.map((elem,index)=>{
                    return <dl key={index}>
                        <dt><img src={elem.cicons_detail.img}/></dt>
                        <dd>{elem.cicons_detail.name}</dd>
                    </dl>
                })}
            </ul>
            </div>
            <div className={style.center3}><ul>
                {props.barData[3].act_rows.map((elem,index)=>{
                    return <li key={index}><img src={elem.activity.img}/></li>
                })}
            </ul>
            </div>
        </div>
    }else {
        return <div></div>
    }

}
const Product=(props)=>{
    console.log(props.changeHomeCart)
    if(props. productData){
        return <div className={style.productIntr}>
            <div className={style.head1}>
                <div className={style.fruitname}>
                    <span></span>
                    优选水果
                </div>
                <div className={style.more}>
                    更多>
                </div>
            </div>
            <div className={style.fruitcontent}>
                <div className={style.fimg}>
                    <img src={props. productData[0].activity.img} />
                </div>
                <div className={style.goods}>
                {
                    props. productData[0].category_detail.goods.map((elem,index)=>{
                        return <dl key={index}>
                            <dt><img src={elem.img} /></dt>
                            <dd>{elem.keywords}</dd>
                            <div className={style.tag}>精选</div>
                            <p className={style.box}>{elem.specifics}</p>
                            <div className={style.gprice}>
                                <span className={style.nprice}>￥{elem.partner_price}</span>
                                <span className={style.dprice}>￥{elem.d_price}</span>
                                <span className={style.inner} onClick={()=>props.HomeproductData(elem)}>+</span>
                            </div>
                        </dl>
                    })

                }
                </div>
            </div>
        </div>
    }else{
        return <div></div>
    }

}
const Product1=(props)=>{
    if(props. productData){
        return <div className={style.productIntr}>
            <div className={style.head1}>
                <div className={style.fruitname+' '+style.fruitname1}>
                    <span></span>
                    牛奶面包
                </div>
                <div className={style.more}>
                    更多>
                </div>
            </div>
            <div className={style.fruitcontent}>
                <div className={style.fimg}>
                    <img src={props. productData[1].activity.img} />
                </div>
                <div className={style.goods}>
                    {
                        props. productData[1].category_detail.goods.map((elem,index)=>{
                            return <dl key={index}>
                                <dt><img src={elem.img} /></dt>
                                <dd>{elem.keywords}</dd>
                                <div className={style.tag}>精选</div>
                                <p className={style.box}>{elem.specifics}</p>
                                <div className={style.gprice}>
                                    <span className={style.nprice}>￥{elem.partner_price}</span>
                                    <span className={style.dprice}>￥{elem.d_price}</span>
                                    <span className={style.inner} onClick={()=>props.HomeproductData(elem)}>+</span>
                                </div>
                            </dl>
                        })

                    }
                </div>
            </div>
        </div>
    }else{
        return <div></div>
    }

}
const Product2=(props)=>{
    if(props. productData){
        return <div className={style.productIntr}>
            <div className={style.head1}>
                <div className={style.fruitname+' '+style.fruitname2}>
                    <span></span>
                    卤味熟食
                </div>
                <div className={style.more}>
                    更多>
                </div>
            </div>
            <div className={style.fruitcontent}>
                <div className={style.fimg}>
                    <img src={props. productData[2].activity.img} />
                </div>
                <div className={style.goods}>
                    {
                        props. productData[2].category_detail.goods.map((elem,index)=>{
                            return <dl key={index}>
                                <dt><img src={elem.img} /></dt>
                                <dd>{elem.keywords}</dd>
                                <div className={style.tag}>精选</div>
                                <p className={style.box}>{elem.specifics}</p>
                                <div className={style.gprice}>
                                    <span className={style.nprice}>￥{elem.partner_price}</span>
                                    <span className={style.dprice}>￥{elem.d_price}</span>
                                    <span className={style.inner} onClick={()=>props.HomeproductData(elem)}>+</span>
                                </div>
                            </dl>
                        })

                    }
                </div>
            </div>
        </div>
    }else{
        return <div></div>
    }

}
const Product3=(props)=>{
    if(props. productData){
        return <div className={style.productIntr}>
            <div className={style.head1}>
                <div className={style.fruitname+' '+style.fruitname3}>
                    <span></span>
                    饮料酒水
                </div>
                <div className={style.more}>
                    更多>
                </div>
            </div>
            <div className={style.fruitcontent}>
                <div className={style.fimg}>
                    <img src={props. productData[3].activity.img} />
                </div>
                <div className={style.goods}>
                    {
                        props. productData[3].category_detail.goods.map((elem,index)=>{
                            return <dl key={index}>
                                <dt><img src={elem.img} /></dt>
                                <dd>{elem.keywords}</dd>
                                <div className={style.tag}>精选</div>
                                <p className={style.box}>{elem.specifics}</p>
                                <div className={style.gprice}>
                                    <span className={style.nprice}>￥{elem.partner_price}</span>

                                    <span className={style.inner} onClick={()=>props.HomeproductData(elem)}>+</span>
                                </div>
                            </dl>
                        })

                    }
                </div>
            </div>
        </div>
    }else{
        return <div></div>
    }

}
const Product4=(props)=>{
    if(props. productData){
        return <div className={style.productIntr}>
            <div className={style.head1}>
                <div className={style.fruitname+' '+style.fruitname4}>
                    <span></span>
                    休闲零食
                </div>
                <div className={style.more}>
                    更多>
                </div>
            </div>
            <div className={style.fruitcontent}>
                <div className={style.fimg}>
                    <img src={props. productData[4].activity.img} />
                </div>
                <div className={style.goods}>
                    {
                        props. productData[4].category_detail.goods.map((elem,index)=>{
                            return <dl key={index}>
                                <dt><img src={elem.img} /></dt>
                                <dd>{elem.keywords}</dd>
                                <div className={style.tag}>精选</div>
                                <p className={style.box}>{elem.specifics}</p>
                                <div className={style.gprice}>
                                    <span className={style.nprice}>￥{elem.partner_price}</span>
                                    <span className={style.inner} onClick={()=>props.HomeproductData(elem)}>+</span>
                                </div>
                            </dl>
                        })

                    }
                </div>
            </div>
        </div>
    }else{
        return <div></div>
    }

}
const Product5=(props)=>{
    if(props. productData){
        return <div className={style.productIntr}>
            <div className={style.head1}>
                <div className={style.fruitname+' '+style.fruitname5}>
                    <span></span>
                    方便速食
                </div>
                <div className={style.more}>
                    更多>
                </div>
            </div>
            <div className={style.fruitcontent}>
                <div className={style.fimg}>
                    <img src={props. productData[5].activity.img} />
                </div>
                <div className={style.goods}>
                    {
                        props. productData[5].category_detail.goods.map((elem,index)=>{
                            return <dl key={index}>
                                <dt><img src={elem.img} /></dt>
                                <dd>{elem.keywords}</dd>
                                <div className={style.tag}>精选</div>
                                <p className={style.box}>{elem.specifics}</p>
                                <div className={style.gprice}>
                                    <span className={style.nprice}>￥{elem.partner_price}</span>
                                    <span className={style.dprice}>￥{elem.d_price}</span>
                                    <span className={style.inner} onClick={()=>props.HomeproductData(elem)}>+</span>
                                </div>
                            </dl>
                        })

                    }
                </div>
            </div>
        </div>
    }else{
        return <div></div>
    }

}
function mapStateToProps(state) {
    return {
        listData:state.HomeReducer.listData,
        listData1:state.HomeReducer.listData1,
        listData2:state.HomeReducer.listData2,
        productData:state.HomeReducer.productData,
        HomeproductData:state.HomeReducer.HomeproductData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getInitData(){
            console.log(mydata.data)
                dispatch({type:"getProductInitData",listData:mydata.data.act_info[1].act_rows});
                dispatch({type:"getInitialData",listData1:mydata.data.act_info[3].act_rows});
                dispatch({type:"getInitialBarData",listData2:mydata.data.act_info[4].act_rows});
                dispatch({type:"getInitialProductData",productData:mydata.data.act_info[5].act_rows});
        },
       changeHomeCart(elem){

            var prohistoy=JSON.parse(window.localStorage.getItem("goods_intro"))||[];
            console.log(prohistoy)
            for(var i=0;i<prohistoy.length;i++){
                if(prohistoy[i]==elem){
                    prohistoy.splice(i,1);
                    return;
                }
            }

            prohistoy.unshift(elem);
            dispatch({type:"PRODUCT_HomeCartData",HomeproductData:prohistoy.length})

            window.localStorage.setItem("goods_intro",JSON.stringify(prohistoy));
           Toast.success('添加成功!!!', 1);
        }
    }
}
class Home extends Component {
    render() {
        return <div >
            <Header title="驼房营路附近"/>
            <Content>
                <Lapp/>
                <Navl listData={this.props.listData}/>
                <Nav2 ProductData={this.props.listData1}/>
                <Nav3 barData={this.props.listData2}/>
                <Product productData={this.props.productData} HomeproductData={this.props.changeHomeCart}/>
                <Product1 productData={this.props.productData} HomeproductData={this.props.changeHomeCart}/>
                <Product2 productData={this.props.productData} HomeproductData={this.props.changeHomeCart}/>
                <Product3 productData={this.props.productData} HomeproductData={this.props.changeHomeCart}/>
                <Product4 productData={this.props.productData} HomeproductData={this.props.changeHomeCart}/>
                <Product5 productData={this.props.productData} HomeproductData={this.props.changeHomeCart}/>
            </Content>
            <Footer active="0" HomeCartData={this.props.HomeproductData}/>
        </div>
    }
    componentDidMount(){
        this.props.getInitData();
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

