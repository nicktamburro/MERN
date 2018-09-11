const contentNode = document.getElementById('contents');

/*class IssueList extends React.component{
    render(){
        return (
            <div>This is a placeholder.</div>
        );
    }
}*/

const continents = ['Wu', 'Tang', 'For', 'Ever', 'My', 'Dudes'];
const message = continents.map(c => `Hello ${c}!`).join(' ');

const component = <p>{message}</p>
ReactDOM.render(component, contentNode);

//const continents = ['Africa', 'America', 'Kree Empire', 'Savage Land', 'Wakanda', 'Shaolin'];
//const message = continents.map(c => `Hello ${c}!`).join(' ');
//here we've got a map. "c" is kind of like "i" in a for loop
//we map each element from the continents array onto the message,
//
//when we use the `` backticks, we can use ${} to have a variable, and each value of "c"
//gets inserted in there

//const component = <p>{message}</p>;
