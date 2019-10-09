import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>LOG OUT</div> : <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
