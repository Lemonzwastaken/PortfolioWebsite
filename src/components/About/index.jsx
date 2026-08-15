"use client";

import React, { useEffect, useState } from "react";

const HACKATIME_USERNAME = "30686";

const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`relative p-8 flex items-center bg-black/30 backdrop-blur-sm border border-amber-400/20 rounded-lg transition-colors duration-300 hover:border-amber-400/50 ${className}`}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            {children}
        </div>
    );
};

const HackatimeStats = () => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const loadStats = async () => {
            try {
                const response = await fetch(
                    `https://hackatime.hackclub.com/api/v1/users/${HACKATIME_USERNAME}/stats`
                );

                if (!response.ok) {
                    throw new Error(
                        `Hackatime returned ${response.status}`
                    );
                }

                const result = await response.json();

                console.log("HACKATIME DATA:", result);

                if (!result?.data) {
                    throw new Error("Invalid Hackatime response");
                }

                if (!cancelled) {
                    setStats(result.data);
                }
            } catch (err) {
                console.error("HACKATIME ERROR:", err);

                if (!cancelled) {
                    setError(true);
                }
            }
        };

        loadStats();

        return () => {
            cancelled = true;
        };
    }, []);

    if (error) {
        return (
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <Card className="flex-col items-start">
                    <p className="text-amber-400 text-2xl font-semibold font-mono">
                        Hackatime Stats
                    </p>

                    <p className="text-white/50 font-mono text-sm mt-4">
                        Couldn't load Hackatime stats.
                    </p>
                </Card>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <Card className="flex-col items-start">
                    <p className="text-amber-400 text-2xl font-semibold font-mono">
                        Hackatime Stats
                    </p>

                    <p className="text-white/50 font-mono text-sm mt-4">
                        Loading stats...
                    </p>
                </Card>
            </div>
        );
    }

    const languages = Array.isArray(stats.languages)
        ? stats.languages.slice(0, 5)
        : [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-4 mb-6">

            {/* ========================= */}
            {/* MOST USED LANGUAGES */}
            {/* ========================= */}

            <Card className="flex-col items-start">

                <p className="text-amber-400 text-2xl font-semibold mb-6 font-mono">
                    Most Used Languages
                </p>

                <div className="flex flex-col gap-4 w-full">

                    {languages.length === 0 ? (
                        <p className="text-white/40 font-mono text-sm">
                            No language data available.
                        </p>
                    ) : (
                        languages.map((language, index) => {

                            const percent =
                                Number(language.percent) || 0;

                            return (
                                <div
                                    key={`${language.name}-${index}`}
                                    className="w-full"
                                >

                                    <div className="flex justify-between text-sm font-mono text-white/70 mb-1">

                                        <span>
                                            {language.name}
                                        </span>

                                        <span>
                                            {percent.toFixed(2)}%
                                        </span>

                                    </div>

                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-amber-400 rounded-full transition-all duration-700"
                                            style={{
                                                width: `${Math.min(
                                                    percent,
                                                    100
                                                )}%`,
                                            }}
                                        />

                                    </div>

                                </div>
                            );
                        })
                    )}

                </div>

            </Card>


            {/* ========================= */}
            {/* HACKATIME STATS */}
            {/* ========================= */}

            <Card className="flex-col items-start">

                <p className="text-amber-400 text-2xl font-semibold mb-6 font-mono">
                    Hackatime Stats
                </p>

                <div className="flex flex-col gap-4 font-mono text-white/80 w-full">

                    {/* TOTAL TIME */}

                    <div className="flex justify-between gap-4">

                        <span className="text-white/50">
                            Total Time:
                        </span>

                        <span>
                            {stats.human_readable_total}
                        </span>

                    </div>


                    {/* DAILY AVERAGE */}

                    <div className="flex justify-between gap-4">

                        <span className="text-white/50">
                            Daily Average:
                        </span>

                        <span>
                            {stats.human_readable_daily_average}
                        </span>

                    </div>


                    {/* STREAK */}

                    <div className="flex justify-between gap-4">

                        <span className="text-white/50">
                            Current Streak:
                        </span>

                        <span>
                            {stats.streak ?? 0} days
                        </span>

                    </div>


                    {/* DATE RANGE */}

                    <div className="flex justify-between gap-4">

                        <span className="text-white/50">
                            Tracking:
                        </span>

                        <span>
                            {stats.human_readable_range}
                        </span>

                    </div>

                </div>

            </Card>

        </div>
    );
};


const AboutDetails = () => {
    return (
        <section className="py-20 w-full">

            <HackatimeStats />

            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">

                {/* INFO + EXPERIENCE */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">

                    <Card className="md:col-span-2">

                        <div className="font-mono text-white/90 w-full">

                            <p className="text-amber-400 text-2xl font-semibold mb-4">
                                Info
                            </p>

                            <p className="text-base leading-relaxed text-white/70">
                                more info here :p
                            </p>

                        </div>

                    </Card>


                    <div className="flex flex-col gap-6">

                        <Card className="flex-1">

                            <div>

                                <p className="text-amber-400 text-4xl font-bold">
                                    4+
                                </p>

                                <p className="text-white/60 text-sm tracking-widest uppercase mt-1">
                                    Years Experience
                                </p>

                            </div>

                        </Card>


                        <Card className="flex-1">

                            <div>

                                <p className="text-amber-400 text-4xl font-bold">
                                    25+
                                </p>

                                <p className="text-white/60 text-sm tracking-widest uppercase mt-1">
                                    Clients Served
                                </p>

                            </div>

                        </Card>

                    </div>

                </div>


                {/* TECH STACK */}

                <Card className="w-full">

                    <img
                        className="w-full h-auto"
                        src="https://skillicons.dev/icons?i=c,cpp,css,blender,git,github,py,unreal,visualstudio,vscode"
                        alt="Tech stack"
                        loading="lazy"
                    />

                </Card>


                {/* GITHUB STREAK */}

                <Card className="w-full !p-6">

                    <a
                        href="https://git.io/streak-stats"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <img
                            className="w-full h-auto"
                            src="https://streak-stats.demolab.com?user=lemonzwastaken&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakNum=FEFE5B"
                            alt="GitHub Streak"
                        />

                    </a>

                </Card>

            </div>

        </section>
    );
};

export default AboutDetails;