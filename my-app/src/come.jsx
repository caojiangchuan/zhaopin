import React, { Component } from 'react';
import List from './component/list'

export default class Come extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                job: "网商银行-H5前端开发专家-杭州/北京", city: '哈尔冰', time: '35分钟前'
            },{
                job: "天猫家装-本地线下业务拓展专家-杭州", city: '杭州', time: '22分钟前'
            },{
                job: "蚂蚁金服-产品运营专家 ", city: '北京', time: '40分钟前'
            },{
                job: "阿里集团-飞猪-场景运营专家", city: '杭州', time: '10分钟前'
            },{
                job: "口碑-O2O业务", city: '南京', time: '9分钟前'
            },{
                job: "口碑-O2O业务发展专", city: '南京', time: '9分钟前'
            },{
                job: "口碑-O2O业务发展专家/高级专家-南宁/海口/三亚", city: '南京', time: '9分钟前'
            },{
                job: "口碑-O2O业务发展专家/高级", city: '南京', time: '9分钟前'
            },{
                job: "口碑-O2O业务发展专家/高级专家-南宁/海口/三亚", city: '南京', time: '9分钟前'
            },{
                job: "口碑-O2O业务", city: '南京', time: '9分钟前'
            },{
                job: "口碑-O2O业务发展专家/高级专家-南宁/海口/三亚", city: '南京', time: '9分钟前'
            }]
        }
    }

    componentDidMount(){
   document.title='阿里巴巴招聘'
    }

    render() {
        const menu = ['社招官网', '首页', '社会招聘', '校园招聘', '了解阿里', '个人中心']
        const job = ['热门搜索', 'JAVA', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端']
        return (
            <div>
                <header className="head">
                    <div className="headcContent">
                        <div className="left"><div className="img"><img src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'></img></div><div className="menu">
                            {
                                menu.map((item, key) => {
                                    return <span key={key} className="li">{item}</span>
                                })
                            }

                        </div></div>
                        <div className="right"><div>欢迎来到阿里巴巴集团招聘！</div><div><span>登录</span><span>|</span><span>注册</span></div></div>
                    </div>
                </header>
                <section className="bgimg">
                    <div className="imgContent">
                        <div className="conCenter">
                            <h1>If not now，when?</h1>
                            <h1>If not me，who?</h1>
                            <h2>此时此刻，非我莫属！</h2>
                            <div className="ipt">
                                <input className="input" placeholder="请输入职位关键词"></input>
                                <div className="search">搜索</div>
                            </div>
                            <div>
                                {
                                    job.map((item, key) => {
                                        return <span key={key} className="job">{item}</span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="list">
                        <List list={this.state.list}></List>
                        <div className="two">
                        <div className="twoChoose"><img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png"/></div>
                        <div className="twoChoose svg"><img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"></img></div>

                        </div>
                </section>
                <footer className="foot">阿里巴巴集团 Copyright ©1999-2020 版权所有</footer>
            </div>
        )

    }

}