import Fab from '@mui/material/Fab';
type iconButtonProps ={
iconBtnicon: any,
iconBtncolor: any,
iconBtnlabel: any,
}


export default function IconButtonComp(props: iconButtonProps){
return(
    <>
      <Fab color={props.iconBtncolor} aria-label={props.iconBtnlabel}>
       {props.iconBtnicon}
      </Fab>
    </>
)

}

