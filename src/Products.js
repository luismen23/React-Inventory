
export const Products = ({list}) => {
    return (
      
        <tbody>
          <tr>
            <th className="code">Code</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Image</th>
            <th>Position</th>
          </tr>
          <tr key={list.position}>
            <td>{list.code}</td>
            <td>{list.description}</td>
            <td>{list.quantity}</td>
            <td>{list.price}</td>
            <td><img src={list.image} alt='Product'></img></td>
            <td>{list.position}</td>
          </tr>
        </tbody>
      
      
    )
}