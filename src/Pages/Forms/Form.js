import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const RegisterForm=()=>{   
    
    const schema=yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(6).max(60).required(),
        confirmpassword:yup.string().oneOf([yup.ref("password"),null],"not match").required(),
    });

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema),});
    
    const onSubmit=(data)=>{console.log({data});};
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name..." {...register("name")}/>
            <p className='error'>{errors.name?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p className='error'>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p className='error'>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p className='error'>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmpassword")}/>
            <p className='error'>{errors.confirmpassword?.message}</p>
            <input type="submit"/>
        </form>
    );
}