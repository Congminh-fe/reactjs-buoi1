import React, {Component} from 'react'

export default class Header extends Component {

    render() {
        return (
            <div style={
                {
                    maxWidth: "1200px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    Height: "40px"

                }
            }>
                <div style={
                        {alignItems: "center"}
                    }
                    className="row">

                    <h3 style={
                            {fontSize: "20px"}
                        }
                        className='col-6'>Start Boostrap</h3>
                    <div style={
                            {justifyContent: "flex-end"}
                        }
                        className="navbar col-6 ">
                        <ul style={
                                {listStyleType: 'none'}
                            }
                            className='row m-0'>
                            <li className='col-4'>Home</li>
                            <li style={
                                    {color: "#FFFFFF8C"}
                                }
                                className='col-4 header_about'>About</li>
                            <li style={
                                    {color: "#FFFFFF8C"}
                                }
                                className='col-4 header_about'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
