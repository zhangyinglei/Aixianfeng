/**
 * Created by Administrator on 2017/6/13.
 */
const  HomeReducer=function(state={listData:[],listData1:[],HomeproductData:[JSON.parse(window.localStorage.getItem("goods_intro")||'[]').length||0]},action){
    switch(action.type){
        case "getProductInitData":
            var Newstate=Object.assign({},state,{listData:action.listData})
            return Newstate;
            break;
        case "getInitialData":
            var Newstate=Object.assign({},state,{listData1:action.listData1})
            return Newstate;
        case "getInitialBarData":
            var Newstate=Object.assign({},state,{listData2:action.listData2})
            return Newstate;
        case "getInitialProductData":
            var Newstate=Object.assign({},state,{productData:action.productData})
            return Newstate;
        case "PRODUCT_HomeCartData":
            var Newstate=Object.assign({},state,{HomeproductData:action.HomeproductData})
            return Newstate;
        default:
            return state;
    }
}
const  MoneyReducer=function(state={productData:[],MoneyCartData:[JSON.parse(window.localStorage.getItem("goods_intro")||'[]').length||0]},action){
    switch(action.type){
        case "PRODUCT_getProductInitData":
            var Newstate=Object.assign({},state,{productData:action.productData})
            return Newstate;
            break;
        case "PRODUCT_CartData":
            var Newstate=Object.assign({},state,{MoneyCartData:action.MoneyCartData})
            return Newstate;
        default:
            return state;
    }
}
const  CookReducer=function(state={cookData:[],CookCartData:[JSON.parse(window.localStorage.getItem("goods_intro")||'[]').length||0]},action){
  /*  console.log(action.cookData);*/
    switch(action.type){
        case "Cook_PRODUCT_getProductInitData":
            var Newstate=Object.assign({},state,{cookData:action.cookData})
            return Newstate;
            break;
        case "Cook_PRODUCT_CartData":
            var Newstate=Object.assign({},state,{CookCartData:action.CookCartData})
            return Newstate;
        default:
            return state;
    }
}
const  CartReducer=function(state={cartData:[1,2,3],CartCartData:[JSON.parse(window.localStorage.getItem("goods_intro")||'[]').length||0]},action){
    switch(action.type){
        case "Cart_PRODUCT_getProductInitData":
            var Newstate=Object.assign({},state,{cartData:action.cartData});
            return Newstate;
            break;
        case "Cart_PRODUCT_CartData":
            var Newstate=Object.assign({},state,{CartCartData:action.CartCartData})
            return Newstate;
        case "Cart_PRODUCT_changeCartData":
            var Newstate=JSON.parse(JSON.stringify(state));
            const{type,index,elem}=action.payload;
            if(type==1){
                if(Newstate.cartData[index]["goods-number"]){
                    Newstate.cartData[index]["goods-number"]= Newstate.cartData[index]["goods-number"]*1+1;
                }else{
                    Newstate.cartData[index].number=Newstate.cartData[index].number*1+1;
                }
            }else if(type==-1){
                if(Newstate.cartData[index]["goods-number"]){
                    if( Newstate.cartData[index]["goods-number"]<=1){
                        Newstate.cartData[index]["goods-number"]=1;
                    }else{
                        Newstate.cartData[index]["goods-number"]=Newstate.cartData[index]["goods-number"]*1-1;
                    }
                }else{
                    if( Newstate.cartData[index].number<=1){
                        Newstate.cartData[index].number=1
                    }else{
                        Newstate.cartData[index].number=Newstate.cartData[index].number*1-1;
                    }
                }
            }else{
                Newstate.cartData.splice(index,1);
            }
            return Newstate;
        default:
            return state;
    }
}
const SiteReducer=function (state={siteData:[]},action) {
    switch (action.type){
        case "SITE_INIT_DATA":
            var Newstate=Object.assign({},state,{siteData:action.siteData})
            return Newstate;
            break;
        default:
            return state;
    }
}

const listReducer=function(state={leftNavList:[],classData:[],listData:[],value:0},action){
    // console.log(action.type);
    switch (action.type){
        case "getNavData":
            var  newState=Object.assign({},state,{leftNavList:action.leftNavList});
            return newState
            break;
        case "getClassData":
            var  newState=Object.assign({},state,{classData:action.classData});
            return newState
            break;
        case "changeClassData":
            var  newState=Object.assign({},state,{classData:action.classData});
            return newState
            break;
        case "getListData":
            var  newState=Object.assign({},state,{listData:action.listData});
            return newState
            break;
        case "changeListData":
            console.log(action.listData);
            var  newState=Object.assign({},state,{listData:action.listData});
            console.log(newState);
            return newState
            break;
        case "changeValue":
            var  newState=Object.assign({},state,{value:action.value});
            return newState
            break;
        default:
            return state;
    }
}
const collectReducer=function(state={collectData:[]},action){
    switch (action.type){
        case "DETAIL-COLLECT":
            var  newState=Object.assign({},state,{collectData:action.collectData});
            return newState
            break;
        case "DETAIL-COLLECTAA":
            return newState.collectData;
;            break;
        default:
            return state;
    }
}
const cartReducer=function(state={cartData:[]},action){
    switch(action.type){
        case "DETAIL-ADD-CART":
            var  newState=Object.assign({},state,{cartData:action.cartData});
            return newState
            break;
        default:
            return state;
    }
}

export {HomeReducer,MoneyReducer,CookReducer,CartReducer,SiteReducer,listReducer,collectReducer,cartReducer}