import React  from 'react';
import {IndexLink} from 'react-router';
import NavLink from './navLink';
import {Tabs,Button,Row,Col} from 'antd';
/*
 * @class Navigation `导航`组件
 */
export default class Navigation extends React.Component {
    constructor() {
        super();
    }
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div>
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink to="/one-day/">
                            All&nbsp;
                            <Button shape="circle" size="small">{this.props.allMemos}</Button>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/one-day/todo">
                            New Event&nbsp;<span>{this.props.todoNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/one-day/doing">
                            In progress<span>{this.props.doingNumber}</span>
                        </NavLink>

                    </Col>
                    <Col span={6}>
                        <NavLink to="/one-day/done">
                            Done<span>{this.props.doneNumber}</span>
                        </NavLink>
                    </Col>
                </Row>
                {this.props.children}
            </div>
        )
    }
}
