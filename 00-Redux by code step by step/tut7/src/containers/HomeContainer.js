import { connect } from 'react-redux'
import { addToCart } from '../Services/Actions/actions'

import Home from '../components/Home'

//* mapStateToProps
const mapStateToProps = state => ({
    cardData: state.cardItems.cardData
})

//* mapDispatchToProps
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home