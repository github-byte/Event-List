import React, { Component } from 'react';
import ReactDom from "react-dom"
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,Button,CardText,CardImgOverlay,Row,Col,CardGroup} from "reactstrap" 
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./index.css"
class App extends Component
{
 
        constructor(props){
            super(props);
            
                    this.state={
                        info:[],
                        des:null
                                }
                                this.onEventSelect = this.onEventSelect.bind(this)    
        }

      
        componentDidMount(){
         
            axios.get("http://localhost:5000/"). then(response => {
               this.setState({info:response.data})
              

              })
              .catch(function (error) {
                console.log(error);
              })
          
        }
        renderEvent(des) {
            if (des != null)
                return(
                    <Card>
                        <CardImg top src={des.img} alt={des.name} />
                        <CardBody>
                          <CardTitle style={{fontWeight:"800",fontSize:"xx-large"}}>{des.name}</CardTitle>
                          <CardText  style={{fontSize:"large"}}>{des.description}</CardText>  
                          <div style={{display:"flex"}}>
                          <CardText> <i class="fas fa-calendar-week"></i>   {des.date},{des.time}</CardText>
                          </div>
                          <Button className="btn btn-success mt-2">Register Now</Button>
                        </CardBody>
                    </Card>
                    
                );
            else
                return(
                    <div></div>
                );
        }
        onEventSelect(e) {
            this.setState({ des: e});
        }
            

render()
   {     return(
<div className="container-fluid " >
    <h1>Events</h1>
    <div className="row">
   
        {this.state.info.map((e)=>{return(
            <div className="col-12 col-lg-3 col-md-6 m-5 ">
            <Card  className="mb-5 img" key={e._id} onClick={()=>{this.onEventSelect(e)}} style={{cursor:"pointer"}}>
            <CardImg width="100%" src={e.img} />
            <CardImgOverlay  >
            <CardTitle className="name">{e.name}</CardTitle>
            </CardImgOverlay>
            <CardTitle className="ml-4 mt-4 mb-4"> <i class="fas fa-calendar-week"></i>        {e.date}     {e.time}</CardTitle>
    
            </Card>
            </div>
           )})}
            
            </div>
         <div className="row">
       <div className="col-lg-8"> {this.renderEvent(this.state.des)}</div>
       </div>
</div>
        );}


}
export default App