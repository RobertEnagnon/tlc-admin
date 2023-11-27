export const apiUrl = "http://localhost:5000";

export const themeColors = {
    // firstColor: "#3bb077",
    firstColor: "#0fa3b1",
    errorColor: "#ef798a",

}
export const onlineStyle = (prop) =>({
    background: prop ? themeColors.firstColor : themeColors.errorColor,
    color: "#fff",
    padding: 5,
    borderRadius: 5,
    textAlign:'center',
    width: 60
});