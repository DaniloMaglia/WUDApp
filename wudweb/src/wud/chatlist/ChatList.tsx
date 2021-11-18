import React from 'react';
import { ChatListElement } from '.';

export class ChatList extends React.Component {
    private activeChatList!: JSX.Element[];

    public gatherActiveChats() { // TODO: Fare in modo che li prenda da firebase (Manca la richiesta nell'API)
        this.activeChatList = [];
        this.activeChatList.push(<ChatListElement name="maglia danilo" />);
        this.activeChatList.push(<ChatListElement name="petru marcel marincas" />);

        // FIXME: "Warning: Each child in a list should have a unique "key" prop."
    }

    render() {
        this.gatherActiveChats(); // TODO: Viene chiamato ogni volta che renderizza nuovamente la pagina (Capire se è ottimizzato)
        return (
            <div className={''}>
                <p className={'shadow-lg rounded-b-2xl text-4xl font-semibold text-center text-indigo-500 uppercase py-2'}>chat</p>
                <div className={'flex flex-col items-center divide-y overflow-y-hidden overflow-x-hidden text-center'}>
                    {this.activeChatList}
                </div>
            </div>
        );
    }
}