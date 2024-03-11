

const Card = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                    <div className="col">
                        <div className="card bg-primary text-dark bg-opacity-50">
                            <div className="card-body">
                                <h5 className="card-title text-center">Liton Mia </h5>
                                <p className="card-text text-center">Active Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-danger text-dark bg-opacity-50">
                            <div className="card-body">
                                <h5 className="card-title text-center">Order Status</h5>
                                <p className="card-text text-center">Your order is ready</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1">
                    {/* Balance Expenses */}
                    <div className="col">
                        <div className="card bg-primary-subtle">
                            <div className="card-body">
                                <h5 className="card-title text-center">Balance Expenses</h5>
                                <p className="card-text fw-bold text-center">$500</p>
                            </div>
                        </div>
                    </div>
                    {/* Current Balance */}
                    <div className="col">
                        <div className="card bg-danger-subtle">
                            <div className="card-body">
                                <h5 className="card-title text-center">Current Balance</h5>
                                <p className="card-text fw-bold text-center">$10</p>
                            </div>
                        </div>
                    </div>
                    {/* Total Ordered */}
                    <div className="col">
                        <div className="card bg-warning-subtle">
                            <div className="card-body">
                                <h5 className="card-title text-center"> Total Ordered</h5>
                                <p className="card-text fw-bold text-center">13</p>
                            </div>
                        </div>
                    </div>
                    {/* Current Package */}
                    <div className="col">
                        <div className="card bg-info-subtle">
                            <div className="card-body">
                                <h5 className="card-title text-center">Current Package</h5>
                                <p className="card-text fw-bold text-center">Premium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
