import React from "react";
import '../Header/header.css';
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select';
import Nav from "./nav/nav";

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <div className='selecrDrop cursor'>
                                All Categories
                                
                            </div>
                            <div className="search d-flex align-items-center">
                                <input type="text" placeholder="Search for items...." />
                                <SearchIcon className="SearchIcon cursor" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;
