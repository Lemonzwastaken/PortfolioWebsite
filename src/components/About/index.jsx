import clsx from "clsx";
import React from "react";



const ItemLayout = ({ children, className }) => {
    return (
        <div className={clsx('col-span-8 row-span-2 custom-bg p-8 rounded-xl flex items-center justify-center', className)}>
            {children}
        </div>
    )
}



const AboutDetails = () => {
    return (
        <section className="py-20 w-full"> 
            <div className="grid grid-cols-12 gap-8 w-full">

                <ItemLayout classname={'col-span-8 row-span-2'}>
                    <div className="">
                        Info
                    </div>
                </ItemLayout>

                <ItemLayout classname={'col-span-8 row-span-2'}>
                    <div className="col-span-4">
                        4+ years of experience 
                    </div>
                </ItemLayout>

                 <ItemLayout classname={'col-span-8 row-span-2'}>
                    <div className="col-span-4">
                        25+ clients
                    </div>
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails