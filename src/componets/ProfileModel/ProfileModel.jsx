import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({ modelOpened, setModalOperand }) {

    const theme = useMantineTheme();

    return (
        <>
            <Modal
                title="  "
                opened={modelOpened}
                onClose={() => setModalOperand(false)}
                size="55%"
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,
                }}
            >
                <form className="infoForm">
                    <h3>Your Info</h3>
                    <div>
                        <input type="text" className='infoInput' name="First Name" placeholder='First Name' />
                        <input type="text" className='infoInput' name="Last Name" placeholder='last Name' />
                    </div>
                    <div>
                        <input type="text" className='infoInput' name="workAt" placeholder='Works At' />
                    </div>
                    <div>
                        <input type="text" className='infoInput' name="LivesIn" placeholder='LivesIn' />
                        <input type="text" className='infoInput' name="Country" placeholder='Country' />
                    </div>
                    <div>
                        <input type="text" className='infoInput' name="RelationShip Status" placeholder='Works At' />
                    </div>
                    <div>
                        Profile Image
                        <input type="file" name="profileImg" />
                        Cover Image
                        <input type="file" name="coverImg" />
                    </div>
                    <button className='button infoButton'>Update</button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModel;