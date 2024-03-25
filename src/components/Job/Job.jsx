import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="border border-blue-500 p-7 rounded-xl">
            <div className='w-32 mb-5 '>
                <img className='w-full rounded' src={logo} alt="Job" />
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-extrabold">{job_title} </h2>
                <h2 className='text-xl font-semibold text-[#757575]'> {company_name} </h2>
                <div className='flex gap-6 '>
                    <button className='btn rounded text-lg bg-transparent border border-blue-500 text-blue-500'> {remote_or_onsite} </button>
                    <button className='btn rounded text-lg bg-transparent border border-blue-500 text-blue-500'> {job_type} </button>
                </div>
                <div className='flex gap-6 text-xl font-semibold text-[#757575]'>
                    <div className='flex items-center gap-2'><SlLocationPin />{location}</div>
                    <div className='flex items-center gap-2'><AiOutlineDollarCircle />Salary: {salary}</div>
                </div>
                <div className=" ">
                    <Link to={`/job/${id}`}><button className="btn rounded btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};


Job.propTypes = {
    job: PropTypes.array,
}

export default Job;