"use client"
import clsx from "clsx";
import React, { useEffect, useState } from "react";

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

const HACKATIME_USERNAME = "30686";

const HackatimeStats = () => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://hackatime.hackclub.com/api/v1/users/${HACKATIME_USERNAME}/stats`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch Hackatime stats");
                return res.json();
            })
            .then((data) => setStats(data.data))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return (
            <ItemLayout>
                <p className="text-white/50 font-mono text-sm">Couldn't load Hackatime stats.</p>
            </ItemLayout>
        );
    }

    if (!stats) {
        return (
            <ItemLayout>
                <p className="text-white/50 font-mono text-sm">Loading stats...</p>
            </ItemLayout>
        );
    }

    const languages = (stats.languages || []).slice(0, 5);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-4 mb-6">

            <ItemLayout className="flex-col items-start">
                <p className="text-amber-400 text-2xl font-semibold mb-6 font-mono">
                    Most Used Languages
                </p>
                <div className="flex flex-col gap-4 w-full">
                    {languages.map((lang) => (
                        <div key={lang.name}>
                            <div className="flex justify-between text-sm font-mono text-white/70 mb-1">
                                <span>{lang.name}</span>
                                <span>{lang.percent.toFixed(2)}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-amber-400 rounded-full"
                                    style={{ width: `${lang.percent}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </ItemLayout>

            <ItemLayout className="flex-col items-start">
                <p className="text-amber-400 text-2xl font-semibold mb-6 font-mono">
                    Hackatime Stats
                </p>
                <div className="flex flex-col gap-4 font-mono text-white/80 w-full">
                    <div className="flex justify-between">
                        <span className="text-white/50">Total Time:</span>
                        <span>{stats.human_readable_total}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/50">Daily Average:</span>
                        <span>{stats.human_readable_daily_average}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/50">Best Day:</span>
                        <span>{stats.best_day?.text ?? "—"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/50">Projects Tracked:</span>
                        <span>{stats.projects?.length ?? 0}</span>
                    </div>
                </div>
            </ItemLayout>

        </div>
    )
}

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">

            <HackatimeStats />

            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">

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

                <ItemLayout className="w-full">
                    <img
                        className="w-full h-auto"
                        src="https://skillicons.dev/icons?i=c,cpp,css,blender,git,github,py,unreal,visualstudio,vscode,"
                        alt="Tech stack"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className="w-full !p-6">
                    <a href="https://git.io/streak-stats">
                        <img
                            src={`https://streak-stats.demolab.com?user=lemonzwastaken&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakNum=FEFE5B`}
                            alt="GitHub Streak"
                        />
                    </a>
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails