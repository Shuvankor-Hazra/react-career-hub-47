import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    })

    return (
        <div className="py-12 text-center">
                <h2 className="text-5xl">Featured Jobs</h2>
                <p className="text-2xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-5 py-12 text-left">
                {
                    jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={(dataLength === jobs.length) && "hidden"}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;