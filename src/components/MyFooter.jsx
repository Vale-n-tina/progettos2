import { Container, } from "react-bootstrap";

const MyFooter=()=>{
    const currentYear = new Date().getFullYear()
    return(
        
        <Container className="text-center py-3">
          <p className="mb-0">© {currentYear} My Website | Questo è il mio sito del meteo</p>
          <small>Follow us on 
            <a href="https://twitter.com" className="text-light ms-1">Twitter</a>, 
            <a href="https://facebook.com" className="text-light ms-1">Facebook</a>
          </small>
        </Container>
      
    )
}
export default MyFooter