/* eslint-disable react/no-unknown-property */
import { NavLink } from 'react-bootstrap';
import profile from '../../assets/liton.png';
import Card from '../Card/Card';
import Table from '../Table/Table';

const Dashboard = () => {
    return (
        <div>
            <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars"></i></button>
            <div className='d-lg-none'>
                <Card></Card>
                <Table></Table>
            </div>

            <div class="container-fluid vh-100 d-none d-lg-block">
                <div class="row h-100">
                    <div class="col-md-3 bg-dark bg-gradient text-white">
                        {/* <h2>Sidebar</h2> */}
                        <div class="dropdown d-flex flex-column align-items-center pt-5">
                            <img class='w-25 h-25 rounded-circle' src={profile} alt="" />
                            <button class="btn btn-secondary dropdown-toggle mt-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Litn Mia
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"><i className="fa-solid fa-right-from-bracket"></i> Sign Out</a></li>
                            </ul>
                        </div>

                        <ul className="menu p-5 w-100 list-unstyled">
                            {/* Navbar menu content here */}
                            <li className="font-weight-bold mb-2"><NavLink
                                to="/"
                                activeClassName="active"
                            >
                                <i className="fa-solid fa-house"></i> User Home
                            </NavLink></li>
                            <hr />
                            <li className="font-weight-bold mb-2"><NavLink
                                to="/"
                                activeClassName="active"
                            >
                                <i className="fa-solid fa-cart-shopping"></i> Your Order
                            </NavLink></li>
                            <hr />
                            <li className="font-weight-bold mb-2"><NavLink
                                to="/"
                                activeClassName="active"
                            >
                                <i className="fa-solid fa-user-pen"></i> Add Review
                            </NavLink></li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <div class="container-fluid">
                            {/* <h2>Main Content</h2> */}
                            <Card></Card>
                            <Table></Table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start bg-dark bg-gradient text-white" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div class="dropdown d-flex flex-column align-items-center">
                        <img class='w-25 h-25 rounded-circle' src={profile} alt="" />
                        <button class="btn btn-secondary dropdown-toggle mt-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Litn Mia
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"><i className="fa-solid fa-right-from-bracket"></i> Sign Out</a></li>
                        </ul>
                    </div>
                    <ul className="menu p-5 w-100 list-unstyled">
                        {/* Navbar menu content here */}
                        <li className="font-weight-bold mb-2"><NavLink
                            to="/"
                            activeClassName="active"
                        >
                            <i className="fa-solid fa-house"></i> User Home
                        </NavLink></li>
                        <hr />
                        <li className="font-weight-bold mb-2"><NavLink
                            to="/"
                            activeClassName="active"
                        >
                            <i className="fa-solid fa-cart-shopping"></i> Your Order
                        </NavLink></li>
                        <hr />
                        <li className="font-weight-bold mb-2"><NavLink
                            to="/"
                            activeClassName="active"
                        >
                            <i className="fa-solid fa-user-pen"></i> Add Review
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;