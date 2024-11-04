

import {Component} from 'react';

class AboutUser extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Vasu",
                    location:"Roorkee"
            },
        };
        

    }
    

    async componentDidMount(){
        const{userName}  = this.props;
        const fetchedUser = await fetch(`https://api.github.com/users/${userName}`);
        const userToJson = await fetchedUser.json();

        this.setState({
            userInfo:userToJson,
        });

        console.log(userToJson);


    }
    //
    render(){

        const {name , bio , location , avatar_url } = this.state.userInfo;
        return(
           <div className="user_about">
                   <div className="user_img">
                       <img src={avatar_url}/>
               </div>
               <h4 className='user_name'>{name}</h4>
               <p className='user_bio'>{bio}</p>
               <p className='user_location'>{location}</p>

            </div>
        )
    }

}

export default AboutUser;
