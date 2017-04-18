import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {Button, Input} from 'antd';
/*
 * @class Header `头`组件
 */
class Header extends Component {
    constructor(props) {
        super(props);
        /*
        *  hidden,hint属性判断用户输入空字符
        */
        this.state = {
            hidden: true,
            hint: ''
        }
    }
    /*
     * @method  handleKeyUp 响应键盘事件
     */
    handleKeyUp(e) {
        if (e.keyCode != "13") {
            this.setState({hidden: true})
        }
    }
    /*
     * @method  handleSearch 搜索
     */
    handleSearch(e) {
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.inputnew);
        const text = inputNode.value.trim();
        this.props.onSearch(text);
        inputNode.value = '';
    }
    /*
     * @method  handleClick 添加新事项并对输入字符做出判断
     */
    handleClick(e) {
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.inputnew);
        const text = inputNode.value.trim();
        if (text.length > 20) {
            this.setState({hidden: false})
            this.setState({hint: 'No more than 20 characters'})
        } else if (text != "") {
            this.props.onAdd(text);
            this.setState({hidden: true})
        } else {
            this.setState({hint: 'Hey, you need to input something'})
            this.setState({hidden: false})
        }
        inputNode.value = '';
    }
    render() {
        return (
            <header>
                <section>
                    <form onSubmit={e => this.handleClick(e)}>
                        <label htmlFor="new-todo">One Day</label>
                        <Input onKeyUp={this.handleKeyUp.bind(this)} ref="inputnew" type="text" placeholder="New Event" defaultValue={this.props.text} id="new-todo" style={{
                            width: "40%"
                        }}/>
                        <div>
                            <Button type="default" ghost onClick={e => this.handleClick(e)}>Add</Button>
                            <Button type="default" ghost icon="search" onClick={e => this.handleSearch(e)}>Search</Button>
                        </div>
                    </form>
                </section>
                <div className='hint' style={{
                    display: this.state.hidden
                        ? "none"
                        : "inline-block"
                }}>
                    <div className="test">
                        <span className="bot"></span>
                        <span className="top"></span>
                    </div>
                    <div>
                        {this.state.hint}
                    </div>
                </div>
            </header>
        )
    }
}
Header.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}
export default Header;