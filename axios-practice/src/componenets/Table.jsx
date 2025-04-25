

function TableHead({ typeList }) {
    return (
        <>
            <thead>
                <tr>
                    {
                        typeList.map((type, index) => {
                            return (
                                <th key={"type_" + index}>{type}</th>
                            )
                        })
                    }
                </tr>
            </thead>
        </>
    );
}

function TableBody({ dataList, keyName }) {
    return (
        <>
            <tbody >
                {
                    dataList.users.map((user, index) => {
                        return (
                            <tr key={keyName + index}>

                                {
                                    Object.keys(user).map((key, index) => {
                                        return (<td key={index}>{user[key]}</td>)
                                    })
                                }

                            </tr>
                        );
                    })
                }
            </tbody>
        </>
    );
}


function Table({ typeList, dataList, keyName }) {
    return (
        <>
            <table style={{ border: 'solid 1px plum' }}>
                <TableHead typeList={typeList} />
                <TableBody dataList={dataList} keyName={keyName} />
            </table>
        </>
    );
}
export default Table;