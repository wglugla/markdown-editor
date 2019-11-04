import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

interface Props {
    userId: string;
}

const UserMenu = (props: Props) => {
    const saveFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection(`users/${props.userId}/articles`)
            .doc()
            .set({
                title: 'a',
                content: 'b'
            })
            .then(() => console.log('zapisano'))
            .catch(e => console.log(`error: ${e}`));
    };
    return (
        <ul>
            {/* <li>
                <button onClick={openLibrary}> Open library </button>
            </li> */}
            <li>
                <button onClick={saveFile}> Save file </button>
            </li>
        </ul>
    );
};

export default UserMenu;
