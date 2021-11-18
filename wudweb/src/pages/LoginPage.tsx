import React from "react";
import { Card, LoginForm } from "../wud";

export class LoginPage extends React.Component {
    render() {
        return(
            <div className="h-3/5 m-5 grid grid-cols-12 gap-12">
                <Card width="4" color="red" startFromColumn="5">
                    <LoginForm />
                </Card>
            </div>
        );
    }
}