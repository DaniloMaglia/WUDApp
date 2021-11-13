import './static/css/App.css';
import { Card, ChatList } from "./wud";

function App() {
  	return (
	  	<div className="h-screen m-5 grid grid-cols-12 gap-12">
			<div className="col-span-1 "/>
			<Card width="3" color="white" >
                <ChatList />
			</Card>
			<Card width="7" color="white">
				<p>Chat generale</p>
			</Card>
			<div className="col-span-1" />
		</div>
	);
}



export default App;
