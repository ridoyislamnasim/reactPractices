import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
export default function Form() {
    const { register, handleSubmit, formState, control } = useForm({
        defaultValues: {
            username: "ridoy islam nsaim"
        }
        // defaultValues: async ()=>{
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        //     const data = await response.json();
        //     console.log(data)
        //     return{
        //         username:'ridoy',
        //         useremail: data.email
        //     }
        // }
    });
    const { fields, append, remove } = useFieldArray({
        name: 'languges',
        control
    })
    const { errors } = formState;
    console.log(errors)
    console.log(errors.name?.firstName.message)
    console.log(errors.useremail?.message)
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
                {/* nestest object */}
                <label>User Name</label>
                <input type="text" id="userName" {...register("name.firstName", {
                    required: 'Username is required'
                })} />
                <p>{errors.name?.firstName?.message}</p>

                <label>User Name</label>
                <input type="text" id="userName" {...register("name.lastName", {
                    required: 'Username is required'
                })} />
                <p>{errors.name?.lastName?.message}</p>

                {/* nestest array */}
                <label>User primaryPhoneNumber</label>
                <input type="text" id="userName" {...register("phoneNumber.0", {
                    required: 'phoneNumber is required'
                })} />
                <p>{errors.phoneNumber?.[0]?.message}</p>

                <label>User secondaryPhoneNumber</label>
                <input type="text" id="userName" {...register("phoneNumber.1", {
                    required: 'phoneNumber is required'
                })} />
                <p>{errors.phoneNumber?.[1]?.message}</p>

                {/* dynamic input fild */}
                <>
                    <label>User programming languges</label>
                    {
                        fields.map((field, index) => {
                            return (<div key={field.id}>
                                <input type='text' {...register(`languges.${index}.number`, {
                                    required: 'phoneNumber is required'
                                })} />
                                {index >= 0 && (
                                    <button type="button" onClick={() => remove(index)}>remove languges</button>
                                )
                                }
                            </div>
                            );
                        })
                    }
                    <button type="button" onClick={() => append( {number : ''})}>Add languges</button>
                    <p>{errors.phoneNumber?.[1]?.message}</p>
                </>
                <label>User Email</label>
                <input type="text" id="userEmail" {...register("useremail", {
                    required: 'userEmail is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email formate'
                    }
                })} />
                <p>{errors.useremail?.message}</p>

                <label>User Name</label>
                <input type="text" id="userName" name="username" />
                <br />
                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </>
    )
}