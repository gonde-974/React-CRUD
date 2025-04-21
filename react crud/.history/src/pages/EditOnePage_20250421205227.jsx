import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'

function EditOnePage() {
    const location = useLocation();
    const { id } = location.state;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');

    const [accounts, setAccounts] = useOutletContext();
    const navigate = useNavigate();

    // Кога ќе се вчита страната, пополни ги полињата со тековните податоци
    useEffect(() => {
        const currentAccount = accounts.find(el => el.id === id);
        if (currentAccount) {
            setName(currentAccount.ime);
            setEmail(currentAccount.email);
            setPhone(currentAccount.phone);
            setCity(currentAccount.city);
        }
    }, [id, accounts]);

    // Кога ќе се кликне Save
    const handleSubmit = e => {
        e.preventDefault();

        const updatedAccounts = accounts.map(acc => {
            if (acc.id === id) {
                return {
                    ...acc,
                    ime: name,
                    emai: email,
                    phone: phone,
                    city: city
                };
            }
            return acc;
        });

        setAccounts(updatedAccounts); // го сетираш новиот список
        navigate('/'); // враќање на почетна
    };

    return (
        <div className='container'>
            <div className='row'>
                <h1>Edit Account</h1>
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
    );
}

export default EditOnePage;
