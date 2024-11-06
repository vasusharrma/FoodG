
import {Component} from 'react';

class AboutUser extends Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Vasu",
                bio:"kabutar ja"
            },
            sUserName:this.props.userName,
            shouldFetch:false
        };
    }

    async componentDidMount(){
        const {sUserName} = this.state;
        const getData = await fetch(` https://api.github.com/users/${sUserName}`);
        const dataToJson = await getData.json();

        this.setState({
            userInfo:dataToJson,
            sUserName:"",
        })

            console.log("is fetched " , dataToJson);

    }


   async componentDidUpdate(){


        const {sUserName , shouldFetch} = this.state;
        console.log("shouldfetch  " , shouldFetch);
        if(shouldFetch === true){
            const getData = await fetch(` https://api.github.com/users/${sUserName}`);
            const dataToJson = await getData.json();
            this.setState({
                userInfo:dataToJson,
                shouldFetch:false,
                sUserName:"",
            })
        }

   }

    render(){

        const {name , bio , location , avatar_url } = this.state.userInfo;
        const{sUserName} = this.state;

        console.log(this.state.userInfo);
        return(
            <div className='user_about_outside'>
            <div className='user_about_btn'>
            <input type='text'  onChange = {
                (e) => {
                    this.setState(
                        {
                            sUserName:e.target.value,
                        }
                    )
                }
            } value={sUserName} />
        <button className='resBtn' onClick={
            () => {
                this.setState({
                    shouldFetch:true,
                })
            }
        } >Search User</button>
            </div>
           <div className="user_about">
                   <div className="user_img">
                       <img src={avatar_url}/>
               </div>
               <h4 className='user_name'>{name}</h4>
               <p className='user_bio'>{bio}</p>
               <p className='user_location'>{location}</p>
                </div>
            </div>
        )
    }

}
export default AboutUser;

