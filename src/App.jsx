const contentNode = document.getElementById('contents');

class IssueList extends React.Component{
	render(){
		return(
			<div>things will go here</div>
		);
	}
}

/*const continents = ['Savage Land', 'Wakanda', 'Latvertia', 'Danger Room'];
const message = continents.map(c => `Hello ${c}!`).join(" ");
*/
//const component = <p>{message}</p>;
ReactDOM.render(<IssueList />, contentNode);