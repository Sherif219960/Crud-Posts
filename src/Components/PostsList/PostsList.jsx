
export default function PostsList() {
    return (
        <table className="table table-bordered my-3 table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th style={{ width: '78%' }}>Title</th>
                    <th style={{ width: '18%' }}></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#1</td>
                    <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti?</td>
                    <td >
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}
