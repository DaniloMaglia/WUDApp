import React from 'react';

export class ContactList extends React.Component {
    render() {
        return (
            <div className={''}>
                <p className={'shadow-lg rounded-b-2xl text-4xl font-semibold text-center text-indigo-500 uppercase py-2'}>contatti</p>
                <div className={'flex flex-col items-center divide-y overflow-y-hidden overflow-x-hidden text-center'}>
                    <p className={'py-4 shadow-sm hover:shadow-md transform hover:scale-105 w-full'}>Contatto 1111111</p>
                    <p className={'py-4 shadow-sm hover:shadow-md transform hover:scale-105 w-full'}>Contatto 2222222</p>
                    <p className={'py-4 shadow-sm hover:shadow-md transform hover:scale-105 w-full'}>Contatto 3333333</p>
                    <p className={'py-4 shadow-sm hover:shadow-md transform hover:scale-105 w-full'}>Contatto 4444444</p>
                    <p className={'py-4 shadow-sm hover:shadow-md transform hover:scale-105 w-full'}>Contatto 5555555</p>
                    <p className={'py-4 shadow-sm hover:shadow-md transform hover:scale-105 w-full'}>Contatto 6666666</p>
                </div>
            </div>
        );
    }
}