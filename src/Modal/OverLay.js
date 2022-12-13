import React ,{useState} from "react";
import { useSelector , useDispatch} from "react-redux";
import { actions } from "../store/modalSlice";
import { actions as log} from "../store/auth";
import { useForm } from "react-hook-form";
import style from "./Modal.module.css";
import Button from "../Components/styled/Styled";

const OverLay = () => {
    
    const isOpen = useSelector((state)=>state.modal.isOpen)
    const [formError, setFormError] = useState({
        name:false,
        password:false
    })
    const dispatch = useDispatch()
    const {closeModal} =actions
    const {login} = log

    const users = [
        {name: "john", password: "123AAABBB"},
        {name: "admin", password: "000BBBAAA"},
    ]
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) =>{

       const formData = users.find((e)=>{

        const userPass = data.name === e.name && data.password === e.password;

        if(userPass){
            return true;
        }
        
        
        if(data.name === e.name){
            setFormError((prev)=> ({...prev,name:false}))
            if(data.password !== e.password){
                setFormError((prev)=> ({...prev,password:true}))
                
            }else{
                setFormError((prev)=> ({...prev,password:false}))
            }
        }else{
            setFormError((prev)=> ({...prev,name:true}))
        }
       })
       if(formData){
            dispatch(closeModal())
            dispatch(login())
       }
    };

    return (
        isOpen &&(<div >

            <div className={style.backdrop}  onClick={()=>dispatch(closeModal()) }></div>
            <div className={style.overlay}>
            <form onSubmit={handleSubmit(onSubmit)}>

            <h1>Connection</h1>
            <div className="form-group">
            <label htmlFor="identifiant">identifiant</label>
            <input {...register("name",{ required: true })} placeholder="name" id="identifiant" className="form-control mt-2" />
            {errors.name && <span className="text-danger" > name is required</span>}
            {formError.name && <span className="text-danger" > name is Not aa</span>}


            </div>
            <div className="form-group">
            <label htmlFor="password" className="mt-4">Mot De Pass</label>
            <input {...register("password", { required: true ,minLength:8})} placeholder="password" id="password" className="form-control mt-2" />
            {errors.password && <span className="text-danger" > password is required </span>}
            {formError.password && <span className="text-danger" > name is Not aa</span>}
            </div>

            <Button>Log in</Button>
            </form>
            </div>

        </div>)
    );
};

export default OverLay;
