import styled from 'styled-components';

// 导航高度
const NAV_HEIGHT = '56px';

export const HeaderWarpper = styled.div` 
	position: relative;
	height: ${NAV_HEIGHT};
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'
})` 
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	font-size: 19px;
	height: ${NAV_HEIGHT};
	background: url(../../static/images/logo.png);
	background-size: contain;
	text-indent: -999em;
`;

export const Nav = styled.div`
	width: 960px;
	height: ${NAV_HEIGHT};
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	height: ${NAV_HEIGHT};
	padding: 0 15px;
	line-height: ${NAV_HEIGHT};
	font-size: 17px;
	font-weight: 400;
	font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`	
	position: relative;
	top: 8px;
	float: left;
	margin-left: 15px;
	padding-left: 20px;
	padding-right: 30px;
	width: 160px;
	height: 38px;
	border: none;
	outline: none;
	border-radius: 19px;
	background-color: #eee;
	font-size: 14px;
	box-sizing: border-box;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 200px;
	}
	&.slide-enter {
		transition: all .3s linear;
	}
	&.slide-enter-active {
		width: 200px;
	}
	&.slide-exit {
		transition: all .3s linear;
	}
	&.slide-exit {
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: ${NAV_HEIGHT};
`;

export const Button = styled.div`
	float: right;
	margin: 9px 10px 0;
	width: 80px;
	height: 38px;
	line-height: 36px;
	border-radius: 19px;
	border: 1px solid #ec6149b3;
	text-align: center;
	box-sizing: border-box;
	color: #ea6f5a;
	&.write {
		width: 100px;
		background-color: #ec6149;
		color: #fff;
	}
`;

export const SearchAddtion = styled.div`
	position: relative;
	float: left;
	height: ${NAV_HEIGHT};
	
`;

export const SearchIcon = styled.div`
	position: absolute;
	right: 5px;
	top: 12px;
	width: 30px;
	height: 30px;
	.iconfont {
		display: inline-block;
		width: 30px;
		height: 30px;
	}
	.iconfont::before {
	    display: inline-block;
	    width: 30px;
	    height: 30px;
	    font-size: 20px;
	    line-height: 30px;
	    text-align: center;
		border-radius: 18px;
	}
	.focused::before {
		background-color: #969696;
		color: #fff;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 15px 20px 10px 20px;
	border-radius: 3px;
	background-color: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	font-size: 14px;
	color: #969696;
	z-index: 1;
`;

export const SearchInfoSwitch = styled.div`
	position: absolute;
	right: 20px;
	top: 15px;
	font-size: 13px;
	cursor: pointer;
	.iconxuanzhuan {
		float: left;
		font-size: 14px;
		transform-origin: center center;
		transition: all .3s linear;
	}
`;
export const SearchInfoList = styled.div`
	padding-top: 15px;
`;
export const SearchInfoItem = styled.a`
	float: left;
	margin: 0 10px 10px 0;
	padding: 3px;
	border: 1px solid #ddd;
	border-radius: 3px;
	font-size: 13px;
	color: #787878;
	text-decoration: none;
	&:hover {
		border-color: #aaa;
	}
`;
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










