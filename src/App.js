import React, { Component } from 'react';
import './App.css';
import img from './Capture.JPG';
class App extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            surname:"",
            email:"",
            password:"",
            selected:"",
            date:"day",
            month:"month",
            year:"year",
            eemail:"",
            epassword:""
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === "") {
            alert("enter name");
        }else if (this.state.surname === "") {
            alert("enter surname");
        }
        else if (this.state.email === "") {
            alert("enter email");
        } else if (this.state.password === "") {
            alert("enter password");
        } else if(this.state.selected===""){
            alert("please select gender")
        }
        else if(this.state.date==="day" || this.state.month==="month" || this.state.year==="year"){
            alert("please select date of birth")
        }
        else {
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    surname: this.state.surname,
                    email: this.state.email,
                    password: this.state.password,
                    gender: this.state.selected,
                    date:this.state.date,
                    month:this.state.month,
                    year:this.state.year
                })
            })
                .then(function (response) {
                    console.log(response);

                }).catch(function (error) {
                console.log(error);
            });
        }

    }
    onClick = (e) => {
        e.preventDefault();
        if (this.state.eemail === "") {
            alert("enter email");
        }
        else if(this.state.epassword===""){
            alert("enter password")
        }
        else{
            fetch('http://localhost:3001/users/'+ this.state.name, )
                .then(function(response) {
                    return response.json();

                }).then(data =>{
                console.log(data);
                if(data[0].password===this.state.epassword){
                    this.props.history.push('/users');
                }
                else {
                    alert("invalid credentials")
                }

            }).catch(function(error) {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div className="color2">
                <div className="App">
                    <span className="fbfont"><b>facebook</b></span>

                    <form className="align">
                <span className="arrange">
                <span className="input2"> Email or Phone:  </span>
                <span className="input3"> Password: </span><br/><input className="input2" type="text" placeholder="email/phone" value={this.state.eemail} onChange={(e)=>{this.setState({...this.state.eemail,eemail:e.target.value})}}></input>
                    <input type="password" placeholder="password"  value={this.state.epassword} onChange={(e)=>{this.setState({...this.state.epassword,epassword:e.target.value})}}></input>
              <button className="button2" onClick={this.onClick}>Log in</button>
                     </span>
                    </form>

                </div>
                <div>
          <span className="color"><h2>Facebook helps you connect and share with the people in your life.
          </h2><img src={img} width={"100%"}/></span>
                    <span className="color1"><form>
              <h1><b>Create an account</b><br/></h1>
              <p><h4>It's free and always will be.</h4></p>
                <input className="input1" type="text" placeholder="First name" value={this.state.name} onChange={(e)=>{this.setState({...this.state.name,name:e.target.value})}}></input>
              <input className="input1" type="text" placeholder="Surname" value={this.state.surname} onChange={(e)=>{this.setState({...this.state.surname,surname:e.target.value})}}></input><br/><br/>
                <input className="input1" type="text" placeholder="Mobile number or email address" size="47"  value={this.state.email} onChange={(e)=>{this.setState({...this.state.email,email:e.target.value})}}  ></input><br/><br/>
                <input className="input1" type="password" placeholder="New password" size="47" value={this.state.password} onChange={(e)=>{this.setState({...this.state.password,password:e.target.value})}}></input><br/>
              <p>Birthday</p>
              <select name="date" value={this.state.date} onChange={(e)=>{this.setState({...this.state.date,date:e.target.value})}}>
                  <option value="day">Day</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13" >13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24" >24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
              </select>

               <select  name="month" value={this.state.month} onChange={(e)=>{this.setState({...this.state.month,month:e.target.value})}} >
                   <option value="month">Month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option  value="August">August</option>
    <option  value="September">September</option>
    <option  value="October">October</option>
    <option  value="November">November</option>
    <option  value="December">December</option>

  </select>
               <select  name="year" value={this.state.year} onChange={(e)=>{this.setState({...this.state.year,year:e.target.value})}} >
                   <option value="year">Year</option>
                   <option value="1993">1993</option>
                   <option value="1994">1994</option>
                    <option value="1995">1995</option>
                   <option value="1996">1996</option>
                   <option value="1998">1998</option>
                   <option value="1999">1999</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
                   <option value="2012">2012</option>
      <option value="2013">2013</option>
                       <option value="2014">2014</option>    <option value="2015">2015</option>    <option value="2016">2016</option>
               </select>
              <h6> <a href="#" title="Providing your date of birth helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your Profile. For more details, please visit our Data Policy.">why do i need to provide<br/> my date of brith </a>
              <br/></h6>
              <div className="sty">
              <input type="radio" id='male' name='myRadio' value='male' checked={this.state.selected === 'male'} onChange={(e) => this.setState({ selected: e.target.value })}/> <b>Male</b>
              <input type="radio" id='female' name='myRadio' value='female' checked={this.state.selected === 'female'} onChange={(e) => this.setState({ selected: e.target.value })}/><b> Female</b>
                  <h6 >By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a> and<br/> <a href="#"> Cookie Policy</a>. You may receive SMS notifications from us and<br/> can opt out at any time.</h6>
              <button className="button1" onClick={this.onSubmit}>Sign Up</button>
              </div>

            </form>
         </span>
                </div>
            </div>
        );
    }
}

export default App;