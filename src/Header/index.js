import React, { Component} from 'react';
import { connect } from 'react-redux';
import {
	HeaderWarpper,
	Logo,
	Nav,
	NavItem,
	SearchAddtion,
	SearchInfo,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	NavSearch,
	SearchIcon,
	Addition,
	Button
} from './style';

import { actionCreators } from './store';

import { CSSTransition } from 'react-transition-group';
// iconfont字体图标
import '../iconfont/iconfont.css';




class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.getListArea = this.getListArea.bind(this);
	}
	render() {
		return (
			<HeaderWarpper>
				<Logo>简书</Logo>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<span className="iconfont iconaa"></span>
					</NavItem>		
					<SearchAddtion>
						<CSSTransition
							in={this.props.focused}
							timeout={300}
							classNames="slide"
						>
							<NavSearch 
								className={this.props.focused? 'focused': ''}
								onFocus={this.props.handleOnFocus.bind(this, this.props.list)}
								onBlur={this.props.handleOnBlur}
							></NavSearch>
						</CSSTransition>
						<SearchIcon>
							<span className={this.props.focused? 'focused iconfont iconfangdajing': 'iconfont iconfangdajing'}></span>
						</SearchIcon>
						{this.getListArea()}
					</SearchAddtion>
				</Nav>
				<Addition>
					<Button className="write">
						<span className="iconfont iconyanjing-copy">写文章</span>
					</Button>
					<Button>注册</Button>
				</Addition>
			</HeaderWarpper>	
		)
	}
	getListArea() {
		const { page, list, mouseIn, total } = this.props;
		const jsList = list.toJS();
		const pageList = [];
		if (jsList.length) {
			if (this.props.focused || mouseIn) {
				for (let i = (page - 1) * 10; i < (page * 10); i++) {
					pageList.push(<SearchInfoItem key={jsList[i]} href="#">{jsList[i]}</SearchInfoItem>);
				}
				return (
					<SearchInfo
						onMouseEnter={this.props.handleMouseEnter}
						onMouseLeave={this.props.handleMouseLeave}
					>
						热门搜索
						<SearchInfoSwitch
							onClick={() => this.props.handleChangePage(page, total, this.spin)}
						>
							<span 
								className="iconfont iconxuanzhuan"
								ref={(spin) => {this.spin = spin}}
							></span>
							换一批
						</SearchInfoSwitch>
						<SearchInfoList>
							{pageList}
						</SearchInfoList>
					</SearchInfo>
				);
			} else {
				return null;
			}
		}
		
	}
}
const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['HeaderReducer', 'focused']),
		list: state.getIn(['HeaderReducer', 'list']),
		page: state.getIn(['HeaderReducer', 'page']),
		total: state.getIn(['HeaderReducer', 'total']),
		mouseIn: state.getIn(['HeaderReducer', 'mouseIn']),
	}
};

const mapDispathToProps = (dispath) => {
	return {
		handleOnFocus(data) {
			const action = actionCreators.onFocus(data);
			dispath(action);
		},
		handleOnBlur() {
			const action = actionCreators.onBlur();
			dispath(action);
		},
		handleChangePage(page, total, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');

			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			console.log(originAngle)

			spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
			const action = actionCreators.changePage(page, total);
			dispath(action);			
		},
		handleMouseEnter() {
			const action = actionCreators.mouseEnter();
			dispath(action);			
		},
		handleMouseLeave() {
			const action = actionCreators.mouseLeave();
			dispath(action);			
		}	
	}
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//