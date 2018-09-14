const contentNode = document.getElementById('contents');

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

//these arguments say (<what thing?>, <where do we put it?>);
ReactDOM.render(<IssueList />, contentNode);