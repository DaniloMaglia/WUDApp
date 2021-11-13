import React from 'react';
import { ChatListElement } from '..';

export class ChatList extends React.Component {
    private activeChatList: JSX.Element[] = [];

    public gatherActiveChats() { // TODO: Fare in modo che li prenda da firebase (Manca la richiesta nell'API)
        //this.activeChatList = [];
        this.activeChatList = [
            <ChatListElement name="maglia danilo" />,
            <ChatListElement name="biagioni giacomo" />,
            <ChatListElement name="petru marincas marcel" />,
            <ChatListElement name="mattia ordonselli" />,
            <ChatListElement name="sabbatini nicola" />,
        ]

        // FIXME: "Warning: Each child in a list should have a unique "key" prop."
    }

    render() {
        this.gatherActiveChats(); // TODO: Viene chiamato ogni volta che renderizza nuovamente la pagina (Capire se è ottimizzato)
        return (
            <div className={''}>
                <span className={'items-center justify-center h-20 shadow-lg w-full rounded-2xl text-4xl font-semibold text-center text-indigo-500 uppercase py-2'}>contacts</span>
                <div className={'items-center overflow-y-hidden overflow-x-hidden text-center'}>
                    {this.activeChatList}
                </div>
            </div>
        );
    }
}