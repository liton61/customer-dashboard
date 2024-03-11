/* eslint-disable react/no-unknown-property */

const Table = () => {
  return (
    <div className="container mt-5 table-responsive">
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Meal</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Burger</td>
            <td>$7</td>
            <td><i className="fa-solid fa-pen-to-square pe-3" style={{ color: 'green' }}></i> <i className="fa-solid fa-trash-can" style={{ color: 'red' }}></i></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Pizza</td>
            <td>$9</td>
            <td><i className="fa-solid fa-pen-to-square pe-3" style={{ color: 'green' }}></i> <i className="fa-solid fa-trash-can" style={{ color: 'red' }}></i></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Stake</td>
            <td>$16</td>
            <td><i className="fa-solid fa-pen-to-square pe-3" style={{ color: 'green' }}></i> <i className="fa-solid fa-trash-can" style={{ color: 'red' }}></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
