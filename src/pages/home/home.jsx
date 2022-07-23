import React, { useEffect, useState } from "react";
import "./home.css";
import {
    Header,
    Footer,
    Homebanner,
    Homepackage,
    Hometeam,
    Homebackedby,
    Homekeydiffrence,
    Homekeyfeatures,
    Homeroadmap,
} from "../../containers";

import { CookiesFloat, DiscordFloat } from "../../components";
import HomeEmail from "../../containers/home-email/HomeEmail";
import axios from "axios";
import { baseUrl } from "../../utils/Data/config";




function HomePage() {
    const [contentData, setContentData] = useState(null);
    const [showPage, setShowPage] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${baseUrl}/homepage`);
                res['status'] === 200 && (setContentData(res['data']?.['data']?.['attributes']?.['data']));
                setShowPage(true);
            } catch (error) {

            }
        })();
    }, [])
    return (
        <div className="homepage">
            {
                showPage && <>
                    <div className="bg_pattern2"></div>
                    <div className="bg_pattern3"></div>
                    <div className="bg_pattern4"></div>
                    <div className="bg_pattern5"></div>
                    <Header />
                    {
                        contentData['banner'] && <Homebanner contentData={contentData['banner']} />
                    }
                    {
                        contentData['package'] && <Homepackage contentData={contentData['package']} />
                    }
                    {
                        contentData['keyFeatures'] && <Homekeyfeatures contentData={contentData['keyFeatures']} />
                    }
                    {
                        contentData['keyDiffrence'] && <Homekeydiffrence contentData={contentData['keyDiffrence']} />
                    }
                    {
                        contentData['backedBy'] && <Homebackedby contentData={contentData['backedBy']} />
                    }

                    {
                        contentData['email'] && <HomeEmail contentData={contentData['email']} />
                    }
                    <Footer />
                    <DiscordFloat />
                    <CookiesFloat />
                </>
            }

        </div>
    );
}

export default HomePage;
