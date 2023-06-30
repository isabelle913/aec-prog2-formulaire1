import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Input from "./Input";
import Button from "react-bootstrap/Button";

const CardForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (newValue, id) => {
    //console.log("CardForm", newValue, id);

    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Stack gap={3}>
        <Input
          value={formData.firstName}
          id="firstName"
          onChange={onChange}
          placeholder="Prénom"
        />
        <Input
          value={formData.lastName}
          id="lastName"
          onChange={onChange}
          placeholder="Nom de famille"
        />
        <Input
          value={formData.email}
          id="email"
          onChange={onChange}
          type="email"
          placeholder="Email"
        />
        <Input
          value={formData.password}
          id="password"
          onChange={onChange}
          type="password"
          placeholder="Mot de passe"
        />
        <Button type="submit" variant="primary">
          Soumettre
        </Button>
        <div>
          <small>
            En cliquant 'Soumettre' tu acceptes les termes et conditions
          </small>
        </div>
      </Stack>
    </Form>
  );
};

export default CardForm;
