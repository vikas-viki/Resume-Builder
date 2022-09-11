import { Paper, Typography, Divider, Button } from '@mui/material';
import React from 'react';
import InputComponent from './InputComponent';
import "../Styles/KeySkillsComponent.css";



function KeySkillsComponent(props) {
    const [error, setError] = React.useState(null);
    
    let skillFields = ["text", "text", "text"];

    const addNewField = () => {
        console.log(skillFields)
        skillFields.push('text');
    }
    return (
        <Paper className='Key-skills-paper'>
            <Typography
                variant='h6'>
                Key Skills
            </Typography>
            <Divider />
            <div className='key-skills-form-feilds'>
                {skillFields.map((skill) =>{
                    return( <InputComponent
                            type='text'
                            multiline={false}
                            value={skill}
                            setValue={props.setFirstName}
                            error={error ? error.first_name_error : false}
                            />)
                    })}
            </div>
            <Button className="add-new-btn" variant="text" onClick={addNewField}>
                Add new
            </Button>
        </Paper>
    )
}

export default KeySkillsComponent