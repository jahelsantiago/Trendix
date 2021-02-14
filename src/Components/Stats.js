import React from 'react'
import "./stats.css"
import {useState, useEffect} from "react"
import axios from "axios"
import StatsRow from "./StatsRow.js"

const TOKEN = "c0k32bv48v6qqehfr5rg";
const BASE_URL = "https://finnhub.io/api/v1/quote"

const Stats = () => {
    
    const [StockData, setStockData] = useState([])

    const getStocks = (stock) =>{
        return axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=${TOKEN}`)
        .catch(e => console.log(e))    
    }

    useEffect(() => {
        let tempStockData = []
        const stockList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let promises = []
        
        stockList.map(stock =>{
            promises.push(
                getStocks(stock)
                .then( res => {                    
                    tempStockData.push({
                        name:stock,
                        ...res.data
                    })
                })
            )
        })        
        
        Promise.all(promises).then(()=>{
            setStockData(tempStockData)
        })
    }, [])
    
    return (
        <div className = "stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows"> 
                        
                    </div>
                </div>
                <div className="stats__header">
                    <p>List</p>
                </div>
                <div className="stats__rows"> 
                        {console.log(StockData)}
                        {StockData.map((stock)=>{                                                        
                            return <StatsRow key = {stock.name} name = {stock.name} price = {stock.c} openPrice = {stock.o} />
                        })}
                    </div>

            </div>
        </div>
    )
}

export default Stats