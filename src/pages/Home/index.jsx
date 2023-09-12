import { Link } from 'react-router-dom';
import './index.scss';
import { useProduct } from '../../features/useProduct';

const Home = () => {
  const { data, isLoading } = useProduct();

  const renderProduct = () => {
    return data?.data.map((product) => {
      return (
       <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td className="text-center">
              <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
              <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
              <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
            </td>
       </tr>
      )
    })
  }
}


  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tamah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          { renderProduct }
        </tbody>
      </table>
    </div>
  )

export default Home;