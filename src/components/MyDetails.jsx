import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import MyCard from "./MyCard";

const MyDetails = (props) => {
  const [meteoWeek, setmeteoWeek] = useState(null);
  const [spinner, setspinner] = useState(true);

  const getMeteoWeek = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=8f6cfdee89828a762d2fc0e9157104af`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((weekMeteo) => {
        console.log(weekMeteo);
        setmeteoWeek(weekMeteo);
        setspinner(false)
      })
      .catch((err) => {
        console.log("errore nel recupero dei dati", err);
      });
  };
  useEffect(() => {
    getMeteoWeek();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {spinner && (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )}
    {meteoWeek && (
      <div className="sfondo">
        <Container className=" bg-light mt-5 rounded-4">
          <Row>
            <Col className=" text-start mt-3 ms-4">
              <h6 className=" text-body-tertiary">
                Previsioni della Settimana
              </h6>
            </Col>
          </Row>
          <Container>
            <Row className=" justify-content-around pb-4 ">
              

                <MyCard array={meteoWeek} />
            </Row>
          </Container>
        </Container>
      </div>
    )}
    </>);
};
export default MyDetails;
