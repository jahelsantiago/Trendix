import React, { useEffect, useState } from 'react'
import "./statsRow.css"
import PostiveStock from "../images/positive_stock.svg"
import NegStock from "../images/neg_Stock.svg"
const StatsRow = ({key,name,price,openPrice}) => {
            
    let percentage = (((openPrice - price) / openPrice)*100).toFixed(2)
    let isPositive = true
    if(Math.sign(percentage) === 1){
        isPositive = true
    }else{
        isPositive = false
    }


        

    return (
        <div className = "statsRow">
            <div className="row__intro">
                <h1>{name}</h1>
                <p></p>
            </div>
            <div className="row__chart">
                <img src={isPositive?PostiveStock:NegStock} alt="" width = "70vw"/>
            </div>
            <div className="row__numbers">
                <p className="row__price">${price}</p>
                <p className={isPositive?"green":"red"}>% {percentage}</p>
            </div>
        </div>
    )
}

export default StatsRow
