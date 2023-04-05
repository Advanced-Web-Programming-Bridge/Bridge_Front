import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => 
<footer className="page-footer font-small blue pt-4">
        <div className="col-md-12">
        <h2 className="text-uppercase">Team Bridge</h2>
            <ul className="list-unstyled row">
                <li className="col-md-3"></li>
                <li className="col-md-2"><a href="#!">Link 1</a></li>
                <li className="col-md-2"><a href="#!">Link 2</a></li>
                <li className="col-md-2"><a href="#!">Link 3</a></li>
                <li className="col-md-3"></li>
            </ul>
            <p>Team Leader : 남승현 | Business License : 000-00-0000</p>
            <p>Address : Gachon University \ CS : +82 (0)0-000-0000, Fax : +82 (0)0-000-0000</p>
        </div>



    <div className="footer-copyright text-center py-3">
        <a href="https://github.com/Advanced-Web-Programming-Bridge"> Copyright ⓒ Team Bridge</a>
    </div>

</footer>

export default Footer