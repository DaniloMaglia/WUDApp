import './static/css/App.css';
import {Card} from "./wud/Wud";

function App() {
  	return (
	  	<div className="grid grid-cols-12 gap-12 h-full">
			<div className="col-span-1 "/>
			<Card width="3" color="white" >
				<p>CONTATTI</p>
			</Card>
			<Card width="7" color="white">
				<p>Chat generale</p>
			</Card>
			<div className="col-span-1" />
		</div>
	);
}



export default App;
