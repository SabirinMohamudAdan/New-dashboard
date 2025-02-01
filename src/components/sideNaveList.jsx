const SideNavList = (props) => {
    return <div className="sm:flex  text-[#59B8C3]  gap-4 pl-12 pt-10
     text-4xl font-semibold    ">
       
            <i className={`fa-solid ${
                props.icon} text-[#59B8C3]   `}></i>
            <h1 className="sm:block  hidden">{props.title}</h1>
            
    </div>
}

export default SideNavList