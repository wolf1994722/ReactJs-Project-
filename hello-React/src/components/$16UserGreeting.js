import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome Vishal</div>;

    //     return this.state.isLoggedIn ? <div>Welcome Vishal</div> : <div>Welcome Guest</div>

    //     let message
    //     if(this.state.isLoggedIn)
    //         message = 'Welcome Vishal'
    //     else
    //         message = 'Welcome Guest'
    //     return (
    //         <div>
    //             {message}
    //         </div>
    //     )

    //     if (this.state.isLoggedIn) {
    //       return (
    //         <div>
    //           <div>Welcome Vishal</div>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div>
    //           <div>Welcome Guest</div>
    //         </div>
    //       );
    //     }
  }
}

export default UserGreeting;
