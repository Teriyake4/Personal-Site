import React from "react"
import { Link } from "react-router-dom";

function card(projectName: string, description: string, gitHub: string): React.ReactNode {
    return (
        <div className="rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 p-5 h-full">
            <div className="grid gap-2 grid-cols-[1fr_2fr]">
                <div>
                    <h1 className="text-[1.2rem] text-textcolor font-spaceMono p-2">
                        {projectName}
                    </h1>
                    <a href={gitHub} target="_blank" className="text-textcolor font-spaceMono underline p-2 top-[-2rem]">
                        Github
                    </a>
                </div>
                <div className="font-spaceMono text-textcolor" style={{ whiteSpace: "pre-line" }}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="flex flex-col items-center h-screen bg-base m-1 md:m-4">
            <h1 className="my-[6rem] text-[2rem] text-textcolor mb-4 font-spaceMono">
                Projects
            </h1>
            <section className="grid gap-4 lg:grid-cols-2 md:mx-[4rem]">
                <div>
                    {card(
                        "Valorant Game Results Classifer (Vai)",
                        `
                            Developed a custom neural network with DeepLearning4J to predict the outcome of a Valorant game of either win or loss achieving an accuracy of 73%. Used Tesseract OCR to streamline model evaluation bextracting player names from screenshots to get the input data more easily.
                            
                            Built in conjunction with StaVa and Winnie The V.
                        `,
                        "https://github.com/Teriyake4/Vai"
                    )}
                </div>
                <div>
                    {card(
                        "Stats for Valorant API (StaVa)",
                        `
                            A Java library to easily access and parse statistics of players and matches in Valorant. Used the Tracker.gg API to fetch all data.
                            
                            Built in conjunction with Vai and Winne The V.
                        `,
                        "https://github.com/Teriyake4/StaVa"
                    )}
                </div>
                <div>
                    {card(
                        "Winnie The V",
                        `
                            A Discord bot built using the Java Discord API that allows users to access player statistics and to predict the outcome of a current Valorant match with screenshots of the scoreboard to get player names. Used StaVa for data fetching and Vai for the AI model.
                            
                            Built in conjunction with Vai and StaVa.
                        `,
                        "https://github.com/Teriyake4/Vai"
                    )}
                </div>
                <div>
                    {card(
                        "Fullstack Backtester",
                        `
                            A fullstack trading strategy backtester using React and Typescript for the frontend coupled with Python and FastAPI for the backend. Prompts for parameters and returns backtest results. An automated data ingestion script fetches data from yahoo finance and stores in a SQLite database.
                        `,
                        "https://github.com/Teriyake4/Backtester"
                    )}
                </div>
                <div>
                    {card(
                        "Image Upscaler",
                        `
                            An image upscaler that uses a generative adversarial network trained on video clips. Used this project to learn about industry tools such as PyTorch.
                        `,
                        "https://github.com/Teriyake4/Super-Resolution"
                    )}
                </div>
                <div>
                    {card(
                        "Personal Website",
                        `
                            The very website you are viewing now! Built with React, Typescript, and Tailwind CSS to learn more about frontend development. Deployed on Vercel.
                        `,
                        "https://github.com/Teriyake4/Personal-Site"
                    )}
                </div>
            </section>
        </div>
    )
}