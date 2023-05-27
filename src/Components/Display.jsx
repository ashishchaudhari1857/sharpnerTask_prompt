import './Display.css';
const Display=(props)=>{
 return (
<>
<ul>
<li>Username: {props.data.username}  location:{props.data.loaction}  Age: {props.data.age}</li>
</ul>
</>
 );

}
export  {Display};