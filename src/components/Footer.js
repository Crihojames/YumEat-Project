import React from 'react';
import {FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                    <p>
                        lorem50hhhcuxyxyuuuyztz6ks7uzu67yd8ufdiy xdxtsu6sk d5ksku6a56sk s56s6fduykus5ka75 uyfud6sysky f7l78d6eds6dyt ufvuycdy yduydyufhlui idyfiudyuy iydtusdtys,uy dyduykdul guiydcyufuildhiiopghuifldfdfuyfduyl 8ofylfydy6u fuofuylxdtsudfiu fuiffydyd oufuil7u
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30}/>
                        <FaInstagram size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaGithubSquare size={30}/>
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium tex-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>Kinshasa</li>
                            <li className='py-2 text-sm'>Paris</li>
                            <li className='py-2 text-sm'>Barcelone</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium tex-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>Kinshasa</li>
                            <li className='py-2 text-sm'>Paris</li>
                            <li className='py-2 text-sm'>Barcelone</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium tex-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>Kinshasa</li>
                            <li className='py-2 text-sm'>Paris</li>
                            <li className='py-2 text-sm'>Barcelone</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium tex-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>Kinshasa</li>
                            <li className='py-2 text-sm'>Paris</li>
                            <li className='py-2 text-sm'>Barcelone</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;