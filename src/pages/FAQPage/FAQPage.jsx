import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DiscordFloat } from '../../components'
import { Footer, Header } from '../../containers'
import FAQContainer from '../../containers/Faq-container/FaqContainer'
import { baseUrl } from '../../utils/Data/config'
import './FAQPage.scss'

function FAQPage() {
    const [contentData, setContentData] = useState([]);
    const [showPage, setShowPage] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${baseUrl}/faqs`);
                res['status'] === 200 && (setContentData(res['data']?.['data']));
                console.log(contentData);
                setShowPage(true);
            } catch (error) {
            }
        })();
    }, [])
    return (
        <div className="FAQPage">
            <div className="bg_pattern2"></div>
            <div className="bg_pattern3"></div>
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div>
            <Header />
            <FAQContainer contentData={contentData} />
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default FAQPage