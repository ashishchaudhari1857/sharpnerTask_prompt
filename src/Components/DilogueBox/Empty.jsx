import './Empty.css'

const Empty = (props) => {
    return (
        <div className="container">
            <div className="header">Warning</div>
            Please enter valid details
            <button type='button' className="btn" onClick={props.WarningHandler}>Okay</button>
        </div>
    );
}

export {Empty };
