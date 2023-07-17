import React from 'react'

function Header() {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Hello!</h1>
            <p className="lead">Welcome customer to your favourite grocery shop.</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Let's Shop..</a>
            </p>
        </div>
    )
}

export default Header
