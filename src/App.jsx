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
		const issue = this.props.issue;
		return(
			//this IssueRow passes these things on to its children
			//the style and the props below
			//so the issue_id CAN'T be changed to children yet, it just showed the
			//issue title twice, instead of id and title
			<tr>
			{/* TODO, we shouldn't have to paste this into
			each <td> right??*/
				//OH we're gonna do it in the html DONE!
				}
				<td>{issue.id}</td>
				<td>{issue.status}</td>
				<td>{issue.owner}</td>
				<td>{issue.created.toDateString()}</td>
				<td>{issue.effort}</td>
				<td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
				<td>{issue.title}</td>
		
			</tr>
		)
	}
}

//this was coming up as undefined because I had it above the IssueRow class!

//we only do this in development mode, when properties are more likely to change
IssueRow.propTypes = {
	issue_id: React.PropTypes.number,
	//took away .number.isRequired ... was causing an error
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

		const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
		//this table has it's own style,but then it also takes in
		//IssueRow, or children of issue row, which inherit the styles and
		//props
		const borderedStyle = {border: "1px solid silver", padding: 6};
		return(
			//why is there a double curly brace here?

			//the FIRST brace is our "escape into Javascript"
			//the second brace is just an object, the attribute's value
			<table  style={{borderCollapse: "collapse"}}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Status</th>
						<th>Ownder</th>
						<th>Created</th>
						<th>Efford</th>
						<th>Completion Date</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{issueRows}
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
{/* FOR NOW: we're going to just have all our data here in an array, later we'll move
//it to server and then db*/}
const issues = [
	{
		id: 1, status: 'Open', owner: 'James Hetfield', created: new Date('2018-09-27'),
		effort: 5, completionDate: undefined, title: 'Error in console when clicking Add'
	},
	{
		id: 2, status: 'Assigned', owner: 'Dave Mustaine', created: new Date('1987-03-05'),
		effort: 14, completionDate: new Date('1988-03-05'), title: 'Missing bottom border on panel'
	}
];


class IssueList extends React.Component{
	render(){
		return(
			<div>
			<h1>Issue Tracker</h1>
			<IssueFilter/>
			<hr/>
			<IssueTable issues={issues}/>
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

