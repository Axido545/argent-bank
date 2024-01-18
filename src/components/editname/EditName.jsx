import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./editname.css"
import { updateProfileAsync } from '../../redux/userSlice';

export default function EditName() {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const token = useSelector(state => state.auth.token)
    const handleOpenInput = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        try {
            dispatch(updateProfileAsync({ token, firstName, lastName }));
            //fermer les input et et vide les champs
            setIsEditing(false);
            setFirstName('');
            setLastName('');

        } catch (error) {
            console.error("erreur durant la mise à jour:", error.message);
        }

    };
    const content = isEditing ? (
        <form onSubmit={handleSave} className="user-edit-form">
            <div className='form-layout'>

                <input
                    type="text"
                    placeholder={firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder={lastName}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

            </div>

            <div className='form-layout'>
                <button className="user-edit-button" type='submit' >
                    Save
                </button>
                <button className="user-edit-button" onClick={handleOpenInput}>
                    Cancel
                </button>

            </div>

        </form>
    ) : (
        <button className="user-edit-button" onClick={handleOpenInput}>
            Edit Name
        </button>
    );
    return content
}