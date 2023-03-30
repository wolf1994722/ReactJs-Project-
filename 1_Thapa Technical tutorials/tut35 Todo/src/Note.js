import './static/app.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <>
            <div className="card">
                <form>
                    <h2>{props.Title}</h2>
                    <p>{props.Content}</p> 
                    <Button 
                        style={{display : 'inline', margin: '0 auto'}} 
                        variant="outlined" 
                        href="#outlined-buttons"
                        onClick={()=> props.deleteItem(props.id)} >
                        <DeleteIcon/>
                    </Button>
                </form>
            </div>
        </>
    )
}

export default Note