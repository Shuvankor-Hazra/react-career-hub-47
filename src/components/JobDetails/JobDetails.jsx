import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id, } = useParams();


    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Job Details</h2>
            <div className="grid grid-cols-5 p-12 gap-5 ">
                <div className="col-span-3 space-y-5" >
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis! Iste labore eum perspiciatis delectus veritatis possimus, enim sed, facere, inventore eius molestiae! Ducimus voluptate quo veniam, hic quae sunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis! Iste labore eum perspiciatis delectus veritatis possimus, inventore eius molestiae! Ducimus voluptate quo veniam, hic quae sunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis.</p>
                </div>
                <div className="border col-span-2 p-5 bg-blue-100 rounded" >
                    <div className="  rounded">
                        <div className="space-y-5">
                            <h2 className="">
                                {job.job_title}
                            </h2>
                            <p> {job.company_name} </p>
                            <div className="space-y-5">
                                <div className=""> {job.job_description} </div>
                                <div className=""> {job.experience} </div>
                            </div>
                            <div>
                                <button onClick={handleApplyJob} className="btn w-full">Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;