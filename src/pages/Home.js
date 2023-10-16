import React from 'react'
import Bar from './Barchart'
import Pie  from './Piechart'
import Items from './items';

function Home() {
  return (
    <div className="container-fluid">
                                {/*  <!-- Content Row --> */}
                                <div className="row">
                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-3 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                        <i className="fas fa-dollar-sign fa-2x text-gray-600"></i>
                                                    </div>
                                                    <div className="col mr-2 p-3">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Earning </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-900">$198K</div>
                                                        <div className="text-xs mb-0 font-weight-bold text-success">
                                                            <i className="fas fa-arrow-right fa-rotate-270 fa-s "></i>37.8% 
                                                            <span className='text-xs'> this month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-3 mb-4">
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                        <i className="fas fa-receipt fa-2x text-gray-600"></i>
                                                    </div>
                                                    <div className="col mr-2 p-3">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Orders </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-900">$2.4K</div>
                                                        <div className="text-xs mb-0 font-weight-bold text-danger">
                                                            <i className="fas fa-arrow-right fa-rotate-90 fa-s"></i>2% 
                                                            <span className='text-xs'> this month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="col-xl-3 col-md-3 mb-4">
                                        <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                        <i className="fas fa-wallet fa-2x text-gray-600"></i>
                                                    </div>
                                                    <div className="col mr-2 p-3">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Balance </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-900">$2.4K</div>
                                                        <div className="text-xs mb-0 font-weight-bold text-danger">
                                                            <i className="fas fa-arrow-right fa-rotate-90 fa-s"></i>2% 
                                                            <span className='text-xs'> this month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="col-xl-3 col-md-3 mb-4">
                                        <div className="card border-left-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                        <i className="fas fa-chart-line fa-2x text-gray-600"></i>
                                                    </div>
                                                    <div className="col mr-2 p-3">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Total Sales </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-900">$89K</div>
                                                        <div className="text-xs mb-0 font-weight-bold text-success">
                                                            <i className="fas fa-arrow-right fa-rotate-270 fa-s"></i>11% 
                                                            <span className='text-xs'> this month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*   <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-8">
                                        <div className="card shadow mb-4">
                                            <div className="col mr-2 p-3">
                                                <div className="text-s font-weight-bold text-primary text-uppercase mb-1">
                                                        Overview</div>
                                                <div className="text-xs mb-0 font-weight-bold text-gray-500">Monthly Earning</div>                    </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie ">
                                                    <Bar />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="col mr-2 p-3">
                                                        <div className="text-s font-weight-bold text-primary text-uppercase mb-1">
                                                            Customers</div>
                                                        <div className="text-xs mb-0 font-weight-bold text-gray-500">Customers that buy products</div>
                                                    </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie ">           
                                                    <Pie/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*   <!-- Content Row --> */}
                                <div className="row">
                                <div className="col-lg-12 mb-4">
                                        {/* <!-- Approach --> */}
                                    <div className="card shadow mb-4">
                                        <div className="d-flex justify-content-between card-header py-3">
                                            <h6 className=" p-2 m-0 font-weight-bold text-dark">Product Sell</h6>
                                            <div className='d-flex'>
                                            <form class="form-inline ">
                                                <input class="form-control mr-sm-2" type="search" placeholder= "Search..." aria-label="Search"></input>
                                            </form>
                                            <div class="dropdown p-1 ">
                                                <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" 
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                last 30days</button>
                                                <div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="/">30days</a>
                                                    <a class="dropdown-item" href="/">15days</a>
                                                    <a class="dropdown-item" href="/">7days</a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Items />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
  )
}

export default Home