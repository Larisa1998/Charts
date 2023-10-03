import './FormData.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormData = (
    {
        formData,
        formAction
    }
    ) => {


    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            {formData.length > 0 &&
                formData.map((data,key) => (
                    <TextField className='my-2' label={data.label} key={key} onChange={(e) => data.setter(e.target.value)} variant="outlined" />
                ))
            }
            <Button className='my-2' variant="outlined" onClick={formAction}>Add</Button>
        </div>
    )
}

export default FormData;