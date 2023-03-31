import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModel({ modelOpened, setModalOperand }) {

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
               <PostShare/>
            </Modal>
        </>
    );
}

export default ShareModel;