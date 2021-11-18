import React from "react";

export class LoginForm extends React.Component<{}, {[key : string]: any}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            remember: false 
        };

        this.handleChange = this.handleChange.bind(this);
        this.rememberCredentials = this.rememberCredentials.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {        
        this.setState({[`${event.currentTarget.type}`]: event.currentTarget.value});
    }

    rememberCredentials(event: React.FormEvent<HTMLInputElement>) {
        console.log(`rem ${this.state.remember} going to be ${!this.state.remember}`);
        this.setState({remember: !this.state.remember});
    }

    handleSubmit(event: React.FormEvent) {
        console.log('Inserito un email: ' + this.state['email']);
        console.log('Inserito una password: ' + this.state['password']);

        //TODO: Login request 
        event.preventDefault();
    }

    render() {
        return (
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
                        {/* <input type="hidden" name="remember" value="true" /> */}
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label className="sr-only">Email address</label>
                                <input type="email" placeholder="Email address" value={this.state['email']} onChange={this.handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                            </div>
                            <div>
                                <label className="sr-only">Password</label>
                                <input type="password" placeholder="Password" value={this.state['password']} onChange={this.handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" checked={this.state.remember} onChange={this.rememberCredentials} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                {/* <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a> */}
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}