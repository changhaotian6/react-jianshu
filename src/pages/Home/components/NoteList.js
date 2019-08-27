import React, { Component, Fragment } from 'react';
import { 
	List,
 	NoteListItem, 
 	NoteListItemImg,
 	NoteListItemTitle, 
 	NoteListItemAbstract, 
 	NoteListItemMeta 
 } from '../style';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';

class NoteList extends Component {
	render() {
		console.log(this.props)
		const list = (this.props.list.toJS());
		console.log(list)
		return (
			<List>
				{list.map(item => {
					return (
						<NoteListItem key={item.id}>
							<NoteListItemImg src={item.imgUrl}></NoteListItemImg>
							<NoteListItemTitle>{item.title}</NoteListItemTitle>
							<NoteListItemAbstract>
								{item.desc}		      
						    </NoteListItemAbstract>
							<NoteListItemMeta>3fsdasdfdfs</NoteListItemMeta>
						</NoteListItem>
					)
				})}
			</List>
		)
	}
	componentDidMount() {
		this.props.getHomeList();
	}
}
const mapStateToProps = (state) => {
	return {
		list: state.getIn(['HomeReducer', 'list'])
	}
};
const mapDispathToProps = (dispath) => {
	return {
		getHomeList() {
			dispath(actionCreators.getHomeList());
		}
	}
};
export default connect(mapStateToProps, mapDispathToProps)(NoteList);
