import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { SelectStatus } from "./../../components/SelectStatus";
import usePetsQuery from "../../hooks/usePetsHooks";
import { List } from "../../components/List";
import { Logout } from "./../../components/Logout";
import { PetsProvider } from "../../providers/refetchProvider";

export const ListContainer = () => {
  const petStatus = [
    { key: 1, id: null, name: "All" },
    { key: 2, id: "AVAILABLE", name: "Available" },
    { key: 3, id: "CHECKEDOUT", name: "Checked Out" },
  ];
  const [selectedStatus, setSelectedStatus] = useState(() => null);

  const { loading, error, data, refetch } = usePetsQuery(
    selectedStatus ? selectedStatus.id : null
  );

  const onSelectStatus = (status) => {
    setSelectedStatus(status);
  };

  const onRefetch = () => {
    refetch();
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Container className="mt-4">
        <Form>
          <Form.Row>
            <SelectStatus
              petStatus={petStatus}
              onSelect={onSelectStatus}
              defaultValue={selectedStatus}
            />
            <div className="ml-auto">
              <Logout />
            </div>
          </Form.Row>
        </Form>
        <PetsProvider value={() => onRefetch()}>
          <List pets={data.allPets} />
        </PetsProvider>
      </Container>
    </>
  );
};
