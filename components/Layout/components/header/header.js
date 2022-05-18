import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><Link href="/"><a>आनंदलोक आयुर्वेद<span><img className="logo" src="/assets/img/butterfly.png" alt="butterfly" />.</span></a></Link></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link href="/"><a className="nav-link scrollto ">Home</a></Link></li>
                    <li><Link href="/about"><a className="nav-link scrollto" >About</a></Link></li>
                    <li><Link href="/services"><a className="nav-link scrollto" >Services</a></Link></li>
                    <li><Link href="/treatment"><a className="nav-link scrollto" >Treatment</a></Link></li>
                    <li><Link href="/products"><a className="nav-link scrollto" >Products</a></Link></li>
                    <li className="dropdown"><Link href="/blog"><a><span>Blog</span> <i className="bi bi-chevron-down"></i></a></Link>
                        <ul>
                            <li><Link href="/blog/blog1">Blog1 - How panchakarma reduces lifestyle diseases risk</Link></li>
                            <li><Link href="/blog/blog2"><a>Blog2 - Spine Disorder</a></Link></li>
                        </ul>
                    </li>
                    <li><Link href="/gallery"><a className="nav-link scrollto " >Gallery</a></Link></li>
                    <li><Link href="/achievements"><a className="nav-link scrollto" >Achievements</a></Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}
                <Link href="/contact"><a  className="get-started-btn scrollto">Contact</a></Link>
                </div>
                
                
            </header>
            
        </div>
    );
}

export default Header;
