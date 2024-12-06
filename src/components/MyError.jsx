import { Alert,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyError = () => {
    const navigate=useNavigate()
  return (
    <>
      <Alert className="text-warming">
        ATTENZIONE! la pagina cercata non esiste
      </Alert>
      <Button variant="outline-dark" onClick={()=>{ navigate("/")}}>Torna in Home</Button>
    </>
  );
};
export default MyError;
