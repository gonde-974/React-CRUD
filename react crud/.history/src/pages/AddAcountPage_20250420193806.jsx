import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'


function AddAcountPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')

    const [accounts, setAccounts] = useOutletContext()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        setAccounts(prevAccounts => {
            return [...prevAccounts, {
                id: crypto.randomUUID(),
                ime: name,
                email: email,
                phone: phone,
                city: city
            }]
        })

        navigate('/')//koga ke se izvrsi funkcijata da ne vrati na stranicata so path '/'

    }
    return (
        <div className='container'>
            <div className='row'>
                <h1>Add Accounts</h1>
                <div className='col-8 offset-2'>
                    <form onSubmit={handleSubmit}>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='name' className='form-control mb-3' />
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='email' className='form-control mb-3' />
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder='phone' className='form-control mb-3' />
                        <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder='city' className='form-control mb-3' />

                        <button className='btn btn-primary form-control'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddAcountPage