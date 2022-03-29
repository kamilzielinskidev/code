import { ChangeEvent, FC, useState } from 'react';

import { pipe, S } from '@mobily/ts-belt';
import { Button, TextField, Typography } from '@mui/material';

import { getInputValue } from '../common/helpers';

const CreateView: FC = () => {
    const [roomName, setRoomName] = useState("");

    const changeRoomName = (e: ChangeEvent<HTMLInputElement>) =>
        pipe(e, getInputValue, setRoomName);

    const isNoRoomName = S.isEmpty(roomName);

    return (
        <div className="flex flex-col py-2">
            <Typography variant="h4">Create a room</Typography>
            <TextField
                className="mt-8"
                label="Room code"
                variant="outlined"
                value={roomName}
                onChange={changeRoomName}
            />
            <Button className="mt-8" variant="contained" disabled={isNoRoomName}>
                Create a room
            </Button>
        </div>
    );
};

export default CreateView;
