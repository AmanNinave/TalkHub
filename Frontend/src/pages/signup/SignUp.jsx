import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500' > TalkHUB</span>
                </h1>

                <form action="">
                    <div >
                        <label className='label p-2' >
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />

                    </div>

                    <div >
                        <label className='label p-2' >
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />

                    </div>
                    <div>
                        <label className='label p-2' >
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2' >
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
                    </div>

                    {/* Gender Check box */}

                    <GenderCheckbox/>
                    
                    <a href="#" className='p-1 text-sm hover:underline hover:text-blue-600 mt-0 inline-block'>
                        Already have an account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp