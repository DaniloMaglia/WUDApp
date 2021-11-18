import React from 'react';

export class Card extends React.Component<{ width: string, color: string, startFromColumn?: string}> {
    render() {
        let cName = `col-span-${this.props.width} bg-${this.props.color} shadow-xl border border-gray-200 rounded-xl`;

        if (this.props.startFromColumn != null) {
            cName += ` col-start-${this.props.startFromColumn}`;
        }

        return (
            <div className={cName}>{this.props.children}</div> // py-4 px-8
        );
    }
}

