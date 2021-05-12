import {Nav, Navbar} from "react-bootstrap";

function nav() {
    return (
        <Navbar bg="dark" variant="dark" style={{justifyContent: "space-evenly", display: "block"}}>
            <Nav className="d-flex justify-content-around" >
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default nav;