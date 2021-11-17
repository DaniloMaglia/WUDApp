import React from 'react';
import { Card } from '..';
export class ChatListElement extends React.Component<{name : string}> {
    render() {        
        return (
            <div className={'w-full py-4 hover:shadow-xl hover:scale-x-105 transform cursor-pointer border-b-2'}>{this.props.name}</div>
        );
    }
}