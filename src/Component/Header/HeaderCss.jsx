import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    Button: {
        background: 'red',
        color: 'yellow',
        padding: '10px',
        marginTop: '50px',
        width: '100px',
        fontSize: '15px',
        fontWeight: 'bolder',
        border: 'none',
        borderRadius: '5px',
        marginLeft: '100px',
        textTransform: 'lowercase',
        cursor: "pointer",
        transition:"0.5s",
        '&:hover': {
            background: 'red',
            transform: "scale(1.2, 1.2)"
        }
    }
});

export { useStyles };