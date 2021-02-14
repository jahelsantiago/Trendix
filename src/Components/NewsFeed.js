import "./NewsFeed.css"
import React from 'react'
import Chart from "./Chart"

function NewsFeed() {
    return (
        <div className = "newsFeed">
            <div className="newsFeed__container">
                <div className="chart__section">
                    <div className="newsFeed__prices">
                        <h1>$160,423</h1>
                        <p>+$44.63 (+0.04) Today</p>
                    </div>
                    <div className="newsFeed_chart">
                        <Chart/>                    
                    </div>    
                </div>
                
            </div>

            
        </div>
    )
}

export default NewsFeed
