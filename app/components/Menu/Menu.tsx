import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface IProps {
    handleSidebar: (isOpen: boolean) => void;
}

const Menu = ({ handleSidebar }: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleButton = () => {
        handleSidebar(!isOpen);
        setIsOpen((prev) => !prev);
    }
    return (
        <div>
            <button
                className=" top-6 right-4 text-3xl  "
                onClick={handleButton}
            >
                {isOpen ? <IoCloseCircleOutline /> : <FiMenu />}
            </button>
        </div>
    )
}

export default Menu
