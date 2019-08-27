import React, { Component } from 'react';
import { HomeLeft, HomeRight, HomeContainer } from './style'
import NoteList from './components/NoteList';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
class Home extends Component {
	render() {
		
		return (
			<HomeContainer>
				<HomeLeft>
					
						<NoteList></NoteList>
					
				</HomeLeft>
				<HomeRight></HomeRight>		
			</HomeContainer>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
};
const mapDispathToProps = (dispath) => {
	return {
	}
};
export default connect(mapStateToProps, mapDispathToProps)(Home);