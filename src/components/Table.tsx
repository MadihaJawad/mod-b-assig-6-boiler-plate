type tableProps = {
    label: string;
    datasource: any[];
    cols:any[];

}
export default function Table(props: tableProps) {
    const {label , datasource, cols}   = props;
    return (
        <div>
        <table className="table table-striped w-100 table-bordered border-success">
            <thead>
                <tr>
                    {cols.map((x, i) => (
                        <th>{x.heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {datasource.map((row, i) => (
                    <tr>
                        {cols.map((col, ind) => (
                            <td>{row[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )  
         
}
