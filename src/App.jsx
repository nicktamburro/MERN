const contentNode = document.getElementById('contents');

class IssueRow extends React.Component{
	render(){
		const borderedStyle = {border: "1px solid silver", padding: 4};
		return(
			<tr>
				<td style={borderedStyle}>{this.props.issue_id}></td>
				<td style={borderedStyle}>{this.propes.issue_title}</td>
			</tr>
		)
	}
}

class IssueFilter extends React.Component{
	render(){
		return(
			<div>IssueFilter will go here.</div>
		)
	}
}

class IssueTable extends React.Component{
	render(){
		return(
			<div>Issue Table goes here</div>
		)
	}
}

class IssueAdd extends React.Component{
	render(){
		return(
			<div>Issue Add goes here</div>
		)
	}
}

class IssueList extends React.Component{
	render(){
		return(
			<div>
			<h1>Issue Tracker</h1>
			<IssueFilter/>
			<hr/>
			<IssueTable/>
			<hr/>
			<IssueAdd />	
			</div>
		);
	}
}

//these arguments say (<what thing?>, <where do we put it?>);
ReactDOM.render(<IssueList />, contentNode);

/*const continents = ['Savage Land', 'Wakanda', 'Latvertia', 'Danger Room'];
const message = continents.map(c => `Hello ${c}!`).join(" ");
*/
//const component = <p>{message}</p>;

