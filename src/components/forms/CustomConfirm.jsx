/* eslint-disable react/prop-types */
import { 
    ConfirmButton,
    ConfirmText,
    ConfirmContainer
} from "./forms.styles";

const CustomConfirm = ({ onConfirm, onClose, show }) => {
    return (
        <ConfirmContainer show={show}>
            <ConfirmText>Are you sure you want to logout?</ConfirmText>
            <div>
                <ConfirmButton onClick={onConfirm}>Yes</ConfirmButton>
                <ConfirmButton onClick={onClose}>No</ConfirmButton>
            </div>
        </ConfirmContainer>
    );
};

export default CustomConfirm;