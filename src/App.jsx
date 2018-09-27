const contentNode = document.getElementById('contents');

class BorderWrap extends React.Component{
	render(){
		const borderedStyle = {border: "1px solid silver", padding: 6};
		return(
			<div style={borderedStyle}>
				{this.props.children}
			</div>
		);
	}
}

//so now, if we want to pass down this boderWrap stye, we could wrap any component
//like this:
//<BorderWrap>
//  <ExampleComponent/>
//</BorderWrap>
//.....................THIS WORKS because of this.props.children

class IssueRow extends React.Component{
	render(){
		const borderedStyle = {border: "1px solid silver", padding: 4};
		return(
			//this IssueRow passes these things on to it's children
			//the style and the props below
			<tr>
				<td style={borderedStyle}>{this.props.issue_id}></td>
				<td style={borderedStyle}>{this.props.children}</td>
			</tr>
		)
	}
}

//this was coming up as undefined because I had it above the IssueRow class!

//we only do this in development mode, when properties are more likely to change
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
					{/* we changed these below from:
					   <IssueRow issue_id={1} issue_title="Error etc" />
					   I don't totally know why yet, because of children
					   but don't know the details yet
					   but they work the same
					 */}
					<IssueRow issue_id={1}>
					issue_title="Error in console when clicking Add"</IssueRow>
					<IssueRow issue_id={2}>
					issue_title="Missing bottom border on panel"</IssueRow>
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

