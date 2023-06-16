import React, { useState } from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import "./paymentform.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../axios";

const PaymentPage = () => {
  const location = useLocation();
  const [price, setPrice] = useState(location.state.pricePerPers);
  const [flight_ID, setflight_ID] = useState(location.state.flight_ID);
  const [contactEmail, setcontactEmail] = useState(location.state.contactEmail);
  const [contactPhone, setcontactPhone] = useState(location.state.contactPhone);
  const [contactAdress, setcontactAdress] = useState(
    location.state.contactAdress
  );
  const [contactPostcode, setcontactPostcode] = useState(
    location.state.contactPostcode
  );
  const [contactCity, setcontactCity] = useState(location.state.contactCity);
  const [contactCountry, setcontactCountry] = useState(
    location.state.contactCountry
  );
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const res = await axios.post("/confirmations", {
        flight_ID,
        contactEmail,
        contactPhone,
        contactAdress,
        contactPostcode,
        contactCity,
        contactCountry,
      });

      console.log(res);
      if (res) {
        alert(
          "Your flight has been booked succefuly .. Thank you for using our website :) "
        );
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Define initial values for the form fields
  const initialValues = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  };

  return (
    <div className="homeuinfo">
      <div className="homeContaineruinfo" style={{ background: "white" }}>
        <Styles
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <h1 style={{ fontWeight: "bold", color: "#084593" }}>PAYMENT</h1>

          <p style={{ maxWidth: "460px" }}>
            Please fill in your Card information to pay for your membership
            costs to our association
          </p>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues} // Set initial values for the form fields
            render={({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              active,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Card
                    number={values.number || ""}
                    name={values.name || ""}
                    expiry={values.expiry || ""}
                    cvc={values.cvc || ""}
                    focused={active}
                  />

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p
                      style={{
                        marginLeft: "20px",
                        marginRight: "165px",
                        fontWeight: "bold",
                      }}
                    >
                      TOTAL AMOUNT TO PAY
                    </p>
                    <span style={{ color: "#084593", width: "21%" }}>
                      {price} TND
                    </span>
                  </div>

                  <div>
                    <Field
                      name="number"
                      component="input"
                      type="text"
                      pattern="[\d| ]{16,22}"
                      placeholder="Card Number"
                      format={formatCreditCardNumber}
                      maxLength="19"
                      required
                    />
                  </div>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <Field
                      name="expiry"
                      component="input"
                      type="text"
                      pattern="\d\d/\d\d"
                      placeholder="Valid Thru"
                      format={formatExpirationDate}
                      maxLength="5"
                      style={{ width: "62%" }}
                      required
                    />
                    <Field
                      name="cvc"
                      component="input"
                      type="text"
                      pattern="\d{3,4}"
                      placeholder="CVC"
                      format={formatCVC}
                      maxLength="3"
                      required
                    />
                  </div>

                  <div className="buttons">
                    <button
                      className="pure-material-button-contained"
                      style={{ background: "#084593", marginTop: "1px" }}
                    >
                      Submit
                    </button>
                    <button
                      className="pure-material-button-contained"
                      style={{
                        background: "#DEDEDE",
                        fontSize: "14px",
                        padding: "0",
                      }}
                      type="button"
                      onClick={form.reset}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              );
            }}
          />
        </Styles>
      </div>
    </div>
  );
};

export default PaymentPage;
