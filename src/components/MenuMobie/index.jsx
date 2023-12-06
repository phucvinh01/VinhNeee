import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CiMenuBurger } from "react-icons/ci";
import { link } from '../../data/link';
import { Link } from 'react-router-dom';
const MenuMobie = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button onClick={ showModal } className='mt-2'><CiMenuBurger />
            </button>
            <Modal title="Menu" footer={ null } open={ isModalOpen } onOk={ handleOk } onCancel={ handleCancel }>
                <div
                    className='dark:bg-black'
                >
                    <ul className='w-full'>
                        {
                            link.map((item, index) => {
                                return (
                                    <li className='items-center text-center py-4 border-b-2 last:border-0' key={ index }>
                                        <Link onClick={ () => handleOk() } className=' px-4  text-black font-medium hover:text-teal-500 transition dark:text-white' to={ item.hash }>{ item.name }</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Modal>
        </>
    );
};
export default MenuMobie;