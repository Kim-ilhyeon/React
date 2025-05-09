

function Todo({content}) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ marginLeft: '1rem' }}>{content}</h4>
                    <div>
                        <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                        <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;