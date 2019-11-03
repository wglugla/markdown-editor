import React from 'react';
import firebase from 'firebase';

interface Props {
    userId: string;
}

const UserMenu = (props: Props) => {
    const openLibrary = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const db = firebase.firestore();
        try {
            const snapshot = await db.collection(`users/${props.userId}/articles`).get();
            console.log(snapshot.docs.map(doc => doc.data()));
        } catch (e) {
            console.log(e);
        }
    };

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
            <li>
                <button onClick={openLibrary}> Open library </button>
            </li>
            <li>
                <button onClick={saveFile}> Save file </button>
            </li>
        </ul>
    );
};

export default UserMenu;
