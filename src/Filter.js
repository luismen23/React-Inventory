import { Products } from './Products'


export const Filter = ({query , list}) => {
    return (
        <div>
            {
                list
                .filter((product) => (product.code.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query)))
                .map((product, i) => (<Products key={i} list={product}/>))
            }
        </div>
    )
}