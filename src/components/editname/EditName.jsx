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
    console.log(token, firstName, lastName)

    const handleOpenInput = () => {
        setIsEditing(true);
    };

    const handleSave = () => {

        console.log('setFirstName:', firstName);
        console.log('setLastName:', lastName);
        dispatch(updateProfileAsync({ token, firstName, lastName }));

        // Close the inputs and reset state
        setIsEditing(false);
        // setFirstName('');
        // setLastName('');
    };
    const content = isEditing ? (
        <div className="user-edit-form">
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <button className="user-edit-button" onClick={handleSave}>
                Save
            </button>
        </div>
    ) : (
        <button className="user-edit-button" onClick={handleOpenInput}>
            Edit Name
        </button>
    );
    return content
}