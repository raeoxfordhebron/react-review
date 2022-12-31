import styles from "./Display.module.css"

function Display(props){
    console.log("Display Rendered")
    return <h1 className={styles.display}>{props.displayValue}</h1>
}

export default Display