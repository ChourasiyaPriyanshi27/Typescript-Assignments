import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavbarCom extends React.Component {
  // constructor(props:any){
  // super(props);
  state = {
    headList: [],
    isLoading: true,
    searchText: "",
  };

  componentDidMount(): void {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=fd5cfcb491ef4fb5a9a335fa8674627e",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer fd5cfcb491ef4fb5a9a335fa8674627e",
          },
        }
      )
      .then((res) => {
        console.log(res, "...");
        this.setState({ headList: res.data.articles });
      });
  }

  render() {
    const { headList }: any = this.state;
    return (
      <Navbar>
        <Marquee>Test jhdj dsfjk jdhfjs</Marquee>
        <div className="nav">
          <Nav>
            <a href="#" className="p alignleft">
              Search Navbar
            </a>
            <Nav.Link className="p alignleft">Heading</Nav.Link>
            <input type="Submit" className="p alignright" />
            <input type="search" className="p alignright" />
          </Nav>
          
            {/* { headList.map((auth: any, index: any) => {
                return (
                  <div >
                    <div>
                      <p>{auth.source.title}</p>
                      <p>{auth.source.name}</p>
                    </div>
                  </div>
                );
              })
            } */}
        
        </div>
      </Navbar>
    );
  }
}
export default NavbarCom;
