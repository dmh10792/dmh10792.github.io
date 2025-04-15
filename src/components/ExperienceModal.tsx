import { Box, Typography } from "@mui/material"
import { JobExperience } from "../types"
import { Dispatch, SetStateAction } from "react"
import Modal from '@mui/material/Modal';

type ModalProps = {
    open: boolean,
    experience: JobExperience,
    setOpen: Dispatch<SetStateAction<boolean>>,
}

const ExperienceModal = ({open, experience, setOpen}: ModalProps) => {

    const bulletPoints = experience.accomplishments.map((point, key) => {
        return <li key={key}>{point}</li>
    })

    const handleClose = () => setOpen(false);

    return (
        <Modal open={open} onClose={handleClose} >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 700,
                    maxHeight: '100%',
                    bgcolor: 'background.paper',
                    outline: 0,
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '2%/5%'
                }}
            >
                <Typography variant={"h4"}> {experience.title} </Typography>

                <Typography variant={"h6"} sx={{marginTop: 1}}> {experience.company} </Typography>

                <Typography variant={"subtitle1"} sx={{marginTop: 1}}> {`${experience.startDate} - ${experience.endDate}`} </Typography>

                <div
                    style={{
                        marginTop: 25,
                        overflowY: 'auto',
                    }}
                >
                    <ul>
                        {bulletPoints}
                    </ul>
                </div>
            </Box>
        </Modal>
    )
}

export default ExperienceModal;