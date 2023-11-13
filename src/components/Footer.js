import React from 'react';
import { LastEco } from '../images/index';

const Footer = () => {
  return (
    <div>
      <div className="sectionStyle1"> {/* Add className */}
        <div className="sectionStyle1"> {/* Add className */}
          <div className="textCenter"> {/* Add className */}
            <h3>NEWSLETTER</h3>
            <p>
              Phasellus lacinia fermentum bibendum. Interdum et malesuada fames
              ac ante ipsumien <br /> lacus, eu posuere odi
            </p>
          </div>
          <div style={{ paddingTop: '10px' }}>
            <input
              style={{
                width: '60%',
                padding: '0.7rem 0.75rem',
                border: '1px solid #e2e8f0',
                borderRadius: '3px',
                boxShadow: 'none',
                outline: 'none',
                transition: 'border-color 0.15s ease-in-out',
              }}
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="shop-1">Subscribe Now</button>
          </div>
        </div>
      </div>

     <div className="sectionStyle2" style={{ display: 'grid', padding:"30px", gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '2rem', maxWidth: '100%', margin: '0 auto' }}>
     <div>
       <img className="w-12" src={LastEco} alt="LastEco" style={{ width: '150px' }} />
       <p>Street No. 12, Newyork 12,</p>
       <p>MD - 123, USA.</p>
       <p>1.800.123.456789</p>
       <p>info@ecoshop.com</p>
     </div>
     <div style={{ gap: '1rem' }}>
       <h3 style={{ color: '#ffffff', fontSize: '17px' }}>HELPFUL LINKS</h3>
       <p>Products</p>
       <p>Find a Store</p>
       <p>Features</p>
       <p>Privacy Policy</p>
       <p>Blog</p>
       <p>Press Kit</p>
     </div>
     <div style={{ gap: '1.5rem' }}>
       <h3 style={{ color: '#ffffff', fontSize: '17px' }}>SHOP</h3>
       <p>About Us</p>
       <p>Career</p>
       <p>Shipping Methods</p>
       <p>Contact</p>
       <p>Support</p>
       <p>Retailer</p>
     </div>
     <div style={{ gap: '1rem' }}>
       <h3 style={{ color: '#ffffff', fontSize: '17px' }}>MY ACCOUNT</h3>
       <p>Login</p>
       <p>My Account</p>
       <p>My Cart</p>
       <p>Wishlist</p>
       <p>Checkout</p>
     </div>
   </div>
      
        </div>
  );
};

export default Footer;
 


