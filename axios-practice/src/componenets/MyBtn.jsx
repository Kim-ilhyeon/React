

function MyBtn({ clickHandler, text }) {
    return (
        <>
            <button style={{border: 'solid 1px plum', color: 'plum', backgroundColor: 'white'}} onClick={clickHandler}>{text}</button>
        </>
    );
}
export default MyBtn;