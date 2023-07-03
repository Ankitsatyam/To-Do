import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateDoctorList = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const[Ocupation,setOccupation] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
        else if(name === "occupationName"){
            setOccupation(value)
        }
        else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["occupationName"] = Ocupation
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Book List</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Book Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group ">
                        <label>Book Author's Name</label>
                        <input type="text" className = "form-control" value = {Ocupation} onChange = {handleChange} name = "occupationName"/>
                    </div>
                    <div className = "form-group">
                        <label>Summary</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateDoctorList;
