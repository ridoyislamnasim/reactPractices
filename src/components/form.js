import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
export default function Form() {
    const { register, handleSubmit, formState, control } = useForm();
    const { errors } = formState;
    const onSubmit = (data) => {
        console.log('onsumit form ', data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>User Name</label>
                <input type="text" id="userName" {...register("username", {
                    required: 'Username is required'
                })} />
                <p>{errors.username?.message}</p>
                <br /><br />

                <label>User Email</label>
                <input type="text" id="userEmail" {...register("useremail", {
                    required: 'userEmail is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email formate'
                    }
                })} />
                <p>{errors.useremail?.message}</p>

                <br /><br />

                <label>User Name</label>
                <input type="text" id="userName" name="username" />
                <br /><br />
                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </>
    )
}