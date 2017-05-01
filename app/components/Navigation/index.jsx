import React  from 'react';
import {IndexLink} from 'react-router';
import NavLink from './navLink';
import {Tabs,Button,Row,Col} from 'antd';
import { routeCodes } from '../../routes/RootRouter';

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
                        <NavLink to={ routeCodes.AllMemosRoute }>
                            All&nbsp;
                            <Button shape="circle" size="small">{this.props.allMemos}</Button>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to={ routeCodes.TodoRoute }>
                            New Event&nbsp;<span>{this.props.todoNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to={ routeCodes.DoingRoute }>
                            In progress<span>{this.props.doingNumber}</span>
                        </NavLink>

                    </Col>
                    <Col span={6}>
                        <NavLink to={ routeCodes.DoneRoute }>
                            Done<span>{this.props.doneNumber}</span>
                        </NavLink>
                    </Col>
                </Row>
                {this.props.children}
            </div>
        )
    }
}
