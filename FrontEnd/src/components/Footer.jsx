import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center'>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 ">
                <nav className="flex justify-center gap-2">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by GoFood</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer