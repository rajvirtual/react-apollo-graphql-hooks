import React from "react";
import { Col, Form } from "react-bootstrap";
export const SelectStatus = ({ defaultValue, onSelect }) => {
  const petStatus = [
    { key: 1, id: null, name: "All" },
    { key: 2, id: "AVAILABLE", name: "Available" },
    { key: 3, id: "CHECKEDOUT", name: "Checked Out" },
  ];
  const setSelect = (e) => {
    e.preventDefault();
    let index = e.target.options.selectedIndex;
    let status = petStatus[index];
    if (onSelect) {
      onSelect(status);
    }
  };

  return (
    <>
      <Form.Group controlId="status">
        <Col>
          <Form.Label>Pet Status:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            as="select"
            defaultValue={defaultValue?.name}
            onChange={(e) => setSelect(e)}
          >
            {petStatus.map((item) => {
              return <option key={item.key}>{item.name}</option>;
            })}
          </Form.Control>
        </Col>
      </Form.Group>
    </>
  );
};
