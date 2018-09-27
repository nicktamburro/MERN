const contentNode = document.getElementById('contents');



class IssueRow extends React.Component{
	render(){
		const borderedStyle = {border: "1px solid silver", padding: 4};
		return(
			//this IssueRow passes these things on to it's children
			//the style and the props below
			<tr>
				<td style={borderedStyle}>{this.props.issue_id}></td>
				<td style={borderedStyle}>{this.props.issue_title}</td>
			</tr>
		)
	}
}

//this was coming up as undefined because I had it above the IssueRow class!
IssueRow.propTypes = {
	issue_id: React.PropTypes.number.isRequired,
	issue_title: React.PropTypes.string
};

class IssueFilter extends React.Component{
	render(){
		return(
			<div>IssueFilter will go here.</div>
		)
	}
}

class IssueTable extends React.Component{
	render(){
		//this table has it's own style,but then it also takes in
		//IssueRow, or children of issue row, which inherit the styles and
		//props
		const borderedStyle = {border: "1px solid silver", padding: 6};
		return(
			<table style={{borderCollapse: "collapse"}}>
				<thead>
					<tr>
						<th style={borderedStyle}>Id</th>
						<th style={borderedStyle}>Title</th>
					</tr>
				</thead>
				<tbody>
					<IssueRow issue_id={1}
					issue_title="Error in console when clicking Add"/>
					<IssueRow issue_id={2}
					issue_title="Missing bottom border on panel"/>
				</tbody>
			</table>
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

