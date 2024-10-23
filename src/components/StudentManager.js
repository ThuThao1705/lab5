import React, { useState } from 'react';
import { Button, Form, Table, Container, Row, Col, Alert } from 'react-bootstrap';

const StudentManager = () => {
  const [students, setStudents] = useState([
    { name: 'Nguyen Van A', code: 'A001', active: true },
    { name: 'Tran Van B', code: 'B002', active: false },
  ]);
  const [newStudent, setNewStudent] = useState({ name: '', code: '', active: false });
  const [selectedCount, setSelectedCount] = useState(0);

  const handleAddStudent = () => {
    setStudents([newStudent, ...students]);
    setNewStudent({ name: '', code: '', active: false });
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleSelectChange = (isSelected) => {
    setSelectedCount(isSelected ? selectedCount + 1 : selectedCount - 1);
  };

  const handleClearAll = () => {
    setStudents([]);
    setSelectedCount(0);
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Student Manager</h1>

      <Form className="mb-4">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter Student Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter Student Code"
              value={newStudent.code}
              onChange={(e) => setNewStudent({ ...newStudent, code: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              label="Active"
              checked={newStudent.active}
              onChange={(e) => setNewStudent({ ...newStudent, active: e.target.checked })}
            />
          </Col>
          <Col>
            <Button onClick={handleAddStudent}>Add</Button>
          </Col>
        </Row>
      </Form>

      <Alert variant="info">Total Selected Students: {selectedCount}</Alert>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Code</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <Form.Check
                  type="checkbox"
                  onChange={(e) => handleSelectChange(e.target.checked)}
                />
              </td>
              <td>{student.name}</td>
              <td>{student.code}</td>
              <td>{student.active ? 'Yes' : 'No'}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteStudent(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="warning" onClick={handleClearAll}>
        Clear
      </Button>
    </Container>
  );
};

export default StudentManager;
