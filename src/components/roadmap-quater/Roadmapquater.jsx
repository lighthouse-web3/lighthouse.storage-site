import React from "react";
import "./roadmapquater.css";
import { BsFillCircleFill, BsBox } from "react-icons/bs";
import { FaRegStickyNote } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";

function Roadmapquater({ quater, milestone, points, position }) {
    let icons = [
        <BsBox />,
        <FaRegStickyNote />,
        <SiHiveBlockchain />,
        <IoIosGitNetwork />,
    ];
    return (
        <div className={`roadmap_quater_box  ${position}`}>
            <p
                className={"quater_name " + (milestone === "2" ? "current_quater" : "")}
            >
                {quater}
            </p>

            {milestone === "2" ? (
                <div className="concentric_circle">
                    <BsFillCircleFill className="circle" />
                </div>

            ) : (
                <BsFillCircleFill className="circle" />
            )}

            <div className="text-box">
                <div className="quater-title gradient__text">Milestone-{milestone}</div>
                <table>
                    {points.map((point, index) => (
                        <tr className="points" key={index}>
                            <td className="bullet">
                                {icons[Math.floor(Math.random() * icons.length)]}
                            </td>
                            <td>{point}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Roadmapquater;
