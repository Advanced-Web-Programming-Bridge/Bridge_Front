import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style/footer.css";

const Footer = () => 
<footer className="page-footer font-small blue pt-4">
        <div className="col-md-12">
        <h2 className="text-uppercase">Team Bridge</h2> <br/>
            <p>Team Leader : Nam Seunghyun | Business License : 000-00-0000</p>
            <p>Address : Gachon University \ CS : +82 (0)0-000-0000, Fax : +82 (0)0-000-0000</p>
        </div>

    <div className="footer-copyright text-center py-3">
        <div> Copyright ⓒ Team Bridge</div>
    </div>

</footer>

export default Footer