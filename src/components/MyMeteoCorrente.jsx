import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyMeteoCorrente = (props) => {
  const [meteo, setmeteo] = useState(null);
  const [spinner, setspinner] = useState(true);
  const [alert, setalert] = useState(false);

  const getMeteoNow = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8f6cfdee89828a762d2fc0e9157104af`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero dei dati");
        }
      })
      .then((currentMeteo) => {
        console.log(currentMeteo);
        const tempCelsius = (currentMeteo.main.temp - 273.15).toFixed(1);
        const feelsLikeCelsius = (
          currentMeteo.main.feels_like - 273.15
        ).toFixed(1);
        const tempMaxCelsius = (currentMeteo.main.temp_max - 273.15).toFixed(1);
        const tempMinCelsius = (currentMeteo.main.temp_min - 273.15).toFixed(1);

        setmeteo({
          ...currentMeteo,
          temp: tempCelsius,
          feels_like: feelsLikeCelsius,
          temp_max: tempMaxCelsius,
          temp_min: tempMinCelsius,
        });
        setspinner(false);
        setalert(false)
      })
      .catch((err) => {
        console.log("orore", err);
        setalert(true)
        setspinner(false)
        
      });
  };

  useEffect(() => {
    getMeteoNow();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.city]);

  return (
    <> 
    {alert && (
      <Alert className="text-warming">
        ATTENZIONE! la città cercata non esiste
      </Alert>)}
      {spinner && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {meteo && (
        <Container className=" bg-light mt-5 rounded-4">
          <Row>
            <Col className=" text-start mt-3 ms-4">
              <h6 className=" text-body-tertiary">Current Weather</h6>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col className="col-4">
                <Row className=" flex-column">
                  <Col>
                    <h4 className="  col-4 text-primary">{props.city}</h4>
                  </Col>
                  <Col className="d-flex mt-4 ms-3">
                    {meteo.weather[0].description === "snow" && (
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="snow"
                        style={{ width: "50px", height: "50px" }}
                      />
                    )}

                    {meteo.weather[0].description === "clear sky" && (
                      <img
                        src="data:image/png;base64,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"
                        alt="snow"
                        style={{ width: "50px", height: "50px" }}
                      />
                    )}
                    {(meteo.weather[0].description === "broken clouds" ||
                      meteo.weather[0].description === "scattered clouds") && (
                      <img
                        src="data:image/png;base64,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"
                        alt="snow"
                        style={{ width: "50px", height: "50px" }}
                      />
                    )}
                    {meteo.weather[0].description === "light rain"  && (
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="snow"
                        style={{ width: "50px", height: "50px" }}
                      />
                    )}

                    <h1>{meteo.temp}°</h1>
                  </Col>
                </Row>
              </Col>

              <Col className="col-8 mb-5 ">
                <Row className=" flex-column">
                  <Col className=" d-flex justify-content-center">
                    <h6 className=" text-body-tertiary col-4">
                      Percepita {meteo.feels_like}°
                    </h6>
                  </Col>
                  <Col className=" d-flex  justify-content-center mb-4">
                    <i class="fa-solid fa-arrow-up mx-2"> </i>
                    <h6> {meteo.temp_max}°</h6>
                    <i class="fa-solid fa-arrow-down mx-2"></i>
                    <h6> {meteo.temp_min}°</h6>
                  </Col>
                  <Col className=" d-flex  justify-content-center">
                    <i class="fa-solid fa-droplet  mx-2 "></i>
                    <h6 className=" text-body-tertiary me-2"> Umidità</h6>
                    <h6>{meteo.main.humidity}%</h6>
                  </Col>
                  <Col className=" d-flex  justify-content-center">
                    <i class="fa-solid fa-wind  mx-2"></i>
                    <h6 className=" text-body-tertiary me-2"> Wind</h6>
                    <h6>{meteo.wind.speed}km/h</h6>
                  </Col>
                  <Col className=" d-flex  justify-content-center">
                    <i class="fa-solid fa-compass  mx-2"></i>
                    <h6 className=" text-body-tertiary me-2">Pressione</h6>
                    <h6>{meteo.main.pressure}hpa</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
      <Link to="details">
        <div className="btn btn-outline-dark mt-5 px-4"> More Info</div>
      </Link>
    </>
  );
};

export default MyMeteoCorrente;
