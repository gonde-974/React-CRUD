import React from 'react'

function AddAcountPage() {
    return (
        <div className='container'>
            <div className='row'>
                <h1>Add Accounts</h1>
                <div className='col-8 offset-2'>
                    <form>
                        <input type="text" placeholder='name' className='form-control mb-3' />
                        <input type="email" placeholder='email' className='form-control mb-3' />
                        <input type="text" placeholder='phone' className='form-control mb-3' />
                        <input type="text" placeholder='city' className='form-control mb-3' />

                        <button className='btn btn-primary form-control'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddAcountPage