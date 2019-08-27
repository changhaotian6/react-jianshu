import styled from 'styled-components';

export const HomeContainer = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`

export const HomeLeft = styled.div` 
	float: left;
	padding-top: 30px;
	width: 640px;
`;

export const HomeRight = styled.div` 
	float: left;
	margin-left: 40px;
	width: 280px;
`;

export const List = styled.ul`
	width: 100%;
`;

export const NoteListItem = styled.li`
	position: relative;
	padding: 15px 0 20px 0;
	width: 100%;
	border-bottom: 1px solid #f0f0f0;
	min-height: 125px;
`;

export const NoteListItemImg = styled.img`
	position: absolute;
	right: 2px;
	top: 20px;
	width: 150px;
	height: 100px;
	border-radius: 3px;
	border: 1px solid #f0f0f0;
`;

export const NoteListItemTitle = styled.a`
    font-size: 18px;
    margin: -7px 0 4px;
    padding-right: 165px;
    display: inherit;
    font-weight: 700;
    line-height: 1.5;
	font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    color: #333;

`;

export const NoteListItemAbstract = styled.p`
    margin: 0 0 8px;
    padding-right: 165px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    box-sizing: border-box;
`;

export const NoteListItemMeta = styled.div`
    font-size: 12px;
    color: #b4b4b4;
`;
