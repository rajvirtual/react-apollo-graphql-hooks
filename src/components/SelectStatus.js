import React from "react";
import { Col, Form } from "react-bootstrap";
export const SelectStatus = ({ petStatus, defaultValue, onSelect }) => {
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
