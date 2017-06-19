
import React,{Component} from "react";
import style from "./public-activity.css";
import {Icon} from "antd-mobile";
import {Link} from "react-router"
const Header=(props)=>{
    return <div className={style.header}>
        <Link to={"/"}>
        <div className={style.headerBtn}>{"<"}</div>
            </Link>
        <div className={style.headerTit}>{props.title}</div>
        <div className={style.headerBtn}>
            <Icon type={require("../../svg/share/refresh.svg")}/>
        </div>
    </div>
}


export  default Header;