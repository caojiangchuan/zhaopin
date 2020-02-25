import React, { Component } from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="listCom">
                    <div className="listComtop">
                        <span>最新职位</span>
                        <span>更多</span>
                    </div>
                    <div>
                        {
                            this.props.list.map((item, key) => {
                                return (<div key={key} className="listLoop"><span>{item.job}</span><span>{item.city}</span><span>{item.time}</span></div>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}