import React from 'react';

export class ChatListElement extends React.Component<{name : string}> {
    render() {        
        return (
            <div className={'w-full py-4 shadow-sm hover:shadow-md cursor-pointer'}>{this.props.name}</div>
        );
    }
}