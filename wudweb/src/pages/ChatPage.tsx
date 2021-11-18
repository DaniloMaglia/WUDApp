import React from "react";
import { Card, ChatList } from "../wud";

export class ChatPage extends React.Component {
    render() {
        return(
            <div className="h-screen m-5 grid grid-cols-12 gap-12">
			    <div className="col-span-1 "/>
			    <Card width="3" color="white" >
                    <ChatList/>
			    </Card>
			    <Card width="7" color="white">
			    	<p>Chat generale</p>
			    </Card>
			    <div className="col-span-1" />
		    </div>
        );
    }
}