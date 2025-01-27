const Dashboard = () => {
    return <div className=" sm:flex sm:gap-8 sm:pt-40 sm:ml-100 pt-100 
     mb-4 ml-32 block ">
    <div className="bg-[#59B8C3] w-60 h-40 rounded-2xl pt-10 ">
        <h1 className="text-4xl text-white text-center">Students</h1>
    </div>
    <div className="bg-[#59B8C3] w-60 h-40 rounded-2xl pt-10 mt-2">
        <h1 className="text-4xl text-white text-center">Teachers</h1>
    </div>
    <div className="bg-[#59B8C3] w-60 h-40 rounded-2xl pt-10 mt-2 ">
        <h1 className="text-4xl text-white text-center">Courses</h1>
    </div>
</div>
};

export default Dashboard;