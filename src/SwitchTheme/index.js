import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { SwitchButton } from "./styled";
import { useSwitchIcon } from "./useSwitchIcon";

const SwitchTheme = ({ switchTheme }) => {

    const {
        icon,
        setIcon,
    } = useSwitchIcon();

    const onClickSwitch = () => {
        setIcon(prev => !prev);
        switchTheme();
    };

    return (
        <SwitchButton onClick={onClickSwitch}>
            {icon ? <CgSun /> : <HiMoon />}
        </SwitchButton>
    )
};

export default SwitchTheme;