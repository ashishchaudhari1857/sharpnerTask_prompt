import './Display.css';
const Display=(props)=>{
 return (
<>
<ul>
<li>Username: {props.data.username}  Age: {props.data.age}</li>
</ul>
</>
 );

}
export  {Display};