export function Name(props) {
    console.log('rendered')
const div = <span>abc</span> 
return div
}

function Text(props) {
    
 

  return (
     
    <p className={props.className}>Tekstas {props.children} </p>
  );
}

export default Text;
