import React, { useState } from 'react';
import {Routes , Route , useNavigate} from 'react-router-dom'
import './Dashboard.css';
import Home from './Home';
import Product from './Products';
import Promote from './Promote';
import Help from './Help';
import Customers from './Customers';
import Income from './Income';

function Dashboard() {
    const [style, setStyle] = useState("navbar-nav  sidebar sidebar-dark accordion");
    const navigate = useNavigate();
    // const changeStyle = () => {
    //     if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    //     {
    //         setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
    //     }
    //     else{
    //         setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    //     }
    // };
    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top" style={{backgroundColor:"#040440"}}>

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3" > Dashboard</div>
                            <div className="text-center d-none d-md-inline">
                        </div>
                        </div>
                        <li className="nav-item" onClick={() => navigate("/")}>
                            <div className="nav-link " data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span > Dashboard</span>
                            </div>
                        </li>

                        <li className="nav-item" onClick={() => navigate("/Product")}>
                            <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-cart-plus"></i>
                                <span >Products</span>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item" onClick={() => navigate("/Customers")}>
                            <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-users"></i>
                                <span >Customers</span>
                            </div>
                        </li>
                        <li className="nav-item" onClick={() => navigate("/Income")}>
                            <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-wallet"></i>
                                <span >Income</span>
                            </div>
                        </li>
                        <li className="nav-item" onClick={() => navigate("/Promote")}>
                            <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-ad"></i>
                                <span >Promote</span></div>
                        </li>
                        <li className="nav-item" onClick={() => navigate("/Help")}>
                            <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-question"></i>
                                <span >Help</span></div>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />
                    </ul>
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>                   
                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Bhuwan Pant👋,</span>
                                        </a>
                                    </li>
                                </ul>
                                {/*  <!-- Topbar Search --> */}
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </nav>
                            {/*  <!-- End of Topbar --> */}
                        </div>
                            {/*   <!-- End of Main Content --> */}
                        
                    <Routes>
                        <Route exact path= "/" element={<Home/>}> </Route>
                        <Route path= "/Product" element={<Product/>}></Route>
                        <Route path= "/Customers" element={<Customers/>}></Route>
                        <Route path= "/Income" element={<Income/>}></Route>
                        <Route path= "/Promote" element={<Promote/>}></Route>
                        <Route path= "/Help" element={<Help/>}></Route>
                    </Routes>
                                {/* <!-- Footer --> */} 
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &BhuwanPant 2023</span>
                            </div>
                        </div>
                    </footer>
                        {/* <!-- End of Footer --> */}
                    </div>
                    {/*  <!-- End of Content Wrapper --> */}
                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </body>
        </div>
    )
}
export default Dashboard;