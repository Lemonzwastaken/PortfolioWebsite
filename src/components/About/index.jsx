import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
    return (
        <div
            className={clsx(
                "relative p-8 flex items-center",
                "bg-black/30 backdrop-blur-sm",
                "border border-amber-400/20",
                "rounded-lg",
                "transition-colors duration-300",
                "hover:border-amber-400/50",
                className
            )}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            {children}
        </div>
    )
}

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch max-w-6xl mx-auto px-4">

                <ItemLayout className="md:col-span-2">
                    <div className="font-mono text-white/90 w-full">
                        <p className="text-amber-400 text-2xl font-semibold mb-4">
                            Info
                        </p>
                        <p className="text-base leading-relaxed text-white/70">
                            more info here :p
                        </p>
                    </div>
                </ItemLayout>

                <div className="flex flex-col gap-6">
                    <ItemLayout className="flex-1">
                        <div>
                            <p className="text-amber-400 text-4xl font-bold">
                                4+
                            </p>
                            <p className="text-white/60 text-sm tracking-widest uppercase mt-1">
                                Years Experience
                            </p>
                        </div>
                    </ItemLayout>

                    <ItemLayout className="flex-1">
                        <div>
                            <p className="text-amber-400 text-4xl font-bold">
                                25+
                            </p>
                            <p className="text-white/60 text-sm tracking-widest uppercase mt-1">
                                Clients Served
                            </p>
                        </div>
                    </ItemLayout>
                </div>

            </div>
        </section>
    )
}

export default AboutDetails