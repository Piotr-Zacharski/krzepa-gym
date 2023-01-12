import {useStyles} from "./styles";
import CustomDrawer from "../Drawer/Drawer";


export default function Layout({children}: any) {
    const styles = useStyles();
    return (
        <>
            <CustomDrawer/>
                <main className={styles.layout}>{children}</main>
        </>
    );
}
