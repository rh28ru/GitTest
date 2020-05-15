import React from "react"

class ProductRow extends React.Component{
    render(){
        const product = this.props.product;
        const name = product.stocked? 
            product.name: 
            <span style={{color:'red'}}>
                {product.name}
            </span>;
        return(
            <tr>
                <td> { name }</td>
                <td> { product.price }</td>
            </tr>
        )
    }
}
class ProductsTable extends React.Component{
    render(){
        const rows = [];
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        this.props.products.map(product => {
            if(product.name.toLowerCase().indexOf(filterText) === -1){
                return null;
            }
            if(inStockOnly && !product.stocked){
                return null;
            }

            rows.push(
                <ProductRow product = {product} key = {product.name}/>
            );
            return rows;
        });
        return(
            <table>
                <thead>
                    <tr>
                        <td>종류</td>
                        <td>가격</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.onChangeFilterText =this.onChangeFilterText.bind(this)
        this.onChangeIsStocked =this.onChangeIsStocked.bind(this)
    }

    onChangeFilterText(e){
        this.props.onFilterTextChange(e.target.value)
        console.log(this.props.filterText)
    }

    onChangeIsStocked(e){
        this.props.onChangeIsStocked(e.target.checked)
    }

    render(){
        return (
            <form>
                <input 
                    type="text" 
                    onChange = {this.onChangeFilterText} 
                    value = {this.props.filterText}
                /><br/>
                <p>
                    <input 
                        type="checkbox"
                        checked = {this.props.inStockOnly}
                        onChange = {this.onChangeIsStocked}
                    />
                    {""} Show only products in stock.
                </p>
            </form>
        )
    }
}



export default class FilterableProductsTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterText: '',
            inStockOnly : false
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleIsStockedChecked = this.handleIsStockedChecked.bind(this)
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        })
    }

    handleIsStockedChecked(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        })
        console.log("checked :", inStockOnly)
    }
    render(){
        return (
            <fieldset>
                <SearchBar
                    products = {PRODUCTS}
                    onFilterTextChange = {this.handleFilterTextChange}  
                    onChangeIsStocked = {this.handleIsStockedChecked}
                    inStockOnly = {this.state.inStockOnly}

                    />
                <ProductsTable 
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    products = {PRODUCTS}
                />
            </fieldset>
            
        )
    }
}

const PRODUCTS = [
    {category: "sport", name: "FootBall", price: "$53.6", stocked: true },
    {category: "sport", name: "BaseBall", price: "$22.4", stocked: true },
    {category: "sport", name: "BasketBall", price: "$153.7", stocked: false },
    {category: "electronics", name: "iPod Touch", price: "$853.6", stocked: true },
    {category: "electronics", name: "iPone 5", price: "$453.1", stocked: false },
    {category: "electronics", name: "Nexus 7", price: "$199.5", stocked: true }
]